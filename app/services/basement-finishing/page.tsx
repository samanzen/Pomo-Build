import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import RelatedLinks from '@/components/RelatedLinks';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/schema';
import { TRI_CITIES_HREF } from '@/lib/locations';

export const metadata = pageMetadata('services/basement-finishing');

const faqs = [
  {
    question: 'How much value does a finished basement add?',
    answer:
      'A finished basement can add usable living space and may support resale value or rental income, but the return varies by property, neighbourhood, and current market conditions. We do not treat any percentage as a guaranteed result. Confirm suite and occupancy rules with your municipality before planning rental income.',
  },
  {
    question: 'What is an egress window and why do I need one?',
    answer:
      'An egress window is a window large enough to be used as an emergency exit. British Columbia building rules generally require a compliant egress path for legal basement bedrooms. Exact sizes and locations depend on the current BC Building Code and your municipality, so we confirm those requirements during permitting.',
  },
];

export default function BasementFinishingPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: 'Basement Finishing', path: '/services/basement-finishing' },
        ])}
      />
      <JsonLd
        data={buildServiceSchema({
          name: 'Basement Finishing and Suites',
          serviceType: 'Basement finishing and remodeling',
          description:
            'Basement finishing and secondary-suite construction for Metro Vancouver homes, with municipal permit review before work begins.',
          path: '/services/basement-finishing',
        })}
      />
      <JsonLd data={buildFaqSchema(faqs)} />

      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/basement-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Basement Finishing & Suites</h1>
          <p className="mt-4 text-lg text-gray-300">Unlock the hidden potential beneath your home.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-20">
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Add Value and Livable Space</h2>
            <p className="mt-6 text-gray-600">
              An unfinished basement is a blank canvas. Finishing your basement is one of the most practical ways to add usable square footage when the existing structure and municipal rules allow it.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you envision a legal secondary suite for rental income, a comfortable family room, a home theatre, or a personal gym, we help plan the work around current building and suite requirements across Metro Vancouver.
            </p>
            <p className="mt-4 text-gray-600">
              Planning a suite or lower-level remodel in Coquitlam or Port Moody? Start with our{' '}
              <Link href={TRI_CITIES_HREF} className="font-semibold text-[#D97706] hover:underline">
                Tri-Cities renovations
              </Link>{' '}
              page.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image
              src="/images/basement-intro.webp"
              alt="A stylish and comfortable finished basement living area by Pomo Build."
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">A Practical Planning Decision</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Increased Usable Space</h3>
                    <p className="mt-4 text-gray-600">Adding legal, livable square footage can make a home more useful and more attractive to future buyers. The financial result depends on the property, the quality of the finish, and current market conditions in communities such as Coquitlam and Burnaby.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Potential Rental Income</h3>
                    <p className="mt-4 text-gray-600">A legal secondary suite can generate monthly income when the municipality approves the suite and occupancy. We help review suite requirements with the relevant municipality rather than treating rental income as automatic.</p>
                </div>
            </div>
        </section>

        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Featured Basement Projects</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-basement-1.webp" alt="Custom home theatre in a Port Moody basement with a large projection screen." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-basement-2.webp" alt="Bright legal secondary suite in a renovated Coquitlam basement." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-basement-3.webp" alt="Home gym with rubber flooring and exercise equipment in a finished basement." width={600} height={400} className="w-full h-64 object-cover" /></div>
            </div>
        </section>

        <RelatedLinks
          heading="Related work and communities"
          links={[
            { href: '/portfolio/basement-home-theatre', label: 'Basement home theatre', detail: 'Published Vancouver basement case study.' },
            { href: '/service-area/coquitlam', label: 'Coquitlam renovations', detail: 'Basement finishing is a frequent Coquitlam request.' },
            { href: TRI_CITIES_HREF, label: 'Tri-Cities renovations', detail: 'Basement and suite projects in Port Moody, Coquitlam, and Port Coquitlam.' },
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
          <h2 className="text-3xl font-bold">Ready to Finish Your Basement?</h2>
          <div className="mt-8">
            <Link href="/contact#quote-form">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get Your Free Estimate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
