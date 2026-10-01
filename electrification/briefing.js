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
  var panel = document.getElementById("stage-panel");
  var titleEl = document.getElementById("stage-panel-title");
  var summaryEl = document.getElementById("stage-panel-summary");
  var companiesWrap = document.getElementById("stage-panel-companies");
  var companyList = document.getElementById("stage-panel-company-list");
  var closeBtn = document.getElementById("stage-panel-close");
  if (!panel || !titleEl || !summaryEl || !companiesWrap || !companyList || !closeBtn) return;

  var stagesById = {};
  var activeId = null;
  var activeFigure = null;
  var lastFocus = null;
  var dataReady = false;
  var pendingId = null;
  var pendingEl = null;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hostFigureFrom(el) {
    if (!el) return null;
    if (typeof el.closest === "function") return el.closest("figure.diagram");
    var n = el;
    while (n) {
      if (n.id && n.classList && n.classList.contains("diagram")) return n;
      if (n.getAttribute && n.tagName && n.tagName.toLowerCase() === "figure" &&
          (n.getAttribute("class") || "").indexOf("diagram") !== -1) return n;
      n = n.parentNode;
    }
    return null;
  }

  function placePanelIn(fig) {
    if (!fig) return;
    if (activeFigure && activeFigure !== fig) {
      activeFigure.classList.remove("stage-panel-open");
    }
    // Keep panel after the SVG, before figcaption (matches Fig 0 layout)
    var svg = fig.querySelector("svg");
    var caption = fig.querySelector("figcaption");
    if (svg && svg.nextSibling !== panel) {
      if (caption) fig.insertBefore(panel, caption);
      else if (svg.nextSibling) fig.insertBefore(panel, svg.nextSibling);
      else fig.appendChild(panel);
    } else if (!svg) {
      fig.appendChild(panel);
    }
    activeFigure = fig;
  }

  function setActiveHotspot(id, scopeEl) {
    document.querySelectorAll(".stage-hotspot.is-active").forEach(function (g) {
      g.classList.remove("is-active");
      g.setAttribute("aria-expanded", "false");
    });
    if (!id) return;
    var scope = scopeEl || activeFigure || document;
    scope.querySelectorAll('.stage-hotspot[data-stage="' + id + '"]').forEach(function (g) {
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
    pendingId = null;
    pendingEl = null;
    if (panel.hidden) return;
    panel.hidden = true;
    if (activeFigure) activeFigure.classList.remove("stage-panel-open");
    setActiveHotspot(null);
    activeId = null;
    if (restoreFocus !== false && lastFocus && typeof lastFocus.focus === "function") {
      try { lastFocus.focus(); } catch (e) {}
    }
    lastFocus = null;
  }

  function openPanel(stage, fromEl) {
    if (!stage) return;
    var fig = hostFigureFrom(fromEl) || activeFigure;
    if (fig) {
      placePanelIn(fig);
      fig.classList.add("stage-panel-open");
    }
    titleEl.textContent = stage.title || stage.id;
    summaryEl.textContent = stage.summary || "";
    renderCompanies(stage.companies || []);
    companiesWrap.open = false;
    panel.hidden = false;
    setActiveHotspot(stage.id, fig);
    activeId = stage.id;
    lastFocus = fromEl || lastFocus;
    try {
      panel.scrollIntoView({ block: "nearest", behavior: "smooth" });
    } catch (e) {
      panel.scrollIntoView(false);
    }
    setTimeout(function () {
      try { closeBtn.focus(); } catch (e) {}
    }, 0);
  }

  function toggleStage(id, fromEl) {
    if (!id) return;
    var fig = hostFigureFrom(fromEl);
    if (!dataReady) {
      pendingId = id;
      pendingEl = fromEl || null;
      if (panel.hidden) {
        if (fig) {
          placePanelIn(fig);
          fig.classList.add("stage-panel-open");
        }
        titleEl.textContent = "Loading stage details…";
        summaryEl.textContent = "Fetching stages.json…";
        renderCompanies([]);
        panel.hidden = false;
        setActiveHotspot(id, fig);
      }
      return;
    }
    // Re-click same stage in same figure closes; same id in another figure swaps
    if (activeId === id && !panel.hidden && fig && fig === activeFigure) {
      closePanel(true);
      return;
    }
    var stage = stagesById[id];
    if (!stage) {
      if (fig) {
        placePanelIn(fig);
        fig.classList.add("stage-panel-open");
      }
      titleEl.textContent = "Unknown stage";
      summaryEl.textContent = "No entry for \"" + id + "\" in stages.json.";
      renderCompanies([]);
      panel.hidden = false;
      setActiveHotspot(id, fig);
      activeId = id;
      lastFocus = fromEl || lastFocus;
      return;
    }
    openPanel(stage, fromEl);
  }

  function hotspotFromEvent(e) {
    var t = e.target;
    if (!t) return null;
    if (typeof t.closest === "function") {
      return t.closest(".stage-hotspot[data-stage]");
    }
    var n = t;
    while (n && n !== document) {
      if (n.getAttribute && n.getAttribute("data-stage") &&
          (n.classList && n.classList.contains("stage-hotspot") ||
           (n.getAttribute("class") || "").indexOf("stage-hotspot") !== -1)) {
        return n;
      }
      n = n.parentNode;
    }
    return null;
  }

  var lastToggleAt = 0;
  function onActivate(e) {
    var g = hotspotFromEvent(e);
    if (!g) return;
    e.preventDefault();
    e.stopPropagation();
    var now = Date.now();
    if (now - lastToggleAt < 80) return;
    lastToggleAt = now;
    toggleStage(g.getAttribute("data-stage"), g);
  }

  // Document-level delegation so ALL figures work (Fig 0 + efficiency diagrams)
  document.addEventListener("click", onActivate);
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var g = hotspotFromEvent(e);
    if (!g) return;
    onActivate(e);
  });

  document.querySelectorAll(".stage-hotspot[data-stage]").forEach(function (g) {
    g.setAttribute("aria-expanded", "false");
    g.setAttribute("aria-controls", "stage-panel");
    if (!g.hasAttribute("tabindex")) g.setAttribute("tabindex", "0");
    if (!g.hasAttribute("role")) g.setAttribute("role", "button");
  });

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    pendingId = null;
    pendingEl = null;
    closePanel(true);
  });

  // Escape closes stage panel first (capture), before abbr popover
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (panel.hidden) return;
    e.preventDefault();
    closePanel(true);
  }, true);

  function stagesJsonUrl() {
    var script = document.querySelector('script[src$="briefing.js"], script[src*="briefing.js"]');
    if (script && script.src) {
      try { return new URL("stages.json", script.src).href; } catch (e) {}
    }
    try {
      return new URL("stages.json", window.location.href).href;
    } catch (e) {
      return "stages.json";
    }
  }

  var jsonUrl = stagesJsonUrl();
  fetch(jsonUrl, { credentials: "same-origin", cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("stages.json HTTP " + r.status + " from " + jsonUrl);
      return r.json();
    })
    .then(function (data) {
      var list = (data && data.stages) || [];
      list.forEach(function (s) {
        if (s && s.id) stagesById[s.id] = s;
      });
      dataReady = true;
      if (pendingId) {
        var id = pendingId;
        var el = pendingEl;
        pendingId = null;
        pendingEl = null;
        activeId = null; // force open, not toggle-close
        toggleStage(id, el);
      }
    })
    .catch(function (err) {
      console.warn("Stage panel: failed to load stages.json", err);
      titleEl.textContent = "Stage details unavailable";
      summaryEl.textContent = "Could not load stages.json (" + jsonUrl + "). Check that the file is deployed beside briefing.js.";
      renderCompanies([]);
      dataReady = false;
      panel.hidden = false;
      if (activeFigure) activeFigure.classList.add("stage-panel-open");
    });
})();
