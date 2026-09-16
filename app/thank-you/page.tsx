import Button from '@/components/Button';
import { pageMetadata } from '@/lib/page-seo';

export const metadata = pageMetadata('thank-you');

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-6 py-24 text-center md:py-32">
        <div className="mx-auto max-w-2xl" data-aos="fade-up">
          <div className="text-6xl md:text-7xl" role="img" aria-label="Smiling face">😊</div>
          <h1 className="mt-8 text-4xl font-bold text-[#1F2937] md:text-5xl">
            Thank you! We’ve received your project request.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We’ll contact you shortly.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Back to Homepage</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
