document.addEventListener("DOMContentLoaded", () => {
  const isInPagesFolder = window.location.pathname.includes("/pages/");
  const layoutPath = isInPagesFolder ? "../layouts/layout.html" : "pages/layouts/layout.html";

  injectLayout(layoutPath).catch(err => {
    console.error("❌ Layout injection failed:", err);
  });
});


async function injectLayout(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  const htmlText = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, "text/html");

  // Try both the old “inject-…” IDs and a more semantically named fallback
  const headerTpl = doc.getElementById("inject-header")
                 || doc.getElementById("site-header")
                 || doc.querySelector("header");
  const footerTpl = doc.getElementById("inject-footer")
                 || doc.getElementById("site-footer")
                 || doc.querySelector("footer");
  const modalsTpl = doc.getElementById("inject-modals")
                 || doc.getElementById("site-modals")
                 || doc.querySelector(".site-modals");

  // Target containers on your page
  const siteHeader = document.getElementById("site-header");
  const siteFooter = document.getElementById("site-footer");

  if (headerTpl && siteHeader) {
    siteHeader.innerHTML = headerTpl.innerHTML;
  } else {
    console.warn("⚠️ Header template or target container not found");
  }

  if (footerTpl && siteFooter) {
    siteFooter.innerHTML = footerTpl.innerHTML;
  } else {
    console.warn("⚠️ Footer template or target container not found");
  }

  if (modalsTpl) {
    document.body.insertAdjacentHTML("beforeend", modalsTpl.innerHTML);
  } else {
    console.info("ℹ️ No modals section found in layout");
  }
}
