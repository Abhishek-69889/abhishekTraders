import {MapPin,Clock} from 'lucide-react'

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2 bg-white border border-zinc-200 rounded- p-8 flex flex-col sm:flex-row gap-8  rounded-2xl'>
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

        <div className='bg-orange-500 rounded- p-8 text-white flex flex-col justify-center rounded-2xl'>
          <Clock className='mb-3' />
          <h3 className='font-bold text-2xl leading-tight'>Need Urgent Material?</h3>
          <p className='text-orange-100 text-sm mt-2'>Raat 10 baje tak call karo, subah site par maal milega.</p>
          <a href="tel:+919984740025" className='mt-6 bg-white text-orange-600 text-center py-3 rounded-full font-bold'>+91 9984740025</a>
        </div>
      </div>
  )
}

export default Contact
