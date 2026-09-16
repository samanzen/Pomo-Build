import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/west-vancouver');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'West Vancouver', path: '/service-area/west-vancouver' },
]);

export default function WestVancouverLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-west-vancouver.webp"
          alt="A modern luxury home in West Vancouver with an ocean view."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">West Vancouver's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Delivering Unparalleled Quality for Luxury Properties.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for West Vancouver Estates</h2>
          <p className="mt-6 text-gray-600">
            West Vancouver is synonymous with luxury, architectural excellence, and breathtaking views. At Pomo Build, we provide a bespoke renovation service that meets the exacting standards of West Vancouver homeowners. We understand that renovating a luxury property requires a superior level of craftsmanship, project management, and attention to detail.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has the expertise to execute complex, large-scale projects, from waterfront home transformations to renovations on challenging hillside lots. We collaborate closely with architects and interior designers to ensure every element of your vision is brought to life flawlessly. We are committed to delivering a discreet, professional, and exceptional renovation experience for our discerning clients in West Vancouver.
          </p>
        </section>

        <LocationPageExtras slug="west-vancouver" servicesHeading="Our Services in West Vancouver" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">West Vancouver Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you manage projects with high-end or imported materials?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We have established relationships with top-tier suppliers and artisans. Our project management includes meticulous procurement and logistics to ensure all materials, whether sourced locally or internationally, arrive on time and are handled with the utmost care.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you collaborate with interior designers and architects?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, we work seamlessly with the region's top architects and interior designers. We can partner with your chosen design professionals or recommend trusted experts from our network to ensure your project's vision is executed perfectly.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in West Vancouver?</h2>
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