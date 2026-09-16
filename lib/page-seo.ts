import { buildPageMetadata } from './seo';
import { PAGE_SEO, type PageSeoKey } from './page-seo-data';

export { INDEXABLE_PAGE_SEO, PAGE_SEO, type PageSeoKey } from './page-seo-data';

export function pageMetadata(key: PageSeoKey) {
  return buildPageMetadata(PAGE_SEO[key]);
}
