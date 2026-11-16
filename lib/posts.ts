import { client } from '@/sanity/client';

const PUBLISHED_POST_FILTER = `_type == "post" && defined(slug.current) && defined(publishedAt) && !(_id in path("drafts.**"))`;

export type BlogListPost = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  _updatedAt?: string;
};

export type BlogPost = BlogListPost & {
  mainImage: { asset: { url: string; metadata: { lqip: string } } };
  authorName: string;
  authorImage: { asset: { url: string } };
  body: unknown;
};

function canQuerySanity() {
  return Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET);
}

export async function getPublishedPosts(): Promise<BlogListPost[]> {
  if (!canQuerySanity()) {
    return [];
  }

  const query = `*[${PUBLISHED_POST_FILTER}] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "category": categories[]->title[0],
    excerpt,
    publishedAt,
    _updatedAt
  }`;

  try {
    const posts = await client.fetch<BlogListPost[]>(query);
    return (posts ?? []).filter((post) => Boolean(post?.slug));
  } catch {
    return [];
  }
}

export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  if (!canQuerySanity() || !slug) {
    return null;
  }

  const query = `*[${PUBLISHED_POST_FILTER} && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    mainImage { asset->{ url, metadata { lqip } } },
    "category": categories[]->title[0],
    publishedAt,
    "authorName": author->name,
    "authorImage": author->image { asset->{ url } },
    excerpt,
    body
  }`;

  try {
    const post = await client.fetch<BlogPost | null>(query, { slug });
    return post?.slug ? post : null;
  } catch {
    return null;
  }
}
