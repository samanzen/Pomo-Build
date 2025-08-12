import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Lions Bay Custom Home Renovations | Pomo Build',
  description: 'Pomo Build is a premier general contractor for luxury and architectural home renovations in Lions Bay, BC. We specialize in challenging hillside builds and creating spaces with stunning ocean views.',
  alternates: {
    canonical: 'https://www.pomobuild.com/service-area/lions-bay',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" },
                     { "@type": "ListItem", "position": 3, "name": "Lions Bay", "item": "https://www.pomobuild.com/service-area/lions-bay" }]
};

export default function LionsBayLocationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/location-hero-lions-bay.webp"
          alt="A modern home in Lions Bay with a panoramic view of Howe Sound."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Lions Bay's Premier Renovation Contractor</h1>
          <p className="mt-4 text-lg text-gray-200">Expertise for Architecturally-Driven Projects.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Bespoke Renovations for Lions Bay Homes</h2>
          <p className="mt-6 text-gray-600">
            Lions Bay is a one-of-a-kind community, known for its dramatic hillside homes, architectural significance, and unparalleled views of Howe Sound. At Pomo Build, we offer a specialized renovation service that meets the unique challenges and high standards of properties in this exclusive village.
          </p>
          <p className="mt-4 text-gray-600">
            Our team has proven expertise in managing complex renovations on steep, challenging lots. We excel at collaborating with architects and homeowners to execute custom projects that require precision engineering and a deep respect for the natural landscape. From large-scale structural changes to high-end interior finishes, we are committed to delivering a superior quality build and a professional, seamless experience for our Lions Bay clients.
          </p>
        </section>

        {/* Services Offered in Lions Bay Section */}
        <section className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-center text-[#1F2937]">Our Specializations in Lions Bay</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Architectural & Custom Homes</h3><p className="mt-4 text-gray-600">We manage complex, architecturally-driven renovations and custom home projects with precision and expertise.</p></div></Link>
            <Link href="/services/decks-exteriors" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Hillside Decks & Patios</h3><p className="mt-4 text-gray-600">We engineer and build stunning, durable decks and outdoor spaces designed for steep lots to maximize your views.</p></div></Link>
            <Link href="/services/kitchen-bath" className="group block"><div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow"><h3 className="text-2xl font-bold text-[#1F2937]">Window & Glass Wall Systems</h3><p className="mt-4 text-gray-600">We specialize in installing large-format windows and glass wall systems to capture the breathtaking scenery of Howe Sound.</p></div></Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Lions Bay Project Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you have experience with the building requirements in Lions Bay?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">Yes, we are familiar with the specific municipal bylaws and challenging geotechnical conditions in Lions Bay. Our process includes careful planning and engineering to ensure all projects are safe, compliant, and built to withstand the unique environment.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you handle material delivery for difficult-to-access properties?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p className="mt-4 text-gray-600">We develop a detailed logistics plan for each project. This can include using smaller delivery vehicles, coordinating crane services for heavy items, and meticulous scheduling to ensure a smooth and efficient construction process, no matter how challenging the access.</p></details>
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
          <h2 className="text-3xl font-bold">Planning a Project in Lions Bay?</h2>
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