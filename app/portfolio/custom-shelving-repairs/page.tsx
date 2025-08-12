import Image from 'next/image';
import Link from 'next/link';

// SEO Schema for this specific case study
const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "author": {
    "@type": "Organization",
    "name": "Pomo Build"
  },
  "headline": "Case Study: Custom Built-in Shelving in New Westminster, BC",
  "image": "/images/case-hero-handyman-1.webp",
  "publisher": {
    "@type": "Organization",
    "name": "Pomo Build",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.pomobuild.com/logo.png" // Placeholder
    }
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Megan T."
    },
    "reviewBody": "The craftsmanship is absolutely beautiful. Pomo Build took an awkward, unused nook in our living room and created a stunning and functional set of built-in shelves. It's the highlight of the room now."
  }
};

export default function CaseStudyPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      {/* Page Header */}
      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src="/images/case-hero-handyman-1.webp"
          alt="A cozy living room featuring custom built-in shelving by Pomo Build"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Case Study: Custom Shelving & Repairs</h1>
          <p className="mt-4 text-lg text-gray-200">New Westminster, BC</p>
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
                The client had an awkward, empty nook next to their fireplace that they didn't know how to use. They needed a storage solution that was both functional for books and decor, and that aesthetically matched the character of their older home.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">Our Solution</h2>
              <p className="mt-4 text-gray-600">
                We designed, built, and installed a set of custom, floor-to-ceiling bookshelves. We used high-quality materials and added detailed trim work to perfectly match the home's existing crown molding, creating a seamless, built-in look that maximized storage and enhanced the room's architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Main Project Image */}
        <section className="mt-16 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image 
              src="/images/case-handyman-1-after.webp" 
              alt="A close-up of the finished custom white shelving filled with books and decor" 
              width={1200} 
              height={800} 
              className="w-full" 
            />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-16 bg-[#F9FAFB] p-12 rounded-lg max-w-4xl mx-auto" data-aos="fade-up">
          <blockquote className="text-center text-xl italic text-gray-700">
            "The craftsmanship is absolutely beautiful. Pomo Build took an awkward, unused nook in our living room and created a stunning and functional set of built-in shelves. It's the highlight of the room now."
          </blockquote>
          <div className="mt-6 text-center font-bold text-[#1F2937]">
            - Megan T., New Westminster
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Have a Custom Project or Small Repair?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-[#1F2937] font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Contact Our Handyman Team
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}