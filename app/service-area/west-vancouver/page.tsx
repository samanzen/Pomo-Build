import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'West Vancouver Luxury Home Renovations | Pomo Build',
  description: 'Pomo Build is a premier general contractor for luxury home renovations in West Vancouver, BC. We specialize in high-end kitchen and bath remodels, custom homes, and whole-home transformations.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/west-vancouver',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "West Vancouver", "item": "https://www.pomobuild.com/service-area/west-vancouver" }]
};

export default function WestVancouverLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-west-vancouver.webp"
          alt="A modern luxury home in West Vancouver with an ocean view."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">West Vancouver's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Delivering Unparalleled Quality for Luxury Properties.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for West Vancouver Estates</h2>
          <p className="mt-6 text-gray-600">
            West Vancouver is synonymous with luxury, architectural excellence, and breathtaking views. At Pomo Build, we provide a bespoke renovation service that meets the exacting standards of West Vancouver homeowners. We understand that renovating a luxury property requires a superior level of craftsmanship, project management, and attention to detail.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has the expertise to execute complex, large-scale projects, from waterfront home transformations to renovations on challenging hillside lots. We collaborate closely with architects and interior designers to ensure every element of your vision is brought to life flawlessly. We are committed to delivering a discreet, professional, and exceptional renovation experience for our discerning clients in West Vancouver.
          </p>
        </section>

        {/* Services Offered in West Vancouver Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Specializations in West Vancouver</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">High-End Kitchen & Bath Remodels</h3><p className="mt-4 text-gray-600">We create stunning, custom kitchens and spa-like ensuite bathrooms using premium materials and the finest finishes.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Architectural Renovations</h3><p className="mt-4 text-gray-600">We manage whole-home renovations that enhance architectural details, maximize views, and integrate modern luxury.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Outdoor Living Spaces</h3><p className="mt-4 text-gray-600">We design and build infinity-edge pools, expansive patios, and custom decks that seamlessly blend with the landscape.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">West Vancouver Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you manage projects with high-end or imported materials?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We have established relationships with top-tier suppliers and artisans. Our project management includes meticulous procurement and logistics to ensure all materials, whether sourced locally or internationally, arrive on time and are handled with the utmost care.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you collaborate with interior designers and architects?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, we work seamlessly with the region's top architects and interior designers. We can partner with your chosen design professionals or recommend trusted experts from our network to ensure your project's vision is executed perfectly.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in West Vancouver?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Request a Private Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}