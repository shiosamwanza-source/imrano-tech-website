/* ============================================
   IMRANO ELECTRONICS — Main JavaScript
   ============================================ */

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const s = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('open')) {
            s[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            s[1].style.opacity = '0';
            s[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            s[0].style.transform = '';
            s[1].style.opacity = '';
            s[2].style.transform = '';
        }
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
        });
    });
}

// ===== SOLAR CALCULATOR =====
function addAppliance(name, watts, hours) {
    name = name || 'Kifaa Kipya';
    watts = watts || 0;
    hours = hours || 0;
    const list = document.getElementById('applianceList');
    if (!list) return;
    const div = document.createElement('div');
    div.className = 'appliance-group';
    div.style.cssText = 'margin-bottom:16px; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.06);';
    div.innerHTML =
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
            '<input type="text" value="' + name + '" style="background:transparent; border:none; color:var(--white); font-family:var(--font-head); font-weight:600; font-size:0.88rem; outline:none; width:60%;" oninput="calculateSolar()">' +
            '<button onclick="this.closest(\'.appliance-group\').remove(); calculateSolar();" style="background:rgba(255,70,70,0.12); border:1px solid rgba(255,70,70,0.25); color:#ff5555; width:30px; height:30px; border-radius:50%; cursor:pointer; font-size:0.75rem; display:flex; align-items:center; justify-content:center; transition:var(--transition);"><i class="fas fa-trash-alt"></i></button>' +
        '</div>' +
        '<div class="appliance-row" style="margin-bottom:0;">' +
            '<label>Watts</label>' +
            '<input type="number" value="' + watts + '" min="0" oninput="calculateSolar()">' +
            '<span class="unit">W</span>' +
        '</div>' +
        '<div class="appliance-row hours-row" style="margin-top:8px;">' +
            '<label>Saa/Hrs</label>' +
            '<input type="number" value="' + hours + '" min="0" max="24" oninput="calculateSolar()">' +
            '<span class="unit">Hrs</span>' +
        '</div>';
    list.appendChild(div);
    calculateSolar();
}

function quickAdd(n, w, h) { addAppliance(n, w, h); }

function calculateSolar() {
    const list = document.getElementById('applianceList');
    const rd = document.getElementById('calcResult');
    const rt = document.getElementById('resultText');
    if (!list || !rd || !rt) return;

    let totalWh = 0, totalW = 0;
    // Static first rows
    const staticRows = list.querySelectorAll(':scope > .appliance-row');
    if (staticRows.length >= 2) {
        const w = parseFloat(staticRows[0].querySelector('input').value) || 0;
        const h = parseFloat(staticRows[1].querySelector('input').value) || 0;
        totalWh += w * h;
        totalW += w;
    }
    // Dynamic groups
    list.querySelectorAll('.appliance-group').forEach(g => {
        const inp = g.querySelectorAll('.appliance-row input');
        if (inp.length >= 2) {
            const w = parseFloat(inp[0].value) || 0;
            const h = parseFloat(inp[1].value) || 0;
            totalWh += w * h;
            totalW += w;
        }
    });

    if (totalW <= 0) { rd.classList.remove('show'); return; }
    rd.classList.add('show');

    const panel = Math.ceil((totalWh / 5) * 1.3);
    const batt = Math.ceil((totalWh / 12) * 1.2);
    const inv = Math.ceil(totalW * 1.25);

    rt.innerHTML =
        '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">' +
            '<div style="background:rgba(255,215,0,0.08); border-radius:8px; padding:12px; text-align:center;"><div style="font-size:0.72rem; color:var(--gray-mid); margin-bottom:4px;">Panels</div><div style="font-family:var(--font-head); font-weight:900; font-size:1.2rem; color:var(--gold);">' + panel + ' Wp</div></div>' +
            '<div style="background:rgba(0,230,118,0.08); border-radius:8px; padding:12px; text-align:center;"><div style="font-size:0.72rem; color:var(--gray-mid); margin-bottom:4px;">Battery</div><div style="font-family:var(--font-head); font-weight:900; font-size:1.2rem; color:var(--green);">' + batt + ' Ah</div></div>' +
            '<div style="background:rgba(0,212,255,0.08); border-radius:8px; padding:12px; text-align:center;"><div style="font-size:0.72rem; color:var(--gray-mid); margin-bottom:4px;">Inverter</div><div style="font-family:var(--font-head); font-weight:900; font-size:1.2rem; color:var(--cyan);">' + inv + ' VA</div></div>' +
            '<div style="background:rgba(233,30,140,0.08); border-radius:8px; padding:12px; text-align:center;"><div style="font-size:0.72rem; color:var(--gray-mid); margin-bottom:4px;">Total Load</div><div style="font-family:var(--font-head); font-weight:900; font-size:1.2rem; color:var(--magenta);">' + totalW + ' W</div></div>' +
        '</div>' +
        '<a href="https://wa.me/255XXXXXXXXX?text=Napenda kuuliza bei ya solar: ' + panel + 'Wp panel, ' + batt + 'Ah betri, ' + inv + 'VA inverter" target="_blank" style="display:block; text-align:center; padding:10px; border-radius:8px; background:var(--magenta); color:white; font-family:var(--font-head); font-weight:700; font-size:0.85rem; transition:var(--transition);">🟢 Omba Bei kupitia WhatsApp →</a>';
}

setTimeout(calculateSolar, 100);

// ===== CONTACT FORM =====
function handleContactSubmit(e) {
    e.preventDefault();
    const f = e.target, inp = f.querySelectorAll('input, textarea'), s = document.getElementById('formSuccess');
    const n = inp[0].value, p = inp[1].value, m = inp[2].value;
    const t = encodeURIComponent('Habari Imrano!\n\nJina: ' + n + '\nSimu: ' + p + '\n\nUjumbe:\n' + m);
    if (s) s.style.display = 'block';
    f.querySelector('button[type="submit"]').style.display = 'none';
    setTimeout(() => { window.open('https://wa.me/255XXXXXXXXX?text=' + t, '_blank'); }, 600);
    setTimeout(() => { f.reset(); if(s) s.style.display='none'; f.querySelector('button[type="submit"]').style.display=''; }, 4000);
}

// ===== GALLERY (for gallery.html) =====
const galleryData = [
    { src:'https://z-cdn-media.chatglm.cn/files/ef175a83-9155-4f4d-8dc7-c97304c41f31.jpeg?auth_key=1882481869-1a84e7d095db4fe4a3f8f58468e2d448-0-e7ed073317d17f789aaa0f7137adcc49', title:'CCTV Camera — IR Bullet', desc:'Kamera nyeusi yenye mwelekeo wa kuweza kubadilishwa', category:'cctv', badge:'CCTV', featured:true },
    { src:'https://z-cdn-media.chatglm.cn/files/c0f51c3c-210c-47fb-919e-66fd59482fb5.jpeg?auth_key=1882481869-d35187bf27ce437daf2de30106d8a968-0-6691473a63195e4a2f0d76e03c57ba1b', title:'CCTV Camera — Dome White', desc:'Kamera nyeupe na nyumba ya kinga', category:'cctv', badge:'CCTV', featured:false },
    { src:'https://z-cdn-media.chatglm.cn/files/2d5ac5b0-b016-4f47-9d84-6ac7712210e4.jpg?auth_key=1882481869-b6eb3f222eca45e1bf75e0be74406f2b-0-1f245c08bc98fe4e98a6bcf42f3db637', title:'IMRANOSTAR Notebook Adapter', desc:'Chaja ya laptop yenye viunganisho 8', category:'power', badge:'Power', featured:false },
    { src:'https://z-cdn-media.chatglm.cn/files/a89733e9-7b96-4e16-b1ab-becbfe939c50.jpg?auth_key=1882481869-cfba7f553e984bc0bd681cb6d75f1e7a-0-7b2b84ff0b256d9dbe270e3ba06d2a95', title:'AVR — Voltage Regulator', desc:'500VA, 1000VA, 1500VA, 2000VA', category:'power', badge:'Power', featured:true },
    { src:'https://z-cdn-media.chatglm.cn/files/dd8ba7da-bb6e-4ca3-b9cf-d9ae4efd6a03.jpg?auth_key=1882481869-cb8918e3378d4aabbe7d6148fe2c3d23-0-fca30c71b4ffe4996b65ee54724b755c', title:'AVR — Close-up', desc:'Boksi za AVR 0.5KVA - 2.0KVA', category:'power', badge:'Power', featured:false },
    { src:'https://z-cdn-media.chatglm.cn/files/124cc7f8-bc98-43e2-92e8-b2d6666be950.jpg?auth_key=1882481869-4d4e34c134cc4a2c908cc028e9a0d094-0-eea0f83e802c2385a1b736ba77579929', title:'Coaxial Cable — RG6U', desc:'100Y urefu, 75 Ohms', category:'cables', badge:'Cables', featured:true },
    { src:'https://z-cdn-media.chatglm.cn/files/db6a1f34-cf71-4001-b713-1ba20abcf385.jpg?auth_key=1882481869-56447583557946dda5d28127fa049d84-0-ec11c889cc56fd93c4d1d809f64ede88', title:'IMRANO Padlock — SK366', desc:'Size 63mm, chuma', category:'accessories', badge:'Accessories', featured:false },
    { src:'https://z-cdn-media.chatglm.cn/files/9ef56e99-bd9e-4bbe-8a96-eaa42e7de870.jpg?auth_key=1882481869-61c6289469674b18bcf6402aa928229c-0-c3761dd73c5486664771c3ca5f6ff25c', title:'Professional Hair Clipper', desc:'Series 200/300, waranti 5yr', category:'grooming', badge:'Grooming', featured:false },
    { src:'https://z-cdn-media.chatglm.cn/files/db5b21f7-7eff-4584-942d-99e402f02555.jpeg?auth_key=1882481869-5297f12b1a0c4de084bee30897043a59-0-712885dad40107af7fb1d37f91dfcc7b', title:'Smartphones & Tablets', desc:'Simu na tablet za aina mbalimbali', category:'devices', badge:'Devices', featured:true }
];

let lbI=0, lbF=galleryData.map((_,i)=>i);

function renderGallery(filter='all') {
    const g=document.getElementById('galleryGrid'); if(!g)return;
    g.innerHTML=''; lbF=[];
    galleryData.forEach((item,i)=>{
        if(filter!=='all'&&item.category!==filter)return;
        lbF.push(i);
        const c=document.createElement('div');
        c.className='g-card'+(item.featured?' featured':'');
        c.onclick=()=>openLB(i);
        c.innerHTML='<img src="'+item.src+'" alt="'+item.title+'" loading="lazy"><div class="g-overlay"><div class="g-expand"><i class="fas fa-expand"></i></div><span class="g-badge">'+item.badge+'</span><h4>'+item.title+'</h4><p>'+item.desc+'</p></div>';
        g.appendChild(c);
    });
    if(!lbF.length) g.innerHTML='<div class="no-results"><i class="fas fa-image"></i><p>Hakuna bidhaa hapa</p></div>';
}

document.querySelectorAll('.f-tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.f-tab').forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    renderGallery(t.getAttribute('data-filter'));
}));

if(document.getElementById('galleryGrid')) renderGallery();

function openLB(i){ lbI=lbF.indexOf(i); if(lbI===-1)lbI=0; updateLB(); document.getElementById('lightbox').classList.add('open'); document.body.style.overflow='hidden'; }
function closeLB(){ document.getElementById('lightbox').classList.remove('open'); document.body.style.overflow=''; }
function navLB(d){ lbI=(lbI+d+lbF.length)%lbF.length; updateLB(); }
function updateLB(){ const d=galleryData[lbF[lbI]]; document.getElementById('lbImg').src=d.src; document.getElementById('lbTitle').textContent=d.title; document.getElementById('lbDesc').textContent=d.desc; document.getElementById('lbCounter').textContent=(lbI+1)+' / '+lbF.length; }

document.addEventListener('keydown',e=>{ const l=document.getElementById('lightbox'); if(!l||!l.classList.contains('open'))return; if(e.key==='Escape')closeLB(); if(e.key==='ArrowLeft')navLB(-1); if(e.key==='ArrowRight')navLB(1); });

let tX=0; const lbEl=document.getElementById('lightbox');
if(lbEl){ lbEl.addEventListener('touchstart',e=>{tX=e.changedTouches[0].screenX;},{passive:true}); lbEl.addEventListener('touchend',e=>{ const d=tX-e.changedTouches[0].screenX; if(Math.abs(d)>50)navLB(d>0?1:-1); },{passive:true}); }
