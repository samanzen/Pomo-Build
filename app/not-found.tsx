import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-6 py-24 text-center md:py-32">
        <h1 className="text-4xl font-bold text-[#1F2937] md:text-5xl">Page not found</h1>
        <p className="mt-4 text-lg text-gray-600">
          The page you requested is not available. Visit our services, service area, or contact
          page to continue.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to Homepage</Button>
        </div>
      </section>
    </div>
  );
}
