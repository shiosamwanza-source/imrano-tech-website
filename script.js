/* ==========================================
   Imranotech Gallery — JavaScript
   ========================================== */

// ===== Gallery Data =====
const galleryData = [
    {
        src: 'https://z-cdn-media.chatglm.cn/files/ef175a83-9155-4f4d-8dc7-c97304c41f31.jpeg?auth_key=1882481869-1a84e7d095db4fe4a3f8f58468e2d448-0-e7ed073317d17f789aaa0f7137adcc49',
        title: 'Kamera ya Usalama — IR Bullet',
        desc: 'Kamera nyeusi na mwelekeo wa kuweza kubadilishwa, taa za bluu za红外',
        category: 'cctv',
        badge: 'CCTV',
        badgeColor: 'bg-accent/10 border-accent/30 text-accent'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/c0f51c3c-210c-47fb-919e-66fd59482fb5.jpeg?auth_key=1882481869-d35187bf27ce437daf2de30106d8a968-0-6691473a63195e4a2f0d76e03c57ba1b',
        title: 'Kamera ya Usalama — Dome White',
        desc: 'Kamera nyeupe na nyumba ya kinga, taa za红外',
        category: 'cctv',
        badge: 'CCTV',
        badgeColor: 'bg-accent/10 border-accent/30 text-accent'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/2d5ac5b0-b016-4f47-9d84-6ac7712210e4.jpg?auth_key=1882481869-b6eb3f222eca45e1bf75e0be74406f2b-0-1f245c08bc98fe4e98a6bcf42f3db637',
        title: 'IMRANOSTAR Notebook Power Adapter',
        desc: 'Chaja ya laptop, inajumuisha viunganisho 8 vinavyobadilika',
        category: 'power',
        badge: 'Power',
        badgeColor: 'bg-orange-500/10 border-orange-500/30 text-orange-400'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/a89733e9-7b96-4e16-b1ab-becbfe939c50.jpg?auth_key=1882481869-cfba7f553e984bc0bd681cb6d75f1e7a-0-7b2b84ff0b256d9dbe270e3ba06d2a95',
        title: 'AVR — Automatic Voltage Regulator',
        desc: 'Mifumo 4: 500VA, 1000VA, 1500VA, 2000VA — 110V/220V 50/60Hz',
        category: 'power',
        badge: 'Power',
        badgeColor: 'bg-orange-500/10 border-orange-500/30 text-orange-400'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/dd8ba7da-bb6e-4ca3-b9cf-d9ae4efd6a03.jpg?auth_key=1882481869-cb8918e3378d4aabbe7d6148fe2c3d23-0-fca30c71b4ffe4996b65ee54724b755c',
        title: 'AVR — Close-up View',
        desc: 'Ukunjaji wa karibu wa boksi za AVR 0.5KVA - 2.0KVA',
        category: 'power',
        badge: 'Power',
        badgeColor: 'bg-orange-500/10 border-orange-500/30 text-orange-400'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/124cc7f8-bc98-43e2-92e8-b2d6666be950.jpg?auth_key=1882481869-4d4e34c134cc4a2c908cc028e9a0d094-0-eea0f83e802c2385a1b736ba77579929',
        title: 'IMRANOSTAR Coaxial Cable — RG6U',
        desc: 'Kabeli ya coaxial, 100Y urefu, 75 Ohms impedance',
        category: 'cables',
        badge: 'Cables',
        badgeColor: 'bg-blue-500/10 border-blue-500/30 text-blue-400'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/db6a1f34-cf71-4001-b713-1ba20abcf385.jpg?auth_key=1882481869-56447583557946dda5d28127fa049d84-0-ec11c889cc56fd93c4d1d809f64ede88',
        title: 'IMRANO Padlock — SK366',
        desc: 'Size 63mm, chuma, muundo wa kipekee',
        category: 'accessories',
        badge: 'Accessories',
        badgeColor: 'bg-purple-500/10 border-purple-500/30 text-purple-400'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/9ef56e99-bd9e-4bbe-8a96-eaa42e7de870.jpg?auth_key=1882481869-61c6289469674b18bcf6402aa928229c-0-c3761dd73c5486664771c3ca5f6ff25c',
        title: 'IMRANO Professional Hairclipper',
        desc: 'Series 200/300, Waranti ya miaka 5',
        category: 'grooming',
        badge: 'Grooming',
        badgeColor: 'bg-green-500/10 border-green-500/30 text-green-400'
    },
    {
        src: 'https://z-cdn-media.chatglm.cn/files/db5b21f7-7eff-4584-942d-99e402f02555.jpeg?auth_key=1882481869-5297f12b1a0c4de084bee30897043a59-0-712885dad40107af7fb1d37f91dfcc7b',
        title: 'Smartphones & Tablets',
        desc: 'Mkusanyiko wa simu na tablet za aina mbalimbali',
        category: 'devices',
        badge: 'Devices',
        badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
    }
];

// ===== State =====
let currentLightboxIndex = 0;
let filteredIndices = galleryData.map((_, i) => i);

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('hidden', !menuOpen);
        mobileMenuBtn.querySelector('.iconify').setAttribute(
            'data-icon',
            menuOpen ? 'lucide:x' : 'lucide:menu'
        );
    });
}

// ===== Scroll Reveal (IntersectionObserver) =====
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ===== Counter Animation =====
const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.round(current);
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    },
    { threshold: 0.5 }
);

document.querySelectorAll('.stat-number[data-count]').forEach((el) => counterObserver.observe(el));

// ===== Filter Tabs =====
const filterTabs = document.querySelectorAll('.filter-tab');
const galleryCards = document.querySelectorAll('.gallery-card');

filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        // Update active state
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        filteredIndices = [];
        let visibleIndex = 0;

        galleryCards.forEach((card) => {
            const cat = card.getAttribute('data-category');

            if (filter === 'all' || cat === filter) {
                // Show card with animation
                card.style.display = '';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                filteredIndices.push(parseInt(card.getAttribute('data-index')));

                const delay = visibleIndex;
                setTimeout(() => {
                    card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, delay * 60);

                visibleIndex++;
            } else {
                // Hide card
                card.style.display = 'none';
            }
        });

        // Handle "no results" message
        handleNoResults();
    });
});

function handleNoResults() {
    const grid = document.getElementById('galleryGrid');
    const visibleCards = grid.querySelectorAll('.gallery-card:not([style*="display: none"])');
    let noResults = grid.querySelector('.no-results');

    if (visibleCards.length === 0) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML =
                '<span class="iconify text-white/10 mx-auto mb-4" data-icon="lucide:image-off" data-width="48"></span>' +
                '<p class="text-white/30 text-sm">Hakuna bidhaa kwenye kategoria hii</p>';
            grid.appendChild(noResults);
        }
        noResults.style.display = '';
    } else if (noResults) {
        noResults.style.display = 'none';
    }
}

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxBadge = document.getElementById('lightboxBadge');
const lightboxCounter = document.getElementById('lightboxCounter');

function openLightbox(index) {
    currentLightboxIndex = filteredIndices.indexOf(index);
    if (currentLightboxIndex === -1) currentLightboxIndex = 0;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function closeLightboxOutside(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
}

function navigateLightbox(direction) {
    const total = filteredIndices.length;
    currentLightboxIndex = (currentLightboxIndex + direction + total) % total;
    updateLightbox();
}

function updateLightbox() {
    const data = galleryData[filteredIndices[currentLightboxIndex]];
    lightboxImg.src = data.src;
    lightboxImg.alt = data.title;
    lightboxTitle.textContent = data.title;
    lightboxDesc.textContent = data.desc;
    lightboxBadge.className = 'cat-badge ' + data.badgeColor + ' inline-flex mx-auto';
    lightboxBadge.innerHTML = data.badge;
    lightboxCounter.textContent =
        (currentLightboxIndex + 1) + ' / ' + filteredIndices.length;
}

// ===== Keyboard Navigation for Lightbox =====
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox(-1);
            break;
        case 'ArrowRight':
            navigateLightbox(1);
            break;
    }
});

// ===== Touch Swipe for Lightbox =====
let touchStartX = 0;

lightbox.addEventListener(
    'touchstart',
    (e) => {
        touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
);

lightbox.addEventListener(
    'touchend',
    (e) => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            navigateLightbox(diff > 0 ? 1 : -1);
        }
    },
    { passive: true }
);

// ===== Navigation Background on Scroll =====
const navGlass = document.querySelector('nav .nav-glass');

if (navGlass) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navGlass.style.background = 'rgba(5, 8, 15, 0.9)';
        } else {
            navGlass.style.background = 'rgba(5, 8, 15, 0.7)';
        }
    });
}
