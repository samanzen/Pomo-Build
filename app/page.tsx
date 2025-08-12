import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Pomo Build | Home Renovations & Handyman Services in Port Moody',
  description: "Your trusted general contractor in Port Moody for high-quality kitchen & bath remodeling, basement finishing, and reliable handyman services. Get a free quote today!",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pomo Build | Home Renovations & Handyman Services',
    description: 'Professional renovations and reliable handyman services in the Tri-Cities.',
    images: [{ url: '/images/homepage-hero.webp' }],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative flex h-[80vh] items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/images/homepage-hero.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl" data-aos="fade-up">
            Transforming Your Vision into Reality
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Pomo Build offers high-quality renovation, construction, and handyman services for homeowners and businesses in Metro Vancouver.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F9FAFB] py-16 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Why Choose Pomo Build?</h2>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M4 21V10a2 2 0 012-2h12a2 2 0 012 2v11" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Quality Craftsmanship</h3></div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Reliable Scheduling</h3></div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Locally Owned</h3></div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="400"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.5-4.5m-2.121-2.121a12.02 12.02 0 013.04-8.618m7.071 7.071a12.025 12.025 0 01-3.04 8.618" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Fully Insured</h3></div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Our Services</h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/services/decks-exteriors" className="group block" data-aos="fade-up" data-aos-delay="100"><div className="overflow-hidden rounded-lg shadow-lg text-left h-full"><Image src="/images/homepage-service-renovation.webp" alt="A bright, modern living room after a full home renovation." width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" /><div className="p-6"><h3 className="text-2xl font-bold text-[#1F2937]">Major Renovations</h3></div></div></Link>
            <Link href="/services/kitchen-bath" className="group block" data-aos="fade-up" data-aos-delay="200"><div className="overflow-hidden rounded-lg shadow-lg text-left h-full"><Image src="/images/homepage-service-kitchen-bath.webp" alt="A beautiful modern bathroom with a freestanding tub." width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" /><div className="p-6"><h3 className="text-2xl font-bold text-[#1F2937]">Kitchen & Bath</h3></div></div></Link>
            <Link href="/services/handyman-services" className="group block" data-aos="fade-up" data-aos-delay="300"><div className="overflow-hidden rounded-lg shadow-lg text-left h-full"><Image src="/images/homepage-service-handyman.webp" alt="A professional handyman carefully hanging a large piece of art." width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" /><div className="p-6"><h3 className="text-2xl font-bold text-[#1F2937]">Handyman Services</h3></div></div></Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-[#1F2937] py-16 md:py-20 text-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Simple, 3-Step Process</h2>
          <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"><div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D97706] text-2xl font-bold text-[#D97706]">1</div><h3 className="mt-6 text-2xl font-semibold">Consultation</h3><p className="mt-2 text-gray-400">We start with a free consultation to discuss your vision, budget, and timeline.</p></div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"><div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D97706] text-2xl font-bold text-[#D97706]">2</div><h3 className="mt-6 text-2xl font-semibold">Design & Build</h3><p className="mt-2 text-gray-400">Our team gets to work, turning your design into reality with quality materials and craftsmanship.</p></div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D97706] text-2xl font-bold text-[#D97706]">3</div><h3 className="mt-6 text-2xl font-semibold">Final Walkthrough</h3><p className="mt-2 text-gray-400">We ensure every detail is perfect and that you are 100% satisfied with the final result.</p></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F9FAFB] py-16 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-[#1F2937] sm:text-4xl">Trusted by Homeowners in Metro Vancouver</h2>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md" data-aos="fade-up" data-aos-delay="100"><p className="text-gray-600">"The attention to detail was incredible. Pomo Build transformed our dated kitchen into a modern space we absolutely love. On time and professional from start to finish."</p><div className="mt-6 font-bold text-[#1F2937]">Sarah L.</div><div className="text-sm text-gray-500">Coquitlam, BC</div></div>
            <div className="rounded-lg bg-white p-8 shadow-md" data-aos="fade-up" data-aos-delay="200"><p className="text-gray-600">"We needed a reliable handyman for a list of small jobs and they were fantastic. Punctual, efficient, and the quality of work was top-notch. Highly recommend."</p><div className="mt-6 font-bold text-[#1F2937]">Mark D.</div><div className="text-sm text-gray-500">Burnaby, BC</div></div>
            <div className="rounded-lg bg-white p-8 shadow-md" data-aos="fade-up" data-aos-delay="300"><p className="text-gray-600">"From the initial quote to the final cleanup, the entire process was seamless. They turned our basement into a beautiful, functional living space for our family."</p><div className="mt-6 font-bold text-[#1F2937]">The Chen Family</div><div className="text-sm text-gray-500">Vancouver, BC</div></div>
          </div>
        </div>
      </section>

{/* Latest Blog Posts Section - NEW */}
<section className="bg-white py-16 md:py-20" data-aos="fade-up">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">From Our Blog</h2>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      Expert tips, project insights, and inspiration for your next home project.
    </p>
    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
      {/* Blog Post Card 1 */}
      <Link href="/blog/5-signs-its-time-to-renovate-your-kitchen" className="group block" data-aos="fade-up" data-aos-delay="100">
        <div className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="p-8 flex-grow">
            <p className="text-sm font-semibold text-[#D97706]">Kitchens</p>
            <h3 className="mt-4 text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">5 Signs It's Time to Renovate Your Kitchen</h3>
          </div>
          <div className="p-8 pt-0 mt-auto">
              <span className="font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Read More →</span>
          </div>
        </div>
      </Link>
      {/* Blog Post Card 2 */}
      <Link href="#" className="group block" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="p-8 flex-grow">
            <p className="text-sm font-semibold text-[#D97706]">Materials</p>
            <h3 className="mt-4 text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Choosing the Right Countertop Material</h3>
          </div>
          <div className="p-8 pt-0 mt-auto">
              <span className="font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Read More →</span>
          </div>
        </div>
      </Link>
      {/* Blog Post Card 3 */}
      <Link href="#" className="group block" data-aos="fade-up" data-aos-delay="300">
        <div className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col">
          <div className="p-8 flex-grow">
            <p className="text-sm font-semibold text-[#D97706]">Design</p>
            <h3 className="mt-4 text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Open Concept Living: Is It Right for You?</h3>
          </div>
          <div className="p-8 pt-0 mt-auto">
              <span className="font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Read More →</span>
          </div>
        </div>
      </Link>
    </div>
  </div>
</section>  
</main>
  );
}