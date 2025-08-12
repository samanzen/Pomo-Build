import Link from 'next/link';
import Button from '@/components/Button'; // Importing our reusable Button

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/90 p-3 backdrop-blur-sm md:hidden">
      <div className="container mx-auto flex items-center justify-around">
        {/* Call Now Button */}
        <Link 
          href="tel:604-500-2003" 
          className="flex flex-col items-center justify-center text-sm font-semibold text-[#1F2937] transition-colors hover:text-[#D97706]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call Now</span>
        </Link>

        {/* Get a Quote Button - Now using our reusable component */}
        <Button href="/contact">Get a Free Quote</Button>
      </div>
    </div>
  );
}