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
        activeId = null;
        toggleStage(id, el);
      }
    })
    .catch(function (err) {
      console.warn("Stage panel: failed to load stages.json", err);
      titleEl.textContent = "Stage details unavailable";
      summaryEl.textContent = "Could not load stages.json (" + jsonUrl + ").";
      renderCompanies([]);
      dataReady = false;
    });
})();
