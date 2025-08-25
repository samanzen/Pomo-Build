import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

// Define the structure of a full blog post
interface Post {
  title: string;
  slug: string;
  mainImage: { asset: { url: string; metadata: { lqip: string; }; }; };
  category: string;
  publishedAt: string;
  authorName: string;
  authorImage: { asset: { url: string; }; };
  excerpt: string;
  body: any;
}

// Define the correct type for the component's props - This replaces any conflicting 'PageProps'
interface BlogPageProps {
  params: {
    slug: string;
  };
}

// This is the new, crucial function for Vercel builds
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs.map(item => ({ slug: item.slug }));
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title, "slug": slug.current, mainImage { asset->{ url, metadata { lqip } } }, "category": categories[]->title[0], publishedAt, "authorName": author->name, "authorImage": author->image { asset->{ url } }, excerpt, body
  }`;
  const post = await client.fetch<Post>(query, { slug });
  return post;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) { return { title: "Post Not Found" }; }
  return {
    title: `${post.title} | Pomo Build Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.mainImage.asset.url }],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] w-full text-center text-white">
        <Image 
          src={post.mainImage.asset.url} 
          alt={post.title} 
          fill 
          className="object-cover" 
          priority 
          placeholder="blur"
          blurDataURL={post.mainImage.asset.metadata.lqip}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6" data-aos="fade-up">
          <p className="font-semibold text-[#D97706]">{post.category}</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl max-w-3xl">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-200">
            Posted by {post.authorName} on {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-6 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#D97706]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#D97706]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{post.title}</span>
        </div>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <article className="prose lg:prose-xl max-w-3xl mx-auto">
          <PortableText value={post.body} />
        </article>
        <section className="mt-16 max-w-3xl mx-auto border-t pt-12" data-aos="fade-up">
          <div className="flex items-center gap-6 bg-[#F9FAFB] p-6 rounded-lg">
            <div className="relative h-24 w-24 flex-shrink-0">
               <Image src={post.authorImage.asset.url} alt={post.authorName} fill className="rounded-full object-cover"/>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1F2937]">About the Author</h2>
              <p className="mt-2 text-gray-600">{post.authorName} is the founder of Pomo Build and has over 15 years of experience in the construction and renovation industry.</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}