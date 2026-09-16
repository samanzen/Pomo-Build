"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useId, useState } from 'react';
import Button from '@/components/Button';
import { SERVICES } from '@/lib/services';
import { TRI_CITIES_HREF } from '@/lib/locations';

const NAV_LINKS = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: TRI_CITIES_HREF, label: 'Tri-Cities' },
  { href: '/service-area', label: 'Service Area' },
  { href: '/about', label: 'About' },
  { href: '/contact#quote-form', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuId = useId();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-[#1F2937] text-[#F9FAFB] shadow-md sticky top-0 z-50 h-24 flex items-center">
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          <Link href="/" aria-label="Pomo Build home">
            <Image
              src="/images/pomo-build-logo-white.webp"
              alt="Pomo Build Logo"
              width={80}
              height={30}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-white" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className="hover:text-[#D97706] transition-colors"
                aria-expanded={isServicesOpen}
                aria-controls={servicesMenuId}
                onClick={() => setIsServicesOpen((open) => !open)}
              >
                Services
              </button>
              {isServicesOpen ? (
                <div
                  id={servicesMenuId}
                  className="absolute left-0 top-full z-50 w-72 rounded-md bg-white py-3 text-[#1F2937] shadow-lg"
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 font-semibold hover:bg-[#F9FAFB] hover:text-[#D97706]"
                  >
                    All services
                  </Link>
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 hover:bg-[#F9FAFB] hover:text-[#D97706]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#D97706] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact#quote-form">Get a Free Quote</Button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-white/60 rounded-md p-1"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-0 bg-[#1F2937] z-40 flex flex-col items-center justify-center space-y-6 text-2xl px-6"
        >
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#D97706]">
            Services
          </Link>
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-gray-200 hover:text-[#D97706]"
            >
              {service.title}
            </Link>
          ))}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-[#D97706]"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8" onClick={() => setIsMenuOpen(false)}>
            <Button href="/contact#quote-form">Get a Free Quote</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
