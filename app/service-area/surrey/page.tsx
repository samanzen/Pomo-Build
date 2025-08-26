import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Surrey Renovation Contractor & Handyman Services | Pomo Build',
  description: 'Pomo Build is your local contractor for home renovations in Surrey, BC. We specialize in kitchen remodels, basement suite construction, and professional handyman services for homes across the city.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/surrey',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Surrey", "item": "https://www.pomobuild.com/service-area/surrey" }]
};

export default function SurreyLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-surrey.webp"
          alt="A beautiful, modern single-family home in a new suburban development in South Surrey."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Local Surrey Renovation Experts</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Homeowners from Fleetwood to South Surrey.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Renovation Partner in Surrey</h2>
          <p className="mt-6 text-gray-600">
            As one of the fastest-growing cities in the region, Surrey is home to a vast array of properties, from new townhome complexes in Clayton Heights to sprawling family homes in South Surrey. Pomo Build is proud to offer our full suite of renovation and handyman services to this vibrant and diverse community.
          </p>
          <p className="mt-4 text-gray-600">
            We understand that a renovation project is a significant investment. Our team works closely with Surrey homeowners to ensure every project is completed to the highest standard, on time, and on budget. We have extensive experience with the City of Surrey's building codes and permitting processes, ensuring your renovation is a smooth and valuable addition to your home.
          </p>
        </section>

        {/* Services Offered in Surrey Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services for Surrey Homes</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/basement-finishing" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Legal Basement Suites</h3><p className="mt-4 text-gray-600">Adding a legal secondary suite is a very popular and smart investment for Surrey homeowners, providing significant rental income potential.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Kitchen Renovations</h3><p className="mt-4 text-gray-600">We create beautiful, open-concept kitchens perfect for growing families and entertaining guests in your Surrey home.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Decks & Patios</h3><p className="mt-4 text-gray-600">Maximize your outdoor living space with a custom-built deck or patio, perfect for enjoying the beautiful BC summers.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Surrey Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is the permit process like for renovations in Surrey?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">The City of Surrey has a well-defined process. For most major renovations, we will need to submit architectural plans for review. We handle this entire process on your behalf, from application to final inspection, to ensure everything is seamless and compliant.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How can I maximize the ROI on my Surrey renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">In the current Surrey market, the renovations with the highest return on investment (ROI) are typically legal basement suites, followed by kitchen and bathroom remodels. These projects add significant value and appeal to potential buyers.</p></details>
            </div>
        </section>

        {/* Local Map Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Verified Business Location</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Surrey?</h2>
          <div className="mt-8">
            <Link href="/contact">
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