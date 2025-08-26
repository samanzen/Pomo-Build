import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'White Rock Home Renovation Contractor | Pomo Build',
  description: 'Pomo Build is your local expert for home and condo renovations in White Rock, BC. We specialize in creating beautiful ocean-view decks, kitchen and bath remodels, and handyman services.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/white-rock',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "White Rock", "item": "https://www.pomobuild.com/service-area/white-rock" }]
};

export default function WhiteRockLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-white-rock.webp"
          alt="A modern home in White Rock with a stunning ocean view of Semiahmoo Bay."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">White Rock's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Building Beautiful Spaces by the Sea.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for White Rock Homes</h2>
          <p className="mt-6 text-gray-600">
            With its stunning ocean views and vibrant seaside community, White Rock is one of the most desirable places to live in the Lower Mainland. At Pomo Build, we provide premium renovation services that enhance the beauty and value of your White Rock home, whether it's a modern condo with a view of the pier or a classic home on the hillside.
          </p>
          <p className="mt-4 text-gray-600">
            We specialize in projects that embrace the coastal lifestyle. Our team has extensive experience building durable, weather-resistant decks and patios, renovating kitchens and bathrooms to be bright and airy, and performing whole-home updates that maximize natural light and ocean views. We are your local experts, committed to delivering unparalleled quality and a seamless renovation experience.
          </p>
        </section>

        {/* Services Offered in White Rock Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services in White Rock</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Ocean-View Decks & Patios</h3><p className="mt-4 text-gray-600">We build spectacular, low-maintenance outdoor spaces perfect for enjoying White Rock's stunning sunsets and ocean views.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Bright & Airy Kitchen Remodels</h3><p className="mt-4 text-gray-600">We design and build beautiful, open-concept kitchens that are filled with natural light and perfect for coastal living.</p></div></Link>
            <Link href="/services/handyman-services" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Condo Renovations</h3><p className="mt-4 text-gray-600">We specialize in complete renovations for condos and apartments, maximizing space and enhancing views.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">White Rock Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What materials do you recommend for coastal homes?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">For homes exposed to salt air, we recommend highly durable, corrosion-resistant materials. For exteriors, this includes composite decking, stainless steel railings, and high-performance siding. We can help you select the best materials to protect your investment.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How can we maximize our ocean view during a renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We specialize in designs that prioritize views. This can include installing larger windows or sliding glass doors, creating open-concept layouts, or building multi-level decks. We work with you to ensure the final design perfectly frames your beautiful surroundings.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in White Rock?</h2>
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