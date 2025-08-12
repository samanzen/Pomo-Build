import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'North Vancouver Renovation Contractor | Pomo Build',
  description: 'Pomo Build is your local expert for home renovations in North Vancouver. We specialize in custom homes, kitchen and bath remodels, and whole-home renovations from Deep Cove to Lonsdale.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/north-vancouver',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "North Vancouver", "item": "https://www.pomobuild.com/service-area/north-vancouver" }]
};

export default function NorthVancouverLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-north-vancouver.webp"
          alt="A beautiful home in North Vancouver with a view of the Lions Gate Bridge and downtown."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">North Vancouver's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Bringing Quality Craftsmanship to the North Shore.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Expert Renovations for North Vancouver Homes</h2>
          <p className="mt-6 text-gray-600">
            With its stunning natural scenery and beautiful homes, North Vancouver is a truly special place to live. At Pomo Build, we provide renovation services that honour the unique character of North Shore properties, from classic homes in Lonsdale to modern residences in Deep Cove. We understand the importance of building durable, high-quality spaces that can stand up to the coastal climate.
          </p>
          <p className="mt-4 text-gray-600">
            Our team is experienced in the specific building styles and challenges of North Vancouver. We manage every aspect of your project with professionalism, including navigating the permitting process with the District and City of North Vancouver. We are committed to delivering a final product that not only looks beautiful but also enhances your home's value and your family's quality of life.
          </p>
        </section>

        {/* Services Offered in North Vancouver Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Popular Services on the North Shore</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">High-Performance Decks</h3><p className="mt-4 text-gray-600">We build stunning, weather-resistant decks perfect for enjoying North Vancouver's incredible views and natural surroundings.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Whole Home Renovations</h3><p className="mt-4 text-gray-600">We specialize in complete home transformations, updating older North Shore homes with modern layouts and energy-efficient features.</p></div></Link>
            <Link href="/services/basement-finishing" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Custom Renovations</h3><p className="mt-4 text-gray-600">From custom millwork to unique architectural details, we bring your specific vision for your North Vancouver home to life.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">North Vancouver Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Are there specific building considerations for the North Shore?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, due to the higher rainfall and mountainous terrain, we place a special emphasis on using high-quality, weather-resistant materials for all exterior work, including specialized waterproofing and durable siding to protect your home.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can you work on homes with steep or difficult-to-access lots?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Absolutely. Our team is experienced and equipped to handle the logistical challenges of working on the sloped and challenging lots that are common throughout North Vancouver, ensuring safety and efficiency at all times.</p></details>
            </div>
        </section>

        {/* Local Map Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Verified Business Location</h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23723538.835546922!2d-100.3574714!3d43.461853999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43f55dce88b1a187%3A0xaaa51629ca4acee6!2sPomo%20Build!5e0!3m2!1sen!2sca!4v1754354263405!5m2!1sen!2sca" className="w-full h-full" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Planning a Project in North Vancouver?</h2>
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