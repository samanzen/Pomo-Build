import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/surrey');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Surrey', path: '/service-area/surrey' },
]);

export default function SurreyLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-surrey.webp"
          alt="A beautiful, modern single-family home in a new suburban development in South Surrey."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Local Surrey Renovation Experts</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Homeowners from Fleetwood to South Surrey.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Renovation Partner in Surrey</h2>
          <p className="mt-6 text-gray-600">
            As one of the fastest-growing cities in the region, Surrey is home to a vast array of properties, from new townhome complexes in Clayton Heights to sprawling family homes in South Surrey. Pomo Build is proud to offer our full suite of renovation and handyman services to this vibrant and diverse community.
          </p>
          <p className="mt-4 text-gray-600">
            We understand that a renovation project is a significant investment. Our team works closely with Surrey homeowners to ensure every project is completed to the highest standard, on time, and on budget. We have extensive experience with the City of Surrey's building codes and permitting processes, ensuring your renovation is a smooth and valuable addition to your home.
          </p>
        </section>

        <LocationPageExtras slug="surrey" servicesHeading="Our Services in Surrey" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Surrey Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is the permit process like for renovations in Surrey?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">The City of Surrey has a well-defined process. For most major renovations, we will need to submit architectural plans for review. We handle this entire process on your behalf, from application to final inspection, to ensure everything is seamless and compliant.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How can I maximize the ROI on my Surrey renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">In the current Surrey market, the renovations with the highest return on investment (ROI) are typically legal basement suites, followed by kitchen and bathroom remodels. These projects add significant value and appeal to potential buyers.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Surrey?</h2>
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