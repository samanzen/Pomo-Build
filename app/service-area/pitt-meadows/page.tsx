import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/pitt-meadows');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Pitt Meadows', path: '/service-area/pitt-meadows' },
]);

export default function PittMeadowsLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
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

        <LocationPageExtras slug="pitt-meadows" servicesHeading="Our Services in Pitt Meadows" />

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
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Pitt Meadows?</h2>
          <div className="mt-8">
            <Link href="/contact#quote-form">
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