/* ============================================
   IMRANO ELECTRONICS TECH LTD — MAIN JAVASCRIPT
   ============================================ */

// ---- NAVBAR SCROLL EFFECT ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ---- HAMBURGER MENU ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// ---- CART SYSTEM ----
let cartItems = [];
const cartCount = document.querySelector('.cart-count');

document.querySelectorAll('.add-cart-btn').forEach((btn, i) => {
  btn.addEventListener('click', function () {
    cartItems.push(i);
    cartCount.textContent = cartItems.length;
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => cartCount.style.transform = '', 300);

    // Button feedback
    const original = this.textContent;
    this.textContent = '✓ Added!';
    this.style.background = '#4caf50';
    setTimeout(() => {
      this.textContent = original;
      this.style.background = '';
    }, 1500);
  });
});

// ---- SOLAR CALCULATOR ----
function calculateSolar() {
  const lights = parseFloat(document.getElementById('lights').value) || 0;
  const fans = parseFloat(document.getElementById('fans').value) || 0;
  const tvs = parseFloat(document.getElementById('tvs').value) || 0;
  const phones = parseFloat(document.getElementById('phones').value) || 0;
  const fridge = parseFloat(document.getElementById('fridge').value) || 0;
  const hours = parseFloat(document.getElementById('hours').value) || 8;

  const totalWatts = (lights * 9) + (fans * 60) + (tvs * 80) + (phones * 10) + (fridge * 150);
  const dailyWh = totalWatts * hours;
  const dailyKWh = dailyWh / 1000;

  // Add 25% buffer for efficiency losses
  const systemKWh = dailyKWh * 1.25;

  // Solar panel sizing (4 peak sun hours in Tanzania average)
  const panelWatts = Math.ceil((systemKWh * 1000) / 4);
  // Round up to nearest 50W panel
  const panels = Math.ceil(panelWatts / 200);
  const totalPanelW = panels * 200;

  // Battery sizing (2 days autonomy, 50% depth of discharge)
  const batteryAh = Math.ceil((systemKWh * 2 * 1000) / (12 * 0.5));

  // Inverter sizing
  const inverterW = Math.ceil(totalWatts * 1.3);

  const resultEl = document.getElementById('calcResult');

  if (totalWatts === 0) {
    resultEl.className = 'calc-result show';
    resultEl.innerHTML = `<h4>⚠️ Enter Your Appliances</h4><p>Please enter the number of appliances above to calculate your solar needs.</p>`;
    return;
  }

  let recommendation = '';
  if (systemKWh < 0.5) recommendation = 'Small home solar kit (100W panel) — starting from TZS 350,000';
  else if (systemKWh < 1.5) recommendation = 'Medium solar kit (200–400W system) — starting from TZS 650,000';
  else if (systemKWh < 3) recommendation = 'Complete home solar system (400–600W) — starting from TZS 1,200,000';
  else recommendation = 'Large commercial solar system — custom quote recommended. Call us!';

  resultEl.className = 'calc-result show';
  resultEl.innerHTML = `
    <h4>⚡ Your Solar Recommendation</h4>
    <p>
      <strong>Total load:</strong> ${totalWatts}W &nbsp;|&nbsp;
      <strong>Daily usage:</strong> ${dailyKWh.toFixed(2)} kWh<br/>
      <strong>Solar panels needed:</strong> ${panels}× 200W panel (${totalPanelW}W total)<br/>
      <strong>Battery capacity:</strong> ~${batteryAh}Ah at 12V<br/>
      <strong>Inverter size:</strong> ${inverterW}W minimum<br/><br/>
      <strong>📦 Recommended system:</strong> ${recommendation}<br/><br/>
      <a href="https://wa.me/255698533107?text=Hello%20Imrano%20Tech%2C%20I%20need%20a%20solar%20system%20for%20${totalWatts}W%20load" 
         target="_blank" 
         style="color:#00e676; font-weight:700; text-decoration:underline;">
        📲 WhatsApp us for a custom quote →
      </a>
    </p>
  `;
}

// ---- CONTACT FORM WHATSAPP ----
const contactBtn = document.querySelector('.full-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    const name = document.querySelector('.contact-form input[type="text"]').value || 'Customer';
    const phone = document.querySelector('.contact-form input[type="tel"]').value || '';
    const category = document.querySelector('.contact-form select').value || 'Electronics';
    const message = document.querySelector('.contact-form textarea').value || '';

    const waText = `Hello Imrano Tech!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ALooking for: ${encodeURIComponent(category)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/255698533107?text=${waText}`, '_blank');
  });
}

// ---- NEWSLETTER ----
const nlBtn = document.querySelector('.newsletter .btn-primary');
const nlInput = document.querySelector('.newsletter input');
if (nlBtn && nlInput) {
  nlBtn.addEventListener('click', () => {
    if (nlInput.value && nlInput.value.includes('@')) {
      nlBtn.textContent = '✓ Subscribed!';
      nlBtn.style.background = '#4caf50';
      nlInput.value = '';
      setTimeout(() => {
        nlBtn.textContent = 'Subscribe';
        nlBtn.style.background = '';
      }, 3000);
    } else {
      nlInput.style.borderColor = '#e91e8c';
      nlInput.placeholder = 'Please enter a valid email...';
      setTimeout(() => {
        nlInput.style.borderColor = '';
        nlInput.placeholder = 'Enter your email address';
      }, 2000);
    }
  });
}

// ---- SCROLL REVEAL ANIMATIONS ----
const revealEls = document.querySelectorAll('.cat-card, .product-card, .why-card, .cd-item');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// ---- ACTIVE NAV LINK on scroll ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.id;
    }
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      a.style.color = '#e91e8c';
    }
  });
});

// ---- SEARCH BAR TOGGLE ----
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
  const existing = document.querySelector('.search-overlay');
  if (existing) { existing.remove(); return; }

  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.style.cssText = `
    position: fixed; top: 70px; left: 0; right: 0;
    background: rgba(10,14,46,0.98);
    backdrop-filter: blur(20px);
    padding: 24px 20px;
    z-index: 999;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    animation: slideDown 0.3s ease;
  `;
  overlay.innerHTML = `
    <style>@keyframes slideDown { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }</style>
    <div style="max-width: 600px; margin: 0 auto; display: flex; gap: 12px;">
      <input type="text" placeholder="Search products: CCTV, Solar, Battery, AVR..." 
        style="flex:1; padding: 14px 20px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.2);
               background: rgba(255,255,255,0.07); color: white; font-size: 0.95rem; outline: none;" 
        autofocus />
      <button onclick="this.closest('.search-overlay').remove()" 
        style="background: rgba(255,255,255,0.1); border: none; color: white; padding: 0 20px; 
               border-radius: 50px; cursor: pointer; font-size: 1.2rem;">✕</button>
    </div>
    <p style="color: rgba(255,255,255,0.4); font-size: 0.78rem; text-align:center; margin-top: 12px;">
      Popular: CCTV Camera · Solar Panel · AVR Stabilizer · Car Battery · Wireless Mouse
    </p>
  `;
  document.body.appendChild(overlay);
});

console.log('%c🔌 IMRANO ELECTRONICS TECH LTD', 'color: #e91e8c; font-size: 16px; font-weight: bold;');
console.log('%cMwanza, Tanzania | ImranoTech.com | +255 698 533 107', 'color: #00d4ff; font-size: 12px;');
