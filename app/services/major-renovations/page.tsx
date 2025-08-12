import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Major Home Renovations Contractor | Pomo Build',
  description: 'Pomo Build specializes in large-scale, major home renovations in the Metro Vancouver area. From whole-home remodels to custom additions, we are your trusted general contractor.',
  alternates: {
    canonical: 'https://www.pomobuild.com/services/major-renovations',
  },
  openGraph: {
    title: 'Major Home Renovations Contractor | Pomo Build',
    description: 'Expert management of large-scale home renovations and additions.',
    images: [{ url: '/images/renovation-hero.webp' }],
  },
};

const breadcrumbSchema = { /* ... breadcrumb schema ... */ };
const faqSchema = { /* ... faq schema ... */ };
const serviceSchema = { /* ... service schema ... */ };

export default function MajorRenovationsPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Page Header */}
        {/* PASTE THIS NEW CODE IN ITS PLACE */}
<section className="relative h-[60vh] w-full text-center text-white">
  <Image
    src="/images/renovation-hero.webp"
    alt="An open-concept living room and kitchen after a major home renovation."
    fill
    className="object-cover"
    priority
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
  <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
    <h1 className="text-4xl font-bold md:text-5xl">Major Home Renovations</h1>
    <p className="mt-4 text-lg text-gray-300">Complete transformations, expertly managed.</p>
  </div>
</section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Reimagine Your Entire Home</h2>
            <p className="mt-6 text-gray-600">
              A major renovation is more than just an update; it's a complete reimagining of your living space. It's an opportunity to create a home that is perfectly tailored to your family's current and future needs. Whether you're looking to create an open-concept main floor, add a second story, or undertake a complete gut renovation, Pomo Build has the experience and expertise to manage your project from concept to completion.
            </p>
            <p className="mt-4 text-gray-600">
              Large-scale projects require meticulous planning, expert project management, and a team of highly skilled trades. We provide all of this, acting as your single point of contact and accountability. We handle everything from the initial architectural design and permitting to the final finishing touches, ensuring a seamless process and a result that exceeds your expectations.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image src="/images/renovation-intro.webp" alt="A home mid-renovation, showing the transition from old to new." fill className="rounded-lg shadow-lg object-cover" />
          </div>
        </section>

        {/* Our Process Section - NEW */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Our Renovation Process in Detail</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">1. Design & Discovery</h3>
                    <p className="mt-4 text-gray-600">Every successful renovation begins with a deep understanding of your vision. We collaborate with you and our network of trusted architects and designers to create detailed plans and 3D renderings. This phase includes material selection, budgeting, and a thorough feasibility study to ensure a solid plan before construction begins.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">2. Permitting & Logistics</h3>
                    <p className="mt-4 text-gray-600">We manage the entire permitting process with your municipality, ensuring all plans are fully compliant with the latest BC Building Codes. Our team handles all the paperwork and coordinates with city inspectors, saving you the headache and potential delays of navigating complex bylaws on your own.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">3. Construction & Project Management</h3>
                    <p className="mt-4 text-gray-600">A dedicated project manager will be your single point of contact, providing regular updates and overseeing all on-site activity. We coordinate a team of highly skilled, licensed, and insured tradespeople to execute the build with precision. We maintain a clean and safe worksite to minimize disruption to your home and neighborhood.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">4. Finishing & Turnover</h3>
                    <p className="mt-4 text-gray-600">The final 10% is what truly defines a high-quality renovation. Our team has an obsessive attention to detail, ensuring that all finishing work—from the paint and trim to the final hardware—is absolutely flawless. We conduct a detailed final walkthrough with you to guarantee your 100% satisfaction before handing over your beautifully transformed space.</p>
                </div>
            </div>
        </section>

        {/* Project Gallery Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">The Art of Transformation</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-renovation-1.webp" alt="New wood framing for an open-concept layout during a major renovation." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-renovation-2.webp" alt="The modern exterior of a home after a complete siding and window overhaul." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-renovation-3.webp" alt="A close-up of high-quality finishing details where new hardwood meets tile." width={600} height={400} className="w-full h-64 object-cover" /></div>
            </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary aria-controls="faq1_content" className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What is considered a 'major renovation'?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p id="faq1_content" className="mt-4 text-gray-600">A major renovation typically involves structural changes to the home, such as removing walls, adding a new room or floor, or a complete gut renovation of multiple rooms. It almost always requires architectural plans and extensive permitting.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary aria-controls="faq2_content" className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How do you manage such a large and complex project?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p id="faq2_content" className="mt-4 text-gray-600">We use dedicated project management software and a single point of contact for you. Our process includes detailed scheduling, regular client meetings, and meticulous coordination of all trades to ensure the project stays on track and on budget.</p></details>
            </div>
        </section>
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Plan Your Major Renovation?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}