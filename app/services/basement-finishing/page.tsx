import Image from 'next/image';
import Link from 'next/link';

// SEO Schema for the FAQ section
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much value does a finished basement add?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professionally finished basement can provide a return on investment of 70% or more. A legal secondary suite can provide even more value through consistent rental income."
      }
    },
    {
      "@type": "Question",
      "name": "What is an egress window and why do I need one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An egress window is a window large enough to be used as an exit in case of an emergency. In British Columbia, any legal bedroom in a basement is required by building code to have one for safety."
      }
    }
  ]
};

// SEO Schema for the Service itself
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Basement Finishing and Remodeling",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Pomo Build",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1924 Clarke St",
      "addressLocality": "Port Moody",
      "addressRegion": "BC",
      "postalCode": "V3H 1X9",
      "addressCountry": "CA"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Metro Vancouver"
  },
  "description": "Professional basement finishing, renovation, and legal secondary suite construction services in Port Moody, Coquitlam, and throughout Metro Vancouver.",
  "url": "https://www.pomobuild.com/services/basement-finishing" // Placeholder
};

export default function BasementFinishingPage() {
  return (
    <div className="bg-white">
      {/* Invisible SEO Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Page Header */}
      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/basement-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Basement Finishing & Suites</h1>
          <p className="mt-4 text-lg text-gray-300">Unlock the hidden potential beneath your home.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Add Value and Livable Space</h2>
            <p className="mt-6 text-gray-600">
              An unfinished basement is a blank canvas. Finishing your basement is one of the most cost-effective ways to significantly increase your home's square footage and property value.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you envision a legal secondary suite for rental income, a comfortable family room, a state-of-the-art home theatre, or a personal gym, we have the expertise to transform your lower level from concrete to comfort.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image
              src="/images/basement-intro.webp"
              alt="A stylish and comfortable finished basement living area by Pomo Build."
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Return on Investment Section */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">A Smart Financial Decision</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Increased Property Value</h3>
                    <p className="mt-4 text-gray-600">Adding legal, livable square footage can significantly increase your home's market value. Buyers in areas like Coquitlam and Burnaby highly value finished basements, often leading to a higher selling price and a faster sale.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Potential Rental Income</h3>
                    <p className="mt-4 text-gray-600">Constructing a legal secondary suite is the most effective way to generate consistent monthly income, helping to offset your mortgage. We are experts in navigating the specific municipal codes for suites in Port Moody and the Tri-Cities.</p>
                </div>
            </div>
        </section>

        {/* Project Gallery Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Featured Basement Projects</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-basement-1.webp" alt="Custom home theatre in a Port Moody basement with a large projection screen." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-basement-2.webp" alt="Bright legal secondary suite in a renovated Coquitlam basement." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-basement-3.webp" alt="Home gym with rubber flooring and exercise equipment in a finished basement." width={600} height={400} className="w-full h-64 object-cover" /></div>
            </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How much value does a finished basement add?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">A professionally finished basement can provide a return on investment of 70% or more. A legal secondary suite can provide even more value through consistent rental income.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is an egress window and why do I need one?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">An egress window is a window large enough to be used as an exit in case of an emergency. In British Columbia, any legal bedroom in a basement is required by building code to have one for safety.</p></details>
            </div>
        </section>
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Finish Your Basement?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get Your Free Estimate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}