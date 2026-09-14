import { Phone, MessageCircleMore, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200 shadow-sm py-3'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-5 lg:px-8 h-'>

        {/* Logo */}
        <div className='flex items-center gap-3'>
          <div className='w-20 h-12 rounded-xl bg-gradient-to-br  flex items-center justify-center shadow-lg shadow-orange-500/20 overflow-hidden'>
             <img src={logo} alt="Logo" className='w-full h-full object-contain p-1' />
          </div>
          <h2 className='font-bold text- leading-none tracking-tight text-zinc-900'>
            Abhishek <span className='text-orange-500'>Traders</span>
            <span className='block text- font-semibold tracking-[0.2em] text-zinc-500 mt-1'>BUILDING MATERIALS</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex'>
          <ul className='flex items-center gap-8 text- font-medium text-zinc-700'>

            {/* --- DISABLED LINKS - Different Color --- */}
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>
              Home
            </li>
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none whitespace-nowrap'>
              About us
            </li>
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>
              Services
            </li>
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>
              Gallery
            </li>

            {/* Divider */}
            <div className='w- h-6 bg-zinc-200 mx-2'></div>

            <li className='flex items-center gap-2 text-sm font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 px-3.5 py-2 rounded-full transition-colors  whitespace-nowrap cursor-pointer'>
              <Phone size={16} className='text-orange-500'/>
              <p>+91 9984740025</p>
            </li>

            <li className='flex items-center gap-2 text-sm font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer'>
              <MessageCircleMore size={18} />
              <a href="https://wa.me/919984740025?text=Namaste%20Abhishek%20Traders,%20mujhe%20rate%20chahiye" target="_blank" rel="noreferrer" className='no-underline text-white whitespace-nowrap'>
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden p-2 rounded-full bg-zinc-100'>
          {isOpen? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-white border-t border-zinc-200 px-5 py-6 flex flex-col gap-5 shadow-xl'>
          <ul className='flex flex-col gap-4 text- font-medium'>
            {/* Disabled in Mobile too */}
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>Home</li>
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>About us</li>
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>Services</li>
            <li className='cursor-not-allowed text-zinc-400 opacity-60 select-none'>Gallery</li>
          </ul>
          <div className='flex flex-col gap-3 pt-4 border-t border-zinc-100'>
            <a href="tel:+919984740025" className='flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-full font-semibold'>
              <Phone size={18}/> +91 9984740025
            </a>
            <a href="https://wa.me/919984740025" target="_blank" className='flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-semibold'>
              <MessageCircleMore size={18}/> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar