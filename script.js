// --- Theme Toggle ---
(function() {
    const manualThisSession = sessionStorage.getItem('theme');
    if (manualThisSession) {
        document.documentElement.setAttribute('data-theme', manualThisSession);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
})();

function getParticleColor() {
    return document.documentElement.getAttribute('data-theme') === 'light'
        ? { r: 99, g: 60, b: 180 }   // Darker purple for light bg
        : { r: 139, g: 92, b: 246 };  // Original purple for dark bg
}

document.addEventListener('DOMContentLoaded', () => {
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        sessionStorage.setItem('theme', next);
    }

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);

    const mobileToggleBtn = document.getElementById('mobile-theme-toggle');
    if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', toggleTheme);

    // Sync with OS theme changes only if user hasn't manually overridden
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!sessionStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });

    // --- Language Switcher ---
    function setLang(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang === 'ru' ? 'ru' : lang === 'en' ? 'en' : 'uz';
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        if (window.applyTranslations) window.applyTranslations();
        // Reset typewriter with new language phrases
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;
        if (typewriterText) typewriterText.textContent = '';
    }

    function detectBrowserLang() {
        const raw = (navigator.languages?.[0] || navigator.language || 'uz').toLowerCase();
        if (raw.startsWith('ru')) return 'ru';
        if (raw.startsWith('en')) return 'en';
        if (raw.startsWith('uz')) return 'uz';
        return 'uz';
    }
    const savedLang = localStorage.getItem('lang') || detectBrowserLang();
    document.documentElement.lang = savedLang === 'ru' ? 'ru' : savedLang === 'en' ? 'en' : 'uz';
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    if (window.applyTranslations) window.applyTranslations();
});

// --- Custom Cursor ---
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

// Only run custom cursor logic if it's a pointer device and not reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Global mouse position for particles to use
let globalMouseX = -9999;
let globalMouseY = -9999;

if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
        globalMouseX = e.clientX;
        globalMouseY = e.clientY;

        cursorDot.style.transform = `translate(${globalMouseX}px, ${globalMouseY}px) translate(-50%, -50%)`;
    });
} else {
    // Hide custom cursor if touch device or reduced motion
    cursorDot.style.display = 'none';
    document.body.style.cursor = 'auto';

    // Reset all elements to their default cursor
    const style = document.createElement('style');
    style.innerHTML = '* { cursor: auto !important; } a, button { cursor: pointer !important; }';
    document.head.appendChild(style);
}

// --- Navbar Scroll Effect & Hide on Scroll Down ---
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Add glass effect when scrolled from top
    if (currentScrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});

// --- Mobile Navigation ---
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// --- Hero Typewriter Effect ---
const typewriterText = document.getElementById('typewriter-text');
const phraseKeys = ['hero.phrase1', 'hero.phrase2', 'hero.phrase3', 'hero.phrase4'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    if (prefersReducedMotion) {
        typewriterText.textContent = window.t ? window.t('hero.fallback') : 'Exceptional Digital Products';
        return;
    }

    const currentPhrase = window.t ? window.t(phraseKeys[phraseIndex]) : phraseKeys[phraseIndex];

    if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Quicker deleting
    } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normal typing
    }

    // Handle end of phrase/deleting
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end of phrase
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phraseKeys.length;
        typeSpeed = 500; // Pause before new phrase
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter
setTimeout(typeWriter, 1000);


// --- Hero Canvas Particles ---
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let particleCount = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adjust particle count based on screen size
    const area = canvas.width * canvas.height;
    particleCount = Math.min(Math.floor(area / 15000), 100); // Max 100 points

    initParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.baseRadius = this.radius;
    }

    update() {
        // Calculate distance to mouse
        const dx = globalMouseX - this.x;
        const dy = globalMouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = 200;

        if (distance < attractRadius && distance > 0) {
            // Attract particles toward cursor
            const force = (attractRadius - distance) / attractRadius;
            const angle = Math.atan2(dy, dx);
            this.vx += Math.cos(angle) * force * 0.4;
            this.vy += Math.sin(angle) * force * 0.4;

            // Glow up when near cursor
            this.radius = this.baseRadius + force * 2;
        } else {
            this.radius += (this.baseRadius - this.radius) * 0.05;
        }

        // Apply friction to keep things smooth
        this.vx *= 0.96;
        this.vy *= 0.96;

        // Add a small drift so particles don't stop completely
        this.vx += (Math.random() - 0.5) * 0.05;
        this.vy += (Math.random() - 0.5) * 0.05;

        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
    }

    draw() {
        const dx = globalMouseX - this.x;
        const dy = globalMouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = 200;

        // Brighter when closer to cursor
        let alpha = 0.5;
        if (distance < attractRadius) {
            alpha = 0.5 + (1 - distance / attractRadius) * 0.5;
        }

        const pc = getParticleColor();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pc.r}, ${pc.g}, ${pc.b}, ${alpha})`;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    if (prefersReducedMotion) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    // Draw connecting lines (brighter near cursor)
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);

                // Check if midpoint is near cursor for brightness boost
                const midX = (particles[i].x + particles[j].x) / 2;
                const midY = (particles[i].y + particles[j].y) / 2;
                const cursorDist = Math.sqrt((globalMouseX - midX) ** 2 + (globalMouseY - midY) ** 2);
                const cursorBoost = cursorDist < 200 ? 0.3 * (1 - cursorDist / 200) : 0;

                const opacity = 1 - (distance / 150);
                const lc = getParticleColor();
                ctx.strokeStyle = `rgba(${lc.r}, ${lc.g}, ${lc.b}, ${opacity * 0.2 + cursorBoost})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
if (!prefersReducedMotion) {
    animateParticles();
}

// --- Technology Marquee ---
const technologies = [
    { name: "React", svg: '<svg viewBox="0 0 24 24" fill="none" class="w-6 h-6"><path d="M11.96 17.58A15 15 0 0 1 2 12A15 15 0 0 1 11.96 6.42A15 15 0 0 1 21.92 12A15 15 0 0 1 11.96 17.58Z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>' },
    { name: "Next.js", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M15 15L9 9M9 15L15 9"/></svg>' }, // Abstract placeholder for Next
    { name: "Node.js", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' }, // Hexagon
    { name: "TypeScript", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
    { name: "PostgreSQL", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5"/><path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12"/></svg>' },
    { name: "AWS", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19c-1.5 1.5-4 2-6.5 2s-5-.5-6.5-2"/><path d="M21 21l-3-1 1-3"/></svg>' }, // Smile arrow
    { name: "Supabase", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17"/></svg>' },
    { name: "Flutter", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 12h8l8-8M2 22l6-6h8l8 8"/></svg>' },
    { name: "Swift", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"/><path d="M15 9l-6 6M9 9l6 6"/></svg>' },
    { name: "Figma", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="16" r="4"/><circle cx="16" cy="16" r="4"/><circle cx="12" cy="8" r="4"/></svg>' },
    { name: "Docker", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="10" width="18" height="8" rx="2"/><path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"/><line x1="12" y1="10" x2="12" y2="18"/></svg>' },
    { name: "GraphQL", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 19.5 12 22 2 15.5 2 8.5 12 2"/><circle cx="12" cy="12" r="3"/></svg>' }
];

const track = document.getElementById('marquee-track');

function createMarqueeItems() {
    // Add items multiple times to ensure enough width for infinite scrolling
    for (let i = 0; i < 4; i++) {
        technologies.forEach(tech => {
            const item = document.createElement('div');
            item.className = 'tech-item';
            item.innerHTML = `${tech.svg} <span>${tech.name}</span>`;
            track.appendChild(item);
        });
    }
}

createMarqueeItems();

// --- Intersection Observer for Scroll Animations ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after revealing to prevent refading
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all section-reveal elements so they appear when scrolled into view
const revealElements = document.querySelectorAll('.section-reveal');
revealElements.forEach(el => observer.observe(el));

// Also immediately reveal elements that are already in the viewport on load
document.addEventListener('DOMContentLoaded', () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// --- Process Timeline Animation ---
const processTimeline = document.getElementById('process-timeline');
const timelineLine = document.getElementById('timeline-line');
const processSteps = document.querySelectorAll('.process-step');

if (processTimeline && timelineLine) {
    window.addEventListener('scroll', () => {
        if (prefersReducedMotion) {
            timelineLine.style.width = '100%';
            timelineLine.style.height = '100%';
            processSteps.forEach(step => step.classList.add('active'));
            return;
        }

        const rect = processTimeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far the timeline is visible in the viewport
        // Start animation when top of timeline is in middle of viewport
        const startOffset = windowHeight * 0.6;
        const progress = Math.max(0, Math.min(1, (startOffset - rect.top) / (rect.height)));

        const isMobile = window.innerWidth <= 900;

        if (isMobile) {
            timelineLine.style.height = `${progress * 100}%`;
            timelineLine.style.width = '100%';
        } else {
            timelineLine.style.width = `${progress * 100}%`;
            timelineLine.style.height = '100%';
        }

        // Activate steps based on progress
        const stepThresholds = [0, 0.33, 0.66, 0.99]; // 4 steps
        processSteps.forEach((step, index) => {
            if (progress >= stepThresholds[index]) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }, { passive: true });
}

// --- Stats Count-Up Animation ---
const statCounters = document.querySelectorAll('.count-up');
let countersStarted = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;

            statCounters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    // Lower increment makes it slower, higher faster
                    const speed = 200;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };

                if (prefersReducedMotion) {
                    counter.innerText = counter.getAttribute('data-target');
                } else {
                    updateCount();
                }
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// --- 3D Hover Tilt Effect ---
const tiltElements = document.querySelectorAll('.js-tilt');

if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            // Calculate mouse position relative to element center (-1 to 1)
            const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
            const y = (rect.height / 2 - (e.clientY - rect.top)) / (rect.height / 2);

            // Adjust sensitivity
            const tiltX = y * 10;
            const tiltY = x * 10;

            el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

// --- Testimonials Carousel ---
const carouselTrack = document.getElementById('carousel-track');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carousel-dots');

if (carouselTrack && carouselSlides.length > 0) {
    let currentSlide = 0;
    const slideCount = carouselSlides.length;
    let carouselInterval;

    // Create dots
    carouselSlides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
        currentSlide = index;
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active states
        carouselSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentSlide);
            dots[i].classList.toggle('active', i === currentSlide);
        });
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slideCount);
    }

    function startCarousel() {
        if (!prefersReducedMotion) {
            carouselInterval = setInterval(nextSlide, 4000);
        }
    }

    function stopCarousel() {
        clearInterval(carouselInterval);
    }

    // Start auto-play
    startCarousel();

    // Pause on hover
    const carouselContainer = document.getElementById('testimonial-carousel');
    carouselContainer.addEventListener('mouseenter', stopCarousel);
    carouselContainer.addEventListener('mouseleave', startCarousel);
}

// --- Multi-select Dropdown ---
document.querySelectorAll('.multi-select').forEach(select => {
    const trigger = select.querySelector('.multi-select-trigger');
    const placeholder = select.querySelector('.multi-select-placeholder');
    const checkboxes = select.querySelectorAll('input[type="checkbox"]');
    const defaultText = placeholder.textContent;

    trigger.addEventListener('click', () => {
        // Close other open selects
        document.querySelectorAll('.multi-select.open').forEach(s => {
            if (s !== select) s.classList.remove('open');
        });
        select.classList.toggle('open');
    });

    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const checked = Array.from(checkboxes).filter(c => c.checked);
            if (checked.length === 0) {
                placeholder.textContent = defaultText;
                trigger.classList.remove('has-value');
            } else if (checked.length <= 2) {
                placeholder.textContent = checked.map(c => c.parentElement.querySelector('span').textContent).join(', ');
                trigger.classList.add('has-value');
            } else {
                placeholder.textContent = checked.length + ' types selected';
                trigger.classList.add('has-value');
            }
        });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });
});

// --- Custom Single-select Dropdown (Budget) ---
document.querySelectorAll('.custom-select').forEach(select => {
    const trigger = select.querySelector('.custom-select-trigger');
    const valueEl = select.querySelector('.custom-select-value');
    const options = select.querySelectorAll('.custom-select-option');
    const hiddenInput = select.querySelector('input[type="hidden"]');

    trigger.addEventListener('click', () => {
        document.querySelectorAll('.custom-select.open').forEach(s => {
            if (s !== select) s.classList.remove('open');
        });
        // Close any open multi-selects too
        document.querySelectorAll('.multi-select.open').forEach(s => s.classList.remove('open'));
        select.classList.toggle('open');
    });

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            valueEl.textContent = opt.textContent;
            trigger.classList.add('has-value');
            if (hiddenInput) hiddenInput.value = opt.dataset.value;
            select.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    });
});

// Close custom selects when multi-select opens
document.querySelectorAll('.multi-select .multi-select-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        document.querySelectorAll('.custom-select.open').forEach(s => s.classList.remove('open'));
    });
});

// --- Phone Auto-format (xx-xxx-xx-xx) ---
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let digits = e.target.value.replace(/\D/g, '').slice(0, 9);
        let formatted = '';
        if (digits.length > 0) formatted = digits.slice(0, 2);
        if (digits.length > 2) formatted += '-' + digits.slice(2, 5);
        if (digits.length > 5) formatted += '-' + digits.slice(5, 7);
        if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
        e.target.value = formatted;
    });
}

// --- Form Validation ---
function validateField(input) {
    const group = input.closest('.form-group');
    if (!group) return true;
    const wrapper = input.closest('.phone-input-wrapper');

    if (input.id === 'email') {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value);
        group.classList.toggle('invalid', input.value.length > 0 && !valid);
        return valid || input.value.length === 0;
    }
    if (input.id === 'phone') {
        const digits = input.value.replace(/\D/g, '');
        const valid = digits.length === 0 || digits.length === 9;
        if (wrapper) wrapper.classList.toggle('invalid', digits.length > 0 && digits.length < 9);
        return valid;
    }
    return true;
}

document.querySelectorAll('#email, #phone').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        const wrapper = input.closest('.phone-input-wrapper');
        if (group) group.classList.remove('invalid');
        if (wrapper) wrapper.classList.remove('invalid');
    });
});

// --- Google Sheets Integration ---
// After deploying google-apps-script.gs as a Web App, paste your URL below:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzuMmR79P-3obNyhru-3qsTeGdxx39xwhCrnp0EP9Hbtb1eFQ0RLpIKywm4_VlLB_I/exec';

function getFormData(idPrefix) {
    // idPrefix is '' for main form, 'modal-' for modal
    const get = id => document.getElementById(idPrefix + id);
    const typeSelectId = idPrefix === 'modal-' ? 'modal-project-type-select' : 'project-type-select';

    const checkedTypes = Array.from(
        document.querySelectorAll('#' + typeSelectId + ' input[type="checkbox"]:checked')
    ).map(cb => cb.value);

    const rawPhone = get('phone')?.value?.trim() || '';

    // Get budget display text (e.g. "$1,500 - $5,000") not the raw data-value
    const budgetSelectId = idPrefix === 'modal-' ? 'modal-budget-select' : 'budget-select';
    const budgetText = document.querySelector('#' + budgetSelectId + ' .custom-select-value')?.textContent?.trim() || '';
    const budget = (budgetText && budgetText !== 'Budget Range') ? budgetText : '';

    return {
        name:        get('name')?.value?.trim()    || '',
        email:       get('email')?.value?.trim()   || '',
        company:     get('company')?.value?.trim() || '',
        projectType: checkedTypes.join(', '),
        budget,
        phone:       rawPhone ? ('+998 ' + rawPhone) : '',
        message:     get('message')?.value?.trim() || '',
        source:      idPrefix === 'modal-' ? 'modal' : 'homepage'
    };
}

async function sendToSheet(data) {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.startsWith('YOUR_')) {
        return new Promise(resolve => setTimeout(() => resolve(true), 1500));
    }
    try {
        const params = new URLSearchParams();
        Object.entries(data).forEach(([k, v]) => params.append(k, v || ''));
        const url = GOOGLE_SCRIPT_URL + '?' + params.toString();
        console.log('[Sheet] Sending to:', url);
        await fetch(url, { method: 'GET', mode: 'no-cors' });
        console.log('[Sheet] Request sent successfully');
    } catch (err) {
        console.error('[Sheet] Fetch error:', err);
    }
    return true;
}

function resetSelectUI(container) {
    container.querySelectorAll('.multi-select').forEach(s => {
        s.querySelector('.multi-select-placeholder').textContent = 'Project Type';
        s.querySelector('.multi-select-trigger').classList.remove('has-value');
        s.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    });
    container.querySelectorAll('.custom-select').forEach(s => {
        s.querySelector('.custom-select-value').textContent = 'Budget Range';
        s.querySelector('.custom-select-trigger').classList.remove('has-value');
        s.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
        const h = s.querySelector('input[type="hidden"]');
        if (h) h.value = '';
    });
}

// --- Contact Form ---
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn?.querySelector('.btn-text');
const spinner = submitBtn?.querySelector('.spinner');
const successCheck = submitBtn?.querySelector('.success-check');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        const emailOk = validateField(document.getElementById('email'));
        const phoneEl = document.getElementById('phone');
        const phoneOk = phoneEl ? validateField(phoneEl) : true;
        if (!emailOk || !phoneOk) return;

        // Collect data before disabling inputs
        const data = getFormData('');

        // Disable form while sending
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        spinner.style.display = 'block';

        await sendToSheet(data);

        spinner.style.display = 'none';
        successCheck.style.display = 'block';
        submitBtn.style.background = '#22c55e';
        contactForm.reset();
        resetSelectUI(contactForm);

        setTimeout(() => {
            successCheck.style.display = 'none';
            btnText.style.display = 'block';
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 3000);
    });
}

// --- Contact Modal ---
const contactModal = document.getElementById('contact-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalForm = document.getElementById('modal-contact-form');

function openContactModal() {
    if (!contactModal) return;
    contactModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        const nameInput = document.getElementById('modal-name');
        if (nameInput) nameInput.focus();
    }, 300);
}

function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
}

window.openContactModal = openContactModal;

if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeContactModal);
}

if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) closeContactModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && contactModal?.classList.contains('active')) {
        closeContactModal();
    }
});

// Modal phone format
const modalPhone = document.getElementById('modal-phone');
if (modalPhone) {
    modalPhone.addEventListener('input', (e) => {
        let digits = e.target.value.replace(/\D/g, '').slice(0, 9);
        let formatted = '';
        if (digits.length > 0) formatted = digits.slice(0, 2);
        if (digits.length > 2) formatted += '-' + digits.slice(2, 5);
        if (digits.length > 5) formatted += '-' + digits.slice(5, 7);
        if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
        e.target.value = formatted;
    });
}

// Modal form submit
if (modalForm) {
    modalForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        console.log('[Modal] Submit triggered');
        const emailInput = document.getElementById('modal-email');
        if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value)) {
            emailInput.closest('.form-group')?.classList.add('invalid');
            return;
        }
        const btn = document.getElementById('modal-submit-btn');
        const mBtnText = btn?.querySelector('.btn-text');
        const mSpinner = btn?.querySelector('.spinner');
        const mCheck = btn?.querySelector('.success-check');

        // Collect data before disabling inputs
        const data = getFormData('modal-');

        btn.disabled = true;
        mBtnText.style.display = 'none';
        mSpinner.style.display = 'block';

        await sendToSheet(data);

        mSpinner.style.display = 'none';
        mCheck.style.display = 'block';
        btn.style.background = '#22c55e';
        modalForm.reset();
        resetSelectUI(modalForm);

        setTimeout(() => {
            mCheck.style.display = 'none';
            mBtnText.style.display = 'block';
            btn.style.background = '';
            btn.disabled = false;
            closeContactModal();
        }, 2000);
    });
}
