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
  "headline": "Case Study: Commercial Office Fit-out in Surrey, BC",
  "image": "/images/case-hero-commercial-1.webp",
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
      "name": "J. Evans, CEO of Tech Innovate"
    },
    "reviewBody": "Pomo Build delivered our new office space on a tight deadline without compromising on quality. Their project management was excellent, and the final result exceeded our expectations. We highly recommend them for any commercial projects."
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
          src="/images/case-hero-commercial-1.webp"
          alt="A modern, professional office space renovated by Pomo Build"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Case Study: Commercial Office Fit-out</h1>
          <p className="mt-4 text-lg text-gray-200">Surrey, BC</p>
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
                A growing tech company needed to move into a larger, empty commercial unit. The challenge was to transform the bare-bones space into a functional, modern, and inspiring work environment that reflected their brand—all within a strict 8-week timeline.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">Our Solution</h2>
              <p className="mt-4 text-gray-600">
                We provided a full-service commercial fit-out. This included framing new offices and meeting rooms, installing electrical and data lines, and adding a modern kitchenette. We used glass walls to maintain an open feel and finished with durable, stylish materials like polished concrete floors.
              </p>
            </div>
          </div>
        </section>

        {/* Main Project Image */}
        <section className="mt-16 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image 
              src="/images/case-commercial-1-after.webp" 
              alt="The completed commercial office space with glass-walled meeting rooms" 
              width={1200} 
              height={800} 
              className="w-full" 
            />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-16 bg-[#F9FAFB] p-12 rounded-lg max-w-4xl mx-auto" data-aos="fade-up">
          <blockquote className="text-center text-xl italic text-gray-700">
            "Pomo Build delivered our new office space on a tight deadline without compromising on quality. Their project management was excellent, and the final result exceeded our expectations. We highly recommend them for any commercial projects."
          </blockquote>
          <div className="mt-6 text-center font-bold text-[#1F2937]">
            - J. Evans, CEO of Tech Innovate
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
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