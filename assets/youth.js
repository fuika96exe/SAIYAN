/**
 * SAIYAN — For Youth Page Engine
 * Handles FAQ accordion expansions and interactive components.
 */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
});

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close all others for crisp scanning
      faqItems.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
