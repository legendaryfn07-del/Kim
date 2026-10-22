// You shouldn't need to edit this file — change config.js instead.

(function () {
  const $ = (id) => document.getElementById(id);

  // ---- text ----
  $("name1").textContent = SITE.name1;
  $("name2").textContent = SITE.name2;
  $("tagline").textContent = SITE.tagline;
  $("footer").textContent = SITE.footer;
  document.title = `${SITE.name1} & ${SITE.name2} 💗`;

  // ---- days together (counts up on load) ----
  const start = new Date(SITE.startDate + "T00:00:00");
  const days = Math.max(0, Math.floor((Date.now() - start) / 86400000));
  let n = 0;
  const step = Math.max(1, Math.ceil(days / 60));
  const tick = () => {
    n = Math.min(days, n + step);
    $("days").textContent = n.toLocaleString();
    if (n < days) requestAnimationFrame(tick);
  };
  tick();

  // ---- gallery ----
  const gallery = $("gallery");
  if (!PHOTOS.length) {
    gallery.innerHTML = '<p class="empty">add some photos in config.js 📸</p>';
  }
  PHOTOS.forEach((p, i) => {
    const card = document.createElement("figure");
    card.className = "polaroid";
    card.style.setProperty("--tilt", `${(Math.random() * 6 - 3).toFixed(1)}deg`);
    card.style.animationDelay = `${i * 0.07}s`;

    const frame = document.createElement("div");
    frame.className = "frame";
    const img = document.createElement("img");
    img.src = "photos/" + p.file;
    img.alt = p.caption || "us";
    img.loading = "lazy";
    frame.appendChild(img);

    const cap = document.createElement("figcaption");
    cap.className = "cap";
    cap.textContent = p.caption || "";
    if (p.date) {
      const d = document.createElement("span");
      d.className = "date";
      d.textContent = p.date;
      cap.appendChild(d);
    }

    card.append(frame, cap);
    card.addEventListener("click", () => openLb(i));
    gallery.appendChild(card);
  });

  // ---- lightbox ----
  const lb = $("lightbox");
  let current = 0;
  function show(i) {
    current = (i + PHOTOS.length) % PHOTOS.length;
    const p = PHOTOS[current];
    $("lb-img").src = "photos/" + p.file;
    $("lb-img").alt = p.caption || "us";
    $("lb-cap").textContent = p.caption + (p.date ? ` · ${p.date}` : "");
  }
  function openLb(i) { show(i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); }
  function closeLb() { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); }

  lb.querySelector(".lb-close").onclick = closeLb;
  lb.querySelector(".lb-prev").onclick = (e) => { e.stopPropagation(); show(current - 1); };
  lb.querySelector(".lb-next").onclick = (e) => { e.stopPropagation(); show(current + 1); };
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // swipe on phones
  let sx = null;
  lb.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    sx = null;
  });

  // ---- floating hearts ----
  const hearts = document.querySelector(".hearts");
  const emojis = ["💗", "💕", "💖", "🤍", "💞"];
  for (let i = 0; i < 14; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = emojis[i % emojis.length];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 12 + Math.random() * 16 + "px";
    h.style.animationDuration = 10 + Math.random() * 12 + "s";
    h.style.animationDelay = Math.random() * 12 + "s";
    hearts.appendChild(h);
  }
})();
