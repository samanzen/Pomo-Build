import { getCityServiceCards } from '@/lib/city-service-cards';
import { TRI_CITIES_HREF, getLocationBySlug } from '@/lib/locations';
import { getProjectsByLocation } from '@/lib/portfolio';
import OriginLocationNote from './OriginLocationNote';
import RelatedLinks, { type RelatedLink } from './RelatedLinks';
import ServiceIntentCards from './ServiceIntentCards';

const PRIORITY_RELATED: Record<string, RelatedLink[]> = {
  'port-moody': [
    {
      href: TRI_CITIES_HREF,
      label: 'Tri-Cities renovations',
      detail: 'Kitchen, bathroom, and full-home work across Port Moody and neighbouring communities.',
    },
    {
      href: '/services/major-renovations',
      label: 'Major renovations',
      detail: 'Condo and whole-home remodels, including Suter Brook and Klahanie units.',
    },
    {
      href: '/services/kitchen-bath',
      label: 'Kitchen and bath remodeling',
      detail: 'The most common interior upgrade path for Port Moody condos and houses.',
    },
  ],
  coquitlam: [
    {
      href: TRI_CITIES_HREF,
      label: 'Tri-Cities renovations',
      detail: 'Regional overview for Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra.',
    },
    {
      href: '/services/kitchen-bath',
      label: 'Kitchen and bath remodeling',
      detail: 'Layout, cabinetry, and finish updates for Coquitlam family homes.',
    },
    {
      href: '/services/basement-finishing',
      label: 'Basement finishing',
      detail: 'Suites, family rooms, and finished lower levels. Confirm City of Coquitlam permit rules.',
    },
  ],
  'port-coquitlam': [
    {
      href: TRI_CITIES_HREF,
      label: 'Tri-Cities renovations',
      detail: 'Compare renovation options across Coquitlam, Port Moody, and Port Coquitlam.',
    },
    {
      href: '/services/kitchen-bath',
      label: 'Kitchen renovations',
      detail: 'Functional kitchen updates for Port Coquitlam family homes.',
    },
    {
      href: '/services/decks-exteriors',
      label: 'Decks and exteriors',
      detail: 'Decks and outdoor living spaces for PoCo backyards.',
    },
  ],
  anmore: [
    {
      href: TRI_CITIES_HREF,
      label: 'Tri-Cities renovations',
      detail: 'Anmore is part of our primary Tri-Cities service area.',
    },
    {
      href: '/services/major-renovations',
      label: 'Custom and whole-home renovations',
      detail: 'The closest service page for large Anmore remodel planning.',
    },
    {
      href: '/services/decks-exteriors',
      label: 'Outdoor living',
      detail: 'Decks and exterior structures for larger Anmore lots.',
    },
  ],
  belcarra: [
    {
      href: TRI_CITIES_HREF,
      label: 'Tri-Cities renovations',
      detail: 'Belcarra is part of our primary Tri-Cities service area.',
    },
    {
      href: '/services/major-renovations',
      label: 'Custom home remodels',
      detail: 'Whole-home planning for hillside and waterfront properties.',
    },
    {
      href: '/services/decks-exteriors',
      label: 'Decks and exteriors',
      detail: 'Outdoor structures and exterior upgrades suited to Belcarra lots.',
    },
  ],
};

type LocationPageExtrasProps = {
  slug: string;
  servicesHeading: string;
};

export default function LocationPageExtras({ slug, servicesHeading }: LocationPageExtrasProps) {
  const location = getLocationBySlug(slug);
  if (!location) {
    return null;
  }

  const cards = getCityServiceCards(slug);
  const related = [...(PRIORITY_RELATED[slug] ?? [])];
  const verifiedProjects = getProjectsByLocation(slug);

  verifiedProjects.forEach((project) => {
    related.push({
      href: project.href,
      label: project.title,
      detail: `Published case study in ${project.location}.`,
    });
  });

  if (location.priority === 'secondary') {
    related.unshift({
      href: TRI_CITIES_HREF,
      label: 'Primary service area: Tri-Cities',
      detail: 'Port Moody, Coquitlam, Port Coquitlam, Anmore, and Belcarra are our core market.',
    });
  }

  return (
    <>
      {cards.length > 0 ? <ServiceIntentCards heading={servicesHeading} cards={cards} /> : null}
      <RelatedLinks heading={`Services and pages related to ${location.name}`} links={related} />
      <OriginLocationNote location={location} />
    </>
  );
}
