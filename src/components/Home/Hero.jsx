import React from 'react'

const Hero = () => {
  return (
    <div className='w-full min-h- flex flex-col lg:flex-row bg-[#0f0f0f] overflow-hidden'>

      {/* Left Section - Content */}
      <div className='w-full lg:w-[55%] relative flex items-center justify-center p-6 lg:p-0 min-h- lg:min-h-auto'>

        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <img
            src="https://i.pinimg.com/736x/0c/98/72/0c9872175f64fc480efa8ecac5208713.jpg"
            className='w-full h-full object-cover'
            alt="construction materials"
          />
          <div className='absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/60 to-black/40'></div>
        </div>

        {/* Content Card */}
        <div className='relative z-10 w-full max-w- backdrop-blur- bg-white/10 border border-white/20 rounded- p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full mb-4'>
            <span className='w-2 h-2 bg-orange-500 rounded-full animate-pulse'></span>
            ESTD. 2006 • UNNAO
          </div>

          <h1 className='text-4xl lg:text-6xl font-bold text-white leading-[1.1]'>
            Abhishek <span className='text-orange-500 relative'>
              Traders
              <span className='absolute -bottom-2 left-0 w-full h- bg-orange-500/60 rounded-full'></span>
            </span>
          </h1>

          <div className='mt-6 space-y-1'>
            <p className='text- lg:text- text-zinc-200 font-light leading-relaxed'>
              Your Complete Partner for Building
            </p>
            <p className='text- lg:text- text-zinc-200 font-light leading-relaxed'>
              Material and Construction Excellence
            </p>
            <p className='text- lg:text- text-zinc-100 mt-3'>
              With an <span className='text-orange-400 font-semibold'>Experience</span> of <span className='text-orange-400 font-semibold'>20+ years</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mt-8'>
            <a href="https://wa.me/9984740025" className='px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full text-center transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_20px_rgba(249,115,22,0.4)]'>
              Get Rate on WhatsApp
            </a>
            <button className='px-6 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full text-center transition-all duration-300 cursor-pointer'>
              View Products
            </button>
          </div>

          {/* Trust Points */}
          <div className='flex gap-6 mt-8 pt-6 border-t border-white/10'>
            <div>
              <p className='text-2xl font-bold text-white'>1000+</p>
              <p className='text-xs text-zinc-400'>Happy Clients</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-white'>24hr</p>
              <p className='text-xs text-zinc-400'>Fast Delivery</p>
            </div>
            <div>
              <p className='text-2xl font-bold text-white'>100%</p>
              <p className='text-xs text-zinc-400'>Genuine Material</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className='w-full lg:w-[45%] h- lg:h-auto relative overflow-hidden group'>
        <img
          src="https://i.pinimg.com/1200x/6c/82/e4/6c82e4a0db3b66e5128c77190b8d4570.jpg"
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          alt="building materials stack"
        />
        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent'></div>

        {/* Floating Card */}
        <div className='absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto backdrop-blur-xl bg-white/90 rounded-2xl p-4 shadow-2xl max-w-'>
          <div className='flex items-center gap-3'>
            <div className='w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold'>✓</div>
            <div>
              <p className='font-bold text-zinc-900 text-sm'>Ready Stock Available</p>
              <p className='text-xs text-zinc-600'>Cement, Sariya, Ret, Gitti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
