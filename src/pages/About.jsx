import { Award, Truck, ShieldCheck, Users, Clock, MapPin, Quote } from 'lucide-react'

const About = () => {
  return (
    <div className='w-full bg-[#fafaf9] text-zinc-900'>

      {/* --- HERO --- */}
      <div className='relative w-full h- overflow-hidden'>
        <img
          src="https://i.pinimg.com/1200x/6c/82/e4/6c82e4a0db3b66e5128c77190b8d4570.jpg"
          className='w-full h-full object-cover'
          alt="shop"
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30'></div>

        <div className='absolute inset-0 flex items-center'>
          <div className='max-w-7xl mx-auto w-full px-6 lg:px-8'>
            <div className='max-w-2xl'>
              <div className='inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-4'>
                OUR STORY • SINCE 2006
              </div>
              <h1 className='text-4xl lg:text-6xl font-bold text-white leading-[1.05]'>
                Ghar Sirf Bante Nahi,<br/>
                <span className='text-orange-400'>Bharose Par Tikte Hain.</span>
              </h1>
              <p className='text-zinc-300 text-lg mt-4 leading-relaxed'>
                20+ saal se Unnao aur Kanpur ke har ghar ki neev mein Abhishek Traders ka bharosa hai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- STORY SECTION --- */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center'>

        <div className='relative'>
          <div className='rounded- overflow-hidden shadow-2xl'>
            <img
              src="https://i.pinimg.com/736x/0c/98/72/0c9872175f64fc480efa8ecac5208713.jpg"
              className='w-full h- object-cover'
              alt="founder"
            />
          </div>
          {/* Founder Card */}
          <div className='absolute -bottom-8 -right-2 lg:-right-8 bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-100 max-w-'>
            <div className='flex gap-3'>
              <img src="https://i.pravatar.cc/100?img=15" className='w-12 h-12 rounded-full object-cover' alt="" />
              <div>
                <p className='font-bold text-zinc-900 leading-none'>Raju Tiwari</p>
                <p className='text-xs text-zinc-500 mt-1'>Founder, Abhishek Traders</p>
                <p className='text-xs text-orange-600 font-semibold mt-1'>20+ Years Experience</p>
              </div>
            </div>
            <p className='text-sm text-zinc-600 mt-3 italic flex gap-2'>
              <Quote size={14} className='text-orange-500 shrink-0'/>
              "Customer ko maal nahi, bharosa bechta hoon."
            </p>
          </div>
        </div>

        <div>
          <h2 className='text-3xl lg:text-5xl font-bold leading-tight'>
            Humne  Dukan Nahi,<br/>
            <span className='text-zinc-400'>Ek Naam Banaya Hai.</span>
          </h2>
          <div className='mt-6 space-y-4 text- leading-7 text-zinc-600'>
            <p>
              2006 mein ek choti si cement ki dukan se shuru hua safar, aaj Unnao ke sabse bharosemand building material suppliers mein se ek hai.
            </p>
            <p>
              Hum jaante hain ki ek ghar banana kisi ke jeevan ki sabse badi investment hoti hai. Isiliye hum sirf material nahi dete - sahi salah, sahi rate, aur time par delivery ka vaada dete hain.
            </p>
            <p className='text-zinc-900 font-medium'>
              Aaj aap ke saath milkar, wahi bharosa technology se jod rahe hain - taaki aapko rate ke liye dukan ke chakkar na lagane pade.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-zinc-200'>
            <div>
              <p className='text-3xl font-bold text-zinc-900'>500+</p>
              <p className='text-xs font-semibold tracking-widest text-zinc-500 mt-1'>HOMES BUILT</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-zinc-900'>20+</p>
              <p className='text-xs font-semibold tracking-widest text-zinc-500 mt-1'>YEARS TRUST</p>
            </div>
            <div>
              <p className='text-3xl font-bold text-zinc-900'>24hr</p>
              <p className='text-xs font-semibold tracking-widest text-zinc-500 mt-1'>DELIVERY</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- WHY US --- */}
      <div className='bg-zinc-900 rounded- mx-4 lg:mx-8 p-8 lg:p-14'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between gap-6'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white'>Why Unnao Trusts Us?</h2>
            <p className='text-zinc-400 max-w-md'>Bade brand ka rate, chote bhai jaisa vyavhaar. Yahi hamari pehchan hai.</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
            {[
              { icon: <ShieldCheck />, title: "100% Genuine Material", desc: "Direct company se - Ultratech, ACC, Tata Tiscon. No duplicate." },
              { icon: <Truck />, title: "Ghar Tak Delivery", desc: "Unnao city mein same day delivery. Site par utarwa ke jaayenge." },
              { icon: <Award />, title: "Sahi Rate Guarantee", desc: "Market se mehenga lage to batao, rate match karenge." },
              { icon: <Users />, title: "Mistri + Material Package", desc: "Ache mistri ka contact bhi dilwate hain - free." },
            ].map((item, i) => (
              <div key={i} className='bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/[0.08] transition-colors'>
                <div className='w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mb-4'>
                  {item.icon}
                </div>
                <h3 className='font-bold text-white text-'>{item.title}</h3>
                <p className='text-sm text-zinc-400 mt-2 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- LOCATION & CTA --- */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 bg-white border border-zinc-200 rounded- p-8 flex flex-col sm:flex-row gap-8'>
          <div className='flex-1'>
            <h3 className='font-bold text-xl flex items-center gap-2'><MapPin className='text-orange-500'/> Visit Our Shop</h3>
            <p className='text-zinc-600 mt-3 text-sm leading-6'>
              Abhishek Traders, Near Industrial Area,<br/>
              Kantha Unnao, UP - 209859<br/>
              Open: Mon-Sat 8AM - 8PM | Sun 9AM - 2PM
            </p>
            <div className='mt-5 flex gap-3'>
              <a href="tel:+919984740025" className='px-5 py-2.5 bg-zinc-900 text-white rounded-lg  text-sm font-semibold'>Call Now</a>
              <a href="https://wa.me/919984740025" target="_blank" className='px-5 py-2.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-semibold'>WhatsApp Location</a>
            </div>
          </div>
          <div className='w-full sm:w- h- rounded-xl overflow-hidden bg-zinc-100'>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400" className='w-full h-full object-cover' alt="map" />
          </div>
        </div>

        <div className='bg-orange-500 rounded- p-8 text-white flex flex-col justify-center'>
          <Clock className='mb-3' />
          <h3 className='font-bold text-2xl leading-tight'>Need Urgent Material?</h3>
          <p className='text-orange-100 text-sm mt-2'>Raat 10 baje tak call karo, subah site par maal milega.</p>
          <a href="tel:+919984740025" className='mt-6 bg-white text-orange-600 text-center py-3 rounded-full font-bold'>+91 9984740025</a>
        </div>
      </div>

    </div>
  )
}

export default About