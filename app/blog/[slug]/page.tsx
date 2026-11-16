import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { getPublishedPost, getPublishedPosts } from '@/lib/posts';
import { SITE_NAME, absoluteUrl } from '@/lib/site';

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPost(slug);
  if (!post) {
    return {
      title: 'Post Not Found',
      robots: { index: false, follow: false },
    };
  }

  const canonical = absoluteUrl(`/blog/${post.slug}`);
  const imageUrl = post.mainImage?.asset?.url;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | ${SITE_NAME}`,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPost(slug);

  if (!post) notFound();

  const imageUrl = post.mainImage?.asset?.url;
  const blur = post.mainImage?.asset?.metadata?.lqip;

  return (
    <div className="bg-white">
      <section className="relative h-[50vh] w-full text-center text-white">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            placeholder={blur ? 'blur' : 'empty'}
            blurDataURL={blur}
          />
        ) : (
          <div className="absolute inset-0 bg-[#1F2937]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">
          <p className="font-semibold text-[#D97706]">{post.category}</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl max-w-3xl">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-200">
            Posted{post.authorName ? ` by ${post.authorName}` : ''} on{' '}
            {new Date(post.publishedAt).toLocaleDateString('en-CA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
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
          <PortableText value={post.body as never} />
        </article>
        {post.authorName ? (
          <section className="mt-16 max-w-3xl mx-auto border-t pt-12">
            <div className="flex items-center gap-6 bg-[#F9FAFB] p-6 rounded-lg">
              {post.authorImage?.asset?.url ? (
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={post.authorImage.asset.url}
                    alt={post.authorName}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ) : null}
              <div>
                <h2 className="text-2xl font-bold text-[#1F2937]">About the Author</h2>
                <p className="mt-2 text-gray-600">
                  {post.authorName} is the founder of Pomo Build, a Port Moody renovation company.
                </p>
              </div>
            </div>
          </section>
        ) : null}
      </section>
    </div>
  );
}
