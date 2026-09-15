import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    year: "2011",
    title: "The Foundation",
    desc: "Started with a 10x10 space and a clear principle: Quality over quantity. In an unorganized market, we chose to stock only verified, company-direct cement. The first 20 bags were not just inventory, they were a promise."
  },
  {
    year: "2013",
    title: "Direct Company Partnerships",
    desc: "Moved to direct procurement. First bulk truckload from the company plant. Eliminated intermediaries, which meant better pricing and 100% genuine material for every site. This defined our supply chain model."
  },
  {
    year: "2015",
    title: "From Cement to Complete Solutions",
    desc: "Expanded beyond cement. Introduced TMT steel bars, river sand, and aggregates. The insight was simple: a contractor should get the entire foundation under one roof, with consistent quality."
  },
  {
    year: "2017",
    title: "Transparency as a Standard",
    desc: "When GST was introduced, while others struggled, we implemented 100% billed invoicing from day one. It brought trust, input credit for clients, and positioned us as a compliant, future-ready supplier."
  },
  {
    year: "2019",
    title: "300 Homes Milestone",
    desc: "Crossed 300 residential projects supplied in Unnao and Kanpur belt. From independent floors to duplexes, our material became part of the city's growth. A quiet milestone that spoke volumes."
  },
  {
    year: "2021",
    title: "Built for Resilience",
    desc: "During the lockdown, when supply chains collapsed, we maintained last-mile delivery. Sites couldn't wait, so we didn't. That period taught us operational resilience and cemented our reputation for reliability."
  },
  {
    year: "2023",
    title: "500+ Projects and Counting",
    desc: "Achieved 500+ completed homes and commercial structures. This was not just a number, it was 500 families and contractors who returned with referrals. Growth driven purely by word-of-mouth."
  },
  {
    year: "2025",
    title: "Digital-First Operations",
    desc: "Launched digital rate cards, instant quotations on WhatsApp, and PDF billing. The same 15-year-old trust, now available in 10 minutes on your phone. No site visits needed for price discovery."
  },
  {
    year: "2026",
    title: "Engineering the Future",
    desc: "Vision for 2026 is clear: To be the most reliable building material partner from Unnao to Kanpur. Standardized rates, same-day delivery, and zero-compromise quality for every project, big or small."
  },
];

const OurJourney = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line jo scroll par neeche aayegi
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Har year pop hoga
      gsap.utils.toArray(".year-card").forEach((card) => {
        const year = card.querySelector(".year-badge");
        const content = card.querySelector(".content-box");

        gsap.fromTo(year,
          { scale: 0.5, opacity: 0.3, backgroundColor: "#27272a" },
          {
            scale: 1.2,
            opacity: 1,
            backgroundColor: "#f97316",
            color: "#fff",
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 40%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        gsap.fromTo(content,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#0f0f0f] text-white relative ">

      {/* Header */}
      <div className="h- flex flex-col items-center justify-center text-center px-6 sticky top-0">
        <p className="text-orange-500 tracking-[0.4em] text- font-bold pt-3">ABHISHEK TRADERS • 2011-2026</p>
        <h1 className="text-5xl lg:text-8xl font-black mt-6 leading-[0.85] tracking-tighter">
          15 SAAL <br /> <span className="text-zinc-600">SE AAPKE</span> <br /> SAATH
        </h1>
        {/* <p className="text-zinc-500 mt-6 text-sm">Neeche scroll karo</p> */}
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto px-6 pb-40">

        {/* Center Line Background */}
        <div className="absolute left- lg:left-1/2 top-0 bottom-0 w- bg-zinc-800 -translate-x-1/2"></div>
        {/* Animated Line Jo Neeche Aayegi */}
        <div ref={lineRef} className="absolute left- lg:left-1/2 top-0 w- h-0 bg-orange-500 -translate-x-1/2 z-10"></div>

        {data.map((item, i) => (
          <div key={item.year} className="year-card relative flex lg:items-center gap-6 lg:gap-0 mb-20  lg:mb-28 ">

            {/* Year Badge - Pop Hoga */}
            <div className="year-badge absolute left- lg:left-1/2 top-0 -translate-x-1/2 w-16 h-16 rounded-full bg-zinc-800 border-4 border-[#0f0f0f] flex items-center justify-center font-black text-sm z-20 transition-colors ">
              {item.year}
            </div>

            {/* Content - Alternate Left/Right */}
            <div className={`content-box   w-full ml-16 lg:ml-0 lg:w-[42%] ${i % 2 === 0? 'lg:mr-auto lg:text-right lg:pr-12' : 'lg:ml-auto lg:pl-12 lg:ml-[58%]'}`}>
              <div className="bg-zinc-900 border border-zinc-800 rounded- p-6 lg:p-7 hover:border-zinc-700 transition-colors">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-zinc-400 text- leading-6 mt-3">
                  {item.desc}
                </p>
                <p className="text-orange-500 text-xs font-bold tracking-widest mt-4">{item.year} • UNNAO</p>
              </div>
            </div>
          </div>
        ))}

        {/* End CTA */}
        <div className="relative flex justify-center mt-10">
          <div className="year-badge w-20 h-20 rounded-full bg-white text-black border-4 border-[#0f0f0f] flex items-center justify-center font-black z-20">
            AAP
          </div>
        </div>
        <div className="bg-orange-500 rounded- p-8 lg:p-10 text-center mt-6 text-black max-w-xl mx-auto hover:bg-amber-600 rounded-xl">
          <h3 className="text-2xl font-black">Ab Aapki Baari Hai</h3>
          <p className="text-zinc-100 text-sm mt-2">15 saal aap logo ne bharosa diya, ab aapke ghar ki baari hai.</p>
          <a href="https://wa.me/919984740025" target="_blank" className="inline-block mt-5 bg-gray-900 hover:bg-gray-950 text-white px-8 py-3 rounded-full font-bold text-sm">
            WhatsApp Par Rate Lo
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;