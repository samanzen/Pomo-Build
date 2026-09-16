import CaseStudyPage from '@/components/CaseStudyPage';
import { getProjectBySlug } from '@/lib/portfolio';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('portfolio/luxury-ensuite-bathroom');

export default function LuxuryEnsuiteBathroomPage() {
  const project = getProjectBySlug('luxury-ensuite-bathroom')!;
  return <CaseStudyPage project={project} />;
}
