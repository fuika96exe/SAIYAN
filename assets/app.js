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
   LEFT RAIL MASCOT COMPANION (DESKTOP ONLY)
   - Only appears and moves on Desktop (window.innerWidth > 991px)
   - Strictly constrained to the left-side journey rail (never roams across content or cards)
   - Moves vertically between the 3 rail nodes (Coral -> Cyan -> Navy) as user scrolls the page
   - User maintains 100% manual scroll control (NO automatic forced scrolling)
   - Click interaction: playful bounce and speech bubble
   - Full support for prefers-reduced-motion: reduce
   ========================================================================== */
function initUnifiedJourneyCompanion() {
  const mascotContainer = document.getElementById('persistentMascot');
  const mascotBtn = document.getElementById('heroMascotBtn');
  const bubble = document.getElementById('mascotBubble');
  const bubbleText = document.getElementById('mascotBubbleText');
  const exploreBtn = document.getElementById('bubbleExploreBtn');
  const journeyRail = document.getElementById('journeyRail');

  if (!mascotContainer || !mascotBtn || !journeyRail) return;

  const railNodes = [
    document.getElementById('railNode0'),
    document.getElementById('railNode1'),
    document.getElementById('railNode2')
  ].filter(Boolean);

  const railMessages = [
    "Hi, I’m Usei.<br />Follow the journey with me.",
    "Connecting builders<br />across Singapore & Sarawak.",
    "Build what matters.<br />Your future has no border."
  ];

  let currentRailIndex = 0;
  let hasUserInteracted = false;
  let greetingTimer = null;
  let autoDismissTimer = null;

  // 1. Initial Greeting (5 seconds after page load on desktop)
  greetingTimer = setTimeout(() => {
    if (!hasUserInteracted && currentRailIndex === 0 && window.innerWidth > 991) {
      showBubble(railMessages[0], true);
      autoDismissTimer = setTimeout(() => {
        closeBubble();
      }, 5000);
    }
  }, 5000);

  function cancelInitialGreeting() {
    hasUserInteracted = true;
    if (greetingTimer) clearTimeout(greetingTimer);
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

  // 2. Click Interaction on Mascot
  mascotBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cancelInitialGreeting();

    mascotBtn.classList.remove('is-bouncing');
    void mascotBtn.offsetWidth;
    mascotBtn.classList.add('is-bouncing');

    showBubble(railMessages[currentRailIndex] || railMessages[0], false);
    setTimeout(closeBubble, 4500);
  });

  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cancelInitialGreeting();
      closeBubble();
    });
  }

  // 3. Position Mascot vertically along the Left Rail
  function updateRailPositionByProgress(progress) {
    if (window.innerWidth <= 991) return;

    const node0 = railNodes[0];
    const node2 = railNodes[2];

    if (node0 && node2) {
      const railRect = journeyRail.getBoundingClientRect();
      const topNodeOffset = (node0.getBoundingClientRect().top - railRect.top) + (node0.offsetHeight / 2);
      const bottomNodeOffset = (node2.getBoundingClientRect().top - railRect.top) + (node2.offsetHeight / 2);

      // Smooth vertical position directly mapped to scroll progress
      const targetTop = topNodeOffset + (bottomNodeOffset - topNodeOffset) * progress;
      mascotContainer.style.top = Math.round(targetTop) + 'px';

      // Active node highlight
      const activeIdx = progress > 0.65 ? 2 : (progress > 0.3 ? 1 : 0);
      currentRailIndex = activeIdx;
      railNodes.forEach((node, idx) => {
        node.style.transform = idx === activeIdx ? 'scale(1.35)' : 'scale(1)';
      });
    }
  }

  // 4. Continuous Scroll-linked Progression (Moves fluidly vertically down the left rail as user scrolls)
  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 991) return;
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = totalHeight > 0 ? Math.min(Math.max(scrollY / totalHeight, 0), 1) : 0;

    updateRailPositionByProgress(scrollProgress);
  }, { passive: true });

  // Recalibrate on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = totalHeight > 0 ? Math.min(Math.max(scrollY / totalHeight, 0), 1) : 0;
      updateRailPositionByProgress(scrollProgress);
    }
  });

  // Initial Placement on Top Coral Node
  setTimeout(() => updateRailPositionByProgress(0), 100);

  // Close speech bubble on outside click
  document.addEventListener('click', (e) => {
    if (!bubble.contains(e.target) && !mascotBtn.contains(e.target)) {
      closeBubble();
    }
  });

  // Close speech bubble on Escape
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
