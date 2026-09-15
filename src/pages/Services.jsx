import { Check, Phone, Truck, ShieldCheck, Clock, BadgeIndianRupee } from "lucide-react";
import SEO from "../components/SEO";

const services = [
  {
    id: "cement",
    name: "Cement",
    hindi: "सीमेंट",
    brands: "Ultratech | ACC | Ambuja | Dalmia",
    desc: "100% genuine, direct company supply. Every bag is fresh stock with manufacturing date.",
    uses: "Foundation, Roof, Plaster - Sab ke liye best grade",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/11/359779101/AD/GE/SO/180775747/ultratech-cement-bag-500x500.jpeg",
    price: "Starting ₹360/bag"
  },
  {
    id: "sariya",
    name: "TMT Sariya",
    hindi: "टाटा टिस्कॉन सरिया",
    brands: "Tata Tiscon | SAIL | Jindal | Kamdhenu",
    desc: "Earthquake resistant, high strength TMT bars. Cutting and bending available as per your map.",
    uses: "Beam, Column, Roof, Slab - Ghar ki jaan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffBpEYDLeAitHYDSh86ZR1xhO-V4s7kHjiJkGFX_Y60_yoNRPY4jOJK4f&s=10",
    price: "Starting ₹62/kg"
  },
  {
    id: "morang",
    name: "Morang Sand",
    hindi: "मोरंग रेत",
    brands: "Sone Morang | White Sand | Yamuna Sand",
    desc: "Clean, double washed morang. Zero silt, strong bonding for concrete and plaster.",
    uses: "Concrete, Plastering, Brickwork",
    image: "https://varnahomes.in/images/blog/sand-price-bangalore.jpg",
    price: "Per Tractor / Dumper"
  },
  {
    id: "gitti",
    name: "Gitti / Aggregate",
    hindi: "गिट्टी",
    brands: "20mm | 10mm | Dust",
    desc: "Hard stone aggregate for strong concrete. Proper size grading for maximum strength.",
    uses: "RCC, Foundation, Road Work",
    image: "https://5.imimg.com/data5/ANDROID/Default/2021/9/FV/ID/GI/137562269/product-jpeg-500x500.jpg",
    price: "Per Tractor / Dumper"
  },
  {
    id: "vitrified-tiles",
    name: "Vitrified Tiles",
    hindi: "विट्रिफाइड टाइल्स",
    brands: "Kajaria | Somany | Johnson | Simpolo",
    desc: "Premium tiles for floor and wall. 2x2, 2x4 vitrified, anti-skid, parking tiles available.",
    uses: "Living Room, Bedroom Floor",
    price: "Starting ₹35/sqft",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600"
  },
 {
    id: "pvc-pipe",
    name: "PVC Pipes & Fittings",
    hindi: "पीवीसी पाइप",
    brands: "Supreme | Finolex | Astral",
    desc: "Supreme, Finolex, Astral PVC/CPVC pipes, Sintex tanks, Hindware sanitary. Full bathroom fitting solution with plumber available.",
    uses: "Water Supply, Drainage, Borewell",
    price: "Starting ₹120/pc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvvx0Nme6URwLj9HTFBAqLcoeC2CAibZi7_uk54PGqQ&s=10"
  }
];

const Services = () => {
  return (
    <div className="w-full bg-[#fafaf9] text-zinc-900">
      <SEO />

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <p className="text-orange-500 font-bold tracking-[0.3em] text-">OUR SERVICES • SINCE 2011</p>
        <h1 className="text-4xl lg:text-6xl font-black leading-[0.9] tracking-tighter mt-3">
          HAR CHEEZ, <br />
          <span className="text-zinc-400">EK HI JAGAH.</span>
        </h1>
        <p className="text-zinc-500 mt-4 max-w-xl text- leading-6">
          Cement se leke gitti tak - 100% genuine material, same day delivery in Kantha, Unnao & Kanpur.
          500+ homes ka bharosa. Rate WhatsApp par 10 minute me.
        </p>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
          <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full hover:bg-[#E5F1ED] cursor-pointer px-4 py-2.5 text-xs font-semibold"><ShieldCheck size={16} className="text-green-600"/> 100% Genuine</div>
          <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full hover:bg-[#E5F1ED] cursor-pointer px-4 py-2.5 text-xs font-semibold"><Truck size={16} className="text-orange-500"/> Same Day Delivery</div>
          <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2.5 text-xs hover:bg-[#E5F1ED] cursor-pointer font-semibold"><BadgeIndianRupee size={16} className="text-zinc-800"/> Best Rate in Unnao</div>
          <div className="hidden lg:flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2.5 text-xs font-semibold hover:bg-[#E5F1ED] cursor-pointer"><Clock size={16}/> 8AM - 8PM Open</div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="group bg-white rounded- border border-zinc-200 overflow-hidden hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
              <div className="relative h-60 overflow-hidden">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text- font-bold tracking-widest">{s.hindi}</div>
                <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1.5 rounded-full text-xs font-semibold">{s.price}</div>
              </div>
              <div className="flex flex-col justify-between  p-6">
                <div>

                <h3 className="text- font-bold tracking-tight">{s.name}</h3>
                <p className="text- font-semibold tracking-widest text-orange-500 mt-1">{s.brands}</p>
                <p className="text-zinc-500 text- leading-5 mt-3">{s.desc}</p>

                <div className="flex items-center gap-2 mt-4 text- font-medium text-zinc-700 bg-zinc-50 border border-zinc-100 rounded-full px-3 py-2 w-fit">
                  <Check size={14} className="text-green-600" /> Use: {s.uses}
                </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-5">
                  <a href={`https://wa.me/919984740025?text=Namaste, mujhe ${s.name} ka rate chahiye Kantha Unnao me`} target="_blank" className="text-center bg-zinc-900 hover:bg-black text-white text- font-semibold py-2.5 rounded-full transition-colors">Get Rate</a>
                  <a href="tel:+919984740025" className="text-center bg-white border border-zinc-200 hover:bg-[#E5F1ED] text-zinc-900 text- font-semibold py-2.5 rounded-full transition-colors">Call Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Us */}
        <div className="mt-20 bg-zinc-900 rounded-xl p-8 lg:p-12 text-white grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black leading-[0.9]">500+ GHAR BAN <br/> CHUKE HAIN HUMSE.</h2>
            <p className="text-zinc-400 mt-4 text- leading-6">Unnao-Kanpur highway par 15 saal se. Mistri se leke contractor tak sab jante hain - Rate saaf, maal pakka, delivery time par.</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div><p className="text-3xl font-black">500+</p><p className="text-xs tracking-widest text-zinc-500 mt-1">PROJECTS DONE</p></div>
              <div><p className="text-3xl font-black">15+</p><p className="text-xs tracking-widest text-zinc-500 mt-1">YEARS EXPERIENCE</p></div>
              <div><p className="text-3xl font-black">100%</p><p className="text-xs tracking-widest text-zinc-500 mt-1">GENUINE MATERIAL</p></div>
              <div><p className="text-3xl font-black">Same Day</p><p className="text-xs tracking-widest text-zinc-500 mt-1">DELIVERY</p></div>
            </div>
          </div>
          <div className="bg-orange-400 rounded-xl p-6 text-white">
            <p className="font-bold text-lg">Get Today's Rate in 10 Mins</p>
            <p className="text-sm text-zinc-100 mt-1">Cement, Sariya, Ret, Gitti - full list with best price</p>
            <div className="mt-5 space-y-3">
              <a href="https://wa.me/919984740025?text=Namaste Abhishek Traders, mujhe aaj ka rate list chahiye Kantha Unnao ke liye" target="_blank" className="flex justify-center items-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3.5 whitespace-wrap rounded-full"><Phone size={18}/> WhatsApp Par Rate Lo</a>
              <a href="tel:+919984740025" className="flex justify-center items-center gap-2 w-full bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-3.5 rounded-full">Call: +91 9984740025</a>
            </div>
            <p className="text- text-zinc-100 text-center mt-3">Kantha, Unnao • 26.590471, 80.741738 • 8AM-8PM Open</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;