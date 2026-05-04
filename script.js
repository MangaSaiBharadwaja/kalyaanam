/* ==========================================
   WEDDING INVITATION - JavaScript
   Animations, Countdown, Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ===== PRELOADER =====
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 2000);
    });

    // Fallback: hide preloader after 4 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 4000);

    // ===== NAVIGATION =====
    const nav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 150;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.querySelectorAll('a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // ===== COUNTDOWN TIMER =====
    const weddingDate = new Date('November 20, 2026 09:10:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(3, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ===== FLOATING PETALS =====
    const petalsContainer = document.getElementById('petalsContainer');
    const petalEmojis = ['🌸', '🌺', '🌼', '💐', '🪷', '✿'];

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = (0.8 + Math.random() * 0.8) + 'rem';
        petal.style.animationDuration = (8 + Math.random() * 8) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petal.style.opacity = 0.3 + Math.random() * 0.4;
        petalsContainer.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, 18000);
    }

    // Create initial petals
    for (let i = 0; i < 6; i++) {
        setTimeout(createPetal, i * 1000);
    }

    // Continuously create petals
    setInterval(createPetal, 3000);

    // ===== SCROLL REVEAL ANIMATIONS =====
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 70; // Nav height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== PARALLAX EFFECT FOR HERO =====
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            }
        }
    });

    // ===== RITUAL ITEMS STAGGER ANIMATION =====
    const ritualItems = document.querySelectorAll('.ritual-item');
    const ritualObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, 100);
                ritualObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px'
    });

    ritualItems.forEach(item => {
        ritualObserver.observe(item);
    });

    // ===== AUDIO TOGGLE (BELL SOUND PLACEHOLDER) =====
    const audioToggle = document.getElementById('audioToggle');
    let bellActive = false;

    audioToggle.addEventListener('click', () => {
        bellActive = !bellActive;
        audioToggle.textContent = bellActive ? '🔕' : '🔔';
        audioToggle.style.transform = 'scale(1.2)';
        setTimeout(() => {
            audioToggle.style.transform = 'scale(1)';
        }, 200);
    });

    // ===== SPARKLE EFFECT ON GOLD ELEMENTS =====
    function createSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #FFD700;
            border-radius: 50%;
            pointer-events: none;
            animation: sparkleAnim 0.6s ease-out forwards;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            z-index: 10;
        `;
        element.style.position = 'relative';
        element.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
    }

    // Add sparkle animation to stylesheet
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleAnim {
            0% { transform: scale(0); opacity: 1; }
            50% { transform: scale(1.5); opacity: 0.8; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Sparkle on frame border hover
    const frameBorder = document.querySelector('.frame-border');
    if (frameBorder) {
        frameBorder.addEventListener('mouseenter', () => {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => createSparkle(frameBorder), i * 100);
            }
        });
    }

    // ===== PAGE VISIBILITY - PAUSE ANIMATIONS =====
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.body.style.animationPlayState = 'paused';
        } else {
            document.body.style.animationPlayState = 'running';
        }
    });

});
