import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocationPageExtras from '@/components/LocationPageExtras';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';

export const metadata = pageMetadata('service-area/coquitlam');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Area', path: '/service-area' },
  { name: 'Coquitlam', path: '/service-area/coquitlam' },
]);

export default function CoquitlamLocationPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-coquitlam.webp"
          alt="A beautiful suburban street in Coquitlam with Mount Baker in the background."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Local Coquitlam Renovation Experts</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Homeowners from Burke Mountain to Maillardville.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Proudly Serving Coquitlam</h2>
          <p className="mt-6 text-gray-600">
            Coquitlam is a diverse and growing community, with a unique mix of established family homes, modern townhouses on Burke Mountain, and high-rise condos in the city centre. At Pomo Build, we understand the specific needs of Coquitlam homeowners. Whether you're looking to update an older home in the Austin Heights area, add a legal suite to your home near Coquitlam Centre, or finish the basement in your new build, our team has the local experience and expertise to deliver exceptional results.
          </p>
          <p className="mt-4 text-gray-600">
            Our commitment is to provide our Coquitlam neighbours with the highest standard of quality, reliability, and professionalism. We are a fully licensed and insured local business, dedicated to enhancing the homes and properties in the community we know and love. From small handyman repairs to full-scale home renovations, we are your trusted local partner for any project. We navigate the specific permitting processes with the City of Coquitlam to ensure every project is built to code and built to last.
          </p>
          <p className="mt-4 text-gray-600">
            Planning a kitchen, bathroom, or full-home remodel across the Tri-Cities? Visit our{' '}
            <Link href="/tri-cities-renovations" className="font-semibold text-[#D97706] hover:underline">
              Tri-Cities renovations
            </Link>{' '}
            page for a focused overview and free on-site estimate options.
          </p>
        </section>

                   {/* Why Renovate in Coquitlam Section */}
<section className="mt-16" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center text-[#1F2937]">Why Invest in Your Coquitlam Home?</h2>
  <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
    <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-[#1F2937]">Increase Property Value</h3>
      <p className="mt-4 text-gray-600">The Coquitlam real estate market is highly competitive. A strategic renovation, such as a modern kitchen update or a new legal basement suite, can significantly increase your property's market value, providing an excellent return on your investment when it comes time to sell.</p>
    </div>
    <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-[#1F2937]">Enhance Your Lifestyle</h3>
      <p className="mt-4 text-gray-600">Your home should be a perfect fit for your family. Whether it's creating an open-concept living space for entertaining, building a backyard deck for summer barbecues, or adding a spa-like ensuite bathroom for relaxation, we help tailor your home to your lifestyle.</p>
    </div>
  </div>
</section>

        <LocationPageExtras slug="coquitlam" servicesHeading="Popular Services in Coquitlam" />

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Coquitlam Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do I need a special permit for renovating a condo in Coquitlam?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, in addition to city permits for any plumbing or electrical work, renovations in condos or townhouses also require approval from your Strata Council. We have extensive experience working with strata management companies in Coquitlam and can help prepare and submit all necessary documentation.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is the process for adding a legal suite in Coquitlam?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">The City of Coquitlam has specific requirements for secondary suites, including ceiling height, fire separation, and egress windows. Our process includes a full review of your property, creating compliant architectural plans, and managing the entire permit and inspection process with the city.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Starting a Project in Coquitlam?</h2>
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