/**
 * SAIYAN — Programmes Page Engine
 * Handles modal previews for individual programme tracks.
 */

document.addEventListener('DOMContentLoaded', () => {
  initProgModals();
});

function initProgModals() {
  const modal = document.getElementById('progDetailModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const title = document.getElementById('modalProgTitle');
  const text = document.getElementById('modalProgText');

  window.openProgModal = function(progName, progDesc) {
    if (!modal) return;
    title.textContent = progName;
    text.textContent = progDesc;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

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
