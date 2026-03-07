/* ============================================================
   MAIN.JS - Animations, interactions, utilities
   ============================================================ */

/* --- Intersection Observer: fade-up on scroll --- */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* --- Counter animation for stats --- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  /* --- Table of contents: active heading tracker --- */
  const tocLinks = document.querySelectorAll('.toc__link');
  if (tocLinks.length) {
    const headings = document.querySelectorAll('.post-content h2, .post-content h3');
    const headingObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.toc__link[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );
    headings.forEach(h => headingObserver.observe(h));
  }

  /* --- Contact form: feedback on submit --- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Message sent!';
      btn.disabled = true;
      btn.style.background = '#16a34a';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
        form.reset();
      }, 4000);
    });
  }
});

/* --- Number counter animation --- */
function animateCount(el) {
  const target   = parseFloat(el.dataset.count);
  const suffix   = el.dataset.suffix || '';
  const prefix   = el.dataset.prefix || '';
  const duration = 1400;
  const start    = performance.now();
  const isFloat  = String(target).includes('.');

  const tick = now => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current  = eased * target;
    el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = prefix + target + suffix;
  };
  requestAnimationFrame(tick);
}
