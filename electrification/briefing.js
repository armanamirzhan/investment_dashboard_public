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
  var companyIndex = {}; // fidelity or ticker upper -> company meta (mark, rainbow, fidelity)
  var activeId = null;
  var activeFigure = null;
  var lastFocus = null;
  var dataReady = false;
  var pendingId = null;
  var pendingEl = null;
  var openRainbow = null;

  var FIDELITY_TMPL = "https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function fidelityUrl(symbol) {
    if (!symbol) return null;
    return FIDELITY_TMPL + encodeURIComponent(String(symbol).trim());
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

  function applyStageFrames() {
    document.querySelectorAll(".stage-hotspot[data-stage]").forEach(function (g) {
      g.classList.remove("scarcity-now", "scarcity-soon", "stage-scarce", "stage-watch");
      var id = g.getAttribute("data-stage");
      var stage = stagesById[id];
      if (!stage || !stage.scarcity) return;
      if (stage.scarcity === "now") g.classList.add("scarcity-now");
      else if (stage.scarcity === "soon" || stage.scarcity === "watch") g.classList.add("scarcity-soon");
    });
  }

  function companyMark(c) {
    if (!c) return null;
    if (c.not_priced_in) return "not-priced-in";
    if (c.rating_mark === "strong" || c.mark === "rated") return "rating-strong";
    if (c.mark === "rainbow") return "not-priced-in";
    return null;
  }

  function companyFidelity(c) {
    if (!c) return null;
    return c.fidelity_symbol || c.fidelity || null;
  }

  function indexCompany(c) {
    if (!c) return;
    var keys = [];
    var fid = companyFidelity(c);
    if (fid) keys.push(String(fid).toUpperCase());
    if (c.ticker) {
      String(c.ticker).split(/[\/·|,]/).forEach(function (part) {
        var p = part.replace(/NYSE:|NASDAQ:|LSE:|TSE:|KRX:|via/gi, "").trim();
        if (!p) return;
        keys.push(p.toUpperCase());
        var bare = p.split(".")[0].trim();
        if (bare) keys.push(bare.toUpperCase());
      });
    }
    if (c.name) keys.push("NAME:" + c.name.toUpperCase());
    keys.forEach(function (k) {
      if (!k) return;
      var prev = companyIndex[k];
      var mark = companyMark(c);
      var prevMark = companyMark(prev);
      if (!prev || (mark && !prevMark) || mark === "not-priced-in") {
        companyIndex[k] = c;
      }
    });
  }

  function lookupCompanyMeta(tickerText, nameText) {
    if (nameText) {
      var byName = companyIndex["NAME:" + String(nameText).toUpperCase()];
      if (byName) return byName;
    }
    if (!tickerText) return null;
    var raw = String(tickerText).trim();
    var candidates = [raw.toUpperCase()];
    raw.split(/[\/·|,]/).forEach(function (part) {
      var p = part.replace(/NYSE:|NASDAQ:|LSE:|TSE:|KRX:|via/gi, "").trim();
      if (!p) return;
      candidates.push(p.toUpperCase());
      candidates.push(p.split(".")[0].toUpperCase());
    });
    for (var i = 0; i < candidates.length; i++) {
      if (companyIndex[candidates[i]]) return companyIndex[candidates[i]];
    }
    return null;
  }

  function tickerClass(mark) {
    if (mark === "rating-strong" || mark === "rated") return "co-ticker rating-strong";
    if (mark === "not-priced-in" || mark === "rainbow") return "co-ticker not-priced-in";
    return "co-ticker";
  }

  function coTickerClass(mark) {
    return tickerClass(mark);
  }

  function renderTickerAnchor(displayTicker, fidelity, mark, extraClass) {
    var cls = extraClass || tickerClass(mark);
    if (cls.indexOf("rating-strong") === -1 && cls.indexOf("not-priced-in") === -1) {
      if (mark === "rating-strong" || mark === "rated") cls += " rating-strong";
      else if (mark === "not-priced-in" || mark === "rainbow") cls += " not-priced-in";
    }
    var sym = fidelity || null;
    // Only invent a Fidelity symbol from a bare US-style ticker (no exchange prefix, no dots).
    // "LSE: CWR" / "KRX: 336260" / "2308.TW" must stay unlinked unless fidelity_symbol is set.
    if (!sym && displayTicker) {
      var raw = String(displayTicker).trim();
      if (!/^(NYSE|NASDAQ|LSE|TSE|KRX|TWSE|HKEX)\s*:/i.test(raw) && raw.indexOf(".") === -1) {
        var parts = raw.split(/[\/·|,]/);
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i].replace(/NYSE:|NASDAQ:|LSE:|TSE:|KRX:|via/gi, "").trim();
          if (/^[A-Z]{1,5}$/i.test(p)) { sym = p.toUpperCase(); break; }
        }
      }
    }
    if (sym) {
      return '<a class="' + cls + '" href="' + esc(fidelityUrl(sym)) +
        '" target="_blank" rel="noopener noreferrer" title="Fidelity quote: ' + esc(sym) + '">' +
        esc(displayTicker || sym) + "</a>";
    }
    return '<span class="' + cls + '">' + esc(displayTicker || "") + "</span>";
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
        nameHtml = '<button type="button" class="co-name-npi co-name-rainbow" data-rainbow-idx="' + idx +
          '" aria-expanded="false">' + esc(c.name) + "</button>";
      } else if (mark === "rating-strong") {
        nameHtml = '<strong class="co-name-gold">' + esc(c.name) + "</strong>";
      } else {
        nameHtml = "<strong>" + esc(c.name) + "</strong>";
      }
      var html = nameHtml;
      if (c.ticker) {
        html += " " + renderTickerAnchor(c.ticker, companyFidelity(c), mark, coTickerClass(mark));
      }
      if (c.note) html += '<span class="co-note">' + esc(c.note) + "</span>";
      if (mark === "not-priced-in") html += npiDetailHtml(c);
      li.innerHTML = html;
      companyList.appendChild(li);
    });
  }

  function closeRainbowDetails(except) {
    companyList.querySelectorAll(".npi-detail, .rainbow-detail").forEach(function (d) {
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
    var detail = btn.parentElement && btn.parentElement.querySelector(".npi-detail, .rainbow-detail");
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

  function enhancePageTickers() {
    // Restyle .ticker nodes and turn them into Fidelity links without breaking <td class="ticker">
    document.querySelectorAll(".briefing .ticker").forEach(function (el) {
      if (el.getAttribute("data-tax-enhanced") === "1") return;
      if (el.tagName === "A") { el.setAttribute("data-tax-enhanced", "1"); return; }
      var text = (el.textContent || "").trim();
      if (!text) return;
      var nameText = null;
      var row = el.closest("tr");
      if (row) {
        var firstCell = row.querySelector("td");
        // Only trust first-cell name when this ticker cell is the dedicated ticker column
        if (firstCell && (el === row.querySelector("td.ticker") || el.parentElement === row.children[1] || el.tagName === "TD")) {
          // Prefer company cell text only if it looks like a single company (short)
          var cellName = firstCell.textContent.replace(/\s+/g, " ").trim();
          if (cellName && cellName.length < 60 && cellName.indexOf(",") === -1) nameText = cellName;
        }
      }
      // Prefer immediate previous strong / rainbow button sibling (multi-company paragraphs)
      if (!nameText) {
        var prev = el.previousElementSibling;
        while (prev && prev.tagName !== "STRONG" && !(prev.classList && prev.classList.contains("co-name-rainbow"))) {
          // skip whitespace-only text nodes already avoided by previousElementSibling
          if (prev.tagName === "A" || prev.tagName === "SPAN") break;
          prev = prev.previousElementSibling;
        }
        if (prev && (prev.tagName === "STRONG" || (prev.classList && prev.classList.contains("co-name-rainbow")))) {
          nameText = prev.textContent.trim();
        }
      }
      // Ticker-first lookup; name only as soft hint (do not let name override a ticker-specific mark)
      var metaByTicker = lookupCompanyMeta(text, null);
      var metaByName = nameText ? lookupCompanyMeta(null, nameText) : null;
      var meta = metaByTicker;
      if (!meta) meta = metaByName;
      else if (metaByName && companyMark(metaByName) && !companyMark(meta)) meta = metaByName;
      else if (metaByName && companyMark(metaByName) === "not-priced-in") meta = metaByName;
      else if (metaByName && companyFidelity(metaByName) && !companyFidelity(meta)) {
        meta = Object.assign({}, meta, { fidelity_symbol: companyFidelity(metaByName) });
      }
      var mark = companyMark(meta);
      var fid = companyFidelity(meta);
      var cls = tickerClass(mark);
      var url = fidelityUrl(fid);
      if (!url) {
        var parts = text.split(/[\/·|,]/);
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i].replace(/NYSE:|NASDAQ:|LSE:|TSE:|KRX:|via/gi, "").trim();
          if (/^[A-Z]{1,5}$/i.test(p)) { fid = p.toUpperCase(); url = fidelityUrl(fid); break; }
        }
        if (!url && /SIEGY/i.test(text)) { fid = "SIEGY"; url = fidelityUrl(fid); }
        if (!url && /SMNEY/i.test(text)) { fid = "SMNEY"; url = fidelityUrl(fid); }
        if (!url && /CPWHF/i.test(text)) { fid = "CPWHF"; url = fidelityUrl(fid); }
        if (!url && /PRYMY/i.test(text)) { fid = "PRYMY"; url = fidelityUrl(fid); }
        if (!url && /LGRDY/i.test(text)) { fid = "LGRDY"; url = fidelityUrl(fid); }
        if (!url && /RYCEY/i.test(text)) { fid = "RYCEY"; url = fidelityUrl(fid); }
        if (!url && /SBGSY/i.test(text)) { fid = "SBGSY"; url = fidelityUrl(fid); }
        if (!url && /IFNNY/i.test(text)) { fid = "IFNNY"; url = fidelityUrl(fid); }
        if (!url && /\bGEV\b/i.test(text)) { fid = "GEV"; url = fidelityUrl(fid); }
        if (!url && /\bETN\b/i.test(text)) { fid = "ETN"; url = fidelityUrl(fid); }
        if (!url && /\bVRT\b/i.test(text)) { fid = "VRT"; url = fidelityUrl(fid); }
        if (!url && /\bAPH\b/i.test(text)) { fid = "APH"; url = fidelityUrl(fid); }
        if (!url && /\bABBNY\b/i.test(text)) { fid = "ABBNY"; url = fidelityUrl(fid); }
        if (!url && /\bABB\b/i.test(text) && !/ABBN\.SW/i.test(text)) { fid = "ABBNY"; url = fidelityUrl(fid); }
        if (!url && /\bVICR\b/i.test(text)) { fid = "VICR"; url = fidelityUrl(fid); }
        if (!url && /\bPWR\b/i.test(text)) { fid = "PWR"; url = fidelityUrl(fid); }
        if (!url && /6501/i.test(text)) { fid = "HTHIY"; url = fidelityUrl(fid); }
        /* 2308.TW = Delta Taiwan — no verified US OTC (DELTY) for Fidelity; leave unlinked */
      }
      el.setAttribute("data-tax-enhanced", "1");
      if (url) {
        var a = document.createElement("a");
        a.className = cls;
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.title = "Fidelity quote: " + (fid || text);
        a.textContent = text;
        a.setAttribute("data-tax-enhanced", "1");
        // If el is a TD/TH/SPAN with class ticker, put the anchor inside; do not replace the cell
        if (el.tagName === "TD" || el.tagName === "TH") {
          el.className = ""; // avoid nested .ticker styling clash on cell
          el.textContent = "";
          el.appendChild(a);
        } else {
          el.replaceWith(a);
        }
      } else {
        if (el.tagName === "TD" || el.tagName === "TH") {
          var span = document.createElement("span");
          span.className = cls;
          span.textContent = text;
          span.setAttribute("data-tax-enhanced", "1");
          el.className = "";
          el.textContent = "";
          el.appendChild(span);
        } else {
          el.className = cls;
        }
      }
    });

    // not-priced-in company-name expanders on hop lists / tables
    document.querySelectorAll(".briefing .hop-list li, .briefing table tbody tr, .briefing p").forEach(function (block) {
      if (block.getAttribute("data-rainbow-wired") === "1") return;
      Object.keys(companyIndex).forEach(function (k) {
        if (k.indexOf("NAME:") !== 0) return;
        var c = companyIndex[k];
        if (!c || companyMark(c) !== "not-priced-in" || !c.name) return;
        if (!(c.demand_detail || c.demand_when || c.why_critical)) return;
        var name = c.name;
        if (block.querySelector && block.querySelector('.co-name-npi[data-co="' + CSS.escape(name) + '"]')) return;
        var strongRe = new RegExp("<strong>(\\s*)" + name.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&") + "(\\s*)</strong>", "i");
        if (strongRe.test(block.innerHTML)) {
          block.innerHTML = block.innerHTML.replace(strongRe,
            '<button type="button" class="co-name-npi" data-co="' + esc(name) + '" aria-expanded="false">$1' + esc(name) + "$2</button>" +
            npiDetailHtml(c)
          );
          block.setAttribute("data-rainbow-wired", "1");
        }
      });
    });
  }

  function npiDetailFromBtn(btn) {
    var detail = btn.parentElement && btn.parentElement.querySelector(".npi-detail, .rainbow-detail");
    if (!detail) {
      var n = btn.nextElementSibling;
      while (n && !(n.classList.contains("npi-detail") || n.classList.contains("rainbow-detail") || n.classList.contains("co-demand"))) {
        n = n.nextElementSibling;
      }
      detail = n;
    }
    return detail;
  }

  // Delegate not-priced-in toggles on the whole briefing (page + panel)
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".briefing .co-name-npi");
    if (!btn) return;
    if (companyList.contains(btn)) return;
    e.preventDefault();
    var detail = npiDetailFromBtn(btn);
    if (!detail) return;
    if (detail.tagName === "DETAILS") {
      detail.open = !detail.open;
      btn.setAttribute("aria-expanded", detail.open ? "true" : "false");
      return;
    }
    var opening = detail.hidden || !detail.classList.contains("is-open");
    document.querySelectorAll(".briefing .npi-detail.is-open, .briefing .rainbow-detail.is-open").forEach(function (d) {
      if (d !== detail) { d.hidden = true; d.classList.remove("is-open"); }
    });
    document.querySelectorAll(".briefing .co-name-npi[aria-expanded='true']").forEach(function (b) {
      if (b !== btn) b.setAttribute("aria-expanded", "false");
    });
    if (opening) {
      detail.hidden = false;
      detail.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    } else {
      detail.hidden = true;
      detail.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

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
    var scarcityNote = "";
    if (stage.scarcity === "now") scarcityNote = " [scarcity-now: extreme demand RIGHT NOW — red frame]";
    else if (stage.scarcity === "soon" || stage.scarcity === "watch") scarcityNote = " [scarcity-soon: near-term bottleneck risk — yellow frame]";
    summaryEl.textContent = (stage.summary || "") + scarcityNote;
    renderCompanies(stage.companies || []);
    companiesWrap.open = true; // open so marks are visible
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
        if (s && s.id) {
          stagesById[s.id] = s;
          (s.companies || []).forEach(indexCompany);
        }
      });
      if (data && data.taxonomy && data.taxonomy.fidelityUrlTemplate) {
        // template already matches FIDELITY_TMPL default
      }
      dataReady = true;
      applyStageFrames();
      enhancePageTickers();
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
      summaryEl.textContent = "Could not load stages.json (" + jsonUrl + "). Check that the file is deployed beside briefing.js.";
      renderCompanies([]);
      dataReady = false;
      panel.hidden = false;
      if (activeFigure) activeFigure.classList.add("stage-panel-open");
    });
})();
