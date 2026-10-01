(function () {
  var pop = document.createElement("div");
  pop.className = "abbr-popover";
  pop.setAttribute("role", "tooltip");
  pop.id = "abbr-popover";
  pop.hidden = true;
  pop.setAttribute("aria-hidden", "true");
  document.body.appendChild(pop);

  var openAbbr = null;
  var hideTimer = null;

  function expansionOf(el) {
    return el.getAttribute("data-expand") || el.getAttribute("title") || "";
  }

  function place(el) {
    var r = el.getBoundingClientRect();
    var pad = 8;
    pop.hidden = false;
    pop.setAttribute("aria-hidden", "false");
    // Measure after unhiding
    var pw = pop.offsetWidth;
    var ph = pop.offsetHeight;
    var left = r.left + window.scrollX + (r.width / 2) - (pw / 2);
    var top = r.bottom + window.scrollY + pad;
    var maxL = window.scrollX + document.documentElement.clientWidth - pw - 8;
    if (left < window.scrollX + 8) left = window.scrollX + 8;
    if (left > maxL) left = maxL;
    // Flip above if near bottom
    if (r.bottom + ph + pad > window.innerHeight && r.top > ph + pad) {
      top = r.top + window.scrollY - ph - pad;
    }
    pop.style.left = left + "px";
    pop.style.top = top + "px";
  }

  function show(el, sticky) {
    clearTimeout(hideTimer);
    var exp = expansionOf(el);
    if (!exp) return;
    if (openAbbr && openAbbr !== el) openAbbr.classList.remove("is-open");
    openAbbr = el;
    el.classList.add("is-open");
    pop.innerHTML = '<span class="abbr-popover-term">' +
      el.textContent.replace(/</g, "&lt;") +
      "</span>" + exp.replace(/</g, "&lt;");
    pop.dataset.sticky = sticky ? "1" : "0";
    place(el);
    el.setAttribute("aria-describedby", "abbr-popover");
  }

  function hide(force) {
    clearTimeout(hideTimer);
    var doHide = function () {
      if (!force && pop.dataset.sticky === "1") return;
      pop.hidden = true;
      pop.setAttribute("aria-hidden", "true");
      pop.dataset.sticky = "0";
      if (openAbbr) {
        openAbbr.classList.remove("is-open");
        openAbbr.removeAttribute("aria-describedby");
        openAbbr = null;
      }
    };
    if (force) doHide();
    else hideTimer = setTimeout(doHide, 120);
  }

  function enhance(el) {
    if (!el.getAttribute("title") && !el.getAttribute("data-expand")) return;
    if (!el.getAttribute("data-expand") && el.getAttribute("title")) {
      el.setAttribute("data-expand", el.getAttribute("title"));
    }
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
    if (!el.hasAttribute("role")) el.setAttribute("role", "button");
    var label = el.textContent + ": " + expansionOf(el) + ". Activate for definition.";
    el.setAttribute("aria-label", label);
  }

  document.querySelectorAll("abbr[title], abbr[data-expand]").forEach(enhance);

  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest && e.target.closest("abbr[title], abbr[data-expand]");
    if (!el) return;
    // Hover tip (non-sticky); sticky click tip takes precedence until dismissed
    if (pop.dataset.sticky === "1" && openAbbr === el) return;
    show(el, false);
  });
  document.addEventListener("mouseout", function (e) {
    var el = e.target.closest && e.target.closest("abbr[title], abbr[data-expand]");
    if (!el) return;
    if (pop.dataset.sticky === "1") return;
    hide(false);
  });
  document.addEventListener("focusin", function (e) {
    var el = e.target.closest && e.target.closest("abbr[title], abbr[data-expand]");
    if (el) show(el, false);
  });
  document.addEventListener("focusout", function (e) {
    var el = e.target.closest && e.target.closest("abbr[title], abbr[data-expand]");
    if (el && pop.dataset.sticky !== "1") hide(false);
  });
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("abbr[title], abbr[data-expand]");
    if (el) {
      e.preventDefault();
      e.stopPropagation();
      if (openAbbr === el && pop.dataset.sticky === "1" && !pop.hidden) {
        hide(true);
      } else {
        show(el, true);
      }
      return;
    }
    // click outside closes sticky
    if (pop.dataset.sticky === "1") hide(true);
  });
  document.addEventListener("keydown", function (e) {
    var el = document.activeElement;
    if (!el || !el.matches || !el.matches("abbr[title], abbr[data-expand]")) {
      if (e.key === "Escape") hide(true);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (openAbbr === el && pop.dataset.sticky === "1" && !pop.hidden) hide(true);
      else show(el, true);
    } else if (e.key === "Escape") {
      hide(true);
    }
  });
  window.addEventListener("scroll", function () {
    if (!pop.hidden && openAbbr) place(openAbbr);
  }, { passive: true });
  window.addEventListener("resize", function () {
    if (!pop.hidden && openAbbr) place(openAbbr);
  });
})();

(function () {
  var figure = document.getElementById("diagram-overview");
  if (!figure) return;

  var panel = document.getElementById("stage-panel");
  var titleEl = document.getElementById("stage-panel-title");
  var summaryEl = document.getElementById("stage-panel-summary");
  var companiesWrap = document.getElementById("stage-panel-companies");
  var companyList = document.getElementById("stage-panel-company-list");
  var closeBtn = document.getElementById("stage-panel-close");
  if (!panel || !titleEl || !summaryEl || !companyList || !closeBtn) return;

  var stagesById = {};
  var activeId = null;
  var lastFocus = null;
  var dataReady = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setActiveHotspot(id) {
    figure.querySelectorAll(".stage-hotspot.is-active").forEach(function (g) {
      g.classList.remove("is-active");
      g.setAttribute("aria-expanded", "false");
    });
    if (!id) return;
    figure.querySelectorAll('.stage-hotspot[data-stage="' + id + '"]').forEach(function (g) {
      g.classList.add("is-active");
      g.setAttribute("aria-expanded", "true");
    });
  }

  function renderCompanies(companies) {
    companyList.innerHTML = "";
    if (!companies || !companies.length) {
      companiesWrap.hidden = true;
      return;
    }
    companiesWrap.hidden = false;
    companies.forEach(function (c) {
      var li = document.createElement("li");
      var html = "<strong>" + esc(c.name) + "</strong>";
      if (c.ticker) html += ' <span class="co-ticker">' + esc(c.ticker) + "</span>";
      if (c.note) html += '<span class="co-note">' + esc(c.note) + "</span>";
      li.innerHTML = html;
      companyList.appendChild(li);
    });
  }

  function closePanel(restoreFocus) {
    if (panel.hidden) return;
    panel.hidden = true;
    figure.classList.remove("stage-panel-open");
    setActiveHotspot(null);
    activeId = null;
    if (restoreFocus !== false && lastFocus && typeof lastFocus.focus === "function") {
      try { lastFocus.focus(); } catch (e) {}
    }
    lastFocus = null;
  }

  function openPanel(stage, fromEl) {
    if (!stage) return;
    titleEl.textContent = stage.title || stage.id;
    summaryEl.textContent = stage.summary || "";
    renderCompanies(stage.companies || []);
    companiesWrap.open = false;
    panel.hidden = false;
    figure.classList.add("stage-panel-open");
    setActiveHotspot(stage.id);
    activeId = stage.id;
    lastFocus = fromEl || lastFocus;
    // Focus close control for keyboard users; keep panel in view
    closeBtn.focus();
    try {
      panel.scrollIntoView({ block: "nearest", behavior: "smooth" });
    } catch (e) {
      panel.scrollIntoView(false);
    }
  }

  function toggleStage(id, fromEl) {
    if (!id || !dataReady) return;
    if (activeId === id && !panel.hidden) {
      closePanel(true);
      return;
    }
    var stage = stagesById[id];
    if (!stage) return;
    openPanel(stage, fromEl);
  }

  function hotspotFromEvent(e) {
    var t = e.target;
    if (!t || !t.closest) return null;
    return t.closest(".stage-hotspot[data-stage]");
  }

  figure.addEventListener("click", function (e) {
    var g = hotspotFromEvent(e);
    if (!g) return;
    e.preventDefault();
    e.stopPropagation();
    toggleStage(g.getAttribute("data-stage"), g);
  });

  figure.addEventListener("keydown", function (e) {
    var g = hotspotFromEvent(e);
    if (!g) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      toggleStage(g.getAttribute("data-stage"), g);
    }
  });

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    closePanel(true);
  });

  // Escape closes stage panel first (capture), before abbr popover
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (panel.hidden) return;
    e.preventDefault();
    closePanel(true);
  }, true);

  // Init aria-expanded on hotspots
  figure.querySelectorAll(".stage-hotspot[data-stage]").forEach(function (g) {
    g.setAttribute("aria-expanded", "false");
    g.setAttribute("aria-controls", "stage-panel");
  });

  var jsonUrl = "stages.json";
  fetch(jsonUrl, { credentials: "same-origin" })
    .then(function (r) {
      if (!r.ok) throw new Error("stages.json HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      var list = (data && data.stages) || [];
      list.forEach(function (s) {
        if (s && s.id) stagesById[s.id] = s;
      });
      dataReady = true;
    })
    .catch(function (err) {
      console.warn("Stage panel: failed to load stages.json", err);
      titleEl.textContent = "Stage details unavailable";
      summaryEl.textContent = "Could not load stages.json. Check that the file is deployed beside this page.";
      renderCompanies([]);
      dataReady = false;
    });
})();
