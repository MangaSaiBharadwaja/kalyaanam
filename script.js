/* ==========================================
   WEDDING INVITATION - JavaScript
   Animations, Countdown, Interactions
   ========================================== */

// ===== TRANSLATIONS =====
const translations = {
    en: {
        ganesh_prayer: '॥ Sri Ganeshaya Namah ॥',
        ramanuja_prayer: '॥ Sri Hanumate Namah ॥',
        tagline: 'Are getting married!',
        couple_title: 'The Couple',
        couple_subtitle: 'Two souls, one journey',
        groom_role: 'The Groom',
        groom_name: 'Venkata Abhilash Kumar',
        son_of: 'Son of',
        bride_role: 'The Bride',
        bride_name: 'Navya Sri Lalitha',
        daughter_of: 'Daughter of',
        details_title: 'Wedding Details',
        details_subtitle: 'Save the auspicious date',
        detail_date_title: 'Wedding Date',
        detail_date_text: 'November 20, 2026',
        detail_date_sub: 'Friday (Sukravaaram)',
        detail_time_title: 'Muhurtham Time',
        detail_time_text: '9:10 AM',
        detail_time_sub: 'Kaartheeka Maasam · Ekaadasi',
        detail_venue_title: 'Venue',
        detail_venue_text: 'Sri Vaasavi Kanyaka Parameswari',
        detail_venue_sub: 'Kalyana Mandapam, Gudur',
        event1_name: 'Wedding Celebrations Begin',
        event2_name: 'Muhurtham & Main Ceremony',
        rituals_title: 'Sacred Rituals',
        rituals_subtitle: 'The divine ceremonies of our wedding',
        venue_title: 'Wedding Venue',
        venue_subtitle: 'We would be honoured by your presence',
        venue_name: 'Sri Vaasavi Kanyaka Parameswari<br>Kalyana Mandapam',
        venue_address: 'Gudur, Andhra Pradesh',
        venue_feat1: '🪔 Sacred Fire Altar',
        venue_feat2: '🌺 Flower Decorated',
        venue_feat3: '🎵 Nadaswaram',
        rsvp_title: 'RSVP',
        rsvp_subtitle: 'Kindly honour us with your gracious presence',
        rsvp_message: 'Your presence is the greatest blessing for our new beginning. Please grace us with your attendance and blessings.',
        rsvp_contact_label: 'Kaarya Nirvahakulu (Grand Parents)',
        blessing_translation: 'May all beings be happy',
        visitor_label: 'Blessings Received',
        visitor_sublabel: 'People have visited & blessed this invitation',
        footer_text: 'With Love & Blessings 🙏',
        nav_home: 'Home', nav_couple: 'Couple', nav_details: 'Details',
        nav_rituals: 'Rituals', nav_venue: 'Venue', nav_rsvp: 'RSVP'
    },
    te: {
        ganesh_prayer: '॥ శ్రీ గణేశాయ నమః ॥',
        ramanuja_prayer: '॥ శ్రీమతే రామానుజాయ నమః ॥',
        tagline: 'వివాహం చేసుకుంటున్నారు!',
        couple_title: 'వధూవరులు',
        couple_subtitle: 'రెండు ఆత్మలు, ఒక ప్రయాణం',
        groom_role: 'వరుడు',
        groom_name: 'వెంకట అభిలాష్ కుమార్',
        son_of: 'తండ్రి',
        bride_role: 'వధువు',
        bride_name: 'నవ్య శ్రీ లలిత',
        daughter_of: 'తండ్రి',
        details_title: 'వివాహ వివరాలు',
        details_subtitle: 'శుభ ముహూర్తం గుర్తుంచుకోండి',
        detail_date_title: 'వివాహ తేదీ',
        detail_date_text: 'నవంబర్ 20, 2026',
        detail_date_sub: 'శుక్రవారం',
        detail_time_title: 'ముహూర్తం సమయం',
        detail_time_text: 'ఉదయం 9:10',
        detail_time_sub: 'కార్తీక మాసం · ఏకాదశి',
        detail_venue_title: 'వేదిక',
        detail_venue_text: 'శ్రీ వాసవి కన్యకా పరమేశ్వరి',
        detail_venue_sub: 'కళ్యాణ మండపం, గూడూరు',
        event1_name: 'వివాహ వేడుకలు ప్రారంభం',
        event2_name: 'ముహూర్తం & ప్రధాన వేడుక',
        rituals_title: 'పవిత్ర ఆచారాలు',
        rituals_subtitle: 'మా వివాహంలోని దివ్య కార్యక్రమాలు',
        venue_title: 'వివాహ మండపం',
        venue_subtitle: 'మీ దివ్య సమక్షంతో మమ్మల్ని ఆశీర్వదించండి',
        venue_name: 'శ్రీ వాసవి కన్యకా పరమేశ్వరి<br>కళ్యాణ మండపం',
        venue_address: 'గూడూరు, ఆంధ్ర ప్రదేశ్',
        venue_feat1: '🪔 పవిత్ర అగ్ని వేదిక',
        venue_feat2: '🌺 పుష్ప అలంకారం',
        venue_feat3: '🎵 నాదస్వరం',
        rsvp_title: 'ఆహ్వానం',
        rsvp_subtitle: 'మీ వేంచేపుతో మమ్మల్ని ధన్యులను చేయండి',
        rsvp_message: 'మీ ఆశీర్వాదం మా కొత్త జీవితానికి గొప్ప వరం. దయచేసి మీ హాజరుతో మమ్మల్ని ఆశీర్వదించండి.',
        rsvp_contact_label: 'కార్య నిర్వాహకులు (తాతయ్య & నానమ్మ)',
        blessing_translation: 'సర్వే జనాః సుఖినో భవంతు',
        visitor_label: 'ఆశీర్వాదాలు అందాయి',
        visitor_sublabel: 'మంది ఈ ఆహ్వాన పత్రికను చూసి ఆశీర్వదించారు',
        footer_text: 'ప్రేమతో & ఆశీర్వాదాలతో 🙏',
        nav_home: 'హోమ్', nav_couple: 'వధూవరులు', nav_details: 'వివరాలు',
        nav_rituals: 'ఆచారాలు', nav_venue: 'మండపం', nav_rsvp: 'ఆహ్వానం'
    },
    sa: {
        ganesh_prayer: '॥ श्री गणेशाय नमः ॥',
        ramanuja_prayer: '॥ श्रीमते रामानुजाय नमः ॥',
        tagline: 'विवाहं कुर्वन्ति!',
        couple_title: 'वधूवरौ',
        couple_subtitle: 'द्वे आत्मानौ, एकं पथम्',
        groom_role: 'वरः',
        groom_name: 'वेङ्कट अभिलाष कुमारः',
        son_of: 'पितृ',
        bride_role: 'वधूः',
        bride_name: 'नव्या श्री ललिता',
        daughter_of: 'पितृ',
        details_title: 'विवाहविवरणम्',
        details_subtitle: 'शुभमुहूर्तं स्मरत',
        detail_date_title: 'विवाहदिनम्',
        detail_date_text: 'नवम्बर् 20, 2026',
        detail_date_sub: 'शुक्रवासरः',
        detail_time_title: 'मुहूर्तसमयः',
        detail_time_text: 'प्रातः 9:10',
        detail_time_sub: 'कार्तिकमासः · एकादशी',
        detail_venue_title: 'स्थानम्',
        detail_venue_text: 'श्री वासवी कन्यका परमेश्वरी',
        detail_venue_sub: 'कल्याणमण्डपम्, गूडूरु',
        event1_name: 'विवाहोत्सवारम्भः',
        event2_name: 'मुहूर्तम् एवं प्रधानविधिः',
        rituals_title: 'पवित्रसंस्काराः',
        rituals_subtitle: 'अस्माकं विवाहस्य दिव्यक्रियाः',
        venue_title: 'विवाहमण्डपम्',
        venue_subtitle: 'भवतां दिव्यसान्निध्येन अस्मान् आशीर्वदन्तु',
        venue_name: 'श्री वासवी कन्यका परमेश्वरी<br>कल्याणमण्डपम्',
        venue_address: 'गूडूरु, आन्ध्रप्रदेशः',
        venue_feat1: '🪔 पवित्राग्निवेदिका',
        venue_feat2: '🌺 पुष्पालङ्कारः',
        venue_feat3: '🎵 नादस्वरम्',
        rsvp_title: 'आमन्त्रणम्',
        rsvp_subtitle: 'भवतां सम्मानितसान्निध्यम् अस्मान् धन्यान् करोतु',
        rsvp_message: 'भवतां आशीर्वादः अस्माकं नवजीवनस्य महद्वरम्। कृपया भवतां उपस्थित्या अस्मान् आशीर्वदन्तु।',
        rsvp_contact_label: 'कार्यनिर्वाहकौ (पितामहौ)',
        blessing_translation: 'सर्वे जनाः सुखिनो भवन्तु',
        visitor_label: 'आशीर्वादाः प्राप्ताः',
        visitor_sublabel: 'जनाः एतद् आमन्त्रणपत्रिकां दृष्ट्वा आशीर्वदन्',
        footer_text: 'प्रेम्णा आशीर्वादैश्च 🙏',
        nav_home: 'गृहम्', nav_couple: 'वधूवरौ', nav_details: 'विवरणम्',
        nav_rituals: 'संस्काराः', nav_venue: 'मण्डपम्', nav_rsvp: 'आमन्त्रणम्'
    }
};

let currentLang = 'en';

function selectLanguage(lang) {
    currentLang = lang;
    applyTranslations(lang);
    const overlay = document.getElementById('langDialogOverlay');
    overlay.classList.remove('visible');
    overlay.classList.add('hidden');
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

// ===== MAP REVEAL =====
function revealMap() {
    const overlay = document.getElementById('mapOverlay');
    const iframe = document.getElementById('venueMapFrame');
    overlay.classList.add('hidden');
    iframe.style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', () => {

    // ===== PRELOADER =====
    const preloader = document.getElementById('preloader');
    const langOverlay = document.getElementById('langDialogOverlay');

    function showLanguageDialog() {
        // Always show language dialog on every visit/refresh
        setTimeout(() => {
            langOverlay.classList.add('visible');
        }, 300);
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            showLanguageDialog();
        }, 2500);
    });

    // Fallback: hide preloader after 5 seconds regardless
    setTimeout(() => {
        preloader.classList.add('hidden');
        showLanguageDialog();
    }, 5000);

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
    const flowerImages = [
        'flower_images/1 (1).png', 'flower_images/1 (2).png', 'flower_images/1 (3).png',
        'flower_images/1 (4).png', 'flower_images/1 (5).png', 'flower_images/1 (6).png',
        'flower_images/1 (7).png', 'flower_images/1 (8).png', 'flower_images/1 (9).png'
    ];

    function createPetal() {
        const petal = document.createElement('img');
        petal.classList.add('petal');
        petal.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
        petal.alt = '';
        petal.style.left = Math.random() * 100 + 'vw';
        const size = 25 + Math.random() * 30;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        petal.style.animationDuration = (8 + Math.random() * 8) + 's';
        petal.style.animationDelay = Math.random() * 2 + 's';
        petal.style.opacity = 0.4 + Math.random() * 0.4;

        // Randomly choose petal animation style
        const animations = ['petalFall', 'petalSpiral', 'petalDrift'];
        petal.style.animationName = animations[Math.floor(Math.random() * animations.length)];

        petalsContainer.appendChild(petal);

        // Remove petal after animation
        setTimeout(() => {
            petal.remove();
        }, 18000);
    }

    // Flower burst effect - triggered on scroll near sections
    function createFlowerBurst(x, y) {
        for (let i = 0; i < 8; i++) {
            const flower = document.createElement('img');
            flower.classList.add('flower-burst');
            flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
            flower.alt = '';
            flower.style.left = x + 'px';
            flower.style.top = y + 'px';
            flower.style.setProperty('--angle', (i * 45) + 'deg');
            flower.style.setProperty('--distance', (40 + Math.random() * 60) + 'px');
            const size = 20 + Math.random() * 15;
            flower.style.width = size + 'px';
            flower.style.height = size + 'px';
            petalsContainer.appendChild(flower);
            setTimeout(() => flower.remove(), 1500);
        }
    }

    // Trigger flower burst on section entry
    let burstTriggered = {};
    const sectionObserverBurst = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !burstTriggered[entry.target.id]) {
                burstTriggered[entry.target.id] = true;
                const rect = entry.target.getBoundingClientRect();
                createFlowerBurst(rect.left + rect.width / 2, rect.top + 50);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserverBurst.observe(section);
    });

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
    // Gentle parallax without fading - keeps content visible
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.08}px)`;
                // No opacity change - content stays visible while scrolling
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

    // ===== BACKGROUND MUSIC (Mangalam) =====
    const audioToggle = document.getElementById('audioToggle');
    const bgMusic = new Audio('mangalam.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    let musicPlaying = false;

    function startMusic() {
        bgMusic.play().then(() => {
            musicPlaying = true;
            audioToggle.textContent = '🔊';
        }).catch(() => {
            // Autoplay blocked - user will click toggle
        });
    }

    // Try to auto-play after user's first interaction (language selection)
    const origSelectLanguage = window.selectLanguage;
    window.selectLanguage = function(lang) {
        origSelectLanguage(lang);
        if (!musicPlaying) startMusic();
    };

    audioToggle.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            musicPlaying = false;
            audioToggle.textContent = '🔇';
        } else {
            startMusic();
        }
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

    // ===== VISITOR COUNTER (Unique IP-based) =====
    function initVisitorCounter() {
        // Fetch visitor's IP and track unique visits
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => {
                const ip = data.ip;
                const visitorsJson = localStorage.getItem('weddingVisitors') || '{}';
                const visitors = JSON.parse(visitorsJson);

                if (!visitors[ip]) {
                    visitors[ip] = Date.now();
                    localStorage.setItem('weddingVisitors', JSON.stringify(visitors));
                }

                const uniqueCount = Object.keys(visitors).length;
                const displayCount = uniqueCount + 1247;
                updateVisitorDisplay(displayCount);
            })
            .catch(() => {
                // Fallback if IP fetch fails - use session-based counting
                let count = parseInt(localStorage.getItem('weddingVisitorCount') || '0', 10);
                const sessionKey = 'weddingVisited_' + new Date().toDateString();
                if (!sessionStorage.getItem(sessionKey)) {
                    count += 1;
                    localStorage.setItem('weddingVisitorCount', count.toString());
                    sessionStorage.setItem(sessionKey, 'true');
                }
                const displayCount = count + 1247;
                updateVisitorDisplay(displayCount);
            });
    }

    function updateVisitorDisplay(count) {
        const digits = document.querySelectorAll('.visitor-digit');
        const countStr = String(count).padStart(4, '0');
        digits.forEach((digit, i) => {
            const newVal = countStr[i];
            if (digit.textContent !== newVal) {
                digit.classList.add('flip');
                setTimeout(() => {
                    digit.textContent = newVal;
                    digit.classList.remove('flip');
                }, 300);
            }
        });
    }

    // Animate counter on scroll into view
    const visitorCounter = document.getElementById('visitorCounter');
    if (visitorCounter) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initVisitorCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        counterObserver.observe(visitorCounter);
    }

    // ===== MANDAPAM SCENE SCROLL ANIMATION =====
    const mandapamScene = document.getElementById('mandapamScene');
    if (mandapamScene) {
        const mandapamObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mandapamScene.classList.add('revealed');
                    mandapamObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
        mandapamObserver.observe(mandapamScene);
    }

    // ===== VENUE CARD 3D TILT EFFECT =====
    const venueCard = document.getElementById('venueCard');
    if (venueCard) {
        venueCard.addEventListener('mousemove', (e) => {
            const rect = venueCard.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            venueCard.style.transform = `translateY(-8px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
        });
        venueCard.addEventListener('mouseleave', () => {
            venueCard.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    }

});
