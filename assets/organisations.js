/**
 * SAIYAN — For Organisations Page Engine
 * Handles smooth scrolling to #challenge and mock enquiry modal placeholder.
 */

document.addEventListener('DOMContentLoaded', () => {
  initOrganisationInteractions();
});

function initOrganisationInteractions() {
  const openModalBtn = document.getElementById('openMockEnquiryBtn');
  const modal = document.getElementById('mockEnquiryModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }
}
