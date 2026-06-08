// ── Gallery filter ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.cat === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });

  // ── Lightbox ──
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('lb-title').textContent = item.dataset.title;
      document.getElementById('lb-stage').textContent = item.dataset.stage;
      document.getElementById('lb-desc').textContent = item.dataset.desc;
      document.getElementById('lb-img-label').textContent = item.dataset.title;
      document.getElementById('lightbox').classList.add('open');
    });
  });

  function closeLightbox(e) {
    if (e.target === document.getElementById('lightbox')) {
      document.getElementById('lightbox').classList.remove('open');
    }
  }

  // ── Scroll reveal ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));