import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/richmond');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Richmond', path: '/service-area/richmond' },
]);

export default function RichmondLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-richmond.webp"
          alt="A large, modern two-story home in a beautiful suburban neighborhood in Richmond."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Richmond's Trusted Renovation Partner</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Homeowners from Steveston to City Centre.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for Richmond Homes</h2>
          <p className="mt-6 text-gray-600">
            Richmond is known for its beautiful neighborhoods, diverse housing styles, and strong property values. At Pomo Build, we provide high-end renovation services designed to enhance the beauty and functionality of your Richmond home. Whether you own a spacious single-family house in Steveston or a modern condo in the city centre, our team has the expertise to bring your vision to life.
          </p>
          <p className="mt-4 text-gray-600">
            We are experienced in working with the City of Richmond's building and permitting regulations, ensuring every project is not only beautiful but also fully compliant. Our commitment to quality materials and superior craftsmanship means your renovation will be a lasting investment in your home, tailored to the unique needs of Richmond living.
          </p>
        </section>

        <LocationPageExtras slug="richmond" servicesHeading="Our Services in Richmond" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Richmond Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there specific building considerations for homes in Richmond?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, due to Richmond's unique geography, we pay special attention to foundation requirements and moisture management in all our projects, particularly for basements and ground-level renovations, to ensure long-term durability.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you specialize in building wok kitchens?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We have extensive experience designing and building high-performance wok kitchens (also known as spice kitchens), including the specialized ventilation and durable surfaces they require. This is a very popular and valuable addition for many homes in Richmond.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Richmond?</h2>
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