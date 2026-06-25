/* ============================================
   IMRANO ELECTRONICS TECH LTD — MAIN STYLESHEET
   ============================================ */

:root {
  --navy: #0a0e2e;
  --navy-mid: #111540;
  --navy-light: #1a2060;
  --magenta: #e91e8c;
  --magenta-hover: #c4157a;
  --magenta-glow: rgba(233, 30, 140, 0.25);
  --cyan: #00d4ff;
  --white: #ffffff;
  --gray-light: #f4f6fb;
  --gray-mid: #8892b0;
  --gray-text: #ccd6f6;
  --gold: #ffd700;
  --green: #00e676;
  --font-head: 'Montserrat', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 8px 32px rgba(0,0,0,0.3);
  --shadow-card: 0 4px 24px rgba(0,0,0,0.15);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; font-size: 16px; }

body {
  font-family: var(--font-body);
  background: var(--white);
  color: #1a1a2e;
  line-height: 1.6;
  overflow-x: hidden;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ============ BUTTONS ============ */
.btn-primary {
  display: inline-block;
  background: var(--magenta);
  color: var(--white);
  padding: 14px 32px;
  border-radius: 50px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px var(--magenta-glow);
}
.btn-primary:hover {
  background: var(--magenta-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(233,30,140,0.4);
}

.btn-outline {
  display: inline-block;
  background: transparent;
  color: var(--white);
  padding: 13px 30px;
  border-radius: 50px;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid rgba(255,255,255,0.5);
  cursor: pointer;
  transition: var(--transition);
}
.btn-outline:hover {
  border-color: var(--magenta);
  color: var(--magenta);
  background: rgba(233,30,140,0.05);
}

/* ============ SECTION HEADERS ============ */
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-eyebrow {
  display: inline-block;
  color: var(--magenta);
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 0.78rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.section-title {
  font-family: var(--font-head);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  color: var(--navy);
  margin-bottom: 16px;
  line-height: 1.2;
}
.section-sub {
  color: var(--gray-mid);
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
}

/* ============ NAVBAR ============ */
.nav-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: rgba(10, 14, 46, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: var(--transition);
}
.nav-header.scrolled {
  background: rgba(10, 14, 46, 0.98);
  box-shadow: 0 4px 30px rgba(0,0,0,0.4);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.logo {
  font-family: var(--font-head);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 1px;
}
.logo-imrano { color: var(--white); }
.logo-tech { color: var(--magenta); }

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}
.nav-links a {
  color: var(--gray-text);
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.5px;
  transition: var(--transition);
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: var(--magenta);
  transition: var(--transition);
}
.nav-links a:hover { color: var(--white); }
.nav-links a:hover::after { width: 100%; }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
.search-btn, .cart-btn {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--white);
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
}
.search-btn:hover, .cart-btn:hover {
  background: var(--magenta);
  border-color: var(--magenta);
}
.cart-count {
  position: absolute;
  top: -4px; right: -4px;
  background: var(--magenta);
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  width: 18px; height: 18px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: var(--transition);
}

/* ============ HERO ============ */
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--navy) 0%, #0d1545 40%, #160a30 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding: 100px 60px 60px;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.hero-grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}
.hero-circuit {
  position: absolute;
  top: 0; right: 0;
  width: 60%;
  height: 100%;
  background: radial-gradient(ellipse at 80% 50%, rgba(233,30,140,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.08) 0%, transparent 50%);
}

.hero-content { z-index: 2; }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(233,30,140,0.15);
  border: 1px solid rgba(233,30,140,0.3);
  color: var(--magenta);
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 700;
  font-family: var(--font-head);
  letter-spacing: 1px;
  margin-bottom: 28px;
}
.hero-headline {
  font-family: var(--font-head);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 20px;
}
.hero-accent {
  background: linear-gradient(135deg, var(--magenta), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  color: var(--gray-text);
  font-size: 1.05rem;
  max-width: 520px;
  margin-bottom: 36px;
  line-height: 1.7;
}
.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-family: var(--font-head);
  font-weight: 900;
  font-size: 1.6rem;
  color: var(--white);
  line-height: 1;
}
.stat-label {
  display: block;
  color: var(--gray-mid);
  font-size: 0.75rem;
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.15);
}

/* Hero Visual */
.hero-visual {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-product-showcase {
  position: relative;
  width: 380px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.showcase-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  animation: spinRing 20s linear infinite;
}
.outer-ring {
  width: 340px; height: 340px;
  border-color: rgba(233,30,140,0.2);
}
.inner-ring {
  width: 240px; height: 240px;
  border-color: rgba(0,212,255,0.2);
  animation-direction: reverse;
  animation-duration: 14s;
}
@keyframes spinRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.showcase-center {
  width: 120px; height: 120px;
  background: linear-gradient(135deg, var(--magenta), #9c27b0);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 60px var(--magenta-glow), 0 0 120px rgba(233,30,140,0.1);
  z-index: 2;
}
.showcase-icon { font-size: 2.5rem; }

.floating-card {
  position: absolute;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 600;
  font-family: var(--font-head);
  white-space: nowrap;
  animation: floatCard 4s ease-in-out infinite;
}
.fc-icon { font-size: 1.1rem; }
.card-1 { top: 20px; right: 20px; animation-delay: 0s; }
.card-2 { top: 20px; left: 20px; animation-delay: 1s; }
.card-3 { bottom: 20px; right: 20px; animation-delay: 2s; }
.card-4 { bottom: 20px; left: 20px; animation-delay: 3s; }
@keyframes floatCard {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.hero-scroll {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--gray-mid);
  font-size: 0.72rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--gray-mid), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

/* ============ TICKER ============ */
.ticker-wrap {
  background: var(--magenta);
  overflow: hidden;
  padding: 12px 0;
}
.ticker-track {
  display: flex;
  gap: 60px;
  animation: ticker 40s linear infinite;
  white-space: nowrap;
}
.ticker-track span {
  color: var(--white);
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}
@keyframes ticker {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ============ CATEGORIES ============ */
.categories {
  padding: 100px 0;
  background: var(--gray-light);
}
.cat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.cat-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  border: 1px solid rgba(0,0,0,0.06);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}
.cat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--magenta);
  transform: scaleX(0);
  transition: var(--transition);
}
.cat-card:hover { transform: translateY(-6px); box-shadow: var(--shadow); }
.cat-card:hover::before { transform: scaleX(1); }

.cat-security::before { background: #e91e8c; }
.cat-energy::before { background: #ff9800; }
.cat-phones::before { background: #2196f3; }
.cat-batteries::before { background: #4caf50; }
.cat-accessories::before { background: #9c27b0; }
.cat-appliances::before { background: #00bcd4; }

.cat-icon-wrap {
  width: 64px; height: 64px;
  border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  background: var(--gray-light);
}
.cat-card h3 {
  font-family: var(--font-head);
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 12px;
}
.cat-card p {
  color: var(--gray-mid);
  font-size: 0.88rem;
  line-height: 1.6;
  margin-bottom: 20px;
}
.cat-items {
  margin-bottom: 24px;
}
.cat-items li {
  color: #444;
  font-size: 0.83rem;
  padding: 4px 0;
  padding-left: 16px;
  position: relative;
}
.cat-items li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--magenta);
  font-size: 0.8rem;
}
.cat-cta {
  color: var(--magenta);
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 0.85rem;
  transition: var(--transition);
}
.cat-cta:hover { letter-spacing: 0.5px; }

/* ============ FEATURED PRODUCTS ============ */
.featured {
  padding: 100px 0;
  background: var(--white);
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.product-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.08);
  transition: var(--transition);
  background: var(--white);
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}
.product-img {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 4rem;
}
.cctv-img { background: linear-gradient(135deg, #0d1545, #1a2060); }
.avr-img { background: linear-gradient(135deg, #1a0a30, #2d1b69); }
.solar-img { background: linear-gradient(135deg, #0a2010, #1a4020); }
.cctv-kit-img { background: linear-gradient(135deg, #0d1545, #200a45); }
.avr-img2 { background: linear-gradient(135deg, #300a10, #6d1a30); }
.mouse-img { background: linear-gradient(135deg, #0a1530, #1a3060); }

.product-icon-large { font-size: 3.5rem; }
.product-badge {
  position: absolute;
  top: 12px; left: 12px;
  background: var(--magenta);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: var(--font-head);
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}
.new-badge { background: #00bcd4; }
.hot-badge { background: #ff5722; }

.product-info { padding: 20px; }
.product-category {
  font-size: 0.72rem;
  font-weight: 700;
  font-family: var(--font-head);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--magenta);
}
.product-info h4 {
  font-family: var(--font-head);
  font-size: 1rem;
  font-weight: 800;
  color: var(--navy);
  margin: 6px 0 6px;
}
.product-info p {
  font-size: 0.82rem;
  color: var(--gray-mid);
  line-height: 1.5;
  margin-bottom: 16px;
}
.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-price {
  font-family: var(--font-head);
  font-weight: 900;
  font-size: 1.05rem;
  color: var(--navy);
}
.add-cart-btn {
  background: var(--magenta);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-family: var(--font-head);
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
}
.add-cart-btn:hover {
  background: var(--magenta-hover);
  transform: scale(1.05);
}

/* ============ SOLAR CALCULATOR ============ */
.solar-calc {
  padding: 100px 0;
  background: linear-gradient(135deg, var(--navy) 0%, #0d1545 100%);
  position: relative;
  overflow: hidden;
}
.solar-calc::before {
  content: '';
  position: absolute;
  top: -100px; right: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(233,30,140,0.1), transparent 70%);
  pointer-events: none;
}
.calc-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.calc-info .section-eyebrow { margin-bottom: 16px; }
.calc-info h2 {
  font-family: var(--font-head);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 900;
  color: var(--white);
  margin-bottom: 16px;
}
.calc-info p { color: var(--gray-text); font-size: 1rem; margin-bottom: 28px; }
.calc-features { display: flex; flex-direction: column; gap: 12px; }
.cf {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gray-text);
  font-size: 0.92rem;
}
.cf span { color: var(--green); font-weight: 700; }

.calc-form {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-lg);
  padding: 36px;
  backdrop-filter: blur(10px);
}
.calc-form h3 {
  font-family: var(--font-head);
  color: var(--white);
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.appliance-row {
  display: grid;
  grid-template-columns: 1fr 80px auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 14px;
}
.appliance-row label {
  color: var(--gray-text);
  font-size: 0.88rem;
}
.appliance-row input {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 8px 10px;
  color: var(--white);
  font-size: 0.88rem;
  text-align: center;
  outline: none;
  transition: var(--transition);
}
.appliance-row input:focus { border-color: var(--magenta); }
.unit { color: var(--gray-mid); font-size: 0.75rem; }
.hours-row { margin-top: 8px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.08); }
.calc-btn { width: 100%; margin-top: 20px; justify-content: center; }
.calc-result {
  margin-top: 20px;
  padding: 16px;
  border-radius: var(--radius);
  display: none;
}
.calc-result.show {
  display: block;
  background: rgba(0,230,118,0.1);
  border: 1px solid rgba(0,230,118,0.3);
}
.calc-result h4 {
  color: var(--green);
  font-family: var(--font-head);
  margin-bottom: 8px;
  font-size: 1rem;
}
.calc-result p { color: var(--gray-text); font-size: 0.85rem; line-height: 1.6; }

/* ============ WHY US ============ */
.why-us {
  padding: 100px 0;
  background: var(--gray-light);
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.why-card {
  background: var(--white);
  padding: 32px 28px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(0,0,0,0.06);
  transition: var(--transition);
}
.why-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-card); }
.why-num {
  font-family: var(--font-head);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--magenta);
  opacity: 0.2;
  line-height: 1;
  margin-bottom: 8px;
}
.why-card h4 {
  font-family: var(--font-head);
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 12px;
}
.why-card p { color: var(--gray-mid); font-size: 0.88rem; line-height: 1.7; }

/* ============ PAYMENTS ============ */
.payments {
  padding: 48px 0;
  background: var(--navy);
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.pay-label {
  color: var(--gray-mid);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: var(--font-head);
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}
.pay-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
.pay-chip {
  padding: 8px 20px;
  border-radius: 50px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 0.82rem;
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white);
}
.mpesa { background: rgba(76,175,80,0.2); border-color: rgba(76,175,80,0.4); }
.tigo { background: rgba(33,150,243,0.2); border-color: rgba(33,150,243,0.4); }
.airtel { background: rgba(244,67,54,0.2); border-color: rgba(244,67,54,0.4); }
.halo { background: rgba(156,39,176,0.2); border-color: rgba(156,39,176,0.4); }
.card { background: rgba(255,255,255,0.05); }
.cash { background: rgba(255,215,0,0.15); border-color: rgba(255,215,0,0.3); }

/* ============ CONTACT ============ */
.contact {
  padding: 100px 0;
  background: var(--white);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.contact-info .section-eyebrow { display: block; margin-bottom: 16px; }
.contact-info h2 {
  font-family: var(--font-head);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 900;
  color: var(--navy);
  margin-bottom: 16px;
}
.contact-info > p {
  color: var(--gray-mid);
  margin-bottom: 32px;
  line-height: 1.7;
}
.contact-details { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.cd-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.cd-icon {
  font-size: 1.3rem;
  width: 44px; height: 44px;
  background: var(--gray-light);
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.cd-item strong {
  font-family: var(--font-head);
  font-size: 0.85rem;
  color: var(--navy);
  display: block;
  margin-bottom: 2px;
}
.cd-item p { font-size: 0.9rem; color: var(--gray-mid); }
.cd-item a { color: var(--magenta); transition: var(--transition); }
.cd-item a:hover { text-decoration: underline; }

.social-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.soc-btn {
  background: var(--navy);
  color: var(--white);
  padding: 8px 18px;
  border-radius: 20px;
  font-family: var(--font-head);
  font-weight: 600;
  font-size: 0.8rem;
  transition: var(--transition);
}
.soc-btn:hover { background: var(--magenta); }
.social-handle { color: var(--gray-mid); font-size: 0.8rem; }

.contact-form-wrap {
  background: var(--gray-light);
  border-radius: var(--radius-lg);
  padding: 36px;
}
.contact-form-wrap h3 {
  font-family: var(--font-head);
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 24px;
}
.contact-form { display: flex; flex-direction: column; gap: 16px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--navy);
  font-family: var(--font-head);
}
.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 16px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.9rem;
  outline: none;
  transition: var(--transition);
  background: var(--white);
  color: #1a1a2e;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--magenta);
  box-shadow: 0 0 0 3px var(--magenta-glow);
}
.form-group textarea { resize: vertical; }
.full-btn { width: 100%; justify-content: center; }

/* ============ NEWSLETTER ============ */
.newsletter {
  background: linear-gradient(135deg, #1a0a30, var(--navy));
  padding: 64px 0;
}
.nl-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
}
.nl-text h3 {
  font-family: var(--font-head);
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--white);
  margin-bottom: 6px;
}
.nl-text p { color: var(--gray-text); font-size: 0.92rem; }
.nl-form {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.nl-form input {
  padding: 13px 20px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50px;
  background: rgba(255,255,255,0.07);
  color: var(--white);
  font-size: 0.9rem;
  outline: none;
  min-width: 260px;
  transition: var(--transition);
}
.nl-form input:focus { border-color: var(--magenta); }
.nl-form input::placeholder { color: var(--gray-mid); }

/* ============ FOOTER ============ */
.footer {
  background: #060a1e;
  padding: 64px 0 0;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
}
.footer-brand p {
  color: var(--gray-mid);
  font-size: 0.88rem;
  line-height: 1.7;
  margin: 16px 0 24px;
  max-width: 280px;
}
.footer-social {
  display: flex;
  gap: 10px;
}
.footer-social a {
  width: 36px; height: 36px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--gray-text);
  font-size: 0.75rem;
  font-weight: 700;
  transition: var(--transition);
}
.footer-social a:hover { background: var(--magenta); border-color: var(--magenta); color: white; }
.footer-logo { margin-bottom: 0; }

.footer-col h5 {
  font-family: var(--font-head);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 20px;
}
.footer-col ul { display: flex; flex-direction: column; gap: 10px; }
.footer-col a {
  color: var(--gray-mid);
  font-size: 0.88rem;
  transition: var(--transition);
}
.footer-col a:hover { color: var(--magenta); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 24px 0;
  text-align: center;
}
.footer-bottom p {
  color: var(--gray-mid);
  font-size: 0.8rem;
  line-height: 1.6;
}
.footer-credit { margin-top: 4px; }

/* ============ WHATSAPP FLOAT ============ */
.whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  background: #25D366;
  color: white;
  padding: 14px 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-head);
  font-weight: 700;
  font-size: 0.88rem;
  box-shadow: 0 8px 30px rgba(37,211,102,0.4);
  transition: var(--transition);
  animation: waPulse 3s ease-in-out infinite;
}
.whatsapp-float:hover {
  background: #1da851;
  transform: scale(1.05);
}
@keyframes waPulse {
  0%, 100% { box-shadow: 0 8px 30px rgba(37,211,102,0.4); }
  50% { box-shadow: 0 8px 40px rgba(37,211,102,0.7); }
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
  .hero { grid-template-columns: 1fr; padding: 120px 40px 60px; text-align: center; }
  .hero-visual { display: none; }
  .hero-ctas { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-sub { margin: 0 auto 36px; }
  .cat-grid { grid-template-columns: repeat(2, 1fr); }
  .products-grid { grid-template-columns: repeat(2, 1fr); }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .calc-wrapper { grid-template-columns: 1fr; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px; left: 0; right: 0;
    background: rgba(10,14,46,0.98);
    padding: 24px;
    gap: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .hamburger { display: flex; }
  .cat-grid { grid-template-columns: 1fr; }
  .products-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .hero { padding: 100px 20px 60px; }
  .nl-inner { flex-direction: column; text-align: center; }
  .nl-form { width: 100%; flex-direction: column; }
  .nl-form input { min-width: auto; width: 100%; }
  .footer-grid { grid-template-columns: 1fr; }
  .appliance-row { grid-template-columns: 1fr 60px; }
  .appliance-row .unit { display: none; }
  .whatsapp-float span { display: none; }
  .whatsapp-float { padding: 14px; border-radius: 50%; }
}

@media (max-width: 480px) {
  .hero-ctas { flex-direction: column; align-items: center; }
  .contact-form-wrap { padding: 24px; }
  .calc-form { padding: 24px; }
}
