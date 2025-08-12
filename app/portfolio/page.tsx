import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadata for this page
export const metadata: Metadata = {
  title: 'Our Work | Pomo Build Project Portfolio',
  description: 'Explore a gallery of our recent renovation and construction projects in Port Moody, Coquitlam, Burnaby, and across Metro Vancouver. See the quality craftsmanship of Pomo Build.',
  alternates: {
    canonical: '/portfolio',
  },
};

// This list now has all the correct links
const projects = [
  {
    title: "Modern Kitchen Remodel",
    category: "Kitchens",
    location: "Burnaby, BC",
    imageSrc: "/images/portfolio-kitchen-1.webp",
    href: "/portfolio/modern-kitchen-remodel",
  },
  {
    title: "Luxury Ensuite Bathroom",
    category: "Bathrooms",
    location: "Coquitlam, BC",
    imageSrc: "/images/portfolio-bath-1.webp",
    href: "/portfolio/luxury-ensuite-bathroom",
  },
  {
    title: "Basement Home Theatre",
    category: "Basements",
    location: "Vancouver, BC",
    imageSrc: "/images/portfolio-basement-1.webp",
    href: "/portfolio/basement-home-theatre",
  },
  {
    title: "Cedar Deck & Patio",
    category: "Exteriors",
    location: "Port Moody, BC",
    imageSrc: "/images/portfolio-deck-1.webp",
    href: "/portfolio/cedar-deck-patio",
  },
  {
    title: "Commercial Office Fit-out",
    category: "Commercial",
    location: "Surrey, BC",
    imageSrc: "/images/portfolio-exterior-1.webp",
    href: "/portfolio/commercial-office-fit-out",
  },
  {
    title: "Custom Shelving & Repairs",
    category: "Handyman",
    location: "New Westminster, BC",
    imageSrc: "/images/portfolio-handyman-1.webp",
    href: "/portfolio/custom-shelving-repairs",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          Our Work
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          We take pride in our craftsmanship. Explore a selection of our recent projects across Metro Vancouver.
        </p>
      </div>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link key={project.title} href={project.href}>
              <div 
                className="group relative block overflow-hidden rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 3)}
              >
                <Image 
                  src={project.imageSrc} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.location} | {project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#F9FAFB]">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">
            Inspired by What You See?
          </h2>
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