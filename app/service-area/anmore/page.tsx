import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Anmore Custom Home Renovations | Pomo Build',
  description: 'Pomo Build is a premier general contractor for luxury custom home renovations in Anmore, BC. We specialize in large-scale remodels, high-end kitchens, and creating exceptional living spaces.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/anmore',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Anmore", "item": "https://www.pomobuild.com/service-area/anmore" }]
};

export default function AnmoreLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-anmore.webp"
          alt="A luxurious, modern architectural home nestled in a dense, green forest in Anmore."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Anmore's Premier Custom Home Renovator</h1>
          <p className="mt-4 text-lg text-gray-200">Building and Renovating Exceptional Properties.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for Anmore's Unique Homes</h2>
          <p className="mt-6 text-gray-600">
            Anmore is a community defined by its stunning natural beauty, large private lots, and magnificent custom homes. At Pomo Build, we provide a specialized, high-end renovation service that meets the exceptional standards of Anmore homeowners. We understand that properties in this area require a superior level of design, craftsmanship, and project management.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has the expertise to execute large-scale, complex renovations that seamlessly blend luxury with the surrounding landscape. We collaborate with the region's top architects and designers to bring your vision to life, whether it's a full-home transformation, a gourmet kitchen remodel, or the creation of an incredible outdoor living space. We are committed to a discreet and professional process for our discerning Anmore clients.
          </p>
        </section>

        {/* Services Offered in Anmore Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Specializations in Anmore</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Custom Home Renovations</h3><p className="mt-4 text-gray-600">We manage large-scale, whole-home renovations, transforming your property into a true masterpiece of design and quality.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Gourmet & Entertainer's Kitchens</h3><p className="mt-4 text-gray-600">We design and build exceptional, high-end kitchens equipped with premium appliances and the finest materials.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Luxury Outdoor Living</h3><p className="mt-4 text-gray-600">We create stunning outdoor spaces, including expansive decks, patios, and outdoor kitchens that flow from your home.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Anmore Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you protect the natural landscape during a renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We have a deep respect for Anmore's natural environment. Our project planning includes specific measures for tree and landscape protection, erosion control, and responsible site management to minimize our impact on your property and the surrounding area.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you work with our architect on a custom home project?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. We excel at collaborating with architects and interior designers. We see ourselves as a key partner in the project team, dedicated to executing your architect's vision with precision, quality, and clear communication.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in Anmore?</h2>
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