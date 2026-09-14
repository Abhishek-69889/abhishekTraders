import {ShieldCheck,Truck,Award,Users} from 'lucide-react'

const WhyUs = () => {
  return (
    <div className='bg-zinc-900 rounded- mx-4 lg:mx-8 p-8 lg:p-14  rounded-2xl'>
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
  )
}

export default WhyUs
