import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/port-moody');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Port Moody', path: '/service-area/port-moody' },
]);

export default function PortMoodyLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-port-moody.webp"
          alt="A beautiful view of the Burrard Inlet from a home in Port Moody."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Local Port Moody Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Building for Our Neighbours in the City of the Arts.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Port Moody Neighbour</h2>
          <p className="mt-6 text-gray-600">
            As a business based in Port Moody, we have a deep connection to this incredible community. From the heritage homes near Moody Centre to the modern condos at Suter Brook and Klahanie, we understand the unique character and value of Port Moody properties. Our name, Pomo Build, is a direct reflection of our local pride.
          </p>
          <p className="mt-4 text-gray-600">
            We are not just contractors; we are your neighbours. We are committed to providing our community with the highest level of craftsmanship, honesty, and personalized service. Whether you're renovating a classic home, updating a condo, or need a trusted handyman, we bring local expertise and a passion for quality to every project.
          </p>
          <p className="mt-4 text-gray-600">
            For kitchen, bathroom, and full-home projects across neighbouring communities, see our{' '}
            <Link href="/tri-cities-renovations" className="font-semibold text-[#D97706] hover:underline">
              Tri-Cities renovations
            </Link>{' '}
            overview.
          </p>
        </section>

        <LocationPageExtras slug="port-moody" servicesHeading="Popular Services in Port Moody" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Port Moody Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are you familiar with the strata renovation rules in Suter Brook or Klahanie?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, we have completed numerous projects in Port Moody's condo villages. We are experts at navigating strata bylaws and the approval process, ensuring your renovation is a smooth and stress-free experience.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you offer design services for older homes?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We love working on Port Moody's classic homes. Our design process focuses on creating modern, functional spaces that respect and enhance the original character and charm of the property.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Port Moody?</h2>
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