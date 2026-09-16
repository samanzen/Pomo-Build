import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/delta');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Delta', path: '/service-area/delta' },
]);

export default function DeltaLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-delta.webp"
          alt="A beautiful modern family home in Ladner, Delta with a waterway in the background."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Local Delta Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Homeowners in Ladner & Tsawwassen.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Serving the Delta Community</h2>
          <p className="mt-6 text-gray-600">
            Delta's unique blend of charming heritage areas in Ladner, sunny communities in Tsawwassen, and family-friendly neighbourhoods in North Delta makes it a special place to live. Pomo Build provides top-quality renovation services that respect the character and enhance the value of homes throughout this diverse municipality.
          </p>
          <p className="mt-4 text-gray-600">
            We understand the importance of quality materials that can withstand the coastal environment. Whether you're updating a classic family home, remodeling a kitchen for modern living, or building a beautiful deck to enjoy the sun, our team is dedicated to delivering exceptional craftsmanship. We handle all permitting with the City of Delta to ensure your project is a seamless success.
          </p>
        </section>

        <LocationPageExtras slug="delta" servicesHeading="Our Services in Delta" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Delta Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What materials are best for a deck in a sunny area like Tsawwassen?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For areas with high sun exposure, we highly recommend high-performance composite decking. It is extremely resistant to fading and weathering from UV rays, requires very little maintenance, and stays beautiful for many years.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you work on older homes like those in Ladner?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We have a great appreciation for the heritage and character of older homes. Our team specializes in renovations that modernize the functionality of the home while respecting and preserving its original charm.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Delta?</h2>
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