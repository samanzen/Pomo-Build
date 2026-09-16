import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/belcarra');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Belcarra', path: '/service-area/belcarra' },
]);

export default function BelcarraLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-belcarra.webp"
          alt="A modern architectural home nestled in a forest on the Belcarra waterfront."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Belcarra's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Craftsmanship in Harmony with Nature.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Bespoke Renovations for Belcarra Properties</h2>
          <p className="mt-6 text-gray-600">
            Belcarra is a unique village, defined by its exclusive waterfront properties, dense forests, and commitment to preserving natural beauty. At Pomo Build, we offer a specialized renovation service for discerning homeowners in Belcarra, focusing on projects that require a superior level of design, craftsmanship, and respect for the environment.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has deep experience in executing complex custom home renovations on challenging waterfront and hillside lots. We work closely with architects and homeowners to create spaces that seamlessly blend modern luxury with the stunning natural surroundings of Indian Arm and Buntzen Lake. We are experts in navigating the specific building bylaws of the Village of Belcarra to ensure your project is a complete success.
          </p>
          <p className="mt-4 text-gray-600">
            Explore renovation options for Belcarra and nearby communities on our{' '}
            <Link href="/tri-cities-renovations" className="font-semibold text-[#D97706] hover:underline">
              Tri-Cities renovations
            </Link>{' '}
            page.
          </p>
        </section>

        <LocationPageExtras slug="belcarra" servicesHeading="Our Specializations in Belcarra" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Belcarra Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there specific environmental considerations for building in Belcarra?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We have a strong commitment to environmental stewardship. Our process includes careful site management, tree protection, and erosion control measures to comply with the Village of Belcarra's strict environmental bylaws and preserve the natural state of your property.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you manage the logistics of a waterfront construction project?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes. We are experienced in the unique logistics of waterfront projects, which can include coordinating material delivery by barge and implementing specialized construction techniques for shoreline properties. We handle all complexities to ensure a smooth build.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Belcarra?</h2>
          <div className="mt-8">
            <Link href="/contact#quote-form">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Request a Private Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}