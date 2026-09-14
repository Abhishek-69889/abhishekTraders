import { Award, Truck, ShieldCheck, Users, Clock, MapPin, Quote } from 'lucide-react'
import FounderCard from './FounderCard'
import WhyUs from './WhyUs'
import Contact from './Contact'
const Intro = () => {
  return (
    <>
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

    {/* Story Section */}

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
          <FounderCard/>
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
              <p className='text-3xl font-bold text-zinc-900'>1000+</p>
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


      {/* Why Us */}

      <WhyUs/>


      {/* Location and CTA */}

      <Contact/>
    </>
    

  )
}

export default Intro
