import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Maple Ridge Renovation Contractor | Pomo Build',
  description: 'Pomo Build offers expert home renovation and handyman services in Maple Ridge, BC. We specialize in renovating family homes, equestrian properties, and creating custom outdoor living spaces.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/maple-ridge',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Maple Ridge", "item": "https://www.pomobuild.com/service-area/maple-ridge" }]
};

export default function MapleRidgeLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-maple-ridge.webp"
          alt="A modern farmhouse style home on a large property in Maple Ridge."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Maple Ridge Home Renovation Experts</h1>
          <p className="mt-4 text-lg text-gray-200">Serving Properties from Silver Valley to Albion.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Pomo Build: Your Partner in Maple Ridge</h2>
          <p className="mt-6 text-gray-600">
            Maple Ridge is cherished for its stunning natural landscapes, spacious properties, and strong community spirit. From family homes in Albion to equestrian properties and rural estates, the homes here are unique. Pomo Build provides specialized renovation services tailored to the lifestyle of Maple Ridge residents, focusing on quality, durability, and beautiful design.
          </p>
          <p className="mt-4 text-gray-600">
            We have a deep appreciation for the types of projects common in the area, whether it's building a large, custom deck to enjoy the view, renovating a farmhouse kitchen, or providing reliable handyman services for your property. We manage all aspects of your project, including working with the City of Maple Ridge for any necessary permits, to ensure a seamless and successful renovation.
          </p>
        </section>

        {/* Services Offered in Maple Ridge Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in Maple Ridge</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Custom Decks & Outbuildings</h3><p className="mt-4 text-gray-600">We build expansive decks, patios, and functional outbuildings like workshops or sheds, perfect for larger properties.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Farmhouse Kitchen Renovations</h3><p className="mt-4 text-gray-600">We specialize in creating warm, inviting farmhouse-style kitchens with modern amenities for family gatherings.</p></div></Link>
            <Link href="/services/basement-finishing" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Full Home Remodels</h3><p className="mt-4 text-gray-600">We manage complete renovations for single-family homes, updating layouts and finishes to suit modern lifestyles.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Maple Ridge Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you build structures like small barns or workshops?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, our expertise extends to outbuildings. We can design and construct a variety of structures, from garden sheds and workshops to small barns, ensuring they are built to code and meet your specific needs.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you work with septic and well systems in rural areas?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">While we are not septic or well installers, we have a network of trusted, licensed subcontractors we work with for projects on rural properties. We can manage and coordinate all aspects of the job to ensure everything is handled professionally.</p></details>
            </div>
        </section>

        {/* Local Map Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Maple Ridge Service Area</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23723538.835546922!2d-100.3574714!3d43.461853999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754354263405!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in Maple Ridge?</h2>
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