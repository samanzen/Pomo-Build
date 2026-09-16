import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/page-seo';
import { GROUPED_SERVICE_AREAS, TRI_CITIES_HREF } from '@/lib/locations';
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
          Service Areas Across Metro Vancouver
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Based in Port Moody, Pomo Build provides renovation, general contracting, and handyman
          services across Metro Vancouver. Select your community to explore local service
          information.
        </p>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        {GROUPED_SERVICE_AREAS.map((group, groupIndex) => (
          <div
            key={group.id}
            className={groupIndex === 0 ? 'rounded-lg bg-[#F9FAFB] p-8 shadow-sm' : 'mt-16'}
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-center text-[#1F2937]">{group.heading}</h2>
            {group.id === 'tri-cities-nearby' ? (
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
                Port Moody, Coquitlam, and Port Coquitlam make up the Tri-Cities. Anmore and Belcarra
                are nearby communities. See our{' '}
                <Link href={TRI_CITIES_HREF} className="font-semibold text-[#D97706] hover:underline">
                  Tri-Cities renovations
                </Link>{' '}
                page for a regional overview.
              </p>
            ) : null}
            <div
              className={`mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 ${
                group.locations.length >= 4 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'
              }`}
            >
              {group.locations.map((location) => (
                <Link key={location.slug} href={location.href}>
                  <div
                    className={`rounded-lg p-6 text-center transition-all duration-300 ${
                      groupIndex === 0
                        ? 'bg-white shadow-md hover:shadow-lg hover:-translate-y-1'
                        : 'bg-[#F9FAFB] shadow-sm hover:shadow-md'
                    }`}
                  >
                    <span className="text-xl font-semibold text-gray-800">{location.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#F9FAFB]">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">
            Don&apos;t See Your City?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            If your project is in the Lower Mainland but you don&apos;t see your city listed, please contact us. We review Metro Vancouver communities case by case.
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
