import CaseStudyPage from '@/components/CaseStudyPage';
import { getProjectBySlug } from '@/lib/portfolio';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('portfolio/commercial-office-fit-out');

export default function CommercialOfficeFitOutPage() {
  const project = getProjectBySlug('commercial-office-fit-out')!;
  return <CaseStudyPage project={project} />;
}
