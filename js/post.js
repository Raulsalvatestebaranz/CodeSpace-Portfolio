// =========================================================================================
// ✅ FILE: post.js – Single Blog Post Renderer
// =========================================================================================

import { blogPosts } from "./data/blog-posts.js";

// =========================================================================================
// ✅ DOM ELEMENTS – Cached Container
// =========================================================================================
const container = document.getElementById("post-container");

// =========================================================================================
// ✅ URL PARAMS – Get Post ID from Query String
// =========================================================================================
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

// =========================================================================================
// ✅ DATA FETCH – Find Matching Blog Post
// =========================================================================================
const post = blogPosts.find(p => p.id === postId);

// =========================================================================================
// ✅ RENDERING – Show Post or Error
// =========================================================================================
if (!post) {
  container.innerHTML = `
    <div class="alert alert-danger">❌ Post not found.</div>
  `;
} else {
  container.innerHTML = `
    <article class="post">
      <h1 class="mb-3">${post.title}</h1>
      
      <div class="mb-4 d-flex align-items-center gap-3">
        <img src="${post.authorImage}" alt="${post.author}" class="rounded-circle" width="40" height="40" />
        <span class="text-muted small">${post.author} · ${new Date(post.date).toLocaleDateString()}</span>
      </div>
      
      <img src="${post.coverImage}" alt="${post.title}" class="img-fluid rounded mb-4" />
      <p class="lead">${post.excerpt}</p>
      <hr />

      <div class="post__content">
        ${post.content || `
          <p class="text-muted">
            📝 Full post content goes here. You can expand your object with a 
            <code>content</code> field.
          </p>
        `}
      </div>
    </article>
  `;
}
