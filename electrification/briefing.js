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
