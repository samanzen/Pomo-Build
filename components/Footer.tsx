import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link href="/">
            <Image
              src="/images/pomo-build-logo-white.webp"
              alt="Pomo Build Logo"
              width={120}
              height={50}
            />
          </Link>
          <p className="mt-4 text-gray-400">
            High-quality renovation, construction, and handyman services for homeowners and businesses in Metro Vancouver.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/services" className="hover:text-[#D97706] transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-[#D97706] transition-colors">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-[#D97706] transition-colors">Blog</Link></li>
            <li><Link href="/service-area" className="hover:text-[#D97706] transition-colors">Service Area</Link></li>
            <li><Link href="/about" className="hover:text-[#D97706] transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#D97706] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>1924 Clarke St, Port Moody, BC V3H 1X9</li>
            <li>(604) 500-2003</li>
            <li>contact@pomobuild.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Pomo Build. All Rights Reserved.</p>
      </div>
    </footer>
  );
}