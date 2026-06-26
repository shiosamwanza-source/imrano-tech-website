
import { useState, useEffect, useRef } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: "cctv-4ch", name: "4-Channel CCTV Kit", category: "Security", price: "TZS 450,000", icon: "📹", specs: ["4× HD Bullet Cameras", "DVR 4-Channel H.265+", "1TB Hard Drive", "Coaxial Cables 20m×4", "Night Vision 30m", "Remote Viewing App"], desc: "Complete home & office surveillance — plug, connect, monitor.", badge: "Best Seller", badgeColor: "#e8006e" },
  { id: "cctv-8ch", name: "8-Channel CCTV Kit", category: "Security", price: "TZS 780,000", icon: "🎥", specs: ["8× HD IP Cameras", "NVR 8-Channel 4K", "2TB Hard Drive", "Cat6 Cable 50m", "Night Vision 40m", "Motion Detection AI"], desc: "Professional-grade security for medium businesses.", badge: "Pro", badgeColor: "#9c27b0" },
  { id: "solar-200", name: "Solar Home Kit 200W", category: "Solar", price: "TZS 850,000", icon: "☀️", specs: ["200W Monocrystalline Panel", "100Ah Deep-Cycle Battery", "1000W Pure Sine Inverter", "20A MPPT Controller", "LED Lighting Kit", "5-Year Panel Warranty"], desc: "Power independence for the Tanzanian home — off-grid ready.", badge: "Hot Deal", badgeColor: "#ff5722" },
  { id: "avr-1000", name: "Imranostar AVR 1000VA", category: "Energy", price: "TZS 120,000", icon: "⚡", specs: ["Input: 140V–260V", "Output: 220V ±5%", "IC Powered Regulator", "Fuse Protection", "Delay Restart", "Response Time: 20ms"], desc: "Protect your appliances from Tanzania's voltage surges.", badge: "Own Brand", badgeColor: "#2196f3" },
  { id: "avr-2000", name: "Imranostar AVR 2000VA", category: "Energy", price: "TZS 210,000", icon: "🔌", specs: ["Input: 140V–260V", "2.0KVA Heavy Duty", "Digital Display", "Fuse Protection", "Servo Motor Type", "For Fridges & AC"], desc: "Heavy-duty voltage regulation for large appliances.", badge: "New", badgeColor: "#00bcd4" },
  { id: "battery-car", name: "Car Battery 60Ah", category: "Battery", price: "TZS 185,000", icon: "🔋", specs: ["Capacity: 60Ah", "Voltage: 12V", "CCA: 540A", "Sealed Maintenance-Free", "18-Month Warranty", "Fast Charging"], desc: "Reliable starting power for all vehicle types in Tanzania.", badge: "Top Pick", badgeColor: "#4caf50" },
];

const REPAIR_STATUSES = ["Received", "Diagnosis", "Awaiting Parts", "In Repair", "Testing", "Ready"];

function generateId() {
  return "IMP-" + Date.now().toString(36).toUpperCase().slice(-6);
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function ImranoCorporateOS() {
  const [activeModule, setActiveModule] = useState("display");
  const [spotlightProduct, setSpotlightProduct] = useState(PRODUCTS[0]);
  const [tvMode, setTvMode] = useState(false);
  const [warranties, setWarranties] = useState([
    { id: "IMP-A1B2C3", name: "Juma Hassan", phone: "+255712345678", product: "4-Channel CCTV Kit", serial: "CCTV-4CH-00142", date: "2024-11-15", status: "Active" },
    { id: "IMP-D4E5F6", name: "Fatuma Ally", phone: "+255698112233", product: "Solar Home Kit 200W", serial: "SOL-200-00891", date: "2024-09-03", status: "Active" },
    { id: "IMP-G7H8I9", name: "Bakari Mwenda", phone: "+255756789012", product: "Imranostar AVR 1000VA", serial: "AVR-1K-04412", date: "2024-07-20", status: "Expiring Soon" },
  ]);
  const [repairs, setRepairs] = useState([
    { id: generateId(), customer: "Hamisi Salum", phone: "+255765432100", device: "CCTV DVR", issue: "No video output on channels 3 & 4", status: "In Repair", received: "2025-06-18", tech: "Rashid", vehicle: "V001" },
    { id: generateId(), customer: "Mariam Jafari", phone: "+255744123456", device: "Solar Inverter 1000W", issue: "Beeping alarm, battery not charging", status: "Diagnosis", received: "2025-06-20", tech: "Amin", vehicle: "V002" },
    { id: generateId(), customer: "Salehe Kibwana", phone: "+255712987654", device: "Car Battery 60Ah", issue: "Dead cell, won't hold charge", status: "Ready", received: "2025-06-17", tech: "Hamisi", vehicle: "V001" },
  ]);

  return (
    <div style={{ minHeight: "100vh", background: "#060c2e", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#ccd6f6" }}>
      {/* ── TOP BAR ── */}
      <div style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#e8006e,#ff6b35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
          <div>
            <span style={{ fontWeight: 800, fontSize: 14, color: "#fff", letterSpacing: 0.5 }}>IMRANO</span>
            <span style={{ fontWeight: 800, fontSize: 14, color: "#e8006e" }}>TECH</span>
            <span style={{ color: "#7b8ab8", fontSize: 11, marginLeft: 10, letterSpacing: 2, textTransform: "uppercase" }}>Corporate OS v1.2</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Clock />
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00e676", boxShadow: "0 0 8px #00e676" }}></div>
            <span style={{ fontSize: 11, color: "#7b8ab8" }}>Lumumba Street, Mwanza</span>
          </div>
        </div>
      </div>

      {/* ── MODULE TABS ── */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 24px", background: "rgba(255,255,255,0.02)" }}>
        {[
          { id: "display", icon: "📺", label: "In-Store Display", sub: "Smart TV Enhancer" },
          { id: "warranty", icon: "🛡️", label: "Warranty CRM", sub: "Customer Retention" },
          { id: "repairs", icon: "🔧", label: "Repairs Tracker", sub: "Logistics Pipeline" },
        ].map(m => (
          <button key={m.id} onClick={() => setActiveModule(m.id)} style={{ padding: "14px 28px", background: "none", border: "none", borderBottom: activeModule === m.id ? "2px solid #e8006e" : "2px solid transparent", color: activeModule === m.id ? "#fff" : "#7b8ab8", cursor: "pointer", display: "flex", alignItems: "center", gap: 10, transition: "all .2s", marginBottom: -1 }}>
            <span style={{ fontSize: 18 }}>{m.icon}</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.3 }}>{m.label}</div>
              <div style={{ fontSize: 10, color: activeModule === m.id ? "#e8006e" : "#555", textTransform: "uppercase", letterSpacing: 1.5 }}>{m.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {/* ── MODULE CONTENT ── */}
      <div style={{ padding: "0" }}>
        {activeModule === "display" && <DisplayModule products={PRODUCTS} spotlight={spotlightProduct} setSpotlight={setSpotlightProduct} tvMode={tvMode} setTvMode={setTvMode} />}
        {activeModule === "warranty" && <WarrantyModule warranties={warranties} setWarranties={setWarranties} />}
        {activeModule === "repairs" && <RepairsModule repairs={repairs} setRepairs={setRepairs} />}
      </div>
    </div>
  );
}

// ── CLOCK ─────────────────────────────────────────────────────────────────────
function Clock() {
  const [t, setT] = useState(new Date());
  useEffect(() => { const i = setInterval(() => setT(new Date()), 1000); return () => clearInterval(i); }, []);
  return (
    <span style={{ fontSize: 12, color: "#7b8ab8", fontFeatureSettings: "'tnum'" }}>
      {t.toLocaleTimeString("sw-TZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
    </span>
  );
}

// ── MODULE 1: IN-STORE DISPLAY ────────────────────────────────────────────────
function DisplayModule({ products, spotlight, setSpotlight, tvMode, setTvMode }) {
  const [animating, setAnimating] = useState(false);

  function selectProduct(p) {
    setAnimating(true);
    setTimeout(() => { setSpotlight(p); setAnimating(false); }, 300);
  }

  if (tvMode) return <TVDisplay product={spotlight} onExit={() => setTvMode(false)} />;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", minHeight: "calc(100vh - 112px)" }}>
      {/* Product selector */}
      <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", padding: 20, overflowY: "auto", background: "rgba(0,0,0,0.2)" }}>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "#e8006e", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>Chagua Bidhaa</div>
          <div style={{ fontSize: 12, color: "#7b8ab8", lineHeight: 1.5 }}>Bonyeza bidhaa yoyote — itaonekana moja kwa moja kwenye TV ya dukani</div>
        </div>
        {products.map(p => (
          <div key={p.id} onClick={() => selectProduct(p)} style={{ padding: "14px 16px", borderRadius: 10, marginBottom: 8, cursor: "pointer", border: `1px solid ${spotlight.id === p.id ? "#e8006e" : "rgba(255,255,255,0.06)"}`, background: spotlight.id === p.id ? "rgba(232,0,110,0.08)" : "rgba(255,255,255,0.02)", transition: "all .2s", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: spotlight.id === p.id ? "linear-gradient(135deg,#e8006e,#ff6b35)" : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "all .2s" }}>{p.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: spotlight.id === p.id ? "#fff" : "#ccd6f6", marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
              <div style={{ fontSize: 11, color: "#7b8ab8" }}>{p.price}</div>
            </div>
            {spotlight.id === p.id && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e8006e", flexShrink: 0 }}></div>}
          </div>
        ))}
      </div>

      {/* Preview + TV Launch */}
      <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: "#e8006e", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>TV Preview — Inayoonyeshwa Sasa</div>
          </div>
          <button onClick={() => setTvMode(true)} style={{ padding: "10px 24px", background: "linear-gradient(135deg,#e8006e,#ff1a80)", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 20px rgba(232,0,110,0.4)" }}>
            📺 Fungua Skrini ya TV
          </button>
        </div>

        {/* Big preview card */}
        <div style={{ flex: 1, borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "linear-gradient(145deg,#0a1040,#0f0530)", position: "relative", minHeight: 400, opacity: animating ? 0 : 1, transition: "opacity .3s" }}>
          {/* Glow */}
          <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle,rgba(232,0,110,0.15),transparent 65%)", pointerEvents: "none" }}></div>
          <div style={{ position: "absolute", bottom: -80, left: -60, width: 300, height: 300, background: "radial-gradient(circle,rgba(0,212,255,0.08),transparent 65%)", pointerEvents: "none" }}></div>

          <div style={{ position: "relative", zIndex: 1, padding: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, height: "100%", alignItems: "center" }}>
            {/* Left */}
            <div>
              <div style={{ display: "inline-block", background: spotlight.badgeColor, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 1, marginBottom: 20 }}>{spotlight.badge}</div>
              <div style={{ fontSize: 56, marginBottom: 20, filter: "drop-shadow(0 0 30px rgba(232,0,110,0.4))" }}>{spotlight.icon}</div>
              <div style={{ fontSize: 12, color: "#e8006e", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>{spotlight.category}</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>{spotlight.name}</div>
              <div style={{ fontSize: 15, color: "#7b8ab8", lineHeight: 1.7, marginBottom: 24 }}>{spotlight.desc}</div>
              <div style={{ fontSize: 32, fontWeight: 900, background: "linear-gradient(135deg,#e8006e,#ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{spotlight.price}</div>
              <div style={{ marginTop: 8, fontSize: 12, color: "#00e676" }}>✓ Dhamana ya mwaka mmoja &nbsp;|&nbsp; ✓ Usakinishaji wa kitaalamu</div>
            </div>
            {/* Right — specs */}
            <div>
              <div style={{ fontSize: 11, color: "#7b8ab8", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Sifa za Kifaa</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {spotlight.specs.map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#e8006e", flexShrink: 0 }}></div>
                    <span style={{ fontSize: 13, color: "#ccd6f6" }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: "14px 20px", borderRadius: 12, background: "rgba(232,0,110,0.1)", border: "1px solid rgba(232,0,110,0.25)", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>📞</span>
                <div>
                  <div style={{ fontSize: 11, color: "#e8006e", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Wasiliana Nasi</div>
                  <div style={{ fontSize: 14, color: "#fff", fontWeight: 700 }}>+255 698 533 107</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick select row */}
        <div>
          <div style={{ fontSize: 11, color: "#7b8ab8", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Mabadiliko ya Haraka</div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {products.map(p => (
              <button key={p.id} onClick={() => selectProduct(p)} style={{ padding: "8px 16px", borderRadius: 20, background: spotlight.id === p.id ? "#e8006e" : "rgba(255,255,255,0.05)", border: `1px solid ${spotlight.id === p.id ? "#e8006e" : "rgba(255,255,255,0.1)"}`, color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .2s", display: "flex", alignItems: "center", gap: 6 }}>
                {p.icon} {p.name.split(" ").slice(0, 2).join(" ")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── TV FULLSCREEN DISPLAY ─────────────────────────────────────────────────────
function TVDisplay({ product, onExit }) {
  const [tick, setTick] = useState(0);
  useEffect(() => { const i = setInterval(() => setTick(t => t + 1), 3000); return () => clearInterval(i); }, []);
  const specIdx = tick % product.specs.length;

  return (
    <div style={{ minHeight: "calc(100vh - 112px)", background: "linear-gradient(145deg,#060c2e 0%,#0a1040 40%,#0f0530 100%)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 60 }}>
      {/* BG */}
      <div style={{ position: "absolute", top: -200, right: -200, width: 800, height: 800, background: "radial-gradient(circle,rgba(232,0,110,0.18),transparent 60%)", pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", bottom: -200, left: -100, width: 600, height: 600, background: "radial-gradient(circle,rgba(0,212,255,0.1),transparent 60%)", pointerEvents: "none" }}></div>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.03) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }}></div>

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,#e8006e,#ff6b35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚡</div>
          <div><div style={{ fontSize: 22, fontWeight: 900, color: "#fff", letterSpacing: 1 }}>IMRANO<span style={{ color: "#e8006e" }}>TECH</span></div><div style={{ fontSize: 11, color: "#7b8ab8", letterSpacing: 2 }}>MWANZA, TANZANIA • LUMUMBA STREET</div></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ textAlign: "right" }}><div style={{ fontSize: 11, color: "#7b8ab8", textTransform: "uppercase", letterSpacing: 2 }}>Dhamana</div><div style={{ fontSize: 16, fontWeight: 700, color: "#00e676" }}>✓ Mwaka 1</div></div>
          <button onClick={onExit} style={{ padding: "8px 20px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>✕ Rudi</button>
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1, flex: 1, paddingTop: 40, paddingBottom: 40 }}>
        <div>
          <div style={{ display: "inline-block", background: product.badgeColor, color: "#fff", fontSize: 13, fontWeight: 700, padding: "6px 18px", borderRadius: 30, letterSpacing: 1, marginBottom: 24 }}>{product.badge}</div>
          <div style={{ fontSize: 100, marginBottom: 28, filter: "drop-shadow(0 0 50px rgba(232,0,110,0.5))" }}>{product.icon}</div>
          <div style={{ fontSize: 14, color: "#e8006e", fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", marginBottom: 12 }}>{product.category}</div>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>{product.name}</div>
          <div style={{ fontSize: 18, color: "#7b8ab8", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>{product.desc}</div>
          <div style={{ fontSize: 56, fontWeight: 900, background: "linear-gradient(135deg,#e8006e,#ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 16 }}>{product.price}</div>
          <div style={{ fontSize: 16, color: "#00e676", fontWeight: 600 }}>✓ Dhamana ya mwaka mmoja &nbsp;&nbsp; ✓ Usakinishaji wa kitaalamu</div>
        </div>
        <div>
          <div style={{ fontSize: 13, color: "#7b8ab8", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>Sifa za Kifaa</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {product.specs.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 14, background: i === specIdx ? "rgba(232,0,110,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${i === specIdx ? "rgba(232,0,110,0.4)" : "rgba(255,255,255,0.06)"}`, transition: "all .5s" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === specIdx ? "#e8006e" : "#444", flexShrink: 0, transition: "all .5s" }}></div>
                <span style={{ fontSize: 16, color: i === specIdx ? "#fff" : "#7b8ab8", fontWeight: i === specIdx ? 700 : 400, transition: "all .5s" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: 40 }}>
          <div><div style={{ fontSize: 11, color: "#7b8ab8", textTransform: "uppercase", letterSpacing: 2 }}>Simu / WhatsApp</div><div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>+255 698 533 107</div></div>
          <div><div style={{ fontSize: 11, color: "#7b8ab8", textTransform: "uppercase", letterSpacing: 2 }}>Anwani</div><div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>Lumumba Street, Mwanza</div></div>
          <div><div style={{ fontSize: 11, color: "#7b8ab8", textTransform: "uppercase", letterSpacing: 2 }}>Mitandao ya Jamii</div><div style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>@chapchapservices</div></div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["M-Pesa", "Tigo", "Airtel", "HaloPesa"].map(m => (
            <div key={m} style={{ padding: "6px 14px", borderRadius: 20, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", fontSize: 12, color: "#ccd6f6", fontWeight: 600 }}>{m}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── MODULE 2: WARRANTY CRM ────────────────────────────────────────────────────
function WarrantyModule({ warranties, setWarranties }) {
  const [form, setForm] = useState({ name: "", phone: "", product: "", serial: "" });
  const [search, setSearch] = useState("");
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);

  function register() {
    if (!form.name || !form.phone || !form.product || !form.serial) return;
    const entry = { id: generateId(), ...form, date: new Date().toISOString().split("T")[0], status: "Active" };
    setWarranties(w => [entry, ...w]);
    setSuccess(`✓ Dhamana ya ${form.name} imesajiliwa! (${entry.id})`);
    setForm({ name: "", phone: "", product: "", serial: "" });
    setShowForm(false);
    setTimeout(() => setSuccess(""), 5000);
  }

  const filtered = warranties.filter(w =>
    w.name.toLowerCase().includes(search.toLowerCase()) ||
    w.phone.includes(search) ||
    w.serial.toLowerCase().includes(search.toLowerCase()) ||
    w.id.toLowerCase().includes(search.toLowerCase())
  );

  function statusColor(s) {
    if (s === "Active") return "#00e676";
    if (s === "Expiring Soon") return "#ffd700";
    if (s === "Expired") return "#f44336";
    return "#7b8ab8";
  }

  function daysLeft(dateStr) {
    const d = new Date(dateStr);
    d.setFullYear(d.getFullYear() + 1);
    return Math.ceil((d - new Date()) / 86400000);
  }

  return (
    <div style={{ padding: 28 }}>
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>Warranty CRM</div>
          <div style={{ fontSize: 13, color: "#7b8ab8" }}>Wateja {warranties.length} wamesajiliwa — dhamana zinafuatiliwa otomatiki</div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ position: "relative" }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Tafuta kwa jina, simu, serial..." style={{ padding: "10px 16px 10px 38px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 13, outline: "none", width: 280 }} />
            <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#7b8ab8" }}>🔍</span>
          </div>
          <button onClick={() => setShowForm(!showForm)} style={{ padding: "10px 22px", background: "linear-gradient(135deg,#e8006e,#ff1a80)", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>+ Sajili Dhamana</button>
        </div>
      </div>

      {success && <div style={{ padding: "12px 20px", background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.3)", borderRadius: 10, color: "#00e676", fontSize: 13, fontWeight: 600, marginBottom: 20 }}>{success}</div>}

      {/* Registration form */}
      {showForm && (
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(232,0,110,0.25)", borderRadius: 16, padding: 28, marginBottom: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>🛡️ Usajili wa Dhamana Mpya</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { key: "name", label: "Jina la Mteja", placeholder: "e.g. Juma Hassan" },
              { key: "phone", label: "Namba ya Simu / WhatsApp", placeholder: "+255 7XX XXX XXX" },
              { key: "product", label: "Bidhaa Iliyonunuliwa", placeholder: "e.g. 4-Channel CCTV Kit" },
              { key: "serial", label: "Serial Number ya Kifaa", placeholder: "e.g. CCTV-4CH-00142" },
            ].map(f => (
              <div key={f.key}>
                <label style={{ fontSize: 11, color: "#7b8ab8", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>{f.label}</label>
                <input value={form[f.key]} onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 13, outline: "none" }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button onClick={register} style={{ padding: "11px 28px", background: "linear-gradient(135deg,#e8006e,#ff1a80)", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Sajili Sasa</button>
            <button onClick={() => setShowForm(false)} style={{ padding: "11px 20px", background: "rgba(255,255,255,0.06)", color: "#7b8ab8", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 13, cursor: "pointer" }}>Ghairi</button>
          </div>
        </div>
      )}

      {/* Warranty table */}
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 140px 1fr 120px 100px 100px", padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}>
          {["ID", "Mteja", "Simu", "Bidhaa / Serial", "Tarehe", "Siku", "Hali"].map(h => (
            <div key={h} style={{ fontSize: 10, fontWeight: 700, color: "#7b8ab8", letterSpacing: 2, textTransform: "uppercase" }}>{h}</div>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div style={{ padding: 40, textAlign: "center", color: "#7b8ab8", fontSize: 14 }}>Hakuna matokeo ya utafutaji</div>
        ) : filtered.map(w => {
          const days = daysLeft(w.date);
          return (
            <div key={w.id} style={{ display: "grid", gridTemplateColumns: "100px 1fr 140px 1fr 120px 100px 100px", padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)", alignItems: "center", transition: "background .2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <div style={{ fontSize: 11, fontFamily: "monospace", color: "#e8006e", fontWeight: 700 }}>{w.id}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{w.name}</div>
              <div style={{ fontSize: 12, color: "#7b8ab8" }}>{w.phone}</div>
              <div>
                <div style={{ fontSize: 13, color: "#ccd6f6", fontWeight: 600 }}>{w.product}</div>
                <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace" }}>{w.serial}</div>
              </div>
              <div style={{ fontSize: 12, color: "#7b8ab8" }}>{w.date}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: days < 30 ? "#ffd700" : days < 0 ? "#f44336" : "#00e676" }}>{days < 0 ? "Imekwisha" : `Siku ${days}`}</div>
              <div style={{ display: "inline-block", padding: "4px 10px", borderRadius: 20, background: `${statusColor(w.status)}18`, color: statusColor(w.status), fontSize: 11, fontWeight: 700, border: `1px solid ${statusColor(w.status)}40` }}>{w.status}</div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 24 }}>
        {[
          { label: "Jumla ya Wateja", value: warranties.length, icon: "👥", color: "#2196f3" },
          { label: "Dhamana Hai", value: warranties.filter(w => w.status === "Active").length, icon: "🛡️", color: "#00e676" },
          { label: "Zinaisha Hivi Karibuni", value: warranties.filter(w => w.status === "Expiring Soon").length, icon: "⚠️", color: "#ffd700" },
          { label: "Zimekwisha", value: warranties.filter(w => w.status === "Expired").length, icon: "❌", color: "#f44336" },
        ].map(s => (
          <div key={s.label} style={{ padding: "20px 24px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{s.icon}</div>
            <div><div style={{ fontSize: 26, fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.value}</div><div style={{ fontSize: 11, color: "#7b8ab8", marginTop: 4 }}>{s.label}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MODULE 3: REPAIRS TRACKER ─────────────────────────────────────────────────
function RepairsModule({ repairs, setRepairs }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ customer: "", phone: "", device: "", issue: "", tech: "", vehicle: "V001" });
  const [filter, setFilter] = useState("All");
  const [notification, setNotification] = useState("");

  function addRepair() {
    if (!form.customer || !form.phone || !form.device || !form.issue) return;
    const r = { id: generateId(), ...form, status: "Received", received: new Date().toISOString().split("T")[0] };
    setRepairs(rs => [r, ...rs]);
    setForm({ customer: "", phone: "", device: "", issue: "", tech: "", vehicle: "V001" });
    setShowForm(false);
  }

  function updateStatus(id, newStatus) {
    setRepairs(rs => rs.map(r => r.id === id ? { ...r, status: newStatus } : r));
    if (newStatus === "Ready") {
      const rep = repairs.find(r => r.id === id);
      setNotification(`📲 SMS imetumwa kwa ${rep?.customer || "mteja"}: "Kifaa chako kiko tayari kuchukuliwa dukani — Imrano Electronics, Lumumba Street, Mwanza. Asante!"`);
      setTimeout(() => setNotification(""), 7000);
    }
  }

  const statusColor = { "Received": "#7b8ab8", "Diagnosis": "#2196f3", "Awaiting Parts": "#ff9800", "In Repair": "#e8006e", "Testing": "#9c27b0", "Ready": "#00e676" };

  const vehicles = { "V001": "🚗 Land Cruiser #001", "V002": "🚐 Hiace Van #002", "V003": "🏍️ Boda-Boda #003", "V004": "🚗 Corolla #004" };

  const filtered = filter === "All" ? repairs : repairs.filter(r => r.status === filter);

  const vehicleJobs = Object.entries(vehicles).map(([id, label]) => ({
    id, label,
    jobs: repairs.filter(r => r.vehicle === id && r.status !== "Ready"),
  }));

  return (
    <div style={{ padding: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>Repairs & Logistics Tracker</div>
          <div style={{ fontSize: 13, color: "#7b8ab8" }}>Mafundi na magari — kazi {repairs.length} zinafuatiliwa sasa hivi</div>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "10px 22px", background: "linear-gradient(135deg,#e8006e,#ff1a80)", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>+ Ongeza Kazi</button>
      </div>

      {notification && (
        <div style={{ padding: "14px 20px", background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.3)", borderRadius: 10, color: "#00e676", fontSize: 13, fontWeight: 600, marginBottom: 20, display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ fontSize: 18 }}>✅</span>
          <div><div style={{ fontWeight: 800, marginBottom: 4 }}>SMS Imetumwa Otomatiki!</div><div>{notification}</div></div>
        </div>
      )}

      {/* Add form */}
      {showForm && (
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(232,0,110,0.25)", borderRadius: 16, padding: 28, marginBottom: 24 }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 20 }}>🔧 Sajili Kazi Mpya ya Matengenezo</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { key: "customer", label: "Jina la Mteja", placeholder: "e.g. Hamisi Salum" },
              { key: "phone", label: "Simu ya Mteja", placeholder: "+255 7XX XXX XXX" },
              { key: "device", label: "Kifaa Kilicholetwa", placeholder: "e.g. CCTV DVR, Solar Inverter" },
              { key: "issue", label: "Tatizo Lililotajwa", placeholder: "e.g. Hakuna picha kwenye skrini" },
              { key: "tech", label: "Fundi Aliyepewa", placeholder: "e.g. Rashid, Amin" },
            ].map(f => (
              <div key={f.key} style={f.key === "issue" ? { gridColumn: "1 / -1" } : {}}>
                <label style={{ fontSize: 11, color: "#7b8ab8", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>{f.label}</label>
                <input value={form[f.key]} onChange={e => setForm(v => ({ ...v, [f.key]: e.target.value }))} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 13, outline: "none" }} />
              </div>
            ))}
            <div>
              <label style={{ fontSize: 11, color: "#7b8ab8", fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", display: "block", marginBottom: 8 }}>Gari la Usafirishaji</label>
              <select value={form.vehicle} onChange={e => setForm(v => ({ ...v, vehicle: e.target.value }))} style={{ width: "100%", padding: "11px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 13, outline: "none" }}>
                {Object.entries(vehicles).map(([id, label]) => <option key={id} value={id} style={{ background: "#060c2e" }}>{label}</option>)}
              </select>
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button onClick={addRepair} style={{ padding: "11px 28px", background: "linear-gradient(135deg,#e8006e,#ff1a80)", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>Sajili Kazi</button>
            <button onClick={() => setShowForm(false)} style={{ padding: "11px 20px", background: "rgba(255,255,255,0.06)", color: "#7b8ab8", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, fontSize: 13, cursor: "pointer" }}>Ghairi</button>
          </div>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 24 }}>
        {/* Main repairs list */}
        <div>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {["All", ...REPAIR_STATUSES].map(s => (
              <button key={s} onClick={() => setFilter(s)} style={{ padding: "7px 16px", borderRadius: 20, background: filter === s ? (statusColor[s] || "#e8006e") : "rgba(255,255,255,0.05)", border: `1px solid ${filter === s ? (statusColor[s] || "#e8006e") : "rgba(255,255,255,0.1)"}`, color: "#fff", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .2s" }}>
                {s} {s !== "All" && <span style={{ opacity: 0.7 }}>({repairs.filter(r => r.status === s).length})</span>}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtered.map(r => (
              <div key={r.id} style={{ padding: "20px 24px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: `1px solid ${r.status === "Ready" ? "rgba(0,230,118,0.25)" : "rgba(255,255,255,0.06)"}`, transition: "all .2s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span style={{ fontSize: 13, fontFamily: "monospace", color: "#e8006e", fontWeight: 700 }}>{r.id}</span>
                      <span style={{ fontSize: 11, color: "#7b8ab8" }}>• {r.received} • {vehicles[r.vehicle]}</span>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{r.customer}</div>
                    <div style={{ fontSize: 13, color: "#7b8ab8" }}>{r.phone} {r.tech && <span>• Fundi: <strong style={{ color: "#ccd6f6" }}>{r.tech}</strong></span>}</div>
                  </div>
                  <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 20, background: `${statusColor[r.status]}18`, color: statusColor[r.status], fontSize: 12, fontWeight: 700, border: `1px solid ${statusColor[r.status]}40`, flexShrink: 0 }}>{r.status}</div>
                </div>

                <div style={{ marginBottom: 14, padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", borderLeft: "3px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ fontSize: 11, color: "#7b8ab8", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Kifaa / Tatizo</div>
                  <div style={{ fontSize: 13, color: "#ccd6f6" }}><strong style={{ color: "#fff" }}>{r.device}</strong> — {r.issue}</div>
                </div>

                {/* Pipeline */}
                <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 16 }}>
                  {REPAIR_STATUSES.map((s, i) => {
                    const idx = REPAIR_STATUSES.indexOf(r.status);
                    const done = i <= idx;
                    return (
                      <div key={s} style={{ display: "flex", alignItems: "center", gap: 4, flex: 1 }}>
                        <div style={{ flex: 1, height: 3, borderRadius: 2, background: done ? statusColor[r.status] : "rgba(255,255,255,0.08)", transition: "all .3s" }}></div>
                        <div title={s} style={{ width: 10, height: 10, borderRadius: "50%", background: i === idx ? statusColor[r.status] : done ? statusColor[r.status] : "rgba(255,255,255,0.12)", boxShadow: i === idx ? `0 0 8px ${statusColor[r.status]}` : "none", flexShrink: 0, transition: "all .3s" }}></div>
                      </div>
                    );
                  })}
                </div>

                {/* Status controls */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {REPAIR_STATUSES.map(s => (
                    <button key={s} onClick={() => updateStatus(r.id, s)} disabled={r.status === s} style={{ padding: "6px 12px", borderRadius: 8, background: r.status === s ? `${statusColor[s]}22` : "rgba(255,255,255,0.04)", border: `1px solid ${r.status === s ? statusColor[s] : "rgba(255,255,255,0.08)"}`, color: r.status === s ? statusColor[s] : "#7b8ab8", fontSize: 11, fontWeight: 600, cursor: r.status === s ? "default" : "pointer", transition: "all .2s" }}>
                      {s === "Ready" ? "✅ " : ""}{s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {filtered.length === 0 && <div style={{ padding: 40, textAlign: "center", color: "#7b8ab8", fontSize: 14, border: "1px dashed rgba(255,255,255,0.08)", borderRadius: 14 }}>Hakuna kazi katika hatua hii</div>}
          </div>
        </div>

        {/* Vehicle panel */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#7b8ab8", letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Magari 4 — Hali ya Kazi</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {vehicleJobs.map(v => (
              <div key={v.id} style={{ padding: "16px 18px", borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{v.label}</div>
                  <div style={{ padding: "4px 10px", borderRadius: 20, background: v.jobs.length > 0 ? "rgba(232,0,110,0.15)" : "rgba(0,230,118,0.12)", color: v.jobs.length > 0 ? "#e8006e" : "#00e676", fontSize: 11, fontWeight: 700 }}>{v.jobs.length > 0 ? `${v.jobs.length} kazi` : "Huru"}</div>
                </div>
                {v.jobs.length > 0 ? v.jobs.map(j => (
                  <div key={j.id} style={{ fontSize: 11, color: "#7b8ab8", padding: "6px 0", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between" }}>
                    <span>{j.customer} — {j.device.split(" ").slice(0, 2).join(" ")}</span>
                    <span style={{ color: statusColor[j.status] }}>{j.status}</span>
                  </div>
                )) : (
                  <div style={{ fontSize: 12, color: "#3a4060" }}>Hakuna kazi zinazoendelea</div>
                )}
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div style={{ marginTop: 20, padding: "20px", borderRadius: 14, background: "rgba(232,0,110,0.05)", border: "1px solid rgba(232,0,110,0.15)" }}>
            <div style={{ fontSize: 11, color: "#e8006e", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Muhtasari wa Kazi</div>
            {REPAIR_STATUSES.map(s => {
              const count = repairs.filter(r => r.status === s).length;
              return count > 0 ? (
                <div key={s} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor[s] }}></div>
                    <span style={{ fontSize: 12, color: "#7b8ab8" }}>{s}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: statusColor[s] }}>{count}</span>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
