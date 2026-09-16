import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/langley');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Langley', path: '/service-area/langley' },
]);

export default function LangleyLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-langley.webp"
          alt="A beautiful, modern family home in a Langley, British Columbia suburb."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Langley's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Families in Willoughby, Walnut Grove, and beyond.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for Langley Homes</h2>
          <p className="mt-6 text-gray-600">
            Langley is renowned for its family-friendly communities, beautiful parks, and a wonderful mix of housing, from new developments in Willoughby to established homes in Walnut Grove. Pomo Build is proud to be a trusted renovation partner for Langley homeowners, helping families create spaces that are both beautiful and functional.
          </p>
          <p className="mt-4 text-gray-600">
            Our team understands the needs of a growing family. We specialize in renovations that enhance daily life—whether it’s a spacious open-concept kitchen, a durable and beautiful deck for backyard entertaining, or a fully finished basement for the kids to play. We handle all project aspects, including permitting with the Township and City of Langley, ensuring your renovation is a stress-free success.
          </p>
        </section>

        <LocationPageExtras slug="langley" servicesHeading="Our Services in Langley" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Langley Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is the difference between Langley City and the Township of Langley?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">They are two separate municipalities, each with its own specific building codes and permit processes. We have extensive experience working with both the City and the Township and manage all the necessary paperwork on your behalf.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there any specific materials you recommend for Langley homes?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For family homes, we always recommend highly durable and easy-to-clean materials. For kitchens, this means quartz countertops and resilient flooring like Luxury Vinyl Plank (LVP). For exteriors, composite decking is a popular low-maintenance choice for busy families.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Langley?</h2>
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