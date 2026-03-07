/* ============================================================
   SHARED COMPONENTS - Header & Footer
   Injects shared HTML via JS template literals.
   Works with file:// and http:// alike (no fetch needed).
   ============================================================ */

const SITE = {
  name: 'Vladimir Romanov',
  tagline: 'Manufacturing Modernization & Digital Transformation',
  email: 'vladromweb@gmail.com',
  phone: '310-738-7469',
  linkedin: 'https://www.linkedin.com/in/vladromanov',
  youtube:  'https://www.youtube.com/channel/UCs3AEdsXBG3-HYvghcjhdfA',
  udemy:    'https://www.udemy.com/user/volodymyrromanov/',
  joltek:   'https://www.joltek.com/',
  solisplc: 'https://solisplc.com/',
  mfghub:   'https://manufacturinghub.live/',
};

/* ---- HEADER ---- */
const headerHTML = `
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="container">
    <div class="nav__inner">
      <a href="/" class="nav__logo" aria-label="Vladimir Romanov">
        <div class="nav__logo-mark" aria-hidden="true">VR</div>
        <span>Vladimir Romanov</span>
      </a>

      <div class="nav__links" role="list">
        <a href="/"                class="nav-link nav__link" role="listitem">Home</a>
        <a href="/about.html"      class="nav-link nav__link" role="listitem">About</a>
        <a href="/experience.html" class="nav-link nav__link" role="listitem">Experience</a>
        <a href="/projects.html"   class="nav-link nav__link" role="listitem">Projects</a>
        <a href="/blog/"           class="nav-link nav__link" role="listitem">Blog</a>
        <a href="/contact.html"    class="nav-link nav__link" role="listitem">Contact</a>
      </div>

      <div class="flex items-center gap-3">
        <a href="/contact.html" class="btn btn--primary btn--sm nav__cta" aria-label="Get in touch">
          Let's Connect
        </a>
        <button class="nav__hamburger" id="nav-toggle" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
  <div class="nav__mobile" id="nav-mobile" role="list" aria-hidden="true">
    <a href="/"                class="nav-link nav__link" role="listitem">Home</a>
    <a href="/about.html"      class="nav-link nav__link" role="listitem">About</a>
    <a href="/experience.html" class="nav-link nav__link" role="listitem">Experience</a>
    <a href="/projects.html"   class="nav-link nav__link" role="listitem">Projects</a>
    <a href="/blog/"           class="nav-link nav__link" role="listitem">Blog</a>
    <a href="/contact.html"    class="nav-link nav__link" role="listitem">Contact</a>
    <a href="/contact.html" class="btn btn--primary btn--sm" style="margin-top:0.5rem;justify-content:center">Let's Connect</a>
  </div>
</nav>
`;

/* ---- FOOTER ---- */
const footerHTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">
      <div>
        <a href="/" class="footer__brand-logo" aria-label="Vladimir Romanov">
          <div class="footer__brand-mark" aria-hidden="true">VR</div>
          <span>Vladimir Romanov</span>
        </a>
        <p class="footer__tagline">
          Bridging plant-floor execution and enterprise strategy through manufacturing modernization, SCADA/MES, and digital transformation.
        </p>
        <div class="footer__social" aria-label="Social media links">
          <a href="${SITE.linkedin}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="${SITE.youtube}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
          </a>
          <a href="${SITE.udemy}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Udemy Courses" title="Udemy">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L2 7v10c0 5.25 3.75 10.15 9 11.25C16.25 27.15 20 22.25 20 17V7L12 2zm0 2.18l6 3v9.82c0 3.94-2.62 7.6-6 8.6-3.38-1-6-4.66-6-8.6V7.18l6-3zM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
          </a>
          <a href="${SITE.mfghub}" class="footer__social-link" target="_blank" rel="noopener noreferrer" aria-label="Manufacturing Hub Podcast" title="Podcast">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
          </a>
        </div>
      </div>

      <div>
        <p class="footer__col-title">Navigation</p>
        <nav class="footer__links" aria-label="Footer navigation">
          <a href="/"                class="footer__link">Home</a>
          <a href="/about.html"      class="footer__link">About</a>
          <a href="/experience.html" class="footer__link">Experience</a>
          <a href="/projects.html"   class="footer__link">Projects</a>
          <a href="/blog/"           class="footer__link">Blog</a>
          <a href="/contact.html"    class="footer__link">Contact</a>
        </nav>
      </div>

      <div>
        <p class="footer__col-title">Ventures</p>
        <nav class="footer__links" aria-label="Ventures">
          <a href="${SITE.joltek}"   class="footer__link" target="_blank" rel="noopener noreferrer">Joltek</a>
          <a href="${SITE.solisplc}" class="footer__link" target="_blank" rel="noopener noreferrer">SolisPLC</a>
          <a href="${SITE.mfghub}"   class="footer__link" target="_blank" rel="noopener noreferrer">Manufacturing Hub</a>
          <a href="${SITE.udemy}"    class="footer__link" target="_blank" rel="noopener noreferrer">Udemy Courses</a>
          <a href="${SITE.youtube}"  class="footer__link" target="_blank" rel="noopener noreferrer">YouTube</a>
        </nav>
      </div>

      <div>
        <p class="footer__col-title">Contact</p>
        <div class="footer__links">
          <a href="mailto:${SITE.email}" class="footer__link">${SITE.email}</a>
          <a href="tel:${SITE.phone.replace(/-/g,'')}" class="footer__link">${SITE.phone}</a>
          <span class="footer__link" style="cursor:default">Montreal, Canada</span>
          <a href="${SITE.linkedin}" class="footer__link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <span>&copy; ${new Date().getFullYear()} Vladimir Romanov. All rights reserved.</span>
      <span>Manufacturing Modernization &amp; Digital Transformation</span>
    </div>
  </div>
</footer>
`;

/* ---- INJECT & ACTIVATE ---- */
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const isHome    = href === '/' && (path === '/' || path === '/index.html');
    const isBlog    = href === '/blog/' && path.startsWith('/blog');
    const isMatch   = href !== '/' && href !== '/blog/' && path.startsWith(href.replace('.html', ''));
    if (isHome || isBlog || isMatch) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject header
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.innerHTML = headerHTML;

    // Hamburger menu toggle
    const toggle  = document.getElementById('nav-toggle');
    const mobile  = document.getElementById('nav-mobile');
    if (toggle && mobile) {
      toggle.addEventListener('click', () => {
        const isOpen = mobile.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen);
        mobile.setAttribute('aria-hidden', !isOpen);
      });
    }

    // Scroll shadow
    const nav = document.querySelector('.nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });
    }

    setActiveNav();
  }

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = footerHTML;
});
