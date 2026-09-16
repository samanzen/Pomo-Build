import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/page-seo';
import { PRIORITY_LOCATIONS, SECONDARY_LOCATIONS, TRI_CITIES_HREF } from '@/lib/locations';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area');

export default function ServiceAreaPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Service Area', path: '/service-area' },
        ])}
      />
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          Our Service Area
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Pomo Build is based in Port Moody. Our primary market is the Tri-Cities; we also take
          selected projects across Metro Vancouver.
        </p>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="rounded-lg bg-[#F9FAFB] p-8 text-center shadow-sm" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">Primary service area: Tri-Cities</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Port Moody, Coquitlam, Port Coquitlam, Anmore, and Belcarra are the communities we
            prioritize. Start with our{' '}
            <Link href={TRI_CITIES_HREF} className="font-semibold text-[#D97706] hover:underline">
              Tri-Cities renovations
            </Link>{' '}
            page for estimates, services, and local details.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PRIORITY_LOCATIONS.map((location) => (
              <Link key={location.slug} href={location.href}>
                <div className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="text-xl font-semibold text-gray-800">{location.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">
            Additional Metro Vancouver coverage
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            These communities are secondary to our Tri-Cities focus. We review each project for
            schedule, access, and fit before we commit.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {SECONDARY_LOCATIONS.map((location) => (
              <Link key={location.slug} href={location.href}>
                <div className="rounded-lg bg-[#F9FAFB] p-5 text-center shadow-sm hover:shadow-md transition-all duration-300">
                  <span className="text-lg font-medium text-gray-700">{location.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB]">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">
            Don&apos;t See Your City?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            If your project is in the Lower Mainland but you don&apos;t see your city listed, please contact us. We review additional communities case by case.
          </p>
          <div className="mt-8">
            <Link href="/contact#quote-form">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
