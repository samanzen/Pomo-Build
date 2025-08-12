import Image from 'next/image';
import Link from 'next/link';

const faqSchema = { /* ... Schema data ... */ };
const serviceSchema = { /* ... Schema data ... */ };

export default function HandymanServicesPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {/* Page Header */}
      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/handyman-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Professional Handyman Services</h1>
          <p className="mt-4 text-lg text-gray-300">No job is too small. Quality repairs and installations, done right.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Your Go-To for Home Repairs & Improvements</h2>
            <p className="mt-6 text-gray-600">
              For every homeowner, there's a list of small jobs that need attention—a leaky faucet, a hole in the drywall, a new light fixture to install. While these tasks may seem minor, they require the right tools and expertise to be done correctly.
            </p>
            <p className="mt-4 text-gray-600">
              Pomo Build's professional handyman service is here to tackle your entire to-do list. We provide the same level of quality and professionalism to our small repair jobs as we do to our large-scale renovations. Our insured and experienced craftsmen arrive on time, work cleanly, and guarantee the quality of their work.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image src="/images/handyman-intro.webp" alt="A professional Pomo Build handyman installing a new light fixture." fill className="rounded-lg shadow-lg object-cover" />
          </div>
        </section>

        {/* Detailed Service Breakdown Section - NEW */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">A Detailed Breakdown of Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">
                One call handles it all. We are equipped to manage a wide variety of repairs, installations, and maintenance tasks to keep your home in perfect condition.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Installations & Assembly</h3>
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Flat-Pack Furniture Assembly (IKEA, etc.)</li>
                        <li>TV Wall Mounting & Cable Concealment</li>
                        <li>Light Fixture & Ceiling Fan Installation</li>
                        <li>Smart Home Device Setup (Doorbells, Thermostats)</li>
                        <li>Art, Mirror & Picture Hanging</li>
                        <li>New Faucet & Toilet Installation</li>
                    </ul>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Repairs & Maintenance</h3>
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Drywall Hole & Crack Patching</li>
                        <li>Squeaky Doors & Sticking Windows</li>
                        <li>Leaky Faucet & Sink Repair</li>
                        <li>Caulking for Kitchens & Bathrooms</li>
                        <li>Deck Board & Railing Repair</li>
                        <li>Fence & Gate Adjustments</li>
                    </ul>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Painting & Finishing</h3>
                    <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                        <li>Interior Room & Wall Painting</li>
                        <li>Trim, Baseboard & Door Painting</li>
                        <li>Ceiling Painting & Touch-ups</li>
                        <li>Exterior Touch-up Painting</li>
                        <li>Staining & Sealing Decks</li>
                        <li>Caulking & Weather Stripping</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Project Gallery Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Quality Workmanship, Guaranteed</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-handyman-1.webp" alt="A perfectly crisp paint line between a grey wall and white trim." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-handyman-2.webp" alt="A new modern chrome faucet installed on a clean bathroom vanity." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-handyman-3.webp" alt="A newly assembled white bookshelf standing perfectly in a living room." width={600} height={400} className="w-full h-64 object-cover" /></div>
            </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What kind of jobs does your handyman service cover?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">Our handyman services cover a wide range of small to medium-sized home repairs and improvements, including drywall patching, painting, fixture installation, furniture assembly, minor plumbing and electrical, and general home maintenance tasks. If you have a 'to-do' list, we can help.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do you have a minimum charge for handyman services?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">Yes, we have a minimum service charge which typically covers the first one to two hours of work. This ensures we can provide a professional, insured craftsman to your door for even the smallest jobs. Please contact us for our current rates.</p></details>
            </div>
        </section>
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Have a To-Do List? We Can Help.</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Book a Handyman
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}