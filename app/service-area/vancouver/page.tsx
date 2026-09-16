import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/vancouver');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Vancouver', path: '/service-area/vancouver' },
]);

export default function VancouverLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-vancouver.webp"
          alt="A beautiful, cherry blossom-lined residential street in Kitsilano, Vancouver."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Vancouver Renovation Experts</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Homeowners from Kitsilano to East Van.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build in Vancouver</h2>
          <p className="mt-6 text-gray-600">
            Vancouver's diverse architecture, from historic Kitsilano character homes to modern Yaletown condos, requires a renovation partner with a deep understanding of the city's unique building landscape. Pomo Build brings a wealth of local experience to every Vancouver project, ensuring a seamless process that respects both the heritage and the modernity of your home.
          </p>
          <p className="mt-4 text-gray-600">
            We are experts in navigating the challenges of renovating in the city, including working with the City of Vancouver's permitting department and respecting the guidelines of local strata councils. Whether you're looking to restore the original charm of a heritage home or maximize the functionality of a downtown condo, our team is dedicated to delivering craftsmanship of the highest quality.
          </p>
        </section>

        <LocationPageExtras slug="vancouver" servicesHeading="Our Services in Vancouver" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Vancouver Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you have experience with Vancouver heritage home renovations?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, we have a deep appreciation for Vancouver's character homes. We specialize in renovations that preserve historical details like original trim and flooring while upgrading the home with modern, efficient plumbing, electrical, and insulation systems.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you help with strata approval for a condo renovation in Yaletown or Coal Harbour?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We have completed many condo renovations in downtown Vancouver and are experts at preparing the required documentation and plans for strata council approval, ensuring a smooth and hassle-free process for you.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Vancouver?</h2>
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