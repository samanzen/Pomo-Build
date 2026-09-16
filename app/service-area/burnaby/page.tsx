import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/burnaby');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Burnaby', path: '/service-area/burnaby' },
]);

export default function BurnabyLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-burnaby.webp"
          alt="A residential street in Burnaby with the Metrotown skyline in the distance."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Trusted Burnaby Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Serving homeowners from Brentwood to Metrotown & beyond.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Burnaby Renovation Partner</h2>
          <p className="mt-6 text-gray-600">
            From the family-oriented neighborhoods of Capitol Hill to the bustling high-rises in Brentwood and Metrotown, Burnaby offers a diverse range of homes, each with its own unique character. Pomo Build is proud to offer our full suite of renovation and handyman services to the Burnaby community. We understand the value of a well-maintained and beautifully updated home in this dynamic market.
          </p>
        </section>

        <LocationPageExtras slug="burnaby" servicesHeading="Our Services in Burnaby" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Burnaby Renovation Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are you familiar with the renovation rules for Burnaby high-rises?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We have extensive experience working within the specific rules and regulations set by strata councils in Burnaby's high-rise buildings. We manage all communication and approvals to ensure a smooth process.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is a 'Burnaby Special' and can you renovate one?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">A 'Burnaby Special' is a type of house built in the 1960s-80s with a specific layout. We are experts at renovating these homes, often by creating a modern open-concept main floor and updating the exterior for a more contemporary look.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Burnaby?</h2>
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