import Image from 'next/image';
import Link from 'next/link';

const faqSchema = { /* ... Schema data remains the same ... */ };
const serviceSchema = { /* ... Schema data remains the same ... */ };

export default function DecksExteriorsPage() {
  return (
    <div className="bg-white">
      {/* SEO Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Page Header */}
      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/deck-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Decks & Exteriors</h1>
          <p className="mt-4 text-lg text-gray-300">Beautifully crafted outdoor living spaces.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Extend Your Living Space Outdoors</h2>
            <p className="mt-6 text-gray-600">
              In the beautiful climate of British Columbia, your backyard is an extension of your home. A well-designed deck or patio creates a perfect space for entertaining, relaxing, and enjoying the outdoors with family and friends.
            </p>
            <p className="mt-4 text-gray-600">
              We specialize in designing and building high-quality, durable outdoor structures that not only enhance your lifestyle but also add significant value to your property. From natural cedar to low-maintenance composite, we build spaces that are made to last.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image src="/images/deck-intro.webp" alt="A beautiful modern cedar deck with outdoor furniture." fill className="rounded-lg shadow-lg object-cover" />
          </div>
        </section>

        {/* Decking Material Comparison Section - NEW */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Choosing the Right Material</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto text-center">The material you choose for your deck is the biggest factor in its look, longevity, and maintenance needs. We specialize in the two most popular options in the Lower Mainland.</p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Natural Cedar Wood</h3>
                    <p className="mt-4 text-gray-600">Cedar is the classic choice for a reason. It offers a timeless, natural beauty and is inherently resistant to rot and insects. A cedar deck provides a stunning, authentic wood look and feel, though it does require periodic staining or sealing to maintain its rich colour and protect it from the elements.</p>
                </div>
                <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-[#1F2937]">Composite Decking</h3>
                    <p className="mt-4 text-gray-600">For a low-maintenance, highly durable alternative, composite decking is an excellent choice. Made from a blend of recycled wood fibers and plastic, it resists fading, staining, scratching, and mold. It never needs sanding or staining, saving you time and money over the long term.</p>
                </div>
            </div>
        </section>

        {/* Project Gallery Section */}
        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Featured Deck & Exterior Projects</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-deck-1.webp" alt="Detailed craftsmanship of a cedar deck staircase." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-deck-2.webp" alt="A cozy deck set up for evening entertaining with a BBQ." width={600} height={400} className="w-full h-64 object-cover" /></div>
                <div className="group overflow-hidden rounded-lg shadow-lg"><Image src="/images/gallery-deck-3.webp" alt="A new deck connected to a house with modern siding." width={600} height={400} className="w-full h-64 object-cover" /></div>
            </div>
        </section>

        {/* Our Process Section - NEW */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Our Deck Building Process</h2>
            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">1. Design & Permitting</h3>
                    <p className="mt-2 text-gray-600">Every great project starts with a plan. We work with you to design a deck that suits your space and lifestyle. We then produce detailed architectural drawings and handle the entire building permit application with your city, whether it's Port Moody, Coquitlam, or elsewhere.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">2. Foundation & Framing</h3>
                    <p className="mt-2 text-gray-600">The foundation is the most critical part. We excavate and pour solid concrete footings, ensuring your deck is stable and secure for decades. The framing is built to exceed BC Building Code standards, using pressure-treated lumber for maximum durability.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">3. Decking & Railings</h3>
                    <p className="mt-2 text-gray-600">This is where the design comes to life. Our skilled carpenters meticulously install your chosen decking material, whether it's natural cedar or a low-maintenance composite. We then install the railings, ensuring they are not only beautiful but also safe and secure.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-[#1F2937]">4. Finishing & Cleanup</h3>
                    <p className="mt-2 text-gray-600">The final details matter. We add finishing touches like stair lighting, privacy screens, or built-in planters. After a final inspection, we conduct a thorough cleanup of the site, leaving you with nothing but a beautiful new outdoor space to enjoy.</p>
                </div>
            </div>
        </section>

        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do I need a permit to build a deck in Port Moody?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">In Port Moody and most Metro Vancouver municipalities, a building permit is typically required for decks over a certain height (usually 0.6m or 2ft above the ground) or size. We handle the entire permit application process to ensure your project is fully compliant with local bylaws.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">What's the difference between cedar and composite decking?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">Cedar is a natural wood that offers a beautiful, classic look but requires regular maintenance (staining, sealing). Composite decking is a low-maintenance, highly durable man-made product. We can help you choose the best option based on your budget, lifestyle, and aesthetic preferences.</p></details>
            </div>
        </section>
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Upgrade Your Outdoor Space?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get Your Free Estimate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}