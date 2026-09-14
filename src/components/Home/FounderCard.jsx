import {Quote} from 'lucide-react'

const FounderCard = () => {
  return (
    <div className='absolute -bottom-8 -right-2 lg:-right-8 bg-white rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-100  '>
            <div className='flex gap-3  '>
              <img src="" className='w-12 h-12 rounded-full object-cover' alt="founder" />
              <div>
                <p className='font-bold text-zinc-900 leading-none'>Raju Tiwari</p>
                <p className='text-xs text-zinc-500 mt-1'>Founder, Abhishek Traders</p>
                <p className='text-xs text-orange-600 font-semibold mt-1'>20+ Years Experience</p>
              </div>
            </div>
            <p className='text-sm text-zinc-600 mt-3 italic flex gap-2'>
              <Quote size={14} className='text-orange-500 shrink-0'/>
              Customer ko maal nahi, bharosa bechta hoon.
              <Quote size={14} className='text-orange-500 shrink-0'/>
            </p>
          </div>
  )
}

export default FounderCard
