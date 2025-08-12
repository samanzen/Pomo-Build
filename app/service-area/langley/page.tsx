import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Langley Home Renovation Contractor | Pomo Build',
  description: 'Pomo Build is your local general contractor for home renovations in Langley, BC. We specialize in renovating family homes, kitchens, bathrooms, and creating custom decks.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/langley',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Langley", "item": "https://www.pomobuild.com/service-area/langley" }]
};

export default function LangleyLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-langley.webp"
          alt="A beautiful, modern family home in a Langley, British Columbia suburb."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Langley's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Families in Willoughby, Walnut Grove, and beyond.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for Langley Homes</h2>
          <p className="mt-6 text-gray-600">
            Langley is renowned for its family-friendly communities, beautiful parks, and a wonderful mix of housing, from new developments in Willoughby to established homes in Walnut Grove. Pomo Build is proud to be a trusted renovation partner for Langley homeowners, helping families create spaces that are both beautiful and functional.
          </p>
          <p className="mt-4 text-gray-600">
            Our team understands the needs of a growing family. We specialize in renovations that enhance daily life—whether it’s a spacious open-concept kitchen, a durable and beautiful deck for backyard entertaining, or a fully finished basement for the kids to play. We handle all project aspects, including permitting with the Township and City of Langley, ensuring your renovation is a stress-free success.
          </p>
        </section>

        {/* Services Offered in Langley Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in Langley</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Custom Decks & Fences</h3><p className="mt-4 text-gray-600">We create stunning outdoor spaces with high-quality decks and fences, perfect for Langley's family-oriented backyards.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Family Kitchen Remodels</h3><p className="mt-4 text-gray-600">We design durable, spacious, and beautiful kitchens built to be the heart of a busy family home.</p></div></Link>
            <Link href="/services/basement-finishing" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Basement Playrooms & Suites</h3><p className="mt-4 text-gray-600">Transform your basement into a functional playroom for the kids or a legal suite for extra income.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Langley Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is the difference between Langley City and the Township of Langley?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">They are two separate municipalities, each with its own specific building codes and permit processes. We have extensive experience working with both the City and the Township and manage all the necessary paperwork on your behalf.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there any specific materials you recommend for Langley homes?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For family homes, we always recommend highly durable and easy-to-clean materials. For kitchens, this means quartz countertops and resilient flooring like Luxury Vinyl Plank (LVP). For exteriors, composite decking is a popular low-maintenance choice for busy families.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in Langley?</h2>
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