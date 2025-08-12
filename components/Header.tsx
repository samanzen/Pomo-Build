"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1F2937] text-[#F9FAFB] shadow-md sticky top-0 z-50 h-24 flex items-center">
        <div className="container mx-auto flex h-full items-center justify-between px-6">

          <Link href="/">
            <Image
              src="/images/pomo-build-logo-white.webp"
              alt="Pomo Build Logo"
              width={80} 
              height={30}
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-8 text-white">
            <Link href="/services" className="hover:text-[#D97706] transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-[#D97706] transition-colors">Portfolio</Link>
            <Link href="/blog" className="hover:text-[#D97706] transition-colors">Blog</Link>
            <Link href="/service-area" className="hover:text-[#D97706] transition-colors">Service Area</Link>
            <Link href="/about" className="hover:text-[#D97706] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#D97706] transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Button href="/contact">Get a Free Quote</Button>
          </div>

          <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
          </div>

        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#1F2937] z-40 flex flex-col items-center justify-center space-y-8 text-2xl">
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#D97706]">Services</Link>
          <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#D97706]">Portfolio</Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#D97706]">Blog</Link>
          <Link href="/service-area" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#D97706]">Service Area</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-[#D97706]">About</Link>
          <div className="mt-8" onClick={() => setIsMenuOpen(false)}>
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        </div>
      )}
    </>
  );
}