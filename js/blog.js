// FILE: blog.js – Blog Feed Renderer
import { blogPosts } from "./data/blog-posts.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("blog-feed-container");
  if (!container) {
    console.warn("⚠️ #blog-feed-container not found; skipping feed render.");
    return;
  }
  if (!Array.isArray(blogPosts) || blogPosts.length === 0) {
    container.innerHTML = "<p>No posts to display.</p>";
    return;
  }

  // Intl formatter for dates
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const fragment = document.createDocumentFragment();

  blogPosts.forEach(post => {
    // Create elements
    const col = document.createElement("div");
    col.className = "col blog-feed__item";

    const card = document.createElement("div");
    card.className = "blog-feed__card position-relative d-flex align-items-end h-100 p-4 pt-10 mb-8 rounded-4 overflow-hidden";
    card.style.minHeight = "460px";

    // Overlay
    const overlay = document.createElement("div");
    overlay.className = "position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-75 bg-gradient";
    card.appendChild(overlay);

    // Cover Image
    const img = document.createElement("img");
    img.className = "img-fluid object-fit-cover position-absolute top-0 start-0 w-100 h-100 rounded-4";
    img.style.mixBlendMode = "overlay";
    img.src = post.coverImage;
    img.alt = `Cover for “${post.title}”`;
    img.loading = "lazy";
    // Optionally set width/height attributes here
    card.appendChild(img);

    // Category badge
    const badge = document.createElement("p");
    badge.className = "position-absolute top-0 end-0 z-2 mt-3 me-3 badge fw-normal ls-1 bg-slate-100 text-slate-600 rounded-pill";
    badge.textContent = post.category;
    card.appendChild(badge);

    // Content wrapper
    const content = document.createElement("div");
    content.className = "position-relative z-2 text-white";

    // Meta row
    const meta = document.createElement("div");
    meta.className = "d-flex align-items-center gap-4 mb-3";

    // Date
    const timeEl = document.createElement("time");
    timeEl.dateTime = post.date;
    timeEl.className = "ls-n1 mb-0";
    timeEl.textContent = dateFormatter.format(new Date(post.date));
    meta.appendChild(timeEl);

    const dash = document.createElement("span");
    dash.className = "ls-n1 mb-0";
    dash.textContent = "–";
    meta.appendChild(dash);

    // Author avatar
    const avatar = document.createElement("img");
    avatar.className = "img-fluid rounded-circle";
    avatar.src = post.authorImage;
    avatar.width = 24;
    avatar.height = 24;
    avatar.alt = `${post.author} avatar`;
    avatar.loading = "lazy";
    meta.appendChild(avatar);

    // Author name
    const authorName = document.createElement("p");
    authorName.className = "fw-light mb-0";
    authorName.textContent = post.author;
    meta.appendChild(authorName);

    content.appendChild(meta);

    // Title
    const titleEl = document.createElement("p");
    titleEl.className = "fw-semibold mb-1";
    titleEl.textContent = post.title;
    content.appendChild(titleEl);

    // CTA link
    const link = document.createElement("a");
    link.href = post.link;
    link.className = "blog-feed__cta fw-light text-white small stretched-link";
    link.textContent = "Read More";
    content.appendChild(link);

    card.appendChild(content);
    col.appendChild(card);
    fragment.appendChild(col);
  });

  // Inject all at once
  container.appendChild(fragment);
});
