import CaseStudyPage from '@/components/CaseStudyPage';
import { getProjectBySlug } from '@/lib/portfolio';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('portfolio/modern-kitchen-remodel');

export default function ModernKitchenRemodelPage() {
  const project = getProjectBySlug('modern-kitchen-remodel')!;
  return <CaseStudyPage project={project} />;
}
