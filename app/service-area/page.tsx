import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

// SEO Metadata for this specific page
export const metadata: Metadata = {
  title: 'Our Service Area | Pomo Build Renovations',
  description: 'Pomo Build proudly serves the entire Metro Vancouver area, including Port Moody, Coquitlam, Burnaby, Vancouver, Surrey, and more. Find your community to learn about our local services.',
  alternates: {
    canonical: '/service-area',
  },
  openGraph: {
    title: 'Pomo Build Service Area',
    description: 'Find your community and learn about our local renovation and handyman services across Metro Vancouver.',
    images: [{ url: '/images/location-hero-vancouver.webp' }],
  },
};

// Advanced SEO Schema for breadcrumbs
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" },
                     { "@type": "ListItem", "position": 2, "name": "Service Area", "item": "https://www.pomobuild.com/service-area" }]
};

// Updated list with all the links we have built
const locations = [
  { name: "Port Moody", href: "/service-area/port-moody" },
  { name: "Coquitlam", href: "/service-area/coquitlam" },
  { name: "Burnaby", href: "/service-area/burnaby" },
  { name: "Port Coquitlam", href: "/service-area/port-coquitlam" },
  { name: "Vancouver", href: "/service-area/vancouver" },
  { name: "North Vancouver", href: "/service-area/north-vancouver" },
  { name: "West Vancouver", href: "/service-area/west-vancouver" },
  { name: "Surrey", href: "/service-area/surrey" },
  { name: "Richmond", href: "/service-area/richmond" },
  { name: "New Westminster", href: "/service-area/new-westminster" },
  { name: "Maple Ridge", href: "/service-area/maple-ridge" },
  { name: "Pitt Meadows", href: "/service-area/pitt-meadows" },
  { name: "Langley", href: "/service-area/langley" },
  { name: "Delta", href: "/service-area/delta" },
  { name: "White Rock", href: "/service-area/white-rock" },
  { name: "Tsawwassen", href: "/service-area/tsawwassen" },
  { name: "Anmore", href: "/service-area/anmore" },
  { name: "Belcarra", href: "/service-area/belcarra" },
  { name: "Lions Bay", href: "/service-area/lions-bay" },
  { name: "UBC / UEL", href: "/service-area/ubc" },
];

export default function ServiceAreaPage() {
  return (
    <div className="bg-white">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          Our Service Area
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Pomo Build is proud to offer our full range of renovation and handyman services across Metro Vancouver.
        </p>
      </div>

      {/* Locations Grid */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-center text-[#1F2937]" data-aos="fade-up">
          Find Your Community
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
          {locations.map((location) => (
            <Link key={location.name} href={location.href}>
              <div className="rounded-lg bg-[#F9FAFB] p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="text-xl font-semibold text-gray-800">{location.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#F9FAFB]">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">
            Don't See Your City?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            If your project is in the Lower Mainland but you don't see your city listed, please contact us. We are always expanding our service area.
          </p>
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