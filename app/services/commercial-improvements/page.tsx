import Image from 'next/image';
import Link from 'next/link';

const faqSchema = { /* ... Schema data remains the same ... */ };
const serviceSchema = { /* ... Schema data remains the same ... */ };

export default function CommercialImprovementsPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Page Header */}
      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/commercial-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Commercial & Tenant Improvements</h1>
          <p className="mt-4 text-lg text-gray-300">Professional spaces built for productivity and brand identity.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Building Your Business Environment</h2>
            <p className="mt-6 text-gray-600">
              Your commercial space is a direct reflection of your brand and a critical tool for your business's success. Whether it's an inspiring office for your team or an inviting retail store for your customers, the right environment can make all the difference.
            </p>
            <p className="mt-4 text-gray-600">
              Pomo Build provides comprehensive commercial renovation and tenant improvement (TI) services for businesses across Metro Vancouver. We understand the unique demands of commercial projects, including tight deadlines, strict budgets, and the need to minimize operational disruption.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image src="/images/commercial-intro.webp" alt="A bright and modern open-plan office space." fill className="rounded-lg shadow-lg object-cover" />
          </div>
        </section>

        {/* Our Process Section - NEW */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Our Commercial Renovation Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">
                We follow a structured, four-phase process to ensure your project is delivered on time, on budget, and to the highest standard of quality, with minimal disruption to your business.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">1. Consultation & Feasibility</h3>
                    <p className="mt-4 text-gray-600">We begin with a thorough on-site assessment of your commercial space. We listen to your goals, discuss your brand's functional and aesthetic needs, and analyze the existing conditions. This phase includes preliminary budgeting and a feasibility study to ensure your vision aligns with the space's potential and your financial plan, providing a clear roadmap before any commitments are made.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">2. Design & Permitting</h3>
                    <p className="mt-4 text-gray-600">Our team develops detailed architectural plans and 3D renderings, allowing you to visualize your new space. We handle all aspects of commercial interior design, from material selection to space planning. Crucially, we manage the entire municipal permitting process, ensuring all plans are code-compliant and approved by city officials in jurisdictions like Surrey or Burnaby.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">3. Project Management & Build-Out</h3>
                    <p className="mt-4 text-gray-600">With approved plans in hand, our dedicated project manager coordinates all trades and oversees the build-out. We manage every detail, from demolition and framing to electrical, plumbing, and finishing. We provide regular progress updates and maintain a clean, safe worksite to minimize disruption, especially when working in occupied buildings.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">4. Turnover & Support</h3>
                    <p className="mt-4 text-gray-600">Before completion, we conduct a meticulous final walkthrough with you to ensure every detail meets our shared standard of excellence. We provide a complete project turnover package, including all warranties and documentation. Our relationship doesn't end here; we offer post-project support to ensure your new space continues to serve your business perfectly.</p>
                </div>
            </div>
        </section>

        {/* Project Gallery Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Featured Commercial Projects</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-commercial-1.webp" alt="A modern, glass-walled office meeting room." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-commercial-2.webp" alt="A newly completed fit-out for a high-end clothing boutique." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-commercial-3.webp" alt="A sleek and modern office kitchenette for employees." width={600} height={400} className="w-full h-64 object-cover" /></div>
            </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How long does a typical tenant improvement project take?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">The timeline for a tenant improvement (TI) project varies greatly depending on the scope, but a typical office fit-out can range from 4 to 12 weeks. We provide a detailed project schedule and critical path analysis to ensure we meet your grand opening or move-in deadlines.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you handle the permitting process for commercial projects?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">Yes, absolutely. We offer a full-service experience that includes managing all necessary building permits and coordinating with city inspectors in municipalities like Surrey, Burnaby, and Vancouver. This ensures your project is fully compliant with all commercial building codes.</p></details>
            </div>
        </section>
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Have a Commercial Project?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Request a Commercial Bid
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}