export type LocationPriority = 'priority' | 'secondary';

export type ServiceAreaLocation = {
  name: string;
  slug: string;
  href: `/${string}`;
  priority: LocationPriority;
  shortLabel: string;
  municipalName: string;
  municipalUrl: string;
  permitLabel: string;
  permitUrl: string;
};

export const PRIORITY_CITY_SLUGS = [
  'port-moody',
  'coquitlam',
  'port-coquitlam',
  'anmore',
  'belcarra',
] as const;

export const SERVICE_AREA_LOCATIONS: ServiceAreaLocation[] = [
  {
    name: 'Port Moody',
    slug: 'port-moody',
    href: '/service-area/port-moody',
    priority: 'priority',
    shortLabel: 'Port Moody',
    municipalName: 'City of Port Moody',
    municipalUrl: 'https://www.portmoody.ca/',
    permitLabel: 'Port Moody building permits',
    permitUrl: 'https://www.portmoody.ca/en/business-and-development/building-permits.aspx',
  },
  {
    name: 'Coquitlam',
    slug: 'coquitlam',
    href: '/service-area/coquitlam',
    priority: 'priority',
    shortLabel: 'Coquitlam',
    municipalName: 'City of Coquitlam',
    municipalUrl: 'https://www.coquitlam.ca/',
    permitLabel: 'Coquitlam building permits',
    permitUrl: 'https://www.coquitlam.ca/247/Building-Permits',
  },
  {
    name: 'Port Coquitlam',
    slug: 'port-coquitlam',
    href: '/service-area/port-coquitlam',
    priority: 'priority',
    shortLabel: 'Port Coquitlam',
    municipalName: 'City of Port Coquitlam',
    municipalUrl: 'https://www.portcoquitlam.ca/',
    permitLabel: 'Port Coquitlam permits and licences',
    permitUrl: 'https://www.portcoquitlam.ca/business-development/permits-and-licences/',
  },
  {
    name: 'Anmore',
    slug: 'anmore',
    href: '/service-area/anmore',
    priority: 'priority',
    shortLabel: 'Anmore',
    municipalName: 'Village of Anmore',
    municipalUrl: 'https://anmore.com/',
    permitLabel: 'Anmore planning and development',
    permitUrl: 'https://anmore.com/planning-development/',
  },
  {
    name: 'Belcarra',
    slug: 'belcarra',
    href: '/service-area/belcarra',
    priority: 'priority',
    shortLabel: 'Belcarra',
    municipalName: 'Village of Belcarra',
    municipalUrl: 'https://www.belcarra.ca/',
    permitLabel: 'Belcarra village information',
    permitUrl: 'https://www.belcarra.ca/',
  },
  {
    name: 'Burnaby',
    slug: 'burnaby',
    href: '/service-area/burnaby',
    priority: 'secondary',
    shortLabel: 'Burnaby',
    municipalName: 'City of Burnaby',
    municipalUrl: 'https://www.burnaby.ca/',
    permitLabel: 'Burnaby building permits',
    permitUrl: 'https://www.burnaby.ca/building-and-renovating',
  },
  {
    name: 'Vancouver',
    slug: 'vancouver',
    href: '/service-area/vancouver',
    priority: 'secondary',
    shortLabel: 'Vancouver',
    municipalName: 'City of Vancouver',
    municipalUrl: 'https://vancouver.ca/',
    permitLabel: 'Vancouver building permits',
    permitUrl: 'https://vancouver.ca/home-property-development/building-permits.aspx',
  },
  {
    name: 'North Vancouver',
    slug: 'north-vancouver',
    href: '/service-area/north-vancouver',
    priority: 'secondary',
    shortLabel: 'North Vancouver',
    municipalName: 'City and District of North Vancouver',
    municipalUrl: 'https://www.cnv.org/',
    permitLabel: 'North Vancouver building information',
    permitUrl: 'https://www.cnv.org/property-and-development/building-and-development',
  },
  {
    name: 'West Vancouver',
    slug: 'west-vancouver',
    href: '/service-area/west-vancouver',
    priority: 'secondary',
    shortLabel: 'West Vancouver',
    municipalName: 'District of West Vancouver',
    municipalUrl: 'https://westvancouver.ca/',
    permitLabel: 'West Vancouver building permits',
    permitUrl: 'https://westvancouver.ca/home-building-property/permits-licences',
  },
  {
    name: 'Surrey',
    slug: 'surrey',
    href: '/service-area/surrey',
    priority: 'secondary',
    shortLabel: 'Surrey',
    municipalName: 'City of Surrey',
    municipalUrl: 'https://www.surrey.ca/',
    permitLabel: 'Surrey building permits',
    permitUrl: 'https://www.surrey.ca/renovating-building-development/building',
  },
  {
    name: 'Richmond',
    slug: 'richmond',
    href: '/service-area/richmond',
    priority: 'secondary',
    shortLabel: 'Richmond',
    municipalName: 'City of Richmond',
    municipalUrl: 'https://www.richmond.ca/',
    permitLabel: 'Richmond building permits',
    permitUrl: 'https://www.richmond.ca/plandev/building.htm',
  },
  {
    name: 'New Westminster',
    slug: 'new-westminster',
    href: '/service-area/new-westminster',
    priority: 'secondary',
    shortLabel: 'New Westminster',
    municipalName: 'City of New Westminster',
    municipalUrl: 'https://www.newwestcity.ca/',
    permitLabel: 'New Westminster building permits',
    permitUrl: 'https://www.newwestcity.ca/housing-and-development/building-permits',
  },
  {
    name: 'Maple Ridge',
    slug: 'maple-ridge',
    href: '/service-area/maple-ridge',
    priority: 'secondary',
    shortLabel: 'Maple Ridge',
    municipalName: 'City of Maple Ridge',
    municipalUrl: 'https://www.mapleridge.ca/',
    permitLabel: 'Maple Ridge building permits',
    permitUrl: 'https://www.mapleridge.ca/178/Building-Permits',
  },
  {
    name: 'Pitt Meadows',
    slug: 'pitt-meadows',
    href: '/service-area/pitt-meadows',
    priority: 'secondary',
    shortLabel: 'Pitt Meadows',
    municipalName: 'City of Pitt Meadows',
    municipalUrl: 'https://www.pittmeadows.ca/',
    permitLabel: 'Pitt Meadows building permits',
    permitUrl: 'https://www.pittmeadows.ca/our-community/building-development',
  },
  {
    name: 'Langley',
    slug: 'langley',
    href: '/service-area/langley',
    priority: 'secondary',
    shortLabel: 'Langley',
    municipalName: 'Township and City of Langley',
    municipalUrl: 'https://www.tol.ca/',
    permitLabel: 'Langley Township building permits',
    permitUrl: 'https://www.tol.ca/en/services/building-permits.aspx',
  },
  {
    name: 'Delta',
    slug: 'delta',
    href: '/service-area/delta',
    priority: 'secondary',
    shortLabel: 'Delta',
    municipalName: 'City of Delta',
    municipalUrl: 'https://www.delta.ca/',
    permitLabel: 'Delta building permits',
    permitUrl: 'https://www.delta.ca/property-development/building-permits',
  },
  {
    name: 'White Rock',
    slug: 'white-rock',
    href: '/service-area/white-rock',
    priority: 'secondary',
    shortLabel: 'White Rock',
    municipalName: 'City of White Rock',
    municipalUrl: 'https://www.whiterockcity.ca/',
    permitLabel: 'White Rock building permits',
    permitUrl: 'https://www.whiterockcity.ca/201/Building-Permits',
  },
  {
    name: 'Tsawwassen',
    slug: 'tsawwassen',
    href: '/service-area/tsawwassen',
    priority: 'secondary',
    shortLabel: 'Tsawwassen',
    municipalName: 'City of Delta / Tsawwassen',
    municipalUrl: 'https://www.delta.ca/',
    permitLabel: 'Delta building permits for Tsawwassen',
    permitUrl: 'https://www.delta.ca/property-development/building-permits',
  },
  {
    name: 'Lions Bay',
    slug: 'lions-bay',
    href: '/service-area/lions-bay',
    priority: 'secondary',
    shortLabel: 'Lions Bay',
    municipalName: 'Village of Lions Bay',
    municipalUrl: 'https://www.lionsbay.ca/',
    permitLabel: 'Lions Bay village information',
    permitUrl: 'https://www.lionsbay.ca/',
  },
  {
    name: 'UBC / UEL',
    slug: 'ubc',
    href: '/service-area/ubc',
    priority: 'secondary',
    shortLabel: 'UBC / UEL',
    municipalName: 'University Endowment Lands',
    municipalUrl: 'https://www.universityendowmentlands.gov.bc.ca/',
    permitLabel: 'UEL building permits',
    permitUrl: 'https://www.universityendowmentlands.gov.bc.ca/',
  },
];

export const PRIORITY_LOCATIONS = SERVICE_AREA_LOCATIONS.filter(
  (location) => location.priority === 'priority'
);

export const SECONDARY_LOCATIONS = SERVICE_AREA_LOCATIONS.filter(
  (location) => location.priority === 'secondary'
);

export function getLocationBySlug(slug: string): ServiceAreaLocation | undefined {
  return SERVICE_AREA_LOCATIONS.find((location) => location.slug === slug);
}

export const TRI_CITIES_HREF = '/tri-cities-renovations' as const;
