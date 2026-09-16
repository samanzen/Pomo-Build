import CaseStudyPage from '@/components/CaseStudyPage';
import { getProjectBySlug } from '@/lib/portfolio';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('portfolio/cedar-deck-patio');

export default function CedarDeckPatioPage() {
  const project = getProjectBySlug('cedar-deck-patio')!;
  return <CaseStudyPage project={project} />;
}
