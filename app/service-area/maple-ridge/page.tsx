import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/maple-ridge');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Maple Ridge', path: '/service-area/maple-ridge' },
]);

export default function MapleRidgeLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-maple-ridge.webp"
          alt="A modern farmhouse style home on a large property in Maple Ridge."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Maple Ridge Home Renovation Experts</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Properties from Silver Valley to Albion.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Partner in Maple Ridge</h2>
          <p className="mt-6 text-gray-600">
            Maple Ridge is cherished for its stunning natural landscapes, spacious properties, and strong community spirit. From family homes in Albion to equestrian properties and rural estates, the homes here are unique. Pomo Build provides specialized renovation services tailored to the lifestyle of Maple Ridge residents, focusing on quality, durability, and beautiful design.
          </p>
          <p className="mt-4 text-gray-600">
            We have a deep appreciation for the types of projects common in the area, whether it's building a large, custom deck to enjoy the view, renovating a farmhouse kitchen, or providing reliable handyman services for your property. We manage all aspects of your project, including working with the City of Maple Ridge for any necessary permits, to ensure a seamless and successful renovation.
          </p>
        </section>

        <LocationPageExtras slug="maple-ridge" servicesHeading="Our Services in Maple Ridge" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Maple Ridge Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you build structures like small barns or workshops?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, our expertise extends to outbuildings. We can design and construct a variety of structures, from garden sheds and workshops to small barns, ensuring they are built to code and meet your specific needs.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you work with septic and well systems in rural areas?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">While we are not septic or well installers, we have a network of trusted, licensed subcontractors we work with for projects on rural properties. We can manage and coordinate all aspects of the job to ensure everything is handled professionally.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Maple Ridge?</h2>
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