import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/anmore');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Anmore', path: '/service-area/anmore' },
]);

export default function AnmoreLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-anmore.webp"
          alt="A luxurious, modern architectural home nestled in a dense, green forest in Anmore."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Anmore's Premier Custom Home Renovator</h1>
          <p className="mt-4 text-lg text-gray-200">Building and Renovating Exceptional Properties.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for Anmore's Unique Homes</h2>
          <p className="mt-6 text-gray-600">
            Anmore is a community defined by its stunning natural beauty, large private lots, and magnificent custom homes. At Pomo Build, we provide a specialized, high-end renovation service that meets the exceptional standards of Anmore homeowners. We understand that properties in this area require a superior level of design, craftsmanship, and project management.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has the expertise to execute large-scale, complex renovations that seamlessly blend luxury with the surrounding landscape. We collaborate with the region's top architects and designers to bring your vision to life, whether it's a full-home transformation, a gourmet kitchen remodel, or the creation of an incredible outdoor living space. We are committed to a discreet and professional process for our discerning Anmore clients.
          </p>
          <p className="mt-4 text-gray-600">
            Anmore is part of our{' '}
            <Link href="/tri-cities-renovations" className="font-semibold text-[#D97706] hover:underline">
              Tri-Cities renovations
            </Link>{' '}
            focus, alongside Coquitlam, Port Moody, Port Coquitlam, and Belcarra.
          </p>
        </section>

        <LocationPageExtras slug="anmore" servicesHeading="Our Specializations in Anmore" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Anmore Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you protect the natural landscape during a renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We have a deep respect for Anmore's natural environment. Our project planning includes specific measures for tree and landscape protection, erosion control, and responsible site management to minimize our impact on your property and the surrounding area.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you work with our architect on a custom home project?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We excel at collaborating with architects and interior designers. We see ourselves as a key partner in the project team, dedicated to executing your architect's vision with precision, quality, and clear communication.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Anmore?</h2>
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