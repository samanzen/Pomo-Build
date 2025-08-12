import Image from 'next/image';
import Link from 'next/link';

export default function KitchenBathPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div
        className="relative bg-gray-800 py-20 text-center text-white"
        style={{ backgroundImage: "url('/images/service-bath.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Kitchen & Bathroom Remodeling</h1>
          <p className="mt-4 text-lg text-gray-300">Creating beautiful, functional spaces for the heart of your home.</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Introduction Section */}
        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1F2937]">Invest in the Most Important Rooms</h2>
            <p className="mt-6 text-gray-600">
              Kitchen and bathroom renovations offer one of the highest returns on investment. A beautifully designed kitchen becomes a gathering place, while a modern bathroom provides a private sanctuary.
            </p>
            <p className="mt-4 text-gray-600">
              At Karaj Build, we combine thoughtful design and expert craftsmanship to create spaces that are not only stunning but also perfectly tailored to your lifestyle.
            </p>
          </div>
          <div className="relative h-96 w-full" data-aos="fade-left" data-aos-delay="100">
             <Image
              src="/images/service-renovation.webp"
              alt="A bright and modern kitchen with a large island"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </section>

        {/* Project Gallery Section - UPDATED with local images */}
        <section className="mt-20 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#1F2937]">Featured Kitchen & Bath Projects</h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="group overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/gallery-kitchen-1.webp" alt="Modern white kitchen with gold fixtures" width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="group overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/gallery-bath-1.webp" alt="Luxury bathroom with a walk-in shower" width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="group overflow-hidden rounded-lg shadow-lg">
                    <Image src="/images/gallery-kitchen-2.webp" alt="Spacious kitchen with dark cabinets and a breakfast bar" width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
            </div>
        </section>

        {/* Materials & Finishes Section - NEW */}
        <section className="mt-20 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">Quality Materials & Finishes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We partner with leading suppliers to provide a wide selection of high-quality, durable, and beautiful materials for your project.</p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Quartz & Granite</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Custom Millwork</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Porcelain & Ceramic Tile</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Luxury Vinyl Plank</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Designer Fixtures</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">LED Pot Lighting</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Heated Flooring</div>
              <div className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm">Frameless Glass</div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-20" data-aos="fade-up">
            <h2 className="text-center text-3xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How long does a typical kitchen remodel take?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">A standard kitchen remodel typically takes between 4 to 8 weeks, depending on the scope of work, material availability, and inspections. We provide a detailed project schedule before we begin.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Do I need a permit for my bathroom renovation?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">It depends on the scope. If you are moving plumbing, electrical, or walls, a permit is typically required. We handle the entire permit application process for you.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can I live in my home during the renovation?<span className="transform transition-transform duration-300 group-open:rotate-180">▼</span></summary><p className="mt-4 text-gray-600">For most bathroom renovations, yes. For large kitchen renovations, it can be challenging. We take extensive measures to contain dust and debris and to minimize disruption to your daily life.</p></details>
            </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Remodel Your Kitchen or Bath?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Schedule Your Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}