import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/new-westminster');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'New Westminster', path: '/service-area/new-westminster' },
]);

export default function NewWestminsterLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-new-westminster.webp"
          alt="A beautifully restored heritage home on a street in the Queen's Park neighborhood of New Westminster."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">New Westminster Heritage & Modern Renovations</h1>
          <p className="mt-4 text-lg text-gray-200">Preserving History, Building for the Future.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Your Renovation Specialists in the Royal City</h2>
          <p className="mt-6 text-gray-600">
            New Westminster's rich history is reflected in its stunning collection of heritage homes, particularly in neighborhoods like Queen's Park. At Pomo Build, we have a special passion and expertise for renovating these architectural treasures, as well as the city's modern condos and family homes. We blend contemporary functionality with historical character to create timeless spaces.
          </p>
          <p className="mt-4 text-gray-600">
            Our team is highly experienced in the unique requirements of heritage home restoration, from sourcing period-appropriate materials to working with the City of New Westminster's heritage department. We provide a full-service renovation experience, ensuring that every project, whether historical or modern, is handled with the utmost care, quality, and professionalism.
          </p>
        </section>

        <LocationPageExtras slug="new-westminster" servicesHeading="Our Services in New Westminster" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">New Westminster Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is a Heritage Revitalization Agreement (HRA)?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">An HRA is a formal agreement with the City of New Westminster that allows for variances (like adding a suite or laneway house) in exchange for the long-term protection of a heritage property. We have experience guiding clients through this valuable process.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you match new woodwork to the original style of my older home?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, our skilled carpenters specialize in custom millwork. We can replicate historical trim, baseboards, and other wooden features to ensure any new construction blends perfectly with the original character of your home.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in New Westminster?</h2>
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