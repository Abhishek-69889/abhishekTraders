import { Phone, MapPin, Clock, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-zinc-400 border-t border-zinc-900">
      {/* Top CTA */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 py-10 border-b border-zinc-900">
          <div>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter leading-[0.9]">
              GHAR BANA RAHE HO?<br />
              <span className="text-zinc-600">RATE TO LO.</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <a href="https://wa.me/919984740025?text=Namaste Abhishek Traders, mujhe building material ka rate chahiye Kantha Unnao me" target="_blank" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-6 py-3.5 rounded-full text-sm">
              WhatsApp <ArrowUpRight size={16}/>
            </a>
            <a href="tel:+919984740025" className="flex items-center gap-2 bg-white text-black font-bold px-6 py-3.5 rounded-full text-sm">
              <Phone size={16}/> 9984740025
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-black text-white text-sm">AT</div>
            <p className="text-white font-black tracking-tighter text-lg">ABHISHEK TRADERS</p>
          </div>
          <p className="text-sm leading-6 mt-4">
            15+ years trusted building material supplier in Kantha, Unnao . Cement, Sariya, Morang, Gitti, Tiles, Plumbing - 100% genuine, same day delivery.
          </p>
          <div className="flex gap-2 mt-5">
            <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text- font-bold tracking-widest">EST. 2011</div>
            <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text- font-bold tracking-widest">500+ HOMES</div>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-bold text-sm tracking-widest">SERVICES</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="/services" className="hover:text-white transition-colors">Cement - Ultratech, ACC, Ambuja</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">TMT Sariya - Tata Tiscon, SAIL</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Morang Sand & Gitti</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Bricks & AAC Blocks</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Tiles & Flooring - Kajaria, Somany</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Plumbing - Supreme, Astral, Sintex</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-bold text-sm tracking-widest">COMPANY</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="/journey" className="hover:text-white transition-colors">Our Journey 2011-2026</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services & Rates</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="https://wa.me/919984740025" target="_blank" className="hover:text-white transition-colors">Get Quotation</a></li>
            <li><a href="tel:+919984740025" className="hover:text-white transition-colors">Same Day Delivery</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-bold text-sm tracking-widest">CONTACT • KANTHA UNNAO</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex gap-3">
              <MapPin size={18} className="text-orange-500 shrink-0 mt-0.5" />
              <p className="leading-5">
                Abhishek Traders,<br/>
                Kantha, Asoha Block,<br/>
                Unnao, UP - 209859<br/>
                <span className="text-zinc-500 text-xs">Lat: 26.590471, Long: 80.741738</span>
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={18} className="text-orange-500" />
              <a href="tel:+919984740025" className="hover:text-white font-semibold">+91 99847 40025</a>
            </div>
            <div className="flex gap-3 items-center">
              <Clock size={18} className="text-orange-500" />
              <p>8:00 AM - 8:00 PM (Mon-Sat)<br/>9:00 AM - 2:00 PM (Sun)</p>
            </div>
          </div>

          <div className="mt-6 bg-zinc-900 border border-zinc-800 hover:bg-zinc-950 rounded-xl p-3 flex items-center gap-3 ">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-white flex items-center justify-center font-black text-black text-xs">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_G6g1i3aYQ0xU66Ogazg2zAEpJAsHyeRbyO0YdDgoQ&s=10" alt="" 
              className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-white text-xs font-bold">Google Rating</p>
              <p className="text-xs">5 ★ (5+ Reviews) • Unnao</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col lg:flex-row justify-between items-center gap-3 text-">
          <p>© 2026 Abhishek Traders Kantha, Unnao. All Rights Reserved. Built on Trust.</p>
          <div className="flex gap-4">
            <Link to="/policy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            <Link to='/terms' className="hover:text-white cursor-pointer">Terms</Link>
            <span className="text-zinc-600">Made in Unnao with ♡ for 500+ Homes</span>
          </div>
        </div>
      </div>

      {/* Local SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BuildingMaterialsStore",
        "name": "Abhishek Traders",
        "address": { "@type": "PostalAddress", "addressLocality": "Kantha", "addressRegion": "Unnao, UP", "postalCode": "209859", "addressCountry": "IN" },
        "geo": { "@type": "GeoCoordinates", "latitude": "26.590471", "longitude": "80.741738" },
        "telephone": "+919984740025"
      })}} />
    </footer>
  );
};

export default Footer;