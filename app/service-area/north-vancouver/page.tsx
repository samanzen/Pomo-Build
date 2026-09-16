import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/north-vancouver');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'North Vancouver', path: '/service-area/north-vancouver' },
]);

export default function NorthVancouverLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-north-vancouver.webp"
          alt="A beautiful home in North Vancouver with a view of the Lions Gate Bridge and downtown."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">North Vancouver's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Bringing Quality Craftsmanship to the North Shore.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for North Vancouver Homes</h2>
          <p className="mt-6 text-gray-600">
            With its stunning natural scenery and beautiful homes, North Vancouver is a truly special place to live. At Pomo Build, we provide renovation services that honour the unique character of North Shore properties, from classic homes in Lonsdale to modern residences in Deep Cove. We understand the importance of building durable, high-quality spaces that can stand up to the coastal climate.
          </p>
          <p className="mt-4 text-gray-600">
            Our team is experienced in the specific building styles and challenges of North Vancouver. We manage every aspect of your project with professionalism, including navigating the permitting process with the District and City of North Vancouver. We are committed to delivering a final product that not only looks beautiful but also enhances your home's value and your family's quality of life.
          </p>
        </section>

        <LocationPageExtras slug="north-vancouver" servicesHeading="Our Services in North Vancouver" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">North Vancouver Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there specific building considerations for the North Shore?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, due to the higher rainfall and mountainous terrain, we place a special emphasis on using high-quality, weather-resistant materials for all exterior work, including specialized waterproofing and durable siding to protect your home.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you work on homes with steep or difficult-to-access lots?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. Our team is experienced and equipped to handle the logistical challenges of working on the sloped and challenging lots that are common throughout North Vancouver, ensuring safety and efficiency at all times.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in North Vancouver?</h2>
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