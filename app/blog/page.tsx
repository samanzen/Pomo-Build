import Link from 'next/link';
import type { Metadata } from 'next';
import { client } from '@/sanity/client';

export const metadata: Metadata = {
  title: 'The Pomo Build Blog | Renovation Tips & Insights',
  description: 'The official blog of Pomo Build. Find expert tips, project insights, and the latest trends in home renovation and construction in the Metro Vancouver area.',
  alternates: {
    canonical: '/blog',
  },
};

interface Post {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "category": categories[]->title[0],
    excerpt
  }`;
  const posts = await client.fetch<Post[]>(query);
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white">
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          The Pomo Build Blog
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Expert advice, project insights, and inspiration for your next home project.
        </p>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            // This link is now fully dynamic using the slug from Sanity
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div 
                className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col group"
                data-aos="fade-up"
                data-aos-delay={`${100 * index}`}
              >
                <div className="p-8 flex-grow">
                  <p className="text-sm font-semibold text-[#D97706]">{post.category || 'General'}</p>
                  <h2 className="mt-4 text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">{post.title}</h2>
                  <p className="mt-4 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="p-8 pt-0 mt-auto">
                    <span className="font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F9FAFB]">
        <div className="container mx-auto px-6 py-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#1F2937]">
            Ready to Start Your Project?
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