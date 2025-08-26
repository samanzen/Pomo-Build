import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Tsawwassen Home Renovation & Deck Builder | Pomo Build',
  description: 'Pomo Build is your local contractor for home renovations in Tsawwassen, BC. We specialize in building beautiful sun decks, kitchen remodels, and professional handyman services.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/tsawwassen',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Tsawwassen", "item": "https://www.pomobuild.com/service-area/tsawwassen" }]
};

export default function TsawwassenLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-tsawwassen.webp"
          alt="A beautiful modern home in a Tsawwassen suburb with a sunny backyard and pool."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Tsawwassen's Trusted Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Building for the Sunniest Place in Metro Vancouver.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Renovation Experts in Tsawwassen</h2>
          <p className="mt-6 text-gray-600">
            Tsawwassen is beloved for its sunny weather, beautiful beaches, and relaxed, family-friendly atmosphere. At Pomo Build, we provide expert renovation services that help homeowners make the most of the unique lifestyle this community offers. From building expansive sun decks to creating bright, open-concept living spaces, we tailor every project to your needs.
          </p>
          <p className="mt-4 text-gray-600">
            Our team understands the specific construction styles in communities from Boundary Bay to the new developments at Tsawwassen Shores. We are committed to using high-quality, durable materials that stand up to the coastal environment while delivering a beautiful, lasting finish. We handle all permitting and logistics, ensuring your renovation is a smooth and rewarding experience.
          </p>
        </section>

        {/* Services Offered in Tsawwassen Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in Tsawwassen</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Expansive Sun Decks & Patios</h3><p className="mt-4 text-gray-600">We build stunning, low-maintenance decks and patios perfect for soaking up the sun and enjoying outdoor living.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Bright & Open Kitchen Remodels</h3><p className="mt-4 text-gray-600">We create airy, open-concept kitchens with large windows and light finishes to maximize natural light.</p></div></Link>
            <Link href="/services/handyman-services" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Exterior Upgrades & Repairs</h3><p className="mt-4 text-gray-600">We provide expert siding, window, and door replacements using materials designed for coastal weather.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Tsawwassen Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What are the best materials for a deck in a sunny climate like Tsawwassen?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For areas with high sun exposure, we strongly recommend high-performance composite decking. It is extremely resistant to fading from UV rays, requires virtually no maintenance, and won't splinter or crack over time, making it perfect for poolsides and family backyards.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you help us make our home feel brighter?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We specialize in renovations that maximize natural light. This can include adding larger windows or skylights, removing interior walls to create an open-concept layout, and using light-colored paints and reflective finishes like glossy tiles and countertops.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in Tsawwassen?</h2>
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