import Script from 'next/script';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">Get In Touch</h1>
        <p className="mt-4 text-lg text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Ready to start your next project? We're here to help.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16 items-start">
          <div className="border border-gray-200 rounded-lg p-8 flex flex-col" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center text-[#1F2937]">Project Inquiry Form</h2>
            <div className="mt-8 w-full">
              <iframe
                src="https://link.volohub.com/widget/form/wORgVIsWz2sJCOfrxADT"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                className="block w-full min-h-[1000px] sm:min-h-[900px] lg:min-h-[850px]"
                id="inline-wORgVIsWz2sJCOfrxADT"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Pomo Build – Google Ads Quote Form"
                data-height="undefined"
                data-layout-iframe-id="inline-wORgVIsWz2sJCOfrxADT"
                data-form-id="wORgVIsWz2sJCOfrxADT"
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
                title="Pomo Build – Google Ads Quote Form"
              ></iframe>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-[#1F2937]">Contact Details</h2>
            <div className="mt-8 space-y-4 text-gray-600"><p><strong>Address:</strong> 1924 Clarke St, Port Moody, BC V3H 1X9</p><p><strong>Phone:</strong> (604) 500-2003</p><p><strong>Email:</strong> info@pomobuild.ca</p><p><strong>Hours:</strong> Mon – Sat: 8am – 6pm</p></div>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
          </div>
        </div>
      </div>

      <Script
        id="ghl-form-embed"
        src="https://link.volohub.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
