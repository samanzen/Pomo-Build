import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Port Coquitlam Home Renovation & Handyman Services | Pomo Build',
  description: 'Pomo Build is your local, trusted contractor for home renovations in Port Coquitlam, BC. We specialize in kitchen and bath remodels, deck building, and professional handyman services.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/port-coquitlam',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Port Coquitlam", "item": "https://www.pomobuild.com/service-area/port-coquitlam" }]
};

export default function PortCoquitlamLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-port-coquitlam.webp"
          alt="A charming, well-maintained family home on a quiet suburban street in Port Coquitlam."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Port Coquitlam Renovation Partner</h1>
          <p className="mt-4 text-lg text-gray-200">Quality Renovations for a Great Community.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Serving Port Coquitlam Homes</h2>
          <p className="mt-6 text-gray-600">
            Known for its strong community feel and beautiful parks, Port Coquitlam is a wonderful place to call home. From the established neighborhoods of Mary Hill to the newer developments on Citadel, Pomo Build provides top-quality renovation and handyman services to homeowners throughout the city. We are committed to helping you maintain and enhance your property's value and functionality.
          </p>
          <p className="mt-4 text-gray-600">
            Our team understands the pride PoCo residents take in their homes. As your local renovation expert, we provide a seamless, professional experience from start to finish. We handle all necessary permits with the City of Port Coquitlam and work diligently to ensure your project is completed on time, on budget, and to a standard of quality that will last for years to come.
          </p>
        </section>

        {/* Services Offered in Port Coquitlam Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in Port Coquitlam</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Deck & Patio Building</h3><p className="mt-4 text-gray-600">We build beautiful, durable decks perfect for enjoying Port Coquitlam's many sunny days and scenic backyards.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Kitchen Renovations</h3><p className="mt-4 text-gray-600">Update the heart of your home with a modern, functional kitchen remodel designed for your family's lifestyle.</p></div></Link>
            <Link href="/services/handyman-services" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Handyman Repairs</h3><p className="mt-4 text-gray-600">Our reliable handyman team is here to help with all your home's maintenance needs, from small repairs to installations.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Port Coquitlam Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What are the benefits of renovating an older home in Port Coquitlam?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Renovating an older home in areas like Mary Hill not only improves your living experience but also significantly boosts its resale value. Key upgrades like kitchen and bathroom remodels, along with energy-efficient windows, are highly sought after by buyers.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are your handyman services available for smaller townhouse complexes?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. Our handyman services are perfect for handling repairs and installations within townhouse units. We are also happy to work with strata councils for any common property repairs or improvements.</p></details>
            </div>
        </section>

        {/* Local Map Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Verified Business Location</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Port Coquitlam?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get Your Free Local Estimate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}