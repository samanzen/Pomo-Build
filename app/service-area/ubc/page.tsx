import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/ubc');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'UBC / UEL', path: '/service-area/ubc' },
]);

export default function UBCLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-ubc.webp"
          alt="An elegant, architecturally significant home in the University Endowment Lands, Vancouver."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">UBC & UEL Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Excellence in Craftsmanship for Prestigious Properties.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Bespoke Renovations for UBC & UEL Homes</h2>
          <p className="mt-6 text-gray-600">
            The University Endowment Lands (UEL) and the area around UBC are home to some of the most architecturally significant and prestigious properties in Vancouver. At Pomo Build, we provide a specialized renovation service that meets the exceptional standards required for these homes. We understand that working in this area demands a superior level of precision, quality, and project management.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has extensive experience executing complex, large-scale renovations for discerning clients in the UEL. We collaborate seamlessly with top architects and interior designers to ensure every detail of your vision is realized to perfection. Whether it's a full-home heritage restoration or a modern update to a luxury condo, we are committed to delivering an unparalleled level of service and craftsmanship.
          </p>
        </section>

        <LocationPageExtras slug="ubc" servicesHeading="Our Services near UBC" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">UBC & UEL Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are you familiar with the UEL's building and renovation guidelines?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We have experience navigating the specific bylaws and permit requirements of the University Endowment Lands administration. We manage this entire process to ensure your project is fully compliant and proceeds smoothly.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you ensure discretion and minimal disruption in quiet neighborhoods?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We understand the importance of maintaining a low profile in exclusive neighborhoods. Our team is trained to be discreet, professional, and respectful of your privacy and your neighbours. We maintain a clean, organized worksite and schedule our work to minimize disruption.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in the UBC Area?</h2>
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