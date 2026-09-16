export type LocationRegionId =
  | 'tri-cities-nearby'
  | 'north-shore'
  | 'vancouver-central'
  | 'northeast'
  | 'richmond-delta'
  | 'surrey-langley';

export type ServiceAreaLocation = {
  name: string;
  slug: string;
  href: `/${string}`;
  region: LocationRegionId;
  shortLabel: string;
  municipalName: string;
  municipalUrl: string;
  permitLabel: string;
  permitUrl: string;
};

export type LocationRegionGroup = {
  id: LocationRegionId;
  heading: string;
  slugs: readonly string[];
};

/** Navigation groupings only. These do not create routes, canonicals, or sitemap entries. */
export const LOCATION_REGIONS: LocationRegionGroup[] = [
  {
    id: 'tri-cities-nearby',
    heading: 'Tri-Cities and Nearby Communities',
    slugs: ['port-moody', 'coquitlam', 'port-coquitlam', 'anmore', 'belcarra'],
  },
  {
    id: 'north-shore',
    heading: 'North Shore and Howe Sound',
    slugs: ['north-vancouver', 'west-vancouver', 'lions-bay'],
  },
  {
    id: 'vancouver-central',
    heading: 'Vancouver and Central Metro Vancouver',
    slugs: ['vancouver', 'burnaby', 'new-westminster', 'ubc'],
  },
  {
    id: 'northeast',
    heading: 'Northeast Metro Vancouver',
    slugs: ['maple-ridge', 'pitt-meadows'],
  },
  {
    id: 'richmond-delta',
    heading: 'Richmond and Delta',
    slugs: ['richmond', 'delta', 'tsawwassen'],
  },
  {
    id: 'surrey-langley',
    heading: 'Surrey, White Rock and Langley',
    slugs: ['surrey', 'white-rock', 'langley'],
  },
];

export const TRI_CITIES_CITY_SLUGS = ['port-moody', 'coquitlam', 'port-coquitlam'] as const;
export const TRI_CITIES_NEARBY_SLUGS = ['anmore', 'belcarra'] as const;
export const TRI_CITIES_AND_NEARBY_SLUGS = [
  ...TRI_CITIES_CITY_SLUGS,
  ...TRI_CITIES_NEARBY_SLUGS,
] as const;

export const SERVICE_AREA_LOCATIONS: ServiceAreaLocation[] = [
  {
    name: 'Port Moody',
    slug: 'port-moody',
    href: '/service-area/port-moody',
    region: 'tri-cities-nearby',
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
    region: 'tri-cities-nearby',
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
    region: 'tri-cities-nearby',
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
    region: 'tri-cities-nearby',
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
    region: 'tri-cities-nearby',
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
    region: 'vancouver-central',
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
    region: 'vancouver-central',
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
    region: 'north-shore',
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
    region: 'north-shore',
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
    region: 'surrey-langley',
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
    region: 'richmond-delta',
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
    region: 'vancouver-central',
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
    region: 'northeast',
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
    region: 'northeast',
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
    region: 'surrey-langley',
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
    region: 'richmond-delta',
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
    region: 'surrey-langley',
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
    region: 'richmond-delta',
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
    region: 'north-shore',
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
    region: 'vancouver-central',
    shortLabel: 'UBC / UEL',
    municipalName: 'University Endowment Lands',
    municipalUrl: 'https://www.universityendowmentlands.gov.bc.ca/',
    permitLabel: 'UEL building permits',
    permitUrl: 'https://www.universityendowmentlands.gov.bc.ca/',
  },
];

export function getLocationBySlug(slug: string): ServiceAreaLocation | undefined {
  return SERVICE_AREA_LOCATIONS.find((location) => location.slug === slug);
}

export function getLocationsForRegion(regionId: LocationRegionId): ServiceAreaLocation[] {
  const region = LOCATION_REGIONS.find((group) => group.id === regionId);
  if (!region) {
    return [];
  }
  return region.slugs
    .map((slug) => getLocationBySlug(slug))
    .filter((location): location is ServiceAreaLocation => Boolean(location));
}

export const GROUPED_SERVICE_AREAS = LOCATION_REGIONS.map((region) => ({
  id: region.id,
  heading: region.heading,
  locations: getLocationsForRegion(region.id),
}));

export const TRI_CITIES_AND_NEARBY_LOCATIONS = TRI_CITIES_AND_NEARBY_SLUGS.map((slug) => {
  const location = getLocationBySlug(slug);
  if (!location) {
    throw new Error(`Missing Tri-Cities or nearby location: ${slug}`);
  }
  return location;
});

export const TRI_CITIES_HREF = '/tri-cities-renovations' as const;
