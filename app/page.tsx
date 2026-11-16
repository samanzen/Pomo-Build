import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import BathroomLead from '@/components/BathroomLead';
import { HOMEPAGE_SERVICE_CARDS } from '@/lib/services';
import { TRI_CITIES_AND_NEARBY_LOCATIONS, TRI_CITIES_HREF } from '@/lib/locations';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('home');

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center text-center text-white md:min-h-[80vh]">
        <Image
          src="/images/homepage-hero.webp"
          alt="Renovated Port Moody home interior by Pomo Build"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Home renovations and bathroom remodels in Port Moody
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Pomo Build plans and builds bathroom, kitchen, basement, and full-home renovations for
            homeowners in Port Moody and across Metro Vancouver, plus reliable handyman work when
            you need smaller repairs.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact#quote-form">Get a Free Quote</Button>
            <Link
              href="/services/kitchen-bath"
              className="inline-flex items-center justify-center rounded-md border border-white/50 bg-white/10 px-8 py-3 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Bathroom renovations
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Why Choose Pomo Build?</h2>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M4 21V10a2 2 0 012-2h12a2 2 0 012 2v11" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Quality Craftsmanship</h3></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Reliable Scheduling</h3></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Locally Owned</h3></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D97706]"><svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div><h3 className="mt-6 text-xl font-semibold text-[#1F2937]">Clear Communication</h3></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Our Services</h2>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {HOMEPAGE_SERVICE_CARDS.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block"
              >
                <div className="overflow-hidden rounded-lg shadow-lg text-left h-full">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#1F2937]">{service.title}</h3>
                    <p className="mt-3 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl">Tri-Cities and Nearby Communities</h2>
            <p className="mt-4 text-lg text-gray-600">
              Port Moody is our home base. Explore local pages for Coquitlam, Port Coquitlam, Anmore,
              and Belcarra, or visit the dedicated{' '}
              <Link href={TRI_CITIES_HREF} className="font-semibold text-[#D97706] hover:underline">
                Tri-Cities renovations
              </Link>{' '}
              page for kitchen, bathroom, and full-home projects in the area.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TRI_CITIES_AND_NEARBY_LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={location.href}
                className="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-lg font-semibold text-[#1F2937]">{location.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1F2937] py-16 md:py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Our Simple, 3-Step Process</h2>
          <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8">
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D97706] text-2xl font-bold text-[#D97706]">1</div><h3 className="mt-6 text-2xl font-semibold">Consultation</h3><p className="mt-2 text-gray-400">We start with a free consultation to discuss your vision, budget, and timeline.</p></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D97706] text-2xl font-bold text-[#D97706]">2</div><h3 className="mt-6 text-2xl font-semibold">Design & Build</h3><p className="mt-2 text-gray-400">Our team gets to work, turning your design into reality with quality materials and craftsmanship.</p></div>
            <div className="flex flex-col items-center"><div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#D97706] text-2xl font-bold text-[#D97706]">3</div><h3 className="mt-6 text-2xl font-semibold">Final Walkthrough</h3><p className="mt-2 text-gray-400">We ensure every detail is perfect and that you are 100% satisfied with the final result.</p></div>
          </div>
        </div>
      </section>

      <BathroomLead />
    </>
  );
}
