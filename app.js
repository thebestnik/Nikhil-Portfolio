/* ==========================================================================
   Interactive Engine & UI Functionality — Nikhil Bhojwani Portfolio
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initCustomCursor();
  renderProjects();
  initProjectFilters();
  initDynamicGlow();
  initHeroMeshParallax();
  initTimelineAnimation();
  initScrollAnimations();
  initMobileNav();
  initEmailClipboard();
  initHeaderHide();
  
  // Resize handler for Spider-Man webs
  window.addEventListener("resize", () => {
    if (typeof drawSpidermanWebs === "function") {
      drawSpidermanWebs();
    }
  });
});

/* --- Theme Management --- */
function initTheme() {
  const toggleBtn = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");
  
  // Default to system settings or dark
  let currentTheme = "dark";
  if (storedTheme) {
    currentTheme = storedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    currentTheme = "light";
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
  
  if (!cursor || !ring) return;
  
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Immediate cursor position
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });
  
  // Smooth trailing ring animation
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    
    requestAnimationFrame(animateRing);
  }
  animateRing();
  
  // Custom Hover States
  const hoverTargets = document.querySelectorAll("a, button, .interactive-card, .stack-card");
  hoverTargets.forEach(target => {
    target.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    target.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
}

/* --- Dynamic Projects Rendering & Case Studies --- */
function renderProjects(filter = "all") {
  const container = document.getElementById("projectsContainer");
  if (!container || typeof projects === "undefined") return;
  
  container.innerHTML = "";
  
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);
  
  filteredProjects.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card reveal interactive-card fade-in";
    
    // Build tags
    const tagsHtml = proj.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join("");
    
    // Build action button indicator
    let actionBtnHtml = `
      <button class="project-action-btn" aria-label="Open project case study">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    `;
    
    card.innerHTML = `
      <div class="project-cover-container">
        <img class="project-cover-img" src="${proj.cover}" alt="${proj.title} Cover Image" loading="lazy">
      </div>
      
      <div class="project-card-header">
        <span class="project-id">${proj.id}</span>
        <div class="project-meta-row">
          <span>Role: <strong>${proj.role}</strong></span>
          <span>•</span>
          <span>${proj.timeline}</span>
        </div>
      </div>
      
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-description">${proj.description}</p>
      </div>
      
      <div class="project-footer">
        <div class="project-tags">
          ${tagsHtml}
        </div>
        ${actionBtnHtml}
      </div>
    `;
    
    // Modal toggle interaction on clicking cards
    card.addEventListener("click", () => {
      openProjectModal(proj);
    });
    
    // Add specific view state styling indicators on hover
    card.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-view");
    });
    card.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-view");
    });
    
    container.appendChild(card);
  });
  
  // Initialize 3D Card Tilt on newly rendered project cards
  init3DTilt();
  
  // Draw Spider-Man's webs holding the works together
  setTimeout(drawSpidermanWebs, 100);
}

/* --- Project Case Study Modal --- */
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  
  const tagsHtml = project.tags.map(tag => `<span class="tag-badge">${tag}</span>`).join("");
  
  modal.querySelector(".modal-header-meta").innerText = `${project.id} // CASE STUDY`;
  modal.querySelector(".modal-title").innerText = project.title;
  modal.querySelector(".modal-tags").innerHTML = tagsHtml;
  
  // Fill meta values
  modal.querySelector("#modalRole").innerText = project.role;
  modal.querySelector("#modalTimeline").innerText = project.timeline;
  
  let contextText = "Client / Platform Design";
  if (project.title.includes("MediSetu")) {
    contextText = "Healthcare & Clinical Systems";
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
      <p>Designed using custom visual styles in Photoshop and Spline to construct beautiful, interactive elements that draw consumer attention directly onto key product narratives.</p>
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
  
  // Trigger Spider-Man fall and webs snapping
  triggerSpidermanFall();
  
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
  
  // Recover Spider-Man and redraw webs
  recoverSpiderman();
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
      const tooltip = copyBtn.closest(".tooltip");
      if (tooltip) {
        tooltip.classList.add("copied");
        setTimeout(() => {
          tooltip.classList.remove("copied");
        }, 2000);
      }
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

/* --- Project Category Filters Initialization --- */
function initProjectFilters() {
  const filtersContainer = document.getElementById("projectFilters");
  if (!filtersContainer) return;
  
  const buttons = filtersContainer.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Avoid triggering document bubble listeners
      
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const filterVal = btn.getAttribute("data-filter");
      renderProjects(filterVal);
    });
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
    // Smooth linear interpolation (lerp) toward target mouse position
    glow1X += (mouseX - glow1X) * 0.04;
    glow1Y += (mouseY - glow1Y) * 0.04;
    
    const offsetTargetX = mouseX - 250;
    const offsetTargetY = mouseY + 150;
    glow2X += (offsetTargetX - glow2X) * 0.03;
    glow2Y += (offsetTargetY - glow2Y) * 0.03;
    
    if (glow1) {
      glow1.style.transform = `translate3d(${glow1X - 300}px, ${glow1Y - 300}px, 0)`;
    }
    if (glow2) {
      glow2.style.transform = `translate3d(${glow2X - 300}px, ${glow2Y - 300}px, 0)`;
    }
    
    requestAnimationFrame(updateGlow);
  }
  
  // Set glow coordinate origin
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
      
      // Compute 3D rotation ratios (max 6deg tilt to maintain high text readability)
      const rotateX = -((y - height / 2) / (height / 2)) * 6;
      const rotateY = ((x - width / 2) / (width / 2)) * 6;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

/* --- Hero Mesh Mouse Parallax Tilt --- */
function initHeroMeshParallax() {
  const mesh = document.getElementById("heroMesh");
  if (!mesh) return;
  
  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    
    // Smoothly rotate and shift the mesh SVG elements
    mesh.style.transform = `rotateX(${y * 12}deg) rotateY(${x * 12}deg) translate3d(${x * 20}px, ${y * 20}px, 0)`;
  });
}

/* --- Dynamic Connector Timeline Animation --- */
function initTimelineAnimation() {
  const container = document.getElementById("timelineContainer");
  const line = document.getElementById("timelineLine");
  
  if (!container || !line) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Expand timeline line to full height
        line.style.height = "calc(100% - 20px)";
        
        // Stagger activation of timeline pulses
        setTimeout(() => {
          const items = container.querySelectorAll(".timeline-item");
          items.forEach((item, idx) => {
            setTimeout(() => {
              item.classList.add("active");
            }, idx * 300);
          });
        }, 1200);
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });
  
  observer.observe(container);
}

/* --- Chibi Spider-Man Dynamic Webs & Animations --- */
let spidermanIsFalling = false;

function drawSpidermanWebs() {
  const spiderman = document.getElementById("chibiSpiderman");
  const svg = document.getElementById("spiderWebs");
  const container = document.getElementById("projectsContainer");
  const playground = document.getElementById("workPlayground");
  
  if (!spiderman || !svg || !container || !playground || spidermanIsFalling) return;
  
  // Clear existing lines
  svg.innerHTML = "";
  
  const cards = container.querySelectorAll(".project-card");
  if (!cards.length) return;
  
  // Calculate relative positions
  const parentRect = playground.getBoundingClientRect();
  const spiderRect = spiderman.getBoundingClientRect();
  
  if (parentRect.width === 0 || spiderRect.width === 0) return;
  
  // Hand origins relative to playground (center top area of Spiderman body)
  const startX = (spiderRect.left + spiderRect.right) / 2 - parentRect.left;
  const startY = (spiderRect.top + spiderRect.bottom) / 2 - parentRect.top + 15;
  
  // Get top cards (slice up to 2)
  const topCards = Array.from(cards).slice(0, 2);
  
  topCards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    
    // Web line endpoint target
    let targetX, targetY;
    
    if (index === 0) {
      // Draw to top-right of left card
      targetX = cardRect.right - parentRect.left - 20;
      targetY = cardRect.top - parentRect.top + 20;
    } else {
      // Draw to top-left of right card
      targetX = cardRect.left - parentRect.left + 20;
      targetY = cardRect.top - parentRect.top + 20;
    }
    
    // Create SVG line
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", startX);
    line.setAttribute("y1", startY);
    line.setAttribute("x2", targetX);
    line.setAttribute("y2", targetY);
    line.setAttribute("class", "spider-web-line");
    svg.appendChild(line);
  });
}

function triggerSpidermanFall() {
  const spiderman = document.getElementById("chibiSpiderman");
  const svg = document.getElementById("spiderWebs");
  
  if (!spiderman) return;
  
  spidermanIsFalling = true;
  spiderman.classList.add("falling");
  
  if (svg) {
    svg.classList.add("snapped");
    setTimeout(() => {
      svg.innerHTML = "";
    }, 200);
  }
}

function recoverSpiderman() {
  const spiderman = document.getElementById("chibiSpiderman");
  const svg = document.getElementById("spiderWebs");
  
  if (!spiderman) return;
  
  spiderman.classList.remove("falling");
  if (svg) {
    svg.classList.remove("snapped");
  }
  
  spidermanIsFalling = false;
  
  // Wait for swing-up transition (800ms) to complete before redrawing lines
  setTimeout(drawSpidermanWebs, 800);
}

