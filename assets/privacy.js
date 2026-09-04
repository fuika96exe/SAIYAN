/**
 * SAIYAN — Privacy Policy Page Engine
 * Handles smooth TOC scrolling, active section scrollspy, and mobile collapsible menu.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPrivacyToc();
});

function initPrivacyToc() {
  const sections = document.querySelectorAll('.policy-section');
  const tocLinks = document.querySelectorAll('.toc-nav-link');
  const mobileTocLinks = document.querySelectorAll('.mobile-toc-link');
  const mobileBtn = document.getElementById('mobileTocBtn');
  const mobileMenu = document.getElementById('mobileTocMenu');

  // Mobile TOC Dropdown Toggle
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.hidden = isExpanded;
    });

    mobileTocLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
      });
    });
  }

  // ScrollSpy Active Section Highlight
  function updateActiveToc() {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      tocLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', updateActiveToc, { passive: true });
  updateActiveToc();
}
