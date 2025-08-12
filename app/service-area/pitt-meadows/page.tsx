import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Pitt Meadows Home Renovation & Handyman Services | Pomo Build',
  description: 'Pomo Build is your local contractor for home renovations in Pitt Meadows, BC. We specialize in kitchen and bath remodels, custom decks, and professional handyman services for family homes.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/pitt-meadows',
  },
  openGraph: {
    title: 'Pitt Meadows Home Renovation Contractor | Pomo Build',
    description: 'Your local expert for home renovations in Pitt Meadows.',
    images: [{ url: '/images/location-hero-pitt-meadows.webp' }],
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Pitt Meadows", "item": "https://www.pomobuild.com/service-area/pitt-meadows" }]
};

export default function PittMeadowsLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-pitt-meadows.webp"
          alt="A beautiful farmhouse-style home in Pitt Meadows with the Golden Ears mountains in the background."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Pitt Meadows Renovation Partner</h1>
          <p className="mt-4 text-lg text-gray-200">Quality Craftsmanship for a Growing Community.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Serving Pitt Meadows</h2>
          <p className="mt-6 text-gray-600">
            Pitt Meadows is a community that beautifully balances its agricultural roots with growing family-friendly neighborhoods. At Pomo Build, we offer renovation services that cater to the unique lifestyle of Pitt Meadows residents, from updating classic family homes to building expansive decks for enjoying the stunning mountain views.
          </p>
          <p className="mt-4 text-gray-600">
            We understand the importance of creating functional, beautiful spaces for families. Our team is committed to delivering high-quality workmanship and a smooth, professional renovation experience. We manage all project details, including the permitting process with the City of Pitt Meadows, to ensure your project is a complete success.
          </p>
        </section>

        {/* Services Offered in Pitt Meadows Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in Pitt Meadows</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Custom Decks & Patios</h3><p className="mt-4 text-gray-600">We design and build beautiful outdoor living spaces perfect for enjoying the open skies and views of Pitt Meadows.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Kitchen & Family Room Remodels</h3><p className="mt-4 text-gray-600">We create open, inviting kitchens and family rooms that serve as the heart of your home.</p></div></Link>
            <Link href="/services/handyman-services" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">General Home Repairs</h3><p className="mt-4 text-gray-600">Our professional handyman team is ready to tackle your to-do list, ensuring your home is always in top condition.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section - UPDATED with Accessibility */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Pitt Meadows Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm">
                    <summary aria-controls="faq1_content" className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">
                        Do you work on properties that are part of the Agricultural Land Reserve (ALR)?
                        <span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span>
                    </summary>
                    <p id="faq1_content" className="mt-4 text-gray-600">Yes, we are experienced in working on rural and ALR properties. We understand the specific regulations and can ensure that any home renovation or outbuilding project is compliant with both municipal and provincial guidelines.</p>
                </details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm">
                    <summary aria-controls="faq2_content" className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">
                        What kind of exterior materials do you recommend for Pitt Meadows?
                        <span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span>
                    </summary>
                    <p id="faq2_content" className="mt-4 text-gray-600">Given the open landscape, we recommend durable and weather-resistant materials. Hardie board siding is an excellent, long-lasting choice for homes, while composite decking offers a beautiful, low-maintenance solution for outdoor spaces that can withstand the elements.</p>
                </details>
            </div>
        </section>

        {/* Local Map Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Verified Business Location</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Pitt Meadows?</h2>
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