(function () {
  // Nav active-link highlighting
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const SECTION_RE = /(electrification|hardware|software|semiconductors|hyperscalers|analysis|claude-summary|digests|smr|uranium|photonics)(\/|$)/;
  document.querySelectorAll(".site-nav .nav-links a[data-section]").forEach((a) => {
    const section = a.getAttribute("data-section");
    let active = false;
    if (section === "home") {
      const inSection = SECTION_RE.test(path);
      active = !inSection && (path.endsWith("/") || path.endsWith("index.html") || /investment_dashboard_public$/.test(path));
    } else {
      active = path.includes("/" + section);
    }
    if (active) a.classList.add("active");
  });

  // Shared visual-mark legend under sticky nav (idempotent)
  if (document.querySelector(".site-legend")) return;

  const aside = document.createElement("aside");
  aside.className = "site-legend";
  aside.setAttribute("aria-label", "Mark legend");
  aside.innerHTML =
    '<div class="legend-inner">' +
      '<span class="legend-item"><span class="lg-swatch now" aria-hidden="true"></span><strong>Red frame</strong> — extreme demand / scarcity now</span>' +
      '<span class="legend-item"><span class="lg-swatch soon" aria-hidden="true"></span><strong>Yellow frame</strong> — near-term bottleneck (~2027–2029)</span>' +
      '<span class="legend-item"><span class="lg-swatch grey" aria-hidden="true"></span><strong>Grey ticker</strong> — default stock symbol</span>' +
      '<span class="legend-item"><span class="lg-swatch strong" aria-hidden="true"></span><strong>Dark green ticker</strong> / <span class="lg-gold">gold name</span> — strong setup / franchise</span>' +
      '<span class="legend-item"><span class="lg-swatch rainbow" aria-hidden="true"></span><strong>Rainbow ticker</strong> — demand may not yet be in the share price</span>' +
      '<span class="legend-item"><span class="lg-tag buy">Buy</span> <span class="lg-tag accumulate">Accumulate</span> <span class="lg-tag hold">Hold</span> — personal study ratings (Analysis)</span>' +
      '<span class="legend-item legend-note">Research marks for study — not investment advice</span>' +
    '</div>';

  const nav = document.querySelector(".site-nav");
  if (nav && nav.parentNode) {
    nav.insertAdjacentElement("afterend", aside);
  } else {
    const main = document.querySelector("main.container") || document.querySelector(".container") || document.body;
    main.insertBefore(aside, main.firstChild);
  }
})();
