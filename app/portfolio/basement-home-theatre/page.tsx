import CaseStudyPage from '@/components/CaseStudyPage';
import { getProjectBySlug } from '@/lib/portfolio';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('portfolio/basement-home-theatre');

export default function BasementHomeTheatrePage() {
  const project = getProjectBySlug('basement-home-theatre')!;
  return <CaseStudyPage project={project} />;
}
