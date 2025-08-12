import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'About Pomo Build | Your Trusted Local Renovation Contractor',
  description: 'Learn about Pomo Build, a Port Moody-based renovation company founded by Saman Zen. Discover our commitment to quality, integrity, and craftsmanship for projects across Metro Vancouver.',
  alternates: {
    canonical: '/about',
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.pomobuild.com/about" }]
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          About Pomo Build
        </h1>
        <p className="mt-4 text-lg text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Quality, Integrity, and a Passion for Building.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <div data-aos="fade-right" className="relative h-[500px] w-full">
            <Image
              src="/images/about-owner-saman-zen.webp"
              alt="Saman Zen, owner of Pomo Build, smiling in a recently renovated kitchen."
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-[#1F2937]">
              Meet Saman Zen, Founder of Pomo Build
            </h2>
            <p className="mt-6 text-gray-600">
              With over 15 years of hands-on experience in the construction and renovation industry, Saman Zen founded Pomo Build with a clear mission: to bring a higher level of professionalism, transparency, and quality to homeowners in the community he calls home.
            </p>
            <p className="mt-4 text-gray-600">
              Saman's passion for building began early, and his career has been dedicated to mastering the craft. He believes that a successful renovation is built on a foundation of trust and clear communication. He is personally involved in every project to ensure that Pomo Build's exacting standards for quality and client satisfaction are met, every single time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission & Values Section */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937]" data-aos="fade-up">
            Our Mission & Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Our mission is simple: to be the most trusted and recommended renovation contractor in the Tri-Cities and beyond. We achieve this by living our core values every day.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <h3 className="mt-6 text-2xl font-semibold text-[#1F2937]">Uncompromising Quality</h3>
              <p className="mt-2 text-gray-500">We never cut corners. We use the best materials and proven techniques to deliver a finished product that is beautiful, durable, and built to last.</p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <h3 className="mt-6 text-2xl font-semibold text-[#1F2937]">Absolute Integrity</h3>
              <p className="mt-2 text-gray-500">We operate with complete honesty and transparency. Our quotes are detailed and clear, and we keep you informed at every stage of the project.</p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="mt-6 text-2xl font-semibold text-[#1F2937]">Client-Focused Partnership</h3>
              <p className="mt-2 text-gray-500">Your satisfaction is our ultimate measure of success. We see ourselves as your partners, working collaboratively to bring your unique vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Let's Build Something Great Together</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get Your Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}