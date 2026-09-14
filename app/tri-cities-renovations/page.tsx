import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteFormEmbed from '@/components/QuoteFormEmbed';

export const metadata: Metadata = {
  title: 'Tri-Cities Renovation Contractors',
  description:
    'Kitchen, bathroom, and full-home renovations in Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra. Request a free on-site estimate today.',
  alternates: {
    canonical: 'https://pomobuild.ca/tri-cities-renovations',
  },
  openGraph: {
    title: 'Tri-Cities Renovation Contractors | Pomo Build',
    description:
      'Kitchen, bathroom, and full-home renovations for Tri-Cities homeowners. Free on-site estimates from a Port Moody-based contractor.',
    url: 'https://pomobuild.ca/tri-cities-renovations',
    images: [{ url: '/images/renovation-hero.webp' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tri-Cities Renovation Contractors | Pomo Build',
    description:
      'Kitchen, bathroom, and full-home renovations across Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra.',
    images: ['/images/renovation-hero.webp'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pomobuild.ca' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tri-Cities Renovations',
      item: 'https://pomobuild.ca/tri-cities-renovations',
    },
  ],
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Pomo Build',
  url: 'https://pomobuild.ca/tri-cities-renovations',
  telephone: '+1-604-500-2003',
  email: 'info@pomobuild.ca',
  image: 'https://pomobuild.ca/images/renovation-hero.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1924 Clarke St',
    addressLocality: 'Port Moody',
    addressRegion: 'BC',
    postalCode: 'V3H 1X9',
    addressCountry: 'CA',
  },
  openingHours: 'Mo-Sa 08:00-18:00',
  areaServed: [
    { '@type': 'City', name: 'Coquitlam' },
    { '@type': 'City', name: 'Port Moody' },
    { '@type': 'City', name: 'Port Coquitlam' },
    { '@type': 'City', name: 'Anmore' },
    { '@type': 'City', name: 'Belcarra' },
  ],
  description:
    'Port Moody-based renovation contractor providing kitchen, bathroom, and full-home renovations across the Tri-Cities.',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      name: 'Kitchen Renovations',
      serviceType: 'Kitchen remodeling',
      provider: { '@type': 'GeneralContractor', name: 'Pomo Build' },
      areaServed: ['Coquitlam', 'Port Moody', 'Port Coquitlam', 'Anmore', 'Belcarra'],
      url: 'https://pomobuild.ca/services/kitchen-bath',
    },
    {
      '@type': 'Service',
      name: 'Bathroom Renovations',
      serviceType: 'Bathroom remodeling',
      provider: { '@type': 'GeneralContractor', name: 'Pomo Build' },
      areaServed: ['Coquitlam', 'Port Moody', 'Port Coquitlam', 'Anmore', 'Belcarra'],
      url: 'https://pomobuild.ca/services/kitchen-bath',
    },
    {
      '@type': 'Service',
      name: 'Full-Home Renovations',
      serviceType: 'Major home renovation',
      provider: { '@type': 'GeneralContractor', name: 'Pomo Build' },
      areaServed: ['Coquitlam', 'Port Moody', 'Port Coquitlam', 'Anmore', 'Belcarra'],
      url: 'https://pomobuild.ca/services/major-renovations',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer free on-site estimates in the Tri-Cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pomo Build provides free on-site estimates for kitchen, bathroom, and full-home renovation projects in Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra.',
      },
    },
    {
      '@type': 'Question',
      name: 'What renovation services do you provide for Tri-Cities homeowners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We focus on kitchen renovations, bathroom renovations, and full-home renovations. Each project includes clear scoping, transparent pricing, and dedicated project communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the estimate process work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Submit the form or call 604-500-2003. We review your project details, schedule an on-site consultation, and provide a clear scope with pricing before construction begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I stay in my home during a renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For many bathroom renovations, homeowners can remain in place. Larger kitchen or full-home projects may require more planning to manage dust, access, and daily living. We discuss practical options during the on-site consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle permits for Tri-Cities renovation projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When permits are required for plumbing, electrical, or structural changes, we manage the application process with the relevant municipality and coordinate inspections as part of the project.',
      },
    },
  ],
};

const trustItems = [
  'Free on-site estimates',
  'Clear scope and pricing',
  'Reliable scheduling',
  'Local Tri-Cities service',
];

const services = [
  {
    title: 'Kitchen Renovations',
    href: '/services/kitchen-bath',
    image: '/images/gallery-kitchen-1.webp',
    alt: 'Modern white kitchen renovation completed by Pomo Build',
    copy: 'Update layout, cabinetry, counters, and lighting to create a kitchen that fits how your family cooks and gathers.',
  },
  {
    title: 'Bathroom Renovations',
    href: '/services/kitchen-bath',
    image: '/images/gallery-bath-1.webp',
    alt: 'Luxury bathroom renovation with walk-in shower by Pomo Build',
    copy: 'Refresh outdated bathrooms with durable finishes, thoughtful storage, and clean, modern detailing.',
  },
  {
    title: 'Full-Home Renovations',
    href: '/services/major-renovations',
    image: '/images/gallery-renovation-1.webp',
    alt: 'Open-concept full-home renovation living space by Pomo Build',
    copy: 'Coordinate larger remodels with clear project management, from planning and permitting through final walkthrough.',
  },
];

const processSteps = [
  {
    title: 'Request an estimate',
    copy: 'Share your project goals online or by phone. We confirm details and book a convenient visit.',
  },
  {
    title: 'On-site consultation',
    copy: 'We walk the space with you, discuss priorities, and identify practical opportunities and constraints.',
  },
  {
    title: 'Clear scope and pricing',
    copy: 'You receive a transparent outline of the work, materials approach, and pricing before construction starts.',
  },
  {
    title: 'Construction and communication',
    copy: 'A dedicated point of contact keeps you updated while the team executes the build with care.',
  },
  {
    title: 'Final walkthrough',
    copy: 'We review the finished space together and confirm every detail meets the agreed scope.',
  },
];

const cities = [
  {
    name: 'Coquitlam',
    href: '/service-area/coquitlam',
    image: '/images/location-hero-coquitlam.webp',
    alt: 'Residential streetscape in Coquitlam, BC',
    copy: 'From Burke Mountain to Austin Heights, we help Coquitlam homeowners renovate kitchens, baths, and living spaces with plans suited to local homes and municipal requirements.',
  },
  {
    name: 'Port Moody',
    href: '/service-area/port-moody',
    image: '/images/location-hero-port-moody.webp',
    alt: 'Waterfront view near Port Moody, BC',
    copy: 'As a Port Moody-based contractor, we bring local familiarity to Inlet Centre, Heritage Mountain, and surrounding neighbourhood renovations.',
  },
  {
    name: 'Port Coquitlam',
    href: '/service-area/port-coquitlam',
    image: '/images/location-hero-port-coquitlam.webp',
    alt: 'Homes in Port Coquitlam, BC',
    copy: 'Whether you are updating a family home near downtown PoCo or improving an established property, we focus on clear schedules and quality craftsmanship.',
  },
  {
    name: 'Anmore',
    href: '/service-area/anmore',
    image: '/images/location-hero-anmore.webp',
    alt: 'Tree-lined residential area in Anmore, BC',
    copy: 'Anmore projects often call for careful planning around larger lots and custom homes. We tailor kitchen, bath, and full-home renovations to that setting.',
  },
  {
    name: 'Belcarra',
    href: '/service-area/belcarra',
    image: '/images/location-hero-belcarra.webp',
    alt: 'Scenic residential surroundings in Belcarra, BC',
    copy: 'For Belcarra homeowners, we provide attentive renovation planning that respects property access, timelines, and the character of the home.',
  },
];

const faqs = [
  {
    question: 'Do you offer free on-site estimates in the Tri-Cities?',
    answer:
      'Yes. Pomo Build provides free on-site estimates for kitchen, bathroom, and full-home renovation projects in Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra.',
  },
  {
    question: 'What renovation services do you provide for Tri-Cities homeowners?',
    answer:
      'We focus on kitchen renovations, bathroom renovations, and full-home renovations. Each project includes clear scoping, transparent pricing, and dedicated project communication.',
  },
  {
    question: 'How does the estimate process work?',
    answer:
      'Submit the form or call 604-500-2003. We review your project details, schedule an on-site consultation, and provide a clear scope with pricing before construction begins.',
  },
  {
    question: 'Can I stay in my home during a renovation?',
    answer:
      'For many bathroom renovations, homeowners can remain in place. Larger kitchen or full-home projects may require more planning to manage dust, access, and daily living. We discuss practical options during the on-site consultation.',
  },
  {
    question: 'Do you handle permits for Tri-Cities renovation projects?',
    answer:
      'When permits are required for plumbing, electrical, or structural changes, we manage the application process with the relevant municipality and coordinate inspections as part of the project.',
  },
];

export default function TriCitiesRenovationsPage() {
  return (
    <div className="bg-white pb-24 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="bg-[#F9FAFB] border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-3 text-sm text-gray-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#D97706] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#1F2937] font-medium">Tri-Cities Renovations</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#1F2937] text-white">
        <Image
          src="/images/renovation-hero.webp"
          alt="Open-concept kitchen and living renovation completed for a Metro Vancouver home"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/45" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#D97706]">
                Coquitlam · Port Moody · Port Coquitlam · Anmore · Belcarra
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Tri-Cities Renovation Contractors
              </h1>
              <p className="mt-5 max-w-xl text-base text-gray-200 sm:text-lg">
                Pomo Build helps Tri-Cities homeowners plan and complete kitchen, bathroom, and full-home renovations with quality craftsmanship, clear communication, and reliable scheduling.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#estimate"
                  className="inline-flex items-center justify-center rounded-md bg-[#D97706] px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-500/50"
                >
                  Request a Free On-Site Estimate
                </a>
                <a
                  href="tel:+16045002003"
                  className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-8 py-3 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  Call 604-500-2003
                </a>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-100 sm:text-base">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D97706] text-xs font-bold text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="estimate"
              className="scroll-mt-28 rounded-lg border border-white/15 bg-white p-4 shadow-xl sm:p-6"
            >
              <QuoteFormEmbed
                heading="Request a Free On-Site Estimate"
                className="text-[#1F2937]"
              />
              <p className="mt-4 text-center text-sm text-gray-500">
                Prefer to talk now?{' '}
                <a href="tel:+16045002003" className="font-semibold text-[#D97706] hover:underline">
                  Call 604-500-2003
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust / value strip */}
      <section className="border-b border-gray-200 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="text-lg font-bold text-[#1F2937]">Quality craftsmanship</h2>
              <p className="mt-2 text-sm text-gray-600">Careful detailing and durable finishes built for everyday living.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1F2937]">Transparent pricing</h2>
              <p className="mt-2 text-sm text-gray-600">Clear scope and pricing before work begins—no guesswork.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1F2937]">Reliable scheduling</h2>
              <p className="mt-2 text-sm text-gray-600">Practical timelines with ongoing communication throughout the project.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1F2937]">Local & insured</h2>
              <p className="mt-2 text-sm text-gray-600">Port Moody-based team serving homeowners across the Tri-Cities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Service cards */}
      <section className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Renovation services for Tri-Cities homes</h2>
          <p className="mt-4 text-gray-600">
            Focused on the projects Tri-Cities homeowners search for most: kitchens, bathrooms, and full-home renovations.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group block h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{service.copy}</p>
                  <span className="mt-auto pt-5 font-semibold text-[#D97706]">Learn more →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Portfolio gallery */}
      <section className="bg-[#F9FAFB] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Recent renovation projects</h2>
            <p className="mt-4 text-gray-600">
              Real Pomo Build work from kitchens, bathrooms, and whole-home renovations across Metro Vancouver.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/case-kitchen-1-after.webp" alt="Completed modern kitchen remodel by Pomo Build" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/portfolio-bath-1.webp" alt="Luxury ensuite bathroom renovation in Coquitlam" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/gallery-kitchen-2.webp" alt="Spacious renovated kitchen with custom cabinetry" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/gallery-renovation-2.webp" alt="Interior renovation with updated finishes and open layout" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/case-bath-1-after.webp" alt="Finished bathroom renovation with modern fixtures" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <Image src="/images/gallery-renovation-3.webp" alt="Full-home renovation living area after completion" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-md bg-[#1F2937] px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-400/40"
            >
              View full portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why homeowners choose Pomo Build */}
      <section className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[360px] w-full sm:h-[440px]">
            <Image
              src="/images/about-owner-saman-zen.webp"
              alt="Saman Zen, founder of Pomo Build, in a renovated kitchen"
              fill
              className="rounded-lg object-cover shadow-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Why homeowners choose Pomo Build</h2>
            <p className="mt-5 text-gray-600">
              Founded by Saman Zen and based in Port Moody, Pomo Build brings hands-on renovation experience and a clear process to Tri-Cities projects. Homeowners work with a local team focused on quality, integrity, and practical communication.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1 text-[#D97706] font-bold">•</span>
                <span><strong className="text-[#1F2937]">Quality first:</strong> careful workmanship and materials chosen for lasting performance.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[#D97706] font-bold">•</span>
                <span><strong className="text-[#1F2937]">Clear communication:</strong> one point of contact and regular updates as work progresses.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[#D97706] font-bold">•</span>
                <span><strong className="text-[#1F2937]">Fully insured:</strong> professional, insured renovation services for homeowners across Metro Vancouver.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[#D97706] font-bold">•</span>
                <span><strong className="text-[#1F2937]">Local knowledge:</strong> familiar with Tri-Cities homes, neighbourhoods, and municipal processes.</span>
              </li>
            </ul>
            <div className="mt-8">
              <Link href="/about" className="font-semibold text-[#D97706] hover:underline">
                Learn more about Pomo Build →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="bg-[#1F2937] py-14 text-white md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">A simple renovation process</h2>
            <p className="mt-4 text-gray-300">
              From first conversation to final walkthrough, every step is designed to keep your project clear and on track.
            </p>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D97706] text-lg font-bold text-[#D97706]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Service area */}
      <section className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Serving the Tri-Cities and nearby communities</h2>
          <p className="mt-4 text-gray-600">
            We provide renovation services across Coquitlam, Port Moody, Port Coquitlam, Anmore, and Belcarra—with local pages for each community.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cities.map((city) => (
            <article key={city.name} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="relative h-44 w-full">
                <Image src={city.image} alt={city.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1F2937]">{city.name}</h3>
                <p className="mt-3 text-gray-600">{city.copy}</p>
                <Link href={city.href} className="mt-4 inline-block font-semibold text-[#D97706] hover:underline">
                  {city.name} renovations →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
          Exploring a broader area? See our full{' '}
          <Link href="/service-area" className="font-semibold text-[#D97706] hover:underline">
            service area
          </Link>
          .
        </p>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F9FAFB] py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">What homeowners say</h2>
            <p className="mt-4 text-gray-600">Feedback from clients featured on the Pomo Build website.</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-white p-8 shadow-md">
            <p className="text-lg text-gray-600">
              &ldquo;The attention to detail was incredible. Pomo Build transformed our dated kitchen into a modern space we absolutely love. On time and professional from start to finish.&rdquo;
            </p>
            <div className="mt-6 font-bold text-[#1F2937]">Sarah L.</div>
            <div className="text-sm text-gray-500">Coquitlam, BC</div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="container mx-auto px-4 sm:px-6 py-14 md:py-20">
        <h2 className="text-center text-3xl font-bold text-[#1F2937] sm:text-4xl">Frequently asked questions</h2>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#1F2937]">
                {faq.question}
                <span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 10. Final conversion */}
      <section className="bg-[#1F2937] py-14 text-white md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to plan your Tri-Cities renovation?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Request a free on-site estimate or call us to discuss your kitchen, bathroom, or full-home project. After you submit the form, we&apos;ll review your details and contact you shortly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#estimate"
              className="inline-flex items-center justify-center rounded-md bg-[#D97706] px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-500/50"
            >
              Request a Free On-Site Estimate
            </a>
            <a
              href="tel:+16045002003"
              className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Call 604-500-2003
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            Or visit our{' '}
            <Link href="/contact#quote-form" className="underline hover:text-white">
              contact page
            </Link>{' '}
            for additional project details.
          </p>
        </div>
      </section>
    </div>
  );
}
