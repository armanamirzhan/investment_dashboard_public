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
  var openRainbow = null;

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
    return "https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=" +
      encodeURIComponent(String(sym).trim());
  }

  function companyMark(c) {
    if (!c) return "";
    if (c.not_priced_in) return "not-priced-in";
    if (c.rating_mark === "strong" || c.mark === "rated") return "rating-strong";
    if (c.mark === "rainbow") return "not-priced-in";
    return "";
  }

  function tickerHtml(c) {
    if (!c.ticker) return "";
    var mark = companyMark(c);
    var classes = ["co-ticker"];
    if (mark === "rating-strong") classes.push("rating-strong");
    if (mark === "not-priced-in") classes.push("not-priced-in");
    var cls = classes.join(" ");
    var href = fidelityHref(c);
    if (href) {
      return ' <a class="' + cls + '" href="' + esc(href) +
        '" target="_blank" rel="noopener noreferrer" title="Fidelity quote">' +
        esc(c.ticker) + "</a>";
    }
    return ' <span class="' + cls + '">' + esc(c.ticker) + "</span>";
  }

  function npiDetailHtml(c) {
    if (!c) return "";
    if (c.demand_when || c.demand_for || c.why_critical || c.why_there) {
      return '<div class="npi-detail" hidden>' +
        "<dl>" +
        "<dt>When demand is expected</dt><dd>" + esc(c.demand_when || "") + "</dd>" +
        "<dt>For what</dt><dd>" + esc(c.demand_for || "") + "</dd>" +
        "<dt>Why critical</dt><dd>" + esc(c.why_critical || "") + "</dd>" +
        "<dt>Why demand lands here</dt><dd>" + esc(c.why_there || "") + "</dd>" +
        "</dl>" +
        '<p class="dim" style="margin:0.4rem 0 0;font-size:0.75rem">Research taxonomy mark — not investment advice.</p>' +
        "</div>";
    }
    if (c.demand_detail) {
      return '<details class="co-demand"><summary>Why demand / timing</summary><p>' +
        esc(c.demand_detail) + "</p></details>";
    }
    return "";
  }

  function renderCompanies(companies) {
    companyList.innerHTML = "";
    openRainbow = null;
    if (!companies || !companies.length) {
      companiesWrap.hidden = true;
      return;
    }
    companiesWrap.hidden = false;
    companies.forEach(function (c, idx) {
      var li = document.createElement("li");
      var mark = companyMark(c);
      if (mark === "not-priced-in") li.className = "co-not-priced-in";
      var nameHtml;
      if (mark === "not-priced-in" && (c.demand_detail || c.demand_when || c.why_critical)) {
        nameHtml = '<button type="button" class="co-name-npi" data-rainbow-idx="' + idx +
          '" aria-expanded="false">' + esc(c.name) + "</button>";
      } else {
        nameHtml = "<strong>" + esc(c.name) + "</strong>";
      }
      var html = nameHtml;
      html += tickerHtml(c);
      if (c.note) html += '<span class="co-note">' + esc(c.note) + "</span>";
      if (mark === "not-priced-in") html += npiDetailHtml(c);
      li.innerHTML = html;
      companyList.appendChild(li);
    });
  }

  function closeRainbowDetails(except) {
    companyList.querySelectorAll(".npi-detail").forEach(function (d) {
      if (except && d === except) return;
      d.hidden = true;
      d.classList.remove("is-open");
    });
    companyList.querySelectorAll(".co-name-npi").forEach(function (b) {
      b.setAttribute("aria-expanded", "false");
    });
  }

  companyList.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".co-name-npi");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    var detail = btn.parentElement && btn.parentElement.querySelector(".npi-detail");
    if (!detail) return;
    var opening = detail.hidden;
    closeRainbowDetails(opening ? detail : null);
    if (opening) {
      detail.hidden = false;
      detail.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      openRainbow = detail;
    } else {
      detail.hidden = true;
      detail.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      openRainbow = null;
    }
  });

  function closePanel(restoreFocus) {
    pendingId = null;
    pendingEl = null;
    openRainbow = null;
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
        summaryEl.textContent = "Fetching timeline-stages.json…";
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
      titleEl.textContent = "Unknown cell";
      summaryEl.textContent = "No entry for \"" + id + "\" in timeline-stages.json.";
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
    var script = document.querySelector('script[src$="timeline.js"], script[src*="timeline.js"]');
    if (script && script.src) {
      try { return new URL("timeline-stages.json?v=cpo-sch1", script.src).href; } catch (e) {}
    }
    try {
      return new URL("timeline-stages.json?v=cpo-sch1", window.location.href).href;
    } catch (e) {
      return "timeline-stages.json?v=cpo-sch1";
    }
  }

  var jsonUrl = stagesJsonUrl();
  fetch(jsonUrl, { credentials: "same-origin", cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("timeline-stages.json HTTP " + r.status + " from " + jsonUrl);
      return r.json();
    })
    .then(function (data) {
      var list = (data && data.stages) || [];
      list.forEach(function (s) {
        if (s && s.id) stagesById[s.id] = s;
      });
      // Apply scarcity frame classes from timeline-stages.json onto matching hotspots
      list.forEach(function (s) {
        if (!s || !s.id || !s.scarcity) return;
        var cls = s.scarcity === "now" ? "scarcity-now" : (s.scarcity === "soon" ? "scarcity-soon" : "");
        if (!cls) return;
        document.querySelectorAll('.stage-hotspot[data-stage="' + s.id + '"]').forEach(function (g) {
          g.classList.remove("scarcity-now", "scarcity-soon");
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
      console.warn("Timeline panel: failed to load timeline-stages.json", err);
      titleEl.textContent = "Cell details unavailable";
      summaryEl.textContent = "Could not load timeline-stages.json (" + jsonUrl + ").";
      renderCompanies([]);
      dataReady = false;
    });
})();
