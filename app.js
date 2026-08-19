/* ==========================================================================
   Interactive Engine & UI Functionality — Nikhil Bhojwani Portfolio
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDualIdentityMode();
  initCustomCursor();
  renderProjects();
  initDynamicGlow();
  initHeroParallax();
  initTimelineAnimation();
  initScrollAnimations();
  initMobileNav();
  initEmailClipboard();
  initHeaderHide();
  initFaqAccordion();
  initInteractiveCardSpotlights();
});

/* --- Dual Identity Mode (Peter Parker vs Spider-Man) --- */
function initDualIdentityMode() {
  const spiderBtn = document.getElementById("spiderSenseBtn");
  const storedMode = localStorage.getItem("identityMode");
  
  if (storedMode) {
    document.documentElement.setAttribute("data-mode", storedMode);
    updateSpiderBtnUI(storedMode);
  }
  
  if (spiderBtn) {
    spiderBtn.addEventListener("click", () => {
      let currentMode = document.documentElement.getAttribute("data-mode") || "peter-parker";
      let nextMode = currentMode === "spiderman" ? "peter-parker" : "spiderman";
      
      // Trigger Spider-Sense Screen Flip Animation
      document.body.classList.add("spider-sense-flip");
      
      setTimeout(() => {
        document.documentElement.setAttribute("data-mode", nextMode);
        localStorage.setItem("identityMode", nextMode);
        updateSpiderBtnUI(nextMode);
      }, 400);
      
      setTimeout(() => {
        document.body.classList.remove("spider-sense-flip");
      }, 800);
    });
  }
}

function updateSpiderBtnUI(mode) {
  const btnText = document.querySelector(".spider-btn-text");
  if (!btnText) return;
  
  if (mode === "spiderman") {
    btnText.innerHTML = "PETER PARKER 👓";
  } else {
    btnText.innerHTML = "SUIT UP! 🕷️";
  }
}

/* --- Theme Management --- */
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");
  
  // Default to system settings or light
  let currentTheme = "light";
  if (storedTheme) {
    currentTheme = storedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = "dark";
  }
  
  document.documentElement.setAttribute("data-theme", currentTheme);
  
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      let activeTheme = document.documentElement.getAttribute("data-theme");
      let nextTheme = activeTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }
}

/* --- Interactive Custom Cursor --- */
function initCustomCursor() {
  const cursor = document.querySelector(".custom-cursor");
  const ring = document.querySelector(".custom-cursor-ring");
  const glow = document.querySelector(".cursor-gradient-glow");
  
  if (!cursor || !ring) return;
  
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let glowX = 0, glowY = 0;
  
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Immediate cursor position
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
    
    if (glow) {
      glow.style.opacity = "1";
    }
  });
  
  document.addEventListener("mouseleave", () => {
    if (glow) {
      glow.style.opacity = "0";
    }
  });
  
  // Smooth trailing ring and glow animation
  function animateCursorElements() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    
    if (glow) {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + "px";
      glow.style.top = glowY + "px";
    }
    
    requestAnimationFrame(animateCursorElements);
  }
  animateCursorElements();
  
  // Custom Hover States
  const hoverTargets = document.querySelectorAll("a, button, .interactive-card, .stack-card, .research-card");
  hoverTargets.forEach(target => {
    target.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    target.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });

  // Cursor Word Hover Light Effect on Text
  const textElements = document.querySelectorAll("p, h1, h2, h3, h4, span, li");
  textElements.forEach(el => {
    // Skip if it's already an interactive target or inside one to preserve click cursors
    if (el.tagName === 'A' || el.closest('a') || el.closest('button') || el.closest('.interactive-card') || el.closest('.stack-card') || el.closest('.research-card')) return;

    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-word-hover");
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-word-hover");
    });
  });
}

/* --- Dynamic Projects Rendering & Case Studies --- */
function renderProjects() {
  const bestGrid = document.getElementById("bestWorksGrid");
  const labsGrid = document.getElementById("labsGrid");
  const actionGrid = document.getElementById("actionGrid");
  
  if (typeof projects === "undefined") return;

  // Clear existing elements
  if (bestGrid) bestGrid.innerHTML = "";
  if (labsGrid) labsGrid.innerHTML = "";
  if (actionGrid) actionGrid.innerHTML = "";

  projects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card reveal interactive-card fade-in";
    
    // Build tags
    const tagsHtml = proj.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join("");
    
    // Action button inside card header or footer
    let actionBtnHtml = `
      <button class="project-action-btn" aria-label="Open project case study">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    `;

    // Category label
    let categoryLabel = proj.category === "best" ? "Core User Experience" : (proj.category === "labs" ? "Product & Frontend Design" : "Visual Redesign");

    const isVideo = proj.cover && (proj.cover.endsWith('.mp4') || proj.cover.endsWith('.webm') || proj.cover.endsWith('.mov'));
    card.innerHTML = `
      <div class="project-cover-container">
        ${isVideo 
          ? `<video class="project-cover-img" src="${proj.cover}" autoplay loop muted playsinline></video>`
          : `<img class="project-cover-img" src="${proj.cover}" alt="${proj.title} Cover Image" loading="lazy">`
        }
      </div>
      
      <div class="project-card-info">
        ${proj.metric ? `<div class="project-metric-badge">${proj.metric}</div>` : ''}
        <span class="project-category-meta">${categoryLabel}</span>
        <div class="project-title-row">
          <h3 class="project-title">${proj.title}</h3>
          ${actionBtnHtml}
        </div>
        <p class="project-description">${proj.description}</p>
        <div class="project-tags">
          ${tagsHtml}
        </div>
      </div>
    `;
    
    // Modal toggle or direct link navigation on clicking cards
    card.addEventListener("click", () => {
      if (!proj.hasCaseStudy && proj.link && proj.link !== "#" && proj.link !== "") {
        window.open(proj.link, "_blank", "noopener,noreferrer");
      } else {
        openProjectModal(proj);
      }
    });
    
    // Custom cursor text hover states
    card.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-view");
    });
    card.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-view");
    });
    
    // Distribute to respective containers
    if (proj.category === "best" && bestGrid) {
      bestGrid.appendChild(card);
    } else if (proj.category === "labs" && labsGrid) {
      labsGrid.appendChild(card);
    } else if (proj.category === "action" && actionGrid) {
      actionGrid.appendChild(card);
    }
  });
  
  // Initialize 3D Perspective Tilt & Spotlight card coordinates
  init3DTilt();
  initInteractiveCardSpotlights();
}

/* --- Project Case Study Modal --- */
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  
  let tagsHtml = project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join("");
  if (project.metric) {
    tagsHtml = `<span class="project-metric-badge" style="margin-bottom: 0;">${project.metric}</span>` + tagsHtml;
  }
  
  modal.querySelector(".modal-header-meta").innerText = `${project.id} // CASE STUDY`;
  modal.querySelector(".modal-title").innerText = project.title;
  modal.querySelector(".modal-tags").innerHTML = tagsHtml;
  
  // Fill meta values
  modal.querySelector("#modalRole").innerText = project.role;
  modal.querySelector("#modalTimeline").innerText = project.timeline;
  
  let contextText = "Client / Platform Design";
  if (project.title.includes("MediSetu")) {
    contextText = "Healthcare & Clinical Systems";
  } else if (project.title.includes("Paper Bull")) {
    contextText = "Fintech & Paper Trading Platform";
  } else if (project.title.includes("Sakarwal")) {
    contextText = "Medical Branding & SEO Pipelines";
  } else if (project.title.includes("Élixir")) {
    contextText = "Luxury E-Commerce & Canvas Design";
  } else if (project.title.includes("tickit")) {
    contextText = "Utility Product Design";
  }
  modal.querySelector("#modalContext").innerText = contextText;
  
  // Custom rich narrative text blocks depending on target
  let contentHtml = "";
  if (project.title.includes("MediSetu")) {
    contentHtml = `
      <p>MediSetu is a critical digital healthcare pipeline designed to connect local patients in Jaipur with expert dermatological and clinical consultation services.</p>
      <p>As the Lead Product Designer on this project, the goal was to craft a zero-friction interface that enables users of all age brackets and technical proficiencies to securely book appointments, upload medical files/symptoms, and consult with doctors.</p>
      <p><strong>Key Objectives Accomplished:</strong></p>
      <ul>
        <li>Completed end-to-end Figma workflows mapping the user journey.</li>
        <li>Conducted research with 20+ local patients to isolate friction points.</li>
        <li>Engineered a unified design system that decreased time-to-book by 45%.</li>
      </ul>
    `;
  } else if (project.title.includes("Paper Bull")) {
    contentHtml = `
      <p>Paper Bull is a modern paper trading and investment interface designed to simplify stock market learning, portfolio tracking, and financial analytics for traders and investors.</p>
      <p>As the Lead Product Designer, I crafted an intuitive, zero-friction interface featuring real-time market data visualizers, clear transaction flows, and modular design components built to enhance user confidence and financial literacy.</p>
      <p><strong>Key Highlights & Case Study Outcomes:</strong></p>
      <ul>
        <li>Designed end-to-end trading screens, portfolio dashboards, and watchlists.</li>
        <li>Published an in-depth UX Case Study on Medium analyzing fintech onboarding heuristics.</li>
        <li>Created a scalable, high-feasibility design system tailored for rapid market interactions.</li>
      </ul>
    `;
  } else if (project.title.includes("tickit")) {
    contentHtml = `
      <p>tickit is an elegant, micro-interaction driven task tracker built to counter standard productivity app fatigue. The application focuses heavily on haptic-like animations and minimal UI patterns.</p>
      <p>The system leverages local storage triggers to store schedules, micro-routines, and progress records. Key animations were drafted in Framer to guarantee natural fluid transitions.</p>
    `;
  } else if (project.title.includes("Sakarwal")) {
    contentHtml = `
      <p>A multi-page clinical website developed for Dr. Sanjay Sakarwal, the top-rated dermatologist in Jaipur, operating at Arsh Polyclinic.</p>
      <p>The platform enables patients to explore over 13 dermatological treatments, check clinic timings, review patient testimonials, and submit direct appointment requests via an interactive database form.</p>
      <p><strong>Highlights:</strong></p>
      <ul>
        <li>Integrated localized schema markup tags to maximize local SEO placement.</li>
        <li>Designed a fully responsive layout using lightweight Vanilla CSS structure.</li>
        <li>Engineered a custom appointment-booking request pipeline.</li>
      </ul>
    `;
  } else if (project.title.includes("Élixir")) {
    contentHtml = `
      <p>L'Élixir de Rose is an award-winning premium skincare landing page concept designed for a luxurious rose-infused product line.</p>
      <p>The interface leverages scrolling-video canvas techniques to scrub and animate liquid rose particles as the consumer scrolls down the page, creating an elite interactive branding statement.</p>
      <p><strong>Highlights:</strong></p>
      <ul>
        <li>Fluid layout optimized for high-refresh-rate desktop displays.</li>
        <li>Immersive scroll narrative with responsive typography systems.</li>
        <li>Smooth micro-animations using custom keyframe easing profiles.</li>
      </ul>
    `;
  } else {
    contentHtml = `
      <p>A high-fidelity mockup concept focusing on brand strategy and visual redesign. The project targets optimized responsive interfaces and high visual punch to maximize conversion rates.</p>
      <p>Designed using custom visual styles in Figma and Spline to construct beautiful, interactive elements that draw consumer attention directly onto key product narratives.</p>
    `;
  }
  
  // Inject Medium CTA if the project has a mediumLink
  if (project.mediumLink) {
    contentHtml += `
      <div class="modal-medium-cta" style="margin-top: 40px; text-align: center;">
        <a href="${project.mediumLink}" target="_blank" rel="noopener" class="btn btn-primary" style="display: inline-flex; align-items: center; justify-content: center; width: 100%; gap: 12px; padding: 18px 0; border-radius: 8px;">
          <svg style="width: 22px; height: 22px; fill: currentColor;" viewBox="0 0 24 24">
            <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z"/>
          </svg>
          Read Full Case Study on Medium
        </a>
      </div>
    `;
  }
  
  // Inject Live Link CTA if the project has a live link
  if (project.link && project.link !== "#" && project.link !== "") {
    contentHtml += `
      <div class="modal-live-cta" style="margin-top: 24px; text-align: center;">
        <a href="${project.link}" target="_blank" rel="noopener" class="btn btn-secondary" style="display: inline-flex; align-items: center; justify-content: center; width: 100%; gap: 12px; padding: 18px 0; border-radius: 8px; border: 1px solid var(--border);">
          <svg style="width: 22px; height: 22px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Visit Live Website
        </a>
      </div>
    `;
  }
  
  modal.querySelector(".modal-desc-content").innerHTML = contentHtml;
  
  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Lock background scroll
  
  // Cursor corrections
  document.body.classList.remove("cursor-view");
}
 
window.closeProjectModal = function() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Restore background scroll
};

/* --- Scroll-triggered reveals --- */
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  reveals.forEach(el => revealObserver.observe(el));
  
  // Trigger check on load for elements already in viewport
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("active");
      }
    });
  }, 100);
}

/* --- Mobile Nav Toggle --- */
function initMobileNav() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
  
  // Close menu when clicking nav links
  menu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

/* --- Email Clipboard Handler --- */
function initEmailClipboard() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const emailText = "bhojwaninikhil12@gmail.com";
  
  if (!copyBtn) return;
  
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailText).then(() => {
      // Add visual feedback
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.classList.remove("copied");
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });
}

/* --- Smart Header Hiding (Scroll Down Hide, Scroll Up Show) --- */
function initHeaderHide() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      if (window.scrollY > lastScrollY) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
    } else {
      header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
  });
}

/* --- Mouse-Follow Ambient Glow Spotlight --- */
function initDynamicGlow() {
  const glow1 = document.querySelector(".ambient-glow-1");
  const glow2 = document.querySelector(".ambient-glow-2");
  
  if (!glow1 && !glow2) return;
  
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  
  let glow1X = mouseX, glow1Y = mouseY;
  let glow2X = mouseX, glow2Y = mouseY;
  
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX + window.scrollX;
    mouseY = e.clientY + window.scrollY;
  });
  
  function updateGlow() {
    glow1X += (mouseX - glow1X) * 0.04;
    glow1Y += (mouseY - glow1Y) * 0.04;
    
    const offsetTargetX = mouseX - 250;
    const offsetTargetY = mouseY + 150;
    glow2X += (offsetTargetX - glow2X) * 0.03;
    glow2Y += (offsetTargetY - glow2Y) * 0.03;
    
    // Scroll-linked parallax vertical drift offsets
    const scrollOffset = window.scrollY * 0.12;
    
    if (glow1) {
      glow1.style.transform = `translate3d(${glow1X - 300}px, ${glow1Y - 300 - scrollOffset}px, 0)`;
    }
    if (glow2) {
      glow2.style.transform = `translate3d(${glow2X - 300}px, ${glow2Y - 300 + scrollOffset}px, 0)`;
    }
    
    requestAnimationFrame(updateGlow);
  }
  
  if (glow1) {
    glow1.style.position = "absolute";
    glow1.style.top = "0px";
    glow1.style.left = "0px";
    glow1.style.margin = "0";
  }
  if (glow2) {
    glow2.style.position = "absolute";
    glow2.style.top = "0px";
    glow2.style.left = "0px";
    glow2.style.margin = "0";
  }
  
  updateGlow();
}

/* --- 3D Perspective Card Tilt handler --- */
function init3DTilt() {
  const cards = document.querySelectorAll(".project-card");
  if (!cards.length) return;
  
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;
      
      const rotateX = -((y - height / 2) / (height / 2)) * 6;
      const rotateY = ((x - width / 2) / (width / 2)) * 6;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

/* --- Hero Graphic Mouse Parallax Tilt --- */
function initHeroParallax() {
  const container = document.querySelector(".mascot-container");
  if (!container) return;
  
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    
    container.style.transform = `translate3d(${x * 25}px, ${y * 25}px, 0) rotate(${x * 3}deg)`;
  });
}

/* --- Dynamic Connector Timeline Animation --- */
function initTimelineAnimation() {
  const timeline = document.querySelector(".timeline");
  if (!timeline) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = timeline.querySelectorAll(".timeline-item");
        items.forEach((item, idx) => {
          setTimeout(() => {
            item.classList.add("active");
          }, idx * 300);
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  observer.observe(timeline);
}

/* --- FAQ Accordion Interactive Logic --- */
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const item = question.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const isExpanded = question.getAttribute("aria-expanded") === "true";
      
      // Close other open FAQ items for a clean accordion effect
      const allItems = document.querySelectorAll(".faq-item");
      allItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherQuestion = otherItem.querySelector(".faq-question");
          if (otherQuestion) otherQuestion.setAttribute("aria-expanded", "false");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isExpanded) {
        question.setAttribute("aria-expanded", "false");
        item.classList.remove("active");
        answer.style.maxHeight = null;
      } else {
        question.setAttribute("aria-expanded", "true");
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* --- Interactive Spotlight Glass Cards Coordinate Tracker --- */
function initInteractiveCardSpotlights() {
  const cards = document.querySelectorAll(".interactive-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}
