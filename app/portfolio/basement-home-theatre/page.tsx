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
  "headline": "Case Study: Basement Home Theatre in Vancouver, BC",
  "image": "/images/case-hero-basement-1.webp",
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
      "name": "The Miller Family"
    },
    "reviewBody": "The team at Pomo Build are true professionals. They took our cold, empty basement and created a home theatre that has become our family's favourite room. The soundproofing is amazing!"
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
          src="/images/case-hero-basement-1.webp"
          alt="A luxurious basement home theatre with a large screen, renovated by Pomo Build"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Case Study: Basement Home Theatre</h1>
          <p className="mt-4 text-lg text-gray-200">Vancouver, BC</p>
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
                The homeowners had a large, unfinished basement that was cold, unwelcoming, and only used for storage. They dreamed of a dedicated space for family movie nights but didn't know how to handle the concrete floors, exposed pipes, and lack of sound insulation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">Our Solution</h2>
              <p className="mt-4 text-gray-600">
                We designed and built a fully insulated and soundproofed home theatre. This included building a raised platform for tiered seating, installing custom cabinetry for media components, and integrating a full surround sound system and ambient lighting.
              </p>
            </div>
          </div>
        </section>

        {/* Main Project Image */}
        <section className="mt-16 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image 
              src="/images/case-basement-1-after.webp" 
              alt="The completed basement home theatre with tiered leather recliner seats" 
              width={1200} 
              height={800} 
              className="w-full" 
            />
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mt-16 bg-[#F9FAFB] p-12 rounded-lg max-w-4xl mx-auto" data-aos="fade-up">
          <blockquote className="text-center text-xl italic text-gray-700">
            "The team at Pomo Build are true professionals. They took our cold, empty basement and created a home theatre that has become our family's favourite room. The soundproofing is amazing!"
          </blockquote>
          <div className="mt-6 text-center font-bold text-[#1F2937]">
            - The Miller Family, Vancouver
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Build Your Dream Space?</h2>
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