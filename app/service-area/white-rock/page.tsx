import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/white-rock');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'White Rock', path: '/service-area/white-rock' },
]);

export default function WhiteRockLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-white-rock.webp"
          alt="A modern home in White Rock with a stunning ocean view of Semiahmoo Bay."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">White Rock's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Building Beautiful Spaces by the Sea.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for White Rock Homes</h2>
          <p className="mt-6 text-gray-600">
            With its stunning ocean views and vibrant seaside community, White Rock is one of the most desirable places to live in the Lower Mainland. At Pomo Build, we provide premium renovation services that enhance the beauty and value of your White Rock home, whether it's a modern condo with a view of the pier or a classic home on the hillside.
          </p>
          <p className="mt-4 text-gray-600">
            We specialize in projects that embrace the coastal lifestyle. Our team has extensive experience building durable, weather-resistant decks and patios, renovating kitchens and bathrooms to be bright and airy, and performing whole-home updates that maximize natural light and ocean views. We are your local experts, committed to delivering unparalleled quality and a seamless renovation experience.
          </p>
        </section>

        <LocationPageExtras slug="white-rock" servicesHeading="Our Services in White Rock" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">White Rock Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What materials do you recommend for coastal homes?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For homes exposed to salt air, we recommend highly durable, corrosion-resistant materials. For exteriors, this includes composite decking, stainless steel railings, and high-performance siding. We can help you select the best materials to protect your investment.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How can we maximize our ocean view during a renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We specialize in designs that prioritize views. This can include installing larger windows or sliding glass doors, creating open-concept layouts, or building multi-level decks. We work with you to ensure the final design perfectly frames your beautiful surroundings.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in White Rock?</h2>
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