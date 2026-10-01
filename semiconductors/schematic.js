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
      if (n.tagName && n.tagName.toLowerCase() === "figure" &&
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

  function fidelityHref(c) {
    var sym = c.fidelity_symbol || c.ticker;
    if (!sym) return "";
    return "https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=" + encodeURIComponent(String(sym).trim());
  }

  function tickerHtml(c) {
    if (!c.ticker) return "";
    var classes = ["co-ticker"];
    if (c.rating_mark === "strong") classes.push("rating-strong");
    if (c.not_priced_in) classes.push("not-priced-in");
    var cls = classes.join(" ");
    var href = fidelityHref(c);
    if (href) {
      return ' <a class="' + cls + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer" title="Fidelity quote">' + esc(c.ticker) + "</a>";
    }
    return ' <span class="' + cls + '">' + esc(c.ticker) + "</span>";
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
      if (c.not_priced_in) li.className = "co-not-priced-in";
      var html = "<strong>" + esc(c.name) + "</strong>";
      html += tickerHtml(c);
      if (c.note) html += '<span class="co-note">' + esc(c.note) + "</span>";
      if (c.not_priced_in && c.demand_detail) {
        html += '<details class="co-demand"><summary>Why demand / timing</summary><p>' + esc(c.demand_detail) + "</p></details>";
      }
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
        summaryEl.textContent = "Fetching stages.json?v=investor-1…";
        renderCompanies([]);
        panel.hidden = false;
        setActiveHotspot(id, fig);
      }
      return;
    }
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
      summaryEl.textContent = "No entry for \"" + id + "\" in stages.json?v=investor-1.";
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
          ((n.classList && n.classList.contains("stage-hotspot")) ||
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

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (panel.hidden) return;
    e.preventDefault();
    closePanel(true);
  }, true);

  function stagesJsonUrl() {
    var script = document.querySelector('script[src$="schematic.js"], script[src*="schematic.js"]');
    if (script && script.src) {
      try { return new URL("stages.json?v=investor-1", script.src).href; } catch (e) {}
    }
    try {
      return new URL("stages.json?v=investor-1", window.location.href).href;
    } catch (e) {
      return "stages.json?v=investor-1";
    }
  }

  var jsonUrl = stagesJsonUrl();
  fetch(jsonUrl, { credentials: "same-origin", cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("stages.json?v=investor-1 HTTP " + r.status + " from " + jsonUrl);
      return r.json();
    })
    .then(function (data) {
      var list = (data && data.stages) || [];
      list.forEach(function (s) {
        if (s && s.id) stagesById[s.id] = s;
      });
      // Apply scarcity frame classes from stages.json?v=investor-1 onto matching hotspots
      list.forEach(function (s) {
        if (!s || !s.id || !s.scarcity) return;
        var cls = s.scarcity === "now" ? "scarcity-now" : (s.scarcity === "soon" ? "scarcity-soon" : "");
        if (!cls) return;
        document.querySelectorAll('.stage-hotspot[data-stage="' + s.id + '"]').forEach(function (g) {
          g.classList.add(cls);
        });
      });
      dataReady = true;
      if (pendingId) {
        var id = pendingId;
        var el = pendingEl;
        pendingId = null;
        pendingEl = null;
        activeId = null;
        toggleStage(id, el);
      }
    })
    .catch(function (err) {
      console.warn("Stage panel: failed to load stages.json?v=investor-1", err);
      titleEl.textContent = "Stage details unavailable";
      summaryEl.textContent = "Could not load stages.json?v=investor-1 (" + jsonUrl + ").";
      renderCompanies([]);
      dataReady = false;
    });
})();

(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".device-tab[data-device]"));
  var figs = Array.prototype.slice.call(document.querySelectorAll(".device-fig[data-device]"));
  if (!tabs.length || !figs.length) return;
  var panel = document.getElementById("stage-panel");
  var closeBtn = document.getElementById("stage-panel-close");

  function showDevice(id) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-device") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    figs.forEach(function (f) {
      var on = f.getAttribute("data-device") === id;
      if (on) f.removeAttribute("hidden");
      else f.setAttribute("hidden", "");
    });
    // Close panel when switching device lines
    if (panel && !panel.hidden && closeBtn) {
      closeBtn.click();
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      showDevice(t.getAttribute("data-device"));
    });
    t.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(t);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var next = e.key === "ArrowRight" ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        showDevice(tabs[next].getAttribute("data-device"));
      }
    });
  });
})();

(function () {
  // Clickable rainbow company labels on figures (not-priced-in)
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var g = t.closest("[data-company-demand]");
    if (!g) return;
    e.preventDefault();
    e.stopPropagation();
    var id = g.getAttribute("data-company-demand");
    var detail = g.getAttribute("data-demand-detail") || "";
    var name = g.getAttribute("data-company-name") || id;
    var ticker = g.getAttribute("data-ticker") || "";
    var fidelity = g.getAttribute("data-fidelity") || ticker;
    var panel = document.getElementById("stage-panel");
    var titleEl = document.getElementById("stage-panel-title");
    var summaryEl = document.getElementById("stage-panel-summary");
    var companiesWrap = document.getElementById("stage-panel-companies");
    var companyList = document.getElementById("stage-panel-company-list");
    if (!panel || !titleEl || !summaryEl || !companyList) return;
    var fig = g.closest("figure.diagram");
    if (fig) {
      var svg = fig.querySelector("svg");
      var caption = fig.querySelector("figcaption");
      if (svg && panel.parentNode !== fig) {
        if (caption) fig.insertBefore(panel, caption);
        else fig.appendChild(panel);
      }
      fig.classList.add("stage-panel-open");
    }
    titleEl.textContent = name + (ticker ? " (" + ticker + ")" : "");
    summaryEl.textContent = detail;
    companyList.innerHTML = "";
    companiesWrap.hidden = false;
    companiesWrap.open = true;
    var li = document.createElement("li");
    var href = fidelity
      ? "https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=" + encodeURIComponent(fidelity)
      : "";
    li.innerHTML = "<strong>" + name + "</strong>" +
      (ticker ? (href
        ? ' <a class="co-ticker not-priced-in" href="' + href + '" target="_blank" rel="noopener noreferrer">' + ticker + "</a>"
        : ' <span class="co-ticker not-priced-in">' + ticker + "</span>")
      : "") +
      '<span class="co-note">Marked as future demand may be under-reflected — orientation only, not advice.</span>';
    companyList.appendChild(li);
    panel.hidden = false;
  }, true);
})();
