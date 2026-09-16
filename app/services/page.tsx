import Link from 'next/link';
import { pageMetadata } from '@/lib/page-seo';
import { SERVICE_HUB_CARDS } from '@/lib/services';
import { TRI_CITIES_HREF } from '@/lib/locations';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('services');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]);

export default function ServicesPage() {
  return (
    <div className="bg-[#F9FAFB]">
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          From full-scale renovations to expert handyman tasks, we provide comprehensive solutions
          for homes and businesses in the Tri-Cities.
        </p>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_HUB_CARDS.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="bg-white p-8 rounded-lg shadow-md text-left flex flex-col hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={`${100 * (index % 3)}`}
            >
              <h3 className="text-2xl font-bold text-[#1F2937]">{service.title}</h3>
              <p className="mt-4 text-gray-600 flex-grow">{service.description}</p>
              <span className="mt-6 inline-block font-bold text-[#D97706]">
                {service.cta} →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-600">
          Serving Port Moody, Coquitlam, Port Coquitlam, Anmore, and Belcarra first.{' '}
          <Link href={TRI_CITIES_HREF} className="font-semibold text-[#D97706] hover:underline">
            See Tri-Cities renovations
          </Link>
          .
        </p>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">Ready to Start Your Project?</h2>
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
