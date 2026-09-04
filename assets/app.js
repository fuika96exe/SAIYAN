/**
 * SAIYAN — Singapore-Sarawak AI Youth Ambassador Network
 * Interactive Engine, Continuous Journey Path & Persistent Mascot Companion
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initProgrammeRail();
  initPartnerConstellation();
  initModalSystem();
  initScrollNavSync();
  initSmoothScroll();
  initUnifiedJourneyCompanion();
});

/* Flat Editorial Sticky Header */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* Active Navigation Item Scroll Sync */
function initScrollNavSync() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }, { passive: true });
}

/* Horizontal Programme Rail Navigation & Drag */
function initProgrammeRail() {
  const rail = document.querySelector('.programmes-rail-container');
  if (!rail) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  rail.addEventListener('mousedown', (e) => {
    isDown = true;
    rail.style.cursor = 'grabbing';
    startX = e.pageX - rail.offsetLeft;
    scrollLeft = rail.scrollLeft;
  });

  rail.addEventListener('mouseleave', () => {
    isDown = false;
    rail.style.cursor = 'grab';
  });

  rail.addEventListener('mouseup', () => {
    isDown = false;
    rail.style.cursor = 'grab';
  });

  rail.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - rail.offsetLeft;
    const walk = (x - startX) * 1.5;
    rail.scrollLeft = scrollLeft - walk;
  });
}

/* Constellation Canvas */
function initPartnerConstellation() {
  const canvas = document.getElementById('partnerCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;

  function resize() {
    width = canvas.parentElement.offsetWidth;
    height = canvas.parentElement.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener('resize', resize);
  resize();

  function drawConstellation() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    const targets = [
      { x: centerX - 180, y: centerY - 60 },
      { x: centerX - 240, y: centerY - 60 },
      { x: centerX - 180, y: centerY + 60 },
      { x: centerX - 240, y: centerY + 60 },
      { x: centerX + 180, y: centerY - 60 },
      { x: centerX + 240, y: centerY - 60 },
      { x: centerX + 180, y: centerY + 60 },
      { x: centerX + 240, y: centerY + 60 }
    ];

    targets.forEach(t => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(t.x, t.y);
      ctx.strokeStyle = 'rgba(7, 21, 34, 0.08)';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(49, 107, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 6]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  drawConstellation();
}

/* Modal System & Placeholder Navigation (Global Highest Layer: z-index 999999) */
function initModalSystem() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalSubtitle = document.getElementById('modalSubtitle');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modalOverlay) return;

  function closeModal() {
    modalOverlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  window.openPlaceholderModal = function(title, description) {
    modalTitle.textContent = title;
    modalSubtitle.textContent = 'Singapore–Sarawak AI Youth Ambassador Network';
    modalBody.innerHTML = `
      <div style="padding: 10px 0 20px;">
        <p style="font-size: 1rem; color: var(--text-secondary-navy); margin-bottom: 24px; line-height: 1.6;">
          ${description || 'This section is being curated. Full content coming soon.'}
        </p>
        <button class="btn btn-coral" onclick="document.getElementById('modalCloseBtn').click();">
          Got it
        </button>
      </div>
    `;
    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  window.openJoinModal = function() {
    modalTitle.textContent = 'Join SAIYAN';
    modalSubtitle.textContent = 'Connect with youth AI innovators across Singapore and Sarawak';
    modalBody.innerHTML = `
      <form onsubmit="handleFormSubmit(event, 'Welcome to SAIYAN! We have received your application.')">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" required placeholder="e.g. Alex Tan" />
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" required placeholder="alex@example.com" />
          </div>
          <div class="form-group">
            <label class="form-label">Location</label>
            <select class="form-select" required>
              <option value="Singapore">Singapore</option>
              <option value="Sarawak">Sarawak</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">I am joining as</label>
            <select class="form-select" required>
              <option value="Youth">Youth Builder (Student / Self-Taught)</option>
              <option value="Mentor">AI Mentor / Expert</option>
              <option value="Partner">Partner / Organisation</option>
            </select>
          </div>
          <div class="form-group form-full">
            <label class="form-label">What do you want to build?</label>
            <textarea class="form-textarea" rows="3" placeholder="Tell us about your interests or ideas..."></textarea>
          </div>
          <div class="form-full" style="margin-top: 8px;">
            <button type="submit" class="btn btn-coral" style="width: 100%;">
              Submit Application →
            </button>
          </div>
        </div>
      </form>
    `;
    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  window.openChallengeModal = function() {
    modalTitle.textContent = 'Bring Us a Challenge';
    modalSubtitle.textContent = 'Submit a business problem for our cross-border youth innovation cohorts';
    modalBody.innerHTML = `
      <form onsubmit="handleFormSubmit(event, 'Challenge submitted! Our team will review and contact you.')">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Organisation Name</label>
            <input type="text" class="form-input" required placeholder="e.g. Acme Innovations" />
          </div>
          <div class="form-group">
            <label class="form-label">Contact Person</label>
            <input type="text" class="form-input" required placeholder="Name & Job Title" />
          </div>
          <div class="form-group form-full">
            <label class="form-label">Work Email</label>
            <input type="email" class="form-input" required placeholder="contact@company.com" />
          </div>
          <div class="form-group form-full">
            <label class="form-label">Challenge Brief Overview</label>
            <textarea class="form-textarea" rows="3" required placeholder="Describe the problem, domain, dataset or intended outcome..."></textarea>
          </div>
          <div class="form-full" style="margin-top: 8px;">
            <button type="submit" class="btn btn-coral" style="width: 100%;">
              Submit Challenge Brief →
            </button>
          </div>
        </div>
      </form>
    `;
    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  window.openPartnerModal = function() {
    modalTitle.textContent = 'Partner with SAIYAN';
    modalSubtitle.textContent = 'Collaborate across industry, academia, and government';
    modalBody.innerHTML = `
      <form onsubmit="handleFormSubmit(event, 'Thank you for your partnership interest! We will be in touch shortly.')">
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label">Organisation / Entity</label>
            <input type="text" class="form-input" required placeholder="Organisation name" />
          </div>
          <div class="form-group">
            <label class="form-label">Entity Type</label>
            <select class="form-select" required>
              <option value="Enterprise">Enterprise / Business</option>
              <option value="University">University / Academic</option>
              <option value="Government">Government Agency</option>
              <option value="Community">Community / Non-Profit</option>
            </select>
          </div>
          <div class="form-group form-full">
            <label class="form-label">Contact Email</label>
            <input type="email" class="form-input" required placeholder="partner@org.com" />
          </div>
          <div class="form-full" style="margin-top: 8px;">
            <button type="submit" class="btn btn-purple" style="width: 100%;">
              Connect with Leadership →
            </button>
          </div>
        </div>
      </form>
    `;
    modalOverlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };
}

/* ==========================================================================
   UNIFIED JOURNEY COMPANION
   - Exactly One Persistent Cat
   - Starts directly on route at (720, 540)
   - Travels ~1.5s along smooth S-curve to exact position below Mentorship (530, 1080)
   - Stays visible at (530, 1080) permanently
   - NO automatic scrolling on click (user manually explores)
   - Single 5s initial greeting, cancels immediately on interaction
   ========================================================================== */
function initUnifiedJourneyCompanion() {
  const mascotContainer = document.getElementById('persistentMascot');
  const mascotBtn = document.getElementById('heroMascotBtn');
  const bubble = document.getElementById('mascotBubble');
  const bubbleText = document.getElementById('mascotBubbleText');
  const exploreBtn = document.getElementById('bubbleExploreBtn');
  const path = document.getElementById('continuousJourneyPath');
  const startNode = document.getElementById('journeyNode0');
  const rightNode = document.getElementById('journeyNode3');

  if (!mascotContainer || !mascotBtn || !path) return;

  // Interaction State Machine: 'idle' | 'greetingShown' | 'travelling' | 'arrived'
  let journeyState = 'idle';
  let greetingShownOrCancelled = false;
  let initialGreetingTimer = null;
  let autoDismissTimer = null;

  // Find exact path distance from start (720, 540) to target point below Mentorship (530, 1080)
  const targetLength = path.getTotalLength();

  // 1. Initial 5-second Greeting (Appears exactly once per page load)
  initialGreetingTimer = setTimeout(() => {
    if (!greetingShownOrCancelled && journeyState === 'idle') {
      greetingShownOrCancelled = true;
      journeyState = 'greetingShown';
      showBubble("Hi, I’m Usei.<br />Follow me through SAIYAN.", true);
      autoDismissTimer = setTimeout(() => {
        closeBubble();
        if (journeyState === 'greetingShown') journeyState = 'idle';
      }, 5000);
    }
  }, 5000);

  function cancelInitialGreeting() {
    greetingShownOrCancelled = true;
    if (initialGreetingTimer) clearTimeout(initialGreetingTimer);
    if (autoDismissTimer) clearTimeout(autoDismissTimer);
  }

  function showBubble(text, showButton = false) {
    if (bubbleText) bubbleText.innerHTML = text;
    if (exploreBtn) exploreBtn.style.display = showButton ? 'inline-flex' : 'none';
    bubble.classList.add('is-open');
  }

  function closeBubble() {
    bubble.classList.remove('is-open');
  }

  // Click on Mascot
  mascotBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cancelInitialGreeting();

    if (journeyState === 'travelling') return;

    if (journeyState === 'idle' || journeyState === 'greetingShown') {
      // First click in Hero: Bounce and trigger journey
      mascotBtn.classList.remove('is-bouncing');
      void mascotBtn.offsetWidth;
      mascotBtn.classList.add('is-bouncing');
      startContinuousTravel();
    } else if (journeyState === 'arrived') {
      // Post-arrival click: Keep in destination below Mentorship card, show friendly message
      showBubble("Here’s where ideas<br />become impact.", false);
      setTimeout(closeBubble, 4500);
    }
  });

  // Action inside bubble: "Explore with me →"
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cancelInitialGreeting();
      if (journeyState === 'idle' || journeyState === 'greetingShown') {
        startContinuousTravel();
      }
    });
  }

  // Continuous Smooth Travel along Single Shared Path (~1.5s duration, NO autoscroll)
  function startContinuousTravel() {
    journeyState = 'travelling';
    closeBubble();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Activate Route with Glow
    path.classList.add('route-active');

    if (prefersReducedMotion) {
      journeyState = 'arrived';
      positionMascot(280, 2480);
      if (rightNode) rightNode.classList.add('node-glowing');
      showBubble("Here’s where ideas<br />become impact.", false);
      setTimeout(closeBubble, 4500);
      return;
    }

    // Walking animation state
    mascotBtn.classList.add('is-walking');

    // 2. Smooth travel over 1500ms (1.5 seconds) - NO automatic page scrolling
    const travelDuration = 1500;
    const startTime = performance.now();

    function animateStep(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / travelDuration, 1);

      // Smooth cubic ease-in-out curve
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const currentDistance = easeProgress * targetLength;
      const point = path.getPointAtLength(currentDistance);

      // Position Mascot directly on path coordinates
      positionMascot(point.x, point.y);

      if (easeProgress > 0.05 && startNode) startNode.classList.add('node-glowing');

      if (progress < 1) {
        requestAnimationFrame(animateStep);
      } else {
        // Arrival Completion at EXACT location below Mentorship card (530, 1080)
        journeyState = 'arrived';
        mascotBtn.classList.remove('is-walking');
        positionMascot(280, 2480);
        if (rightNode) rightNode.classList.add('node-glowing');

        // Arrived message displayed beside Mentorship
        showBubble("Here’s where ideas<br />become impact.", false);
        setTimeout(closeBubble, 5000);
      }
    }

    requestAnimationFrame(animateStep);
  }

  function positionMascot(svgX, svgY) {
    const canvas = document.getElementById('sharedSvgCanvas');
    if (!canvas) return;

    const canvasRect = canvas.getBoundingClientRect();
    const scaleX = canvasRect.width / 1440;
    const scaleY = canvasRect.height / 2700;

    const actualX = svgX * scaleX;
    const actualY = svgY * scaleY;

    mascotContainer.style.left = actualX + 'px';
    mascotContainer.style.top = actualY + 'px';
  }

  // Keep position properly calibrated on window resize
  window.addEventListener('resize', () => {
    if (!path) return;
    if (journeyState === 'arrived') {
      positionMascot(280, 2480);
    } else {
      positionMascot(720, 540);
    }
  });

  // Initial alignment precisely on start node (720, 540)
  positionMascot(720, 540);

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!bubble.contains(e.target) && !mascotBtn.contains(e.target)) {
      closeBubble();
    }
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBubble();
    }
  });
}

/* Simulated Form Handler */
window.handleFormSubmit = function(e, successMsg) {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = `
    <div style="text-align: center; padding: 24px 0;">
      <div style="font-size: 2.4rem; margin-bottom: 12px;">🎉</div>
      <h4 style="font-size: 1.2rem; font-weight: 800; color: var(--text-deep-navy); margin-bottom: 8px;">Success!</h4>
      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 20px;">
        ${successMsg}
      </p>
      <button class="btn btn-coral" onclick="document.getElementById('modalCloseBtn').click();">
        Close Window
      </button>
    </div>
  `;
};

/* Smooth scrolling */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
