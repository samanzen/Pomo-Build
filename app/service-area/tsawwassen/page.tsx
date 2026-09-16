import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/tsawwassen');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Tsawwassen', path: '/service-area/tsawwassen' },
]);

export default function TsawwassenLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-tsawwassen.webp"
          alt="A beautiful modern home in a Tsawwassen suburb with a sunny backyard and pool."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Tsawwassen's Trusted Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Building for the Sunniest Place in Metro Vancouver.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Renovation Experts in Tsawwassen</h2>
          <p className="mt-6 text-gray-600">
            Tsawwassen is beloved for its sunny weather, beautiful beaches, and relaxed, family-friendly atmosphere. At Pomo Build, we provide expert renovation services that help homeowners make the most of the unique lifestyle this community offers. From building expansive sun decks to creating bright, open-concept living spaces, we tailor every project to your needs.
          </p>
          <p className="mt-4 text-gray-600">
            Our team understands the specific construction styles in communities from Boundary Bay to the new developments at Tsawwassen Shores. We are committed to using high-quality, durable materials that stand up to the coastal environment while delivering a beautiful, lasting finish. We handle all permitting and logistics, ensuring your renovation is a smooth and rewarding experience.
          </p>
        </section>

        <LocationPageExtras slug="tsawwassen" servicesHeading="Our Services in Tsawwassen" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Tsawwassen Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What are the best materials for a deck in a sunny climate like Tsawwassen?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For areas with high sun exposure, we strongly recommend high-performance composite decking. It is extremely resistant to fading from UV rays, requires virtually no maintenance, and won't splinter or crack over time, making it perfect for poolsides and family backyards.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you help us make our home feel brighter?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We specialize in renovations that maximize natural light. This can include adding larger windows or skylights, removing interior walls to create an open-concept layout, and using light-colored paints and reflective finishes like glossy tiles and countertops.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Tsawwassen?</h2>
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