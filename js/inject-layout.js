document.addEventListener("DOMContentLoaded", function () {
  fetch("layout.html")
    .then((res) => res.text())
    .then((htmlText) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, "text/html");

      const header = doc.getElementById("inject-header");
      const footer = doc.getElementById("inject-footer");
      const modals = doc.getElementById("inject-modals"); // ✅ NEW LINE

      const siteHeader = document.getElementById("site-header");
      const siteFooter = document.getElementById("site-footer");

      // ✅ Insert header
      if (header && siteHeader) {
        siteHeader.innerHTML = header.innerHTML;
      }

      // ✅ Insert footer
      if (footer && siteFooter) {
        siteFooter.innerHTML = footer.innerHTML;
      }

      // ✅ Insert modals into the end of body
      if (modals) {
        document.body.insertAdjacentHTML("beforeend", modals.innerHTML);
      }
    })
    .catch((err) => {
      console.error("❌ Layout injection failed:", err);
    });
});
