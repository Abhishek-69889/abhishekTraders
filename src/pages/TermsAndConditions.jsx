import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-gray-800">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FF7A00]"></div>
            <p className="text-[#FF7A00] font-bold tracking-widest text-sm">ABHISHEK TRADERS</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">Last Updated: 16 September 2026 | Effective for abhishek-traders-eta.vercel.app/</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to <span className="font-semibold text-black">Abhishek Traders</span>. By accessing and using our website abhishek-traders-eta.vercel.app/in, you agree to be bound by these Terms and Conditions.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">1</span>
                Nature of Business
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                Abhishek Traders is a building material supplier based in Kantha, Unnao, UP, operating since 2011. Our website is for <strong>information and enquiry purposes only</strong>. We do not offer direct online checkout or payment on the website. All orders are confirmed via WhatsApp, phone call, or at our physical shop.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">2</span>
                Pricing & Availability
              </h2>
              <ul className="ml-8 space-y-2 text-gray-600 list-disc list-inside">
                <li>All prices for cement, sariya (steel), morang, gitti, bricks, tiles, plumbing are subject to daily market fluctuation, company price, and diesel/transport cost.</li>
                <li>Price shown or quoted on WhatsApp is valid only for the same day unless otherwise stated.</li>
                <li>Final price and availability will be confirmed at the time of token/advance payment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">3</span>
                Product Images & Work Gallery
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                Images used on our website and gallery are from our actual delivery and construction sites in Unnao/Kanpur. Shades of tiles, granite, and other materials may vary slightly from photos due to lighting and screen resolution. We recommend visiting the shop for exact shade matching.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">4</span>
                Order & Enquiry
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                An enquiry via WhatsApp or website form does NOT constitute a confirmed order. An order is confirmed only after we receive an advance/token amount at our shop or via our official UPI/Bank Account. We reserve the right to refuse any order due to stock unavailability or delivery distance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">5</span>
                Delivery Policy
              </h2>
              <ul className="ml-8 space-y-2 text-gray-600 list-disc list-inside">
                <li><strong>Area:</strong> Primary delivery within 50km of Kantha, Unnao (Unnao, Kanpur, Bighapur, etc). Extra charges for longer routes.</li>
                <li><strong>Time:</strong> 24-48 hours after confirmation, subject to vehicle availability.</li>
                <li><strong>Transportation:</strong> Delivery charges are extra and depend on quantity and distance (Tractor/Trolley/Truck).</li>
                <li><strong>Unloading:</strong> Customer must arrange labour for unloading. Our staff will provide reasonable assistance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">6</span>
                Return & Cancellation
              </h2>
              <ul className="ml-8 space-y-2 text-gray-600 list-disc list-inside">
                <li>You can cancel before the vehicle leaves our yard. Once dispatched, cancellation is not possible.</li>
                <li>Cement, Sariya, Morang, Gitti cannot be returned once unloaded due to nature of product.</li>
                <li>Tiles/Sanitary: Can be returned within 24 hours if box is sealed and undamaged. Transport cost borne by customer.</li>
                <li>If we cancel due to stock issue, full advance will be refunded within 2-3 working days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#1A1A1A] text-white text-xs flex items-center justify-center">7</span>
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                All website content, logo, images, and gallery photos are property of Abhishek Traders. You may not copy or reuse our site photos or gallery images without permission.
              </p>
            </section>

            <section className="bg-[#1A1A1A] text-white rounded-xl p-6 ml-0 md:ml-8">
              <h3 className="font-bold mb-2 flex items-center gap-2"><span className="w-2 h-2 bg-[#FF7A00] rounded-full"></span> Governing Law</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                All transactions and disputes are subject to Unnao, Uttar Pradesh jurisdiction only.<br />
                Abhishek Traders, Kantha, Unnao - 209859<br />
                Contact: +91 9984740025 
                {/* | GSTIN: [Your GST Number] */}
              </p>
            </section>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-8">© 2026 Abhishek Traders. Since 2011. Building Trust, Brick by Brick.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
