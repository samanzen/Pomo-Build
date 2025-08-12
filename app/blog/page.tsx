import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Pomo Build Blog | Renovation Tips & Insights',
  description: 'The official blog of Pomo Build. Find expert tips, project insights, and the latest trends in home renovation and construction in the Metro Vancouver area.',
  alternates: {
    canonical: '/blog',
  },
};

// This list now includes all three of our articles
const blogPosts = [
  {
    title: "5 Signs It's Time to Renovate Your Kitchen",
    category: "Kitchens",
    description: "Is your kitchen feeling dated or dysfunctional? Here are the top 5 signs that it might be time for a professional remodel to improve your home's value and your daily life.",
    href: "/blog/5-signs-its-time-to-renovate-your-kitchen", // This now links to our template
  },
  {
    title: "Choosing the Right Countertop Material",
    category: "Materials",
    description: "Quartz, granite, marble... the choices can be overwhelming. We break down the pros and cons of the most popular countertop materials to help you find the perfect fit for your home.",
    href: "#", // Placeholder link for now
  },
  {
    title: "Open Concept Living: Is It Right for You?",
    category: "Design",
    description: "Open concept layouts are incredibly popular, but are they the right choice for your family? We explore the benefits and drawbacks to help you make an informed decision.",
    href: "#", // Placeholder link for now
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          The Pomo Build Blog
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Expert advice, project insights, and inspiration for your next home project.
        </p>
      </div>

      {/* Blog Post Grid */}
      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link key={post.title} href={post.href}>
              <div 
                className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col group"
                data-aos="fade-up"
                data-aos-delay={`${100 * index}`}
              >
                <div className="p-8 flex-grow">
                  <p className="text-sm font-semibold text-[#D97706]">{post.category}</p>
                  <h2 className="mt-4 text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">{post.title}</h2>
                  <p className="mt-4 text-gray-600">{post.description}</p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                    <span className="font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Read More →</span>
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
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Inspiration is the first step. When you're ready to take the next one, our team is here to help.
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