import Link from 'next/link';
import Image from 'next/image';
import { PRIORITY_LOCATIONS, TRI_CITIES_HREF } from '@/lib/locations';
import { SERVICES } from '@/lib/services';
import {
  BUSINESS_ADDRESS_LINE,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" aria-label="Pomo Build home">
            <Image
              src="/images/pomo-build-logo-white.webp"
              alt="Pomo Build Logo"
              width={120}
              height={50}
            />
          </Link>
          <p className="mt-4 text-gray-400">
            Port Moody-based renovations, construction, and handyman services for the Tri-Cities
            and selected Metro Vancouver communities.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/services" className="hover:text-[#D97706] transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#D97706] transition-colors">Portfolio</Link></li>
            <li><Link href={TRI_CITIES_HREF} className="hover:text-[#D97706] transition-colors">Tri-Cities Renovations</Link></li>
            <li><Link href="/service-area" className="hover:text-[#D97706] transition-colors">Service Area</Link></li>
            <li><Link href="/about" className="hover:text-[#D97706] transition-colors">About Us</Link></li>
            <li><Link href="/contact#quote-form" className="hover:text-[#D97706] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Primary Service Area</h3>
          <ul className="mt-4 space-y-2">
            {PRIORITY_LOCATIONS.map((location) => (
              <li key={location.slug}>
                <Link href={location.href} className="hover:text-[#D97706] transition-colors">
                  {location.name}
                </Link>
              </li>
            ))}
            {SERVICES.slice(0, 3).map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="hover:text-[#D97706] transition-colors">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>{BUSINESS_ADDRESS_LINE}</li>
            <li>
              <a href={BUSINESS_PHONE_TEL} className="hover:text-[#D97706] transition-colors">
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-[#D97706] transition-colors">
                {BUSINESS_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Pomo Build. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
