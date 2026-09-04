/**
 * SAIYAN — Youth Application Form Engine
 * Handles front-end validation, mock submission lifecycle, error & success states.
 */

document.addEventListener('DOMContentLoaded', () => {
  initYouthJoinForm();
  initJoinModals();
});

function initYouthJoinForm() {
  const form = document.getElementById('youthJoinForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnSpinner = document.getElementById('btnSpinner');
  const btnText = document.getElementById('btnText');
  const globalError = document.getElementById('formGlobalError');
  const retryBtn = document.getElementById('retrySubmitBtn');
  const successPanel = document.getElementById('joinSuccessPanel');

  if (!form) return;

  const fields = {
    fullName: {
      input: document.getElementById('fullName'),
      errorEl: document.getElementById('error-fullName'),
      validate: (val) => val.trim().length > 0 ? '' : 'Please enter your full name.'
    },
    email: {
      input: document.getElementById('email'),
      errorEl: document.getElementById('error-email'),
      validate: (val) => {
        if (!val.trim()) return 'Please enter your email address.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val.trim()) ? '' : 'Please enter a valid email address.';
      }
    },
    phone: {
      input: document.getElementById('phone'),
      errorEl: document.getElementById('error-phone'),
      validate: (val) => val.trim().length > 0 ? '' : 'Please enter your phone number.'
    },
    location: {
      input: document.getElementById('location'),
      errorEl: document.getElementById('error-location'),
      validate: (val) => val && val !== '' ? '' : 'Please select your current location.'
    },
    motivation: {
      input: document.getElementById('motivation'),
      errorEl: document.getElementById('error-motivation'),
      validate: (val) => val.trim().length > 0 ? '' : 'Please tell us why you would like to join.'
    },
    ageConsent: {
      input: document.getElementById('ageConsent'),
      errorEl: document.getElementById('error-ageConsent'),
      validate: (checked) => checked ? '' : 'Please confirm your eligibility.'
    },
    privacyConsent: {
      input: document.getElementById('privacyConsent'),
      errorEl: document.getElementById('error-privacyConsent'),
      validate: (checked) => checked ? '' : 'Please accept the Privacy Policy.'
    }
  };

  // Real-time input clearing of error states
  Object.keys(fields).forEach((key) => {
    const item = fields[key];
    const eventType = (item.input.type === 'checkbox' || item.input.tagName === 'SELECT') ? 'change' : 'input';

    item.input.addEventListener(eventType, () => {
      const val = item.input.type === 'checkbox' ? item.input.checked : item.input.value;
      const errorMsg = item.validate(val);
      if (!errorMsg) {
        clearFieldError(key);
      }
    });

    item.input.addEventListener('blur', () => {
      const val = item.input.type === 'checkbox' ? item.input.checked : item.input.value;
      const errorMsg = item.validate(val);
      if (errorMsg) {
        showFieldError(key, errorMsg);
      } else {
        clearFieldError(key);
      }
    });
  });

  function showFieldError(key, msg) {
    const item = fields[key];
    item.errorEl.textContent = msg;
    item.errorEl.style.display = 'block';
    item.input.classList.add('is-invalid');
    item.input.setAttribute('aria-invalid', 'true');
  }

  function clearFieldError(key) {
    const item = fields[key];
    item.errorEl.textContent = '';
    item.errorEl.style.display = 'none';
    item.input.classList.remove('is-invalid');
    item.input.removeAttribute('aria-invalid');
  }

  // Form submission handler
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    globalError.style.display = 'none';

    let hasErrors = false;
    let firstErrorField = null;

    Object.keys(fields).forEach((key) => {
      const item = fields[key];
      const val = item.input.type === 'checkbox' ? item.input.checked : item.input.value;
      const errorMsg = item.validate(val);
      if (errorMsg) {
        showFieldError(key, errorMsg);
        hasErrors = true;
        if (!firstErrorField) firstErrorField = item.input;
      } else {
        clearFieldError(key);
      }
    });

    if (hasErrors) {
      if (firstErrorField) firstErrorField.focus();
      return;
    }

    // Set Loading State
    setLoadingState(true);

    try {
      // Mock network delay (1.2s)
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Local mock success
      const fullNameVal = fields.fullName.input.value.trim();
      document.getElementById('successApplicantName').textContent = fullNameVal;
      document.getElementById('successConfirmId').textContent = 'SAIYAN-YOUTH-' + Math.floor(100000 + Math.random() * 900000);

      // Transition to Success State
      form.style.display = 'none';
      successPanel.style.display = 'block';
      successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });

    } catch (err) {
      // Error state
      globalError.style.display = 'flex';
      setLoadingState(false);
    }
  });

  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      form.dispatchEvent(new Event('submit'));
    });
  }

  function setLoadingState(isLoading) {
    submitBtn.disabled = isLoading;
    if (isLoading) {
      submitBtn.classList.add('is-loading');
      btnSpinner.style.display = 'inline-block';
      btnText.textContent = 'Submitting…';
    } else {
      submitBtn.classList.remove('is-loading');
      btnSpinner.style.display = 'none';
      btnText.textContent = 'Submit application';
    }
  }
}

function initJoinModals() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBody = document.getElementById('modalBody');

  const privacyLink = document.getElementById('privacyPolicyLink');
  const footerPrivacyLink = document.getElementById('footerPrivacyLink');
  const footerTermsLink = document.getElementById('footerTermsLink');

  function openModal(title, subtitle, bodyHtml) {
    modalTitle.textContent = title;
    modalSubtitle.textContent = subtitle;
    modalBody.innerHTML = bodyHtml;
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  window.openPrivacyModal = () => {
    openModal(
      'Privacy Policy',
      'Data protection & applicant consent',
      '<p style="color:var(--text-secondary-navy); line-height:1.6; font-size:0.95rem;">SAIYAN values your trust and complies with applicable Singapore and Malaysian data protection principles. Information provided in this form is used exclusively for evaluating eligibility, contacting you about bilateral youth AI opportunities, and program coordination. You may request information updates or withdrawal at any time.</p>'
    );
  };

  window.openTermsModal = () => {
    openModal(
      'Terms of Use',
      'Community Guidelines & Eligibility',
      '<p style="color:var(--text-secondary-navy); line-height:1.6; font-size:0.95rem;">SAIYAN is an open, cross-border innovation network. Participants are expected to act collaboratively, uphold ethical AI practices, and respect peer contributions across our Singapore and Sarawak ecosystem.</p>'
    );
  };

  if (privacyLink) privacyLink.addEventListener('click', (e) => { e.preventDefault(); window.openPrivacyModal(); });
  if (footerPrivacyLink) footerPrivacyLink.addEventListener('click', (e) => { e.preventDefault(); window.openPrivacyModal(); });
  if (footerTermsLink) footerTermsLink.addEventListener('click', (e) => { e.preventDefault(); window.openTermsModal(); });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}
