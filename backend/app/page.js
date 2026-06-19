// app/page.js - Muonekano Mkuu wa Imrano Tech / Electronics Ltd
import React from 'react';

export default function Home() {
  // Data za majaribio ya bidhaa zionekanazo sokoni
  const featuredProducts = [
    {
      id: 1,
      name: "Premium CCTV Camera Kit (4 Channels)",
      category: "Security & Surveillance",
      price: "Tsh 450,000",
      description: "Discover the ultimate in security. Invest in top-tier security safeguarding your home or business effortlessly.",
      image: "🔒",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Off-Grid Solar Inverter System",
      category: "Renewable Energy",
      price: "Tsh 1,200,000",
      description: "High-efficiency dynamic energy setup tailored for home and enterprise backups.",
      image: "☀️",
      badge: "1-Year Warranty"
    },
    {
      id: 3,
      name: "Digital Voltage Stabilizer & Inverter",
      category: "Energy Products",
      price: "Tsh 250,000",
      description: "Protect your sensitive office equipment and home appliances from power spikes.",
      image: "⚡",
      badge: "New Arrival"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B132B] text-white font-sans selection:bg-[#FF007F] selection:text-white">
      
      {/* 1. HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-800 px-4 py-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#FF007F]">
            IMRANO<span className="text-white font-normal">TECH</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-[#FF007F] transition-colors">Home</a>
          <a href="#" className="hover:text-[#FF007F] transition-colors">Security Solutions</a>
          <a href="#" className="hover:text-[#FF007F] transition-colors">Energy Products</a>
          <a href="#" className="hover:text-[#FF007F] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#FF007F] transition-colors">Contact</a>
        </nav>
        <button className="bg-[#FF007F] hover:bg-[#D00067] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,0,127,0.4)]">
          Cart (0)
        </button>
      </header>

      {/* 2. HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#1E293B] py-20 px-4 md:px-8 text-center border-b border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FF007F]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-widest mb-4 border border-cyan-500/20">
            20+ Years Legacy in Mwanza
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-[#FF007F]">Imrano Electronics Ltd</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Your ultimate destination for the best-selling electronic products, premium CCTV security cameras, and reliable solar energy solutions across Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#store" className="bg-[#FF007F] hover:bg-[#D00067] text-white text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,0,127,0.3)] text-center">
              Explore Our Collection
            </a>
            <a href="tel:+255698533107" className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all text-center border border-gray-700">
              Call Expert Support
            </a>
          </div>
        </div>
      </section>

      {/* 3. CORE CATEGORY GRIDS & PRODUCTS */}
      <main id="store" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Our Premium Catalog</h2>
            <p className="text-gray-400 mt-2 font-light">Top-tier verified technology solutions with 1-Year Warranty protection.</p>
          </div>
          <div className="flex gap-2">
            <span className="bg-gray-800 text-xs px-3 py-1.5 rounded-lg border border-gray-700 font-medium">All Products</span>
            <span className="bg-gray-900/50 text-gray-500 text-xs px-3 py-1.5 rounded-lg border border-transparent hover:border-gray-800 cursor-pointer">CCTV</span>
            <span className="bg-gray-900/50 text-gray-500 text-xs px-3 py-1.5 rounded-lg border border-transparent hover:border-gray-800 cursor-pointer">Solar Power</span>
          </div>
        </div>

        {/* Product Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-[#111A36] rounded-2xl overflow-hidden border border-gray-800/60 hover:border-[#FF007F]/40 transition-all duration-300 flex flex-col shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              {/* Product Visual Area */}
              <div className="bg-[#0B1226] aspect-video flex items-center justify-center text-5xl relative group-hover:scale-102 transition-transform duration-300 border-b border-gray-800/40">
                <span>{product.image}</span>
                <span className="absolute top-3 left-3 bg-[#FF007F] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {product.badge}
                </span>
              </div>
              
              {/* Product Info Area */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-[#FF007F] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-800/40">
                  <span className="text-xl font-black text-white">{product.price}</span>
                  <button className="bg-cyan-500 hover:bg-cyan-600 group-hover:bg-[#FF007F] group-hover:hover:bg-[#D00067] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 4. STRATEGIC BRAND FOOTER */}
      <footer className="bg-[#090F24] border-t border-gray-800 mt-20 px-4 py-12 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-12">
          <div>
            <h4 className="text-lg font-bold mb-4 text-white tracking-wide">Imrano Electronics Ltd</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Serving our customers with pride and unparalleled expertise from our hub in Mwanza. Professional system installations guaranteed.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white tracking-wide">Contact Details</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-light">
              <li>📍 Mzambarauni, Lumumba, Mwanza, Tanzania</li>
              <li>📞 Phone: <a href="tel:+255698533107" className="hover:text-[#FF007F] transition-colors">+255 698 533 107</a></li>
              <li>✉️ Email: <a href="mailto:imranhussein55@gmail.com" className="hover:text-[#FF007F] transition-colors">imranhussein55@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-white tracking-wide">Newsletter Updates</h4>
            <p className="text-gray-400 text-xs font-light mb-3">Stay Connected for latest discounts (Email *)</p>
            <div className="flex gap-2">
              <input type="email" placeholder="yourname@email.com" className="bg-[#111A36] border border-gray-700 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-[#FF007F]" />
              <button className="bg-[#FF007F] hover:bg-[#D00067] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <p>© 2026 Imrano Tech / Electronics Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Socials: @chapchapservices</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
