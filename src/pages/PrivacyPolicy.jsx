import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-gray-800">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#FF7A00]"></div>
            <p className="text-[#FF7A00] font-bold tracking-widest text-sm">ABHISHEK TRADERS</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: 16 September 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm">
          <p className="text-gray-600 mb-8 leading-relaxed">
            At <span className="font-semibold text-black">Abhishek Traders</span>, based in Kantha, Unnao (Since 2011), we respect your privacy and are committed to protecting your personal information.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF7A00] text-white text-xs flex items-center justify-center">1</span>
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                When you contact us via WhatsApp, phone call, or enquiry form on https://abhishek-traders-eta.vercel.app/, we may collect your Name, Phone Number, Delivery Location/Village, and material requirements. We do not collect any payment information on our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF7A00] text-white text-xs flex items-center justify-center">2</span>
                How We Use Your Information
              </h2>
              <ul className="ml-8 space-y-2 text-gray-600 list-disc list-inside">
                <li>To provide you with rates, quotations, and availability of materials.</li>
                <li>To arrange delivery of cement, sariya, morang, tiles etc. to your site.</li>
                <li>To communicate about your order status.</li>
                <li>We <strong>DO NOT</strong> sell, rent, or share your data with any third party for marketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF7A00] text-white text-xs flex items-center justify-center">3</span>
                Cookies & Analytics
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                Our website uses basic cookies and Google Analytics to understand how many people visit us and which pages are popular. This helps us improve. No personal information like your name or phone is stored in cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF7A00] text-white text-xs flex items-center justify-center">4</span>
                Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                We use WhatsApp, Google Maps, and hosting services (like Vercel/Netlify) to run our website. When you click on WhatsApp, you are redirected to WhatsApp and their privacy policy applies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FF7A00] text-white text-xs flex items-center justify-center">5</span>
                Data Security & Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed ml-8">
                We store your data securely and only our owner has access. You have the right to ask us to delete your phone number or enquiry data from our records at any time. Just WhatsApp us at our official number.
              </p>
            </section>

            <section className="bg-[#FFF4E8] border border-[#FFD6A8] rounded-xl p-6 ml-0 md:ml-8">
              <h3 className="font-bold text-black mb-2">Contact for Privacy Concerns</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Abhishek Traders, Kantha, Unnao, UP - 209859<br />
                Phone: +91 9984740025<br />
                {/* Email: abhishektraders.kantha@gmail.com<br /> */}
                {/* GSTIN: [Your GST Number] */}
              </p>
            </section>
          </div>
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-8">© 2026 Abhishek Traders. Since 2011. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
