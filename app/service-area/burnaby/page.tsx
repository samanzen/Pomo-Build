import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Burnaby Home Renovations & Handyman | Pomo Build',
  description: 'Your local Burnaby general contractor for professional home renovations. We specialize in kitchen and bath remodeling, basement suites, and expert handyman services.',
  alternates: {
    canonical: 'https://www.pomobuild.com/locations/burnaby',
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.pomobuild.com/locations" },
                     { "@type": "ListItem", "position": 3, "name": "Burnaby", "item": "https://www.pomobuild.com/locations/burnaby" }]
};

export default function BurnabyLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-burnaby.webp"
          alt="A residential street in Burnaby with the Metrotown skyline in the distance."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Your Trusted Burnaby Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Serving homeowners from Brentwood to Metrotown & beyond.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Burnaby Renovation Partner</h2>
          <p className="mt-6 text-gray-600">
            From the family-oriented neighborhoods of Capitol Hill to the bustling high-rises in Brentwood and Metrotown, Burnaby offers a diverse range of homes, each with its own unique character. Pomo Build is proud to offer our full suite of renovation and handyman services to the Burnaby community. We understand the value of a well-maintained and beautifully updated home in this dynamic market.
          </p>
        </section>

        {/* Services Offered Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Services in Burnaby</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Condo & Home Renovations</h3><p className="mt-4 text-gray-600">Specializing in full renovations for both single-family homes and high-rise apartments common in the Burnaby area.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Decks & Patios</h3><p className="mt-4 text-gray-600">We design and build beautiful outdoor living spaces perfect for enjoying the views from Burnaby Mountain or your own backyard.</p></div></Link>
            <Link href="/services/basement-finishing" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Basement Suites</h3><p className="mt-4 text-gray-600">Maximize your property's potential with a legal secondary suite, a popular and valuable addition for homes in Burnaby.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Burnaby Renovation Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are you familiar with the renovation rules for Burnaby high-rises?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We have extensive experience working within the specific rules and regulations set by strata councils in Burnaby's high-rise buildings. We manage all communication and approvals to ensure a smooth process.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is a 'Burnaby Special' and can you renovate one?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">A 'Burnaby Special' is a type of house built in the 1960s-80s with a specific layout. We are experts at renovating these homes, often by creating a modern open-concept main floor and updating the exterior for a more contemporary look.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in Burnaby?</h2>
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