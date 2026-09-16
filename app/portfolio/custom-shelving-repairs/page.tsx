import CaseStudyPage from '@/components/CaseStudyPage';
import { getProjectBySlug } from '@/lib/portfolio';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('portfolio/custom-shelving-repairs');

export default function CustomShelvingRepairsPage() {
  const project = getProjectBySlug('custom-shelving-repairs')!;
  return <CaseStudyPage project={project} />;
}
