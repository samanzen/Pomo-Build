import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/lions-bay');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Lions Bay', path: '/service-area/lions-bay' },
]);

export default function LionsBayLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-lions-bay.webp"
          alt="A modern home in Lions Bay with a panoramic view of Howe Sound."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Lions Bay's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Expertise for Architecturally-Driven Projects.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Bespoke Renovations for Lions Bay Homes</h2>
          <p className="mt-6 text-gray-600">
            Lions Bay is a one-of-a-kind community, known for its dramatic hillside homes, architectural significance, and unparalleled views of Howe Sound. At Pomo Build, we offer a specialized renovation service that meets the unique challenges and high standards of properties in this exclusive village.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has proven expertise in managing complex renovations on steep, challenging lots. We excel at collaborating with architects and homeowners to execute custom projects that require precision engineering and a deep respect for the natural landscape. From large-scale structural changes to high-end interior finishes, we are committed to delivering a superior quality build and a professional, seamless experience for our Lions Bay clients.
          </p>
        </section>

        <LocationPageExtras slug="lions-bay" servicesHeading="Our Services in Lions Bay" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Lions Bay Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you have experience with the building requirements in Lions Bay?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, we are familiar with the specific municipal bylaws and challenging geotechnical conditions in Lions Bay. Our process includes careful planning and engineering to ensure all projects are safe, compliant, and built to withstand the unique environment.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you handle material delivery for difficult-to-access properties?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We develop a detailed logistics plan for each project. This can include using smaller delivery vehicles, coordinating crane services for heavy items, and meticulous scheduling to ensure a smooth and efficient construction process, no matter how challenging the access.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Lions Bay?</h2>
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