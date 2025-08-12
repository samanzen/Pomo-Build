import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/case-hero-kitchen-1.webp"
          alt="A stunning, professionally renovated modern kitchen by Pomo Build"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Case Study: Modern Kitchen Remodel</h1>
          <p className="mt-4 text-lg text-gray-200">Burnaby, BC</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Project Details Section */}
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">The Challenge</h2>
              <p className="mt-4 text-gray-600">
                The original 1990s kitchen was dark, cramped, and closed off from the main living area. With outdated oak cabinets and laminate countertops, it was no longer functional for a modern family that loved to entertain.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">Our Solution</h2>
              <p className="mt-4 text-gray-600">
                We removed the non-structural wall separating the kitchen and living room to create a bright, open-concept space. The project included a full gut renovation with custom white shaker cabinets, a large quartz waterfall island, and a herringbone tile backsplash.
              </p>
            </div>
          </div>
        </section>

        {/* Main Project Image - REPLACES GALLERY */}
        <section className="mt-16 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image 
              src="/images/case-kitchen-1-after.webp" 
              alt="The completed modern kitchen remodel with a large central island" 
              width={1200} 
              height={800} 
              className="w-full" 
            />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-16 bg-[#F9FAFB] p-12 rounded-lg max-w-4xl mx-auto" data-aos="fade-up">
          <blockquote className="text-center text-xl italic text-gray-700">
            "Pomo Build didn't just give us a new kitchen; they gave us a new heart for our home. The quality and attention to detail were second to none. We couldn't be happier."
          </blockquote>
          <div className="mt-6 text-center font-bold text-[#1F2937]">
            - The Johnson Family, Burnaby
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Start Your Transformation?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Schedule Your Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}