import type { ServiceSlug } from './services';

export type CityServiceCard = {
  title: string;
  href: `/services/${ServiceSlug}`;
  description: string;
};

export const CITY_SERVICE_CARDS: Record<string, CityServiceCard[]> = {
  anmore: [
    {
      title: 'Custom Home Renovations',
      href: '/services/major-renovations',
      description:
        'We manage large-scale, whole-home renovations, transforming your property into a true masterpiece of design and quality.',
    },
    {
      title: "Gourmet & Entertainer's Kitchens",
      href: '/services/kitchen-bath',
      description:
        'We design and build exceptional, high-end kitchens equipped with premium appliances and the finest materials.',
    },
    {
      title: 'Luxury Outdoor Living',
      href: '/services/decks-exteriors',
      description:
        'We create stunning outdoor spaces, including expansive decks, patios, and outdoor kitchens that flow from your home.',
    },
  ],
  belcarra: [
    {
      title: 'Waterfront Decks & Docks',
      href: '/services/decks-exteriors',
      description:
        "We design and build exceptional, durable outdoor structures that maximize your enjoyment of Belcarra's waterfront lifestyle.",
    },
    {
      title: 'Custom Home Remodels',
      href: '/services/major-renovations',
      description:
        'We manage complex, large-scale renovations that integrate sophisticated design with the natural landscape.',
    },
    {
      title: 'Window & Door Upgrades',
      href: '/services/decks-exteriors',
      description:
        'We install high-performance, oversized windows and glass door systems to maximize your stunning forest and ocean views.',
    },
  ],
  'port-moody': [
    {
      title: 'Condo Renovations',
      href: '/services/major-renovations',
      description:
        "We specialize in maximizing space and functionality in Port Moody's beautiful condo communities like Suter Brook and Klahanie.",
    },
    {
      title: 'Decks with a View',
      href: '/services/decks-exteriors',
      description:
        "We build stunning, durable decks designed to take full advantage of Port Moody's incredible natural scenery and ocean views.",
    },
    {
      title: 'Heritage Home Repairs',
      href: '/services/handyman-services',
      description:
        'Our skilled handyman team can provide careful, precise repairs and updates that respect the character of your heritage home.',
    },
  ],
  coquitlam: [
    {
      title: 'Kitchen & Bath Remodeling',
      href: '/services/kitchen-bath',
      description: 'We specialize in transforming dated kitchens and bathrooms into modern, functional spaces.',
    },
    {
      title: 'Basement Finishing',
      href: '/services/basement-finishing',
      description: 'Turn your unfinished basement into a valuable asset like a legal suite, home theatre, or gym.',
    },
    {
      title: 'Handyman Services',
      href: '/services/handyman-services',
      description: 'For all the jobs on your to-do list, from drywall repair to fixture installations.',
    },
  ],
  'port-coquitlam': [
    {
      title: 'Deck & Patio Building',
      href: '/services/decks-exteriors',
      description:
        "We build beautiful, durable decks perfect for enjoying Port Coquitlam's many sunny days and scenic backyards.",
    },
    {
      title: 'Kitchen Renovations',
      href: '/services/kitchen-bath',
      description:
        "Update the heart of your home with a modern, functional kitchen remodel designed for your family's lifestyle.",
    },
    {
      title: 'Handyman Repairs',
      href: '/services/handyman-services',
      description:
        "Our reliable handyman team is here to help with all your home's maintenance needs, from small repairs to installations.",
    },
  ],
  burnaby: [
    {
      title: 'Condo & Home Renovations',
      href: '/services/major-renovations',
      description:
        'Specializing in full renovations for both single-family homes and high-rise apartments common in the Burnaby area.',
    },
    {
      title: 'Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        'We design and build beautiful outdoor living spaces perfect for enjoying the views from Burnaby Mountain or your own backyard.',
    },
    {
      title: 'Basement Suites',
      href: '/services/basement-finishing',
      description:
        "Maximize your property's potential with a legal secondary suite, a popular and valuable addition for homes in Burnaby.",
    },
  ],
  vancouver: [
    {
      title: 'Condo & Character Home Renovations',
      href: '/services/major-renovations',
      description:
        "We specialize in maximizing space in downtown condos and preserving the unique details of Vancouver's beloved character homes.",
    },
    {
      title: 'Laneway & Coach Houses',
      href: '/services/major-renovations',
      description:
        'Unlock the potential of your property by building a stylish and functional laneway house for family or as a rental income opportunity.',
    },
    {
      title: 'Professional Handyman',
      href: '/services/handyman-services',
      description:
        'Our reliable handyman service is perfect for handling repairs and installations in condos, apartments, and homes across the city.',
    },
  ],
  'north-vancouver': [
    {
      title: 'High-Performance Decks',
      href: '/services/decks-exteriors',
      description:
        "We build stunning, weather-resistant decks perfect for enjoying North Vancouver's incredible views and natural surroundings.",
    },
    {
      title: 'Whole Home Renovations',
      href: '/services/major-renovations',
      description:
        'We specialize in complete home transformations, updating older North Shore homes with modern layouts and energy-efficient features.',
    },
    {
      title: 'Custom Renovations',
      href: '/services/major-renovations',
      description:
        'From custom millwork to unique architectural details, we bring your specific vision for your North Vancouver home to life.',
    },
  ],
  'west-vancouver': [
    {
      title: 'High-End Kitchen & Bath Remodels',
      href: '/services/kitchen-bath',
      description:
        'We create stunning, custom kitchens and spa-like ensuite bathrooms using premium materials and the finest finishes.',
    },
    {
      title: 'Architectural Renovations',
      href: '/services/major-renovations',
      description:
        'We manage whole-home renovations that enhance architectural details, maximize views, and integrate modern luxury.',
    },
    {
      title: 'Outdoor Living Spaces',
      href: '/services/decks-exteriors',
      description:
        'We design and build expansive patios and custom decks that seamlessly blend with the landscape.',
    },
  ],
  surrey: [
    {
      title: 'Legal Basement Suites',
      href: '/services/basement-finishing',
      description:
        'Adding a legal secondary suite is a very popular and smart investment for Surrey homeowners, providing significant rental income potential.',
    },
    {
      title: 'Kitchen Renovations',
      href: '/services/kitchen-bath',
      description:
        'We create beautiful, open-concept kitchens perfect for growing families and entertaining guests in your Surrey home.',
    },
    {
      title: 'Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        'Maximize your outdoor living space with a custom-built deck or patio, perfect for enjoying the beautiful BC summers.',
    },
  ],
  richmond: [
    {
      title: 'Luxury Kitchen & Wok Kitchens',
      href: '/services/kitchen-bath',
      description:
        'We design and build high-end kitchens, including specialized wok kitchens, perfect for the modern Richmond home.',
    },
    {
      title: 'Custom Home Renovations',
      href: '/services/major-renovations',
      description:
        'We manage complete home transformations, updating layouts, flooring, and finishes for a cohesive, modern look.',
    },
    {
      title: 'Media Rooms & Theatres',
      href: '/services/basement-finishing',
      description:
        'Transform your space into a state-of-the-art media room or home theatre, perfect for family entertainment.',
    },
  ],
  'new-westminster': [
    {
      title: 'Heritage Home Kitchens & Baths',
      href: '/services/kitchen-bath',
      description:
        "We design and build modern kitchens and bathrooms that seamlessly integrate with the historical character of your home.",
    },
    {
      title: 'Exterior Restoration',
      href: '/services/decks-exteriors',
      description:
        "From porch repairs to period-correct siding and window replacements, we restore and enhance your home's curb appeal.",
    },
    {
      title: 'Condo & Apartment Upgrades',
      href: '/services/major-renovations',
      description:
        "We offer a full range of services for New Westminster's growing number of condos, from simple repairs to full remodels.",
    },
  ],
  'maple-ridge': [
    {
      title: 'Custom Decks & Outbuildings',
      href: '/services/decks-exteriors',
      description:
        'We build expansive decks, patios, and functional outbuildings like workshops or sheds, perfect for larger properties.',
    },
    {
      title: 'Farmhouse Kitchen Renovations',
      href: '/services/kitchen-bath',
      description:
        'We specialize in creating warm, inviting farmhouse-style kitchens with modern amenities for family gatherings.',
    },
    {
      title: 'Full Home Remodels',
      href: '/services/major-renovations',
      description:
        'We manage complete renovations for single-family homes, updating layouts and finishes to suit modern lifestyles.',
    },
  ],
  'pitt-meadows': [
    {
      title: 'Custom Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        'We design and build beautiful outdoor living spaces perfect for enjoying the open skies and views of Pitt Meadows.',
    },
    {
      title: 'Kitchen & Family Room Remodels',
      href: '/services/kitchen-bath',
      description: 'We create open, inviting kitchens and family rooms that serve as the heart of your home.',
    },
    {
      title: 'General Home Repairs',
      href: '/services/handyman-services',
      description:
        'Our professional handyman team is ready to tackle your to-do list, ensuring your home is always in top condition.',
    },
  ],
  langley: [
    {
      title: 'Custom Decks & Fences',
      href: '/services/decks-exteriors',
      description:
        "We create stunning outdoor spaces with high-quality decks and fences, perfect for Langley's family-oriented backyards.",
    },
    {
      title: 'Family Kitchen Remodels',
      href: '/services/kitchen-bath',
      description: 'We design durable, spacious, and beautiful kitchens built to be the heart of a busy family home.',
    },
    {
      title: 'Basement Playrooms & Suites',
      href: '/services/basement-finishing',
      description: 'Transform your basement into a functional playroom for the kids or a legal suite for extra income.',
    },
  ],
  delta: [
    {
      title: 'Sun Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        'We design and build beautiful, durable decks and patios perfect for maximizing your enjoyment of the sunny Delta climate.',
    },
    {
      title: 'Kitchen & Bath Updates',
      href: '/services/kitchen-bath',
      description: 'We specialize in renovating kitchens and bathrooms to create modern, functional spaces for your family home.',
    },
    {
      title: 'Exterior Renovations',
      href: '/services/decks-exteriors',
      description:
        'From new siding to window and door replacements, we use high-quality materials to protect and beautify your home.',
    },
  ],
  'white-rock': [
    {
      title: 'Ocean-View Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        "We build spectacular, low-maintenance outdoor spaces perfect for enjoying White Rock's stunning sunsets and ocean views.",
    },
    {
      title: 'Bright & Airy Kitchen Remodels',
      href: '/services/kitchen-bath',
      description:
        'We design and build beautiful, open-concept kitchens that are filled with natural light and perfect for coastal living.',
    },
    {
      title: 'Condo Renovations',
      href: '/services/major-renovations',
      description: 'We specialize in complete renovations for condos and apartments, maximizing space and enhancing views.',
    },
  ],
  tsawwassen: [
    {
      title: 'Expansive Sun Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        'We build stunning, low-maintenance decks and patios perfect for soaking up the sun and enjoying outdoor living.',
    },
    {
      title: 'Bright & Open Kitchen Remodels',
      href: '/services/kitchen-bath',
      description: 'We create airy, open-concept kitchens with large windows and light finishes to maximize natural light.',
    },
    {
      title: 'Exterior Upgrades & Repairs',
      href: '/services/decks-exteriors',
      description: 'We provide expert siding, window, and door replacements using materials designed for coastal weather.',
    },
  ],
  'lions-bay': [
    {
      title: 'Architectural & Custom Homes',
      href: '/services/major-renovations',
      description:
        'We manage complex, architecturally-driven renovations and custom home projects with precision and expertise.',
    },
    {
      title: 'Hillside Decks & Patios',
      href: '/services/decks-exteriors',
      description:
        'We engineer and build stunning, durable decks and outdoor spaces designed for steep lots to maximize your views.',
    },
    {
      title: 'Window & Glass Wall Systems',
      href: '/services/decks-exteriors',
      description:
        'We specialize in installing large-format windows and glass wall systems to capture the breathtaking scenery of Howe Sound.',
    },
  ],
  ubc: [
    {
      title: 'Architectural & Heritage Restoration',
      href: '/services/major-renovations',
      description:
        'We specialize in meticulous renovations that preserve and enhance the unique architectural character of your property.',
    },
    {
      title: 'Luxury Condo & Apartment Remodeling',
      href: '/services/kitchen-bath',
      description:
        'We create stunning, high-end interiors for condos and apartments, maximizing space and luxury with premium materials.',
    },
    {
      title: 'Custom Millwork & Finishing',
      href: '/services/kitchen-bath',
      description:
        'Our skilled carpenters deliver flawless custom cabinetry, built-ins, and finishing details for a truly bespoke result.',
    },
  ],
};

export const WHOLE_HOME_INTENT_PATTERN =
  /(custom home|whole[- ]home|full[- ]home|architectural|condo renovations|home remodel|home renovation|laneway)/i;

export function getCityServiceCards(slug: string): CityServiceCard[] {
  return CITY_SERVICE_CARDS[slug] ?? [];
}
