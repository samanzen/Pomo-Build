import Link from 'next/link';
import Button from '@/components/Button';
import { TRI_CITIES_AND_NEARBY_LOCATIONS } from '@/lib/locations';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_TEL } from '@/lib/site';

type BathroomLeadProps = {
  cityName?: string;
};

export default function BathroomLead({ cityName }: BathroomLeadProps) {
  const headline = cityName
    ? `Planning a bathroom renovation in ${cityName}?`
    : 'Planning a bathroom renovation in the Tri-Cities?';

  return (
    <section className="bg-[#1F2937] py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">{headline}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Pomo Build handles bathroom remodels from our Port Moody shop for homes in Port Moody,
          Coquitlam, Port Coquitlam, Anmore, and Belcarra. Call or request a quote and we will
          walk through layout, tile, plumbing, and scheduling.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact#quote-form">Request a bathroom quote</Button>
          <a
            href={BUSINESS_PHONE_TEL}
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-8 py-3 text-lg font-bold text-white transition-colors hover:bg-white/10"
          >
            Call {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
          {TRI_CITIES_AND_NEARBY_LOCATIONS.map((location) => (
            <li key={location.slug}>
              <Link href={location.href} className="hover:text-[#D97706]">
                {location.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/services/kitchen-bath" className="hover:text-[#D97706]">
              Kitchen &amp; bath
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
