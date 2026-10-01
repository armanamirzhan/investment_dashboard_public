(function () {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const SECTION_RE = /(electrification|hardware|software|semiconductors|hyperscalers|digests|smr|uranium|photonics)(\/|$)/;
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
})();
