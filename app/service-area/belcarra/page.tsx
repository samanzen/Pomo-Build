import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Belcarra Custom Home Renovations | Pomo Build',
  description: 'Pomo Build is a premier general contractor for luxury and waterfront home renovations in Belcarra, BC. We specialize in bespoke renovations that honour the area\'s natural beauty.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/belcarra',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Belcarra", "item": "https://www.pomobuild.com/service-area/belcarra" }]
};

export default function BelcarraLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-belcarra.webp"
          alt="A modern architectural home nestled in a forest on the Belcarra waterfront."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Belcarra's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Craftsmanship in Harmony with Nature.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Bespoke Renovations for Belcarra Properties</h2>
          <p className="mt-6 text-gray-600">
            Belcarra is a unique village, defined by its exclusive waterfront properties, dense forests, and commitment to preserving natural beauty. At Pomo Build, we offer a specialized renovation service for discerning homeowners in Belcarra, focusing on projects that require a superior level of design, craftsmanship, and respect for the environment.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has deep experience in executing complex custom home renovations on challenging waterfront and hillside lots. We work closely with architects and homeowners to create spaces that seamlessly blend modern luxury with the stunning natural surroundings of Indian Arm and Buntzen Lake. We are experts in navigating the specific building bylaws of the Village of Belcarra to ensure your project is a complete success.
          </p>
        </section>

        {/* Services Offered in Belcarra Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Specializations in Belcarra</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Waterfront Decks & Docks</h3><p className="mt-4 text-gray-600">We design and build exceptional, durable outdoor structures that maximize your enjoyment of Belcarra's waterfront lifestyle.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Custom Home Remodels</h3><p className="mt-4 text-gray-600">We manage complex, large-scale renovations that integrate sophisticated design with the natural landscape.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Window & Door Upgrades</h3><p className="mt-4 text-gray-600">We install high-performance, oversized windows and glass door systems to maximize your stunning forest and ocean views.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Belcarra Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there specific environmental considerations for building in Belcarra?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We have a strong commitment to environmental stewardship. Our process includes careful site management, tree protection, and erosion control measures to comply with the Village of Belcarra's strict environmental bylaws and preserve the natural state of your property.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you manage the logistics of a waterfront construction project?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes. We are experienced in the unique logistics of waterfront projects, which can include coordinating material delivery by barge and implementing specialized construction techniques for shoreline properties. We handle all complexities to ensure a smooth build.</p></details>
            </div>
        </section>

        {/* Local Map Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Verified Business Location</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d333432.4638791345!2d-122.86884595000001!3d49.23960545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754508326972!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Belcarra?</h2>
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