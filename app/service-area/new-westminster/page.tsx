import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'New Westminster Renovation Contractor | Pomo Build',
  description: 'Pomo Build is your local expert for heritage home renovations and condo remodeling in New Westminster, BC. We specialize in kitchen and bath updates, and professional handyman services.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/new-westminster',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "New Westminster", "item": "https://www.pomobuild.com/service-area/new-westminster" }]
};

export default function NewWestminsterLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-new-westminster.webp"
          alt="A beautifully restored heritage home on a street in the Queen's Park neighborhood of New Westminster."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">New Westminster Heritage & Modern Renovations</h1>
          <p className="mt-4 text-lg text-gray-200">Preserving History, Building for the Future.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Your Renovation Specialists in the Royal City</h2>
          <p className="mt-6 text-gray-600">
            New Westminster's rich history is reflected in its stunning collection of heritage homes, particularly in neighborhoods like Queen's Park. At Pomo Build, we have a special passion and expertise for renovating these architectural treasures, as well as the city's modern condos and family homes. We blend contemporary functionality with historical character to create timeless spaces.
          </p>
          <p className="mt-4 text-gray-600">
            Our team is highly experienced in the unique requirements of heritage home restoration, from sourcing period-appropriate materials to working with the City of New Westminster's heritage department. We provide a full-service renovation experience, ensuring that every project, whether historical or modern, is handled with the utmost care, quality, and professionalism.
          </p>
        </section>

        {/* Services Offered in New Westminster Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in New Westminster</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Heritage Home Kitchens & Baths</h3><p className="mt-4 text-gray-600">We design and build modern kitchens and bathrooms that seamlessly integrate with the historical character of your home.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Exterior Restoration</h3><p className="mt-4 text-gray-600">From porch repairs to period-correct siding and window replacements, we restore and enhance your home's curb appeal.</p></div></Link>
            <Link href="/services/handyman-services" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Condo & Apartment Upgrades</h3><p className="mt-4 text-gray-600">We offer a full range of services for New Westminster's growing number of condos, from simple repairs to full remodels.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">New Westminster Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is a Heritage Revitalization Agreement (HRA)?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">An HRA is a formal agreement with the City of New Westminster that allows for variances (like adding a suite or laneway house) in exchange for the long-term protection of a heritage property. We have experience guiding clients through this valuable process.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you match new woodwork to the original style of my older home?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, our skilled carpenters specialize in custom millwork. We can replicate historical trim, baseboards, and other wooden features to ensure any new construction blends perfectly with the original character of your home.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in New Westminster?</h2>
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