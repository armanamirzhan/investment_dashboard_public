(function () {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".site-nav .nav-links a[data-section]").forEach((a) => {
    const section = a.getAttribute("data-section");
    let active = false;
    if (section === "home") {
      active = path.endsWith("/investment_dashboard_public") ||
               path.endsWith("/investment_dashboard_public/index.html") ||
               path === "" || path.endsWith("/") ||
               /\/index\.html$/.test(path) && !/(electrification|photonics|smr|uranium|digests)\//.test(path);
      // Prefer exact home: no section folder in path
      const inSection = /(electrification|photonics|smr|uranium|digests)(\/|$)/.test(path);
      active = !inSection && (path.endsWith("/") || path.endsWith("index.html") || /investment_dashboard_public$/.test(path));
    } else {
      active = path.includes("/" + section);
    }
    if (active) a.classList.add("active");
  });
})();
