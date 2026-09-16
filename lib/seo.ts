import type { Metadata } from 'next';
import type { PageSeoRecord } from './page-seo-data';
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  stripBrandSuffix,
  withBrandSuffix,
} from './site';

export type PageSeoInput = PageSeoRecord;

export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  index = true,
  absoluteTitle = false,
}: PageSeoInput): Metadata {
  const cleanTitle = stripBrandSuffix(title);
  const brandedTitle = absoluteTitle ? cleanTitle : withBrandSuffix(cleanTitle);
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: absoluteTitle ? { absolute: brandedTitle } : cleanTitle,
    description,
    alternates: {
      canonical,
    },
    robots: index
      ? undefined
      : {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        },
    openGraph: {
      title: brandedTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: imageUrl }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [imageUrl],
    },
  };
}
