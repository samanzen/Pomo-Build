import type { ServiceAreaLocation } from '@/lib/locations';
import { BUSINESS_ADDRESS_LINE, GOOGLE_MAPS_EMBED } from '@/lib/site';

type OriginLocationNoteProps = {
  location: ServiceAreaLocation;
};

export default function OriginLocationNote({ location }: OriginLocationNoteProps) {
  return (
    <section className="mt-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-[#1F2937]">
        Based in Port Moody; serving {location.name}
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-gray-600">
        Pomo Build&apos;s workshop and office are at {BUSINESS_ADDRESS_LINE}. This map shows our
        Port Moody base, not a second office in {location.name}. Permit and bylaw requirements
        follow the {location.municipalName}.
      </p>
      <p className="mt-3 text-center">
        <a
          href={location.permitUrl}
          className="font-semibold text-[#D97706] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {location.permitLabel} ↗
        </a>
      </p>
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <iframe
          src={GOOGLE_MAPS_EMBED}
          title={`Map of Pomo Build in Port Moody, serving ${location.name}`}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
