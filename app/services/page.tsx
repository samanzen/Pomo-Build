import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Pomo Build Renovations',
  description: 'Explore the full range of services offered by Pomo Build, including major renovations, kitchen and bath remodeling, basement finishing, custom decks, and professional handyman services.',
  alternates: {
    canonical: '/services',
  },
};

const servicesData = [
    {
        title: "Major Renovations",
        description: "Full home, condo, and commercial renovations. We manage the entire project, turning your vision into a stunning reality.",
        href: "/services/major-renovations", // This is the correct link
        icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    {
        title: "Kitchen & Bathroom Remodeling",
        description: "Specializing in modern and functional kitchen and bath makeovers, from custom cabinets to beautiful tilework.",
        href: "/services/kitchen-bath",
        icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
        title: "Basement Finishing",
        description: "Unlock the potential of your lower level by creating a legal suite, home theatre, gym, or extra living space.",
        href: "/services/basement-finishing",
        icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    },
    {
        title: "Decks & Exterior Work",
        description: "Enhance your outdoor living with custom decks, patios, fences, and siding. Built to last in the Vancouver climate.",
        href: "/services/decks-exteriors",
        icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
        title: "Commercial & Tenant Improvements",
        description: "Professional fit-outs for offices, retail spaces, and other commercial properties to meet your business needs.",
        href: "/services/commercial-improvements",
        icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    },
    {
        title: "Handyman Services",
        description: "For all the small jobs. From drywall repair and painting to fixture installation and assembly. No job is too small.",
        href: "/services/handyman-services",
        icon: <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
    }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F9FAFB]">
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">Our Services</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          From full-scale renovations to expert handyman tasks, we provide comprehensive solutions to enhance your home or business.
        </p>
      </div>

      {/* Service Grid */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-md text-left flex flex-col" data-aos="fade-up" data-aos-delay={`${100 * (index % 3)}`}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]">
                {service.icon}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#1F2937]">{service.title}</h3>
              <p className="mt-4 text-gray-600 flex-grow">{service.description}</p>
              <Link href={service.href} className="mt-6 inline-block font-bold text-[#D97706] hover:text-[#1F2937]">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">Ready to Start Your Project?</h2>
          <div className="mt-8">
            <Link href="/contact">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}