/**
 * Sailor SAIYAN — Interest Form Controller
 * Frontend-only validation and mock submission lifecycle.
 * [TODO for Backend Developer: Connect real endpoint here when ready]
 */

document.addEventListener('DOMContentLoaded', () => {
  initSailorInterestForm();
});

function initSailorInterestForm() {
  const form = document.getElementById('sailorInterestForm');
  const successPanel = document.getElementById('sailorSuccessPanel');
  const resetBtn = document.getElementById('sailorResetBtn');
  const submitBtn = document.getElementById('sailorSubmitBtn');
  const spinner = document.getElementById('sailorBtnSpinner');
  const btnText = document.getElementById('sailorBtnText');

  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById('sailorName'),
      error: document.getElementById('err-sailorName'),
      validate: (v) => v.trim().length > 0
    },
    email: {
      input: document.getElementById('sailorEmail'),
      error: document.getElementById('err-sailorEmail'),
      validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    },
    region: {
      input: document.getElementById('sailorRegion'),
      error: document.getElementById('err-sailorRegion'),
      validate: (v) => v && v !== ''
    },
    role: {
      input: document.getElementById('sailorRole'),
      error: document.getElementById('err-sailorRole'),
      validate: (v) => v && v !== ''
    }
  };

  // Real-time error clearance
  Object.keys(fields).forEach(key => {
    const item = fields[key];
    const eventType = item.input.tagName === 'SELECT' ? 'change' : 'input';
    item.input.addEventListener(eventType, () => {
      if (item.validate(item.input.value)) {
        item.error.style.display = 'none';
        item.input.classList.remove('is-invalid');
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;
    let firstInvalid = null;

    Object.keys(fields).forEach(key => {
      const item = fields[key];
      if (!item.validate(item.input.value)) {
        item.error.style.display = 'block';
        item.input.classList.add('is-invalid');
        isValid = false;
        if (!firstInvalid) firstInvalid = item.input;
      } else {
        item.error.style.display = 'none';
        item.input.classList.remove('is-invalid');
      }
    });

    if (!isValid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    spinner.style.display = 'inline-block';
    btnText.textContent = 'SUBMITTING...';

    // Simulated 1s delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Transition to success state
    form.style.display = 'none';
    successPanel.style.display = 'block';
    submitBtn.disabled = false;
    spinner.style.display = 'none';
    btnText.textContent = 'SUBMIT INTEREST';
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successPanel.style.display = 'none';
    });
  }
}
