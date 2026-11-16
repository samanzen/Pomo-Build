import Link from 'next/link';
import { PAGE_SEO } from '@/lib/page-seo-data';
import { getPublishedPosts } from '@/lib/posts';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata() {
  const posts = await getPublishedPosts();
  return buildPageMetadata({
    ...PAGE_SEO.blog,
    index: posts.length > 0,
  });
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="bg-white">
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          The Pomo Build Blog
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Expert advice, project insights, and inspiration for your next home project.
        </p>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        {posts.length === 0 ? (
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-[#1F2937]">No published articles yet</h2>
            <p className="mt-4 text-gray-600">
              No renovation articles are published yet. Until they go live, review our{' '}
              <Link href="/services/kitchen-bath" className="font-semibold text-[#D97706] hover:underline">
                bathroom and kitchen renovations
              </Link>
              ,{' '}
              <Link href="/services" className="font-semibold text-[#D97706] hover:underline">
                services
              </Link>
              , or{' '}
              <Link href="/contact#quote-form" className="font-semibold text-[#D97706] hover:underline">
                request a quote
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-[#F9FAFB] rounded-lg shadow-md overflow-hidden h-full flex flex-col group">
                  <div className="p-8 flex-grow">
                    <p className="text-sm font-semibold text-[#D97706]">{post.category || 'General'}</p>
                    <h2 className="mt-4 text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-gray-600">{post.excerpt}</p>
                  </div>
                  <div className="p-8 pt-0 mt-auto">
                    <span className="font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
