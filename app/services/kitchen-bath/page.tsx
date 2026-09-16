import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import RelatedLinks from '@/components/RelatedLinks';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/schema';
import { TRI_CITIES_HREF } from '@/lib/locations';

export const metadata = pageMetadata('services/kitchen-bath');

const faqs = [
  {
    question: 'How long does a typical kitchen remodel take?',
    answer:
      'A standard kitchen remodel typically takes between 4 to 8 weeks, depending on the scope of work, material availability, and inspections. We provide a detailed project schedule before we begin.',
  },
  {
    question: 'Do I need a permit for my bathroom renovation?',
    answer:
      'It depends on the scope. If you are moving plumbing, electrical, or walls, a permit is typically required. We handle the entire permit application process for you.',
  },
  {
    question: 'Can I live in my home during the renovation?',
    answer:
      'For most bathroom renovations, yes. For large kitchen renovations, it can be challenging. We take extensive measures to contain dust and debris and to minimize disruption to your daily life.',
  },
];

export default function KitchenBathPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Kitchen & Bath', path: '/services/kitchen-bath' },
        ])}
      />
      <JsonLd
        data={buildServiceSchema({
          name: 'Kitchen and Bathroom Remodeling',
          serviceType: 'Kitchen and bathroom remodeling',
          description:
            'Kitchen and bathroom remodels in Port Moody and the Tri-Cities, including cabinets, tile, fixtures, and layout updates.',
          path: '/services/kitchen-bath',
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />

      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/service-bath.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Kitchen & Bathroom Remodeling</h1>
          <p className="mt-4 text-lg text-gray-300">Creating beautiful, functional spaces for the heart of your home.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20">
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Invest in the Most Important Rooms</h2>
            <p className="mt-6 text-gray-600">
              Kitchen and bathroom renovations are among the most requested upgrades we plan for Tri-Cities homeowners. A thoughtfully designed kitchen becomes a gathering place, while a modern bathroom provides a private sanctuary.
            </p>
            <p className="mt-4 text-gray-600">
              At Pomo Build, we combine thoughtful design and expert craftsmanship to create spaces that are not only stunning but also perfectly tailored to your lifestyle.
            </p>
            <p className="mt-4 text-gray-600">
              Serving Tri-Cities homeowners? See our dedicated{' '}
              <Link href={TRI_CITIES_HREF} className="font-semibold text-[#D97706] hover:underline">
                Tri-Cities renovations
              </Link>{' '}
              page for local kitchen and bathroom remodel details.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image
              src="/images/service-renovation.webp"
              alt="A bright and modern kitchen with a large island"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Featured Kitchen & Bath Projects</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/gallery-kitchen-1.webp" alt="Modern white kitchen with gold fixtures" width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="group overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/gallery-bath-1.webp" alt="Luxury bathroom with a walk-in shower" width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="group overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/gallery-kitchen-2.webp" alt="Spacious kitchen with dark cabinets and a breakfast bar" width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
            </div>
        </section>

        <section className="mt-20 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">Quality Materials & Finishes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We partner with leading suppliers to provide a wide selection of high-quality, durable, and beautiful materials for your project.</p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Quartz & Granite</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Custom Millwork</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Porcelain & Ceramic Tile</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Luxury Vinyl Plank</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Designer Fixtures</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">LED Pot Lighting</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Heated Flooring</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Frameless Glass</div>
          </div>
        </section>

        <RelatedLinks
          heading="Related work and communities"
          links={[
            { href: '/portfolio/modern-kitchen-remodel', label: 'Modern kitchen remodel', detail: 'Published Burnaby kitchen case study.' },
            { href: '/portfolio/luxury-ensuite-bathroom', label: 'Luxury ensuite bathroom', detail: 'Published Coquitlam bathroom case study.' },
            { href: '/service-area/coquitlam', label: 'Coquitlam renovations', detail: 'Kitchen and bath work for Coquitlam homes.' },
            { href: TRI_CITIES_HREF, label: 'Tri-Cities renovations', detail: 'Regional estimate path for the five priority communities.' },
          ]}
        />

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm">
                    <summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">
                      {faq.question}
                      <span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span>
                    </summary>
                    <p className="mt-4 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
            </div>
        </section>
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Remodel Your Kitchen or Bath?</h2>
          <div className="mt-8">
            <Link href="/contact#quote-form">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Schedule Your Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
