import type { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'We have received your project request and will contact you shortly.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#1F2937] py-16 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
          Thank You
        </h1>
        <p className="mt-4 text-lg text-gray-300" data-aos="fade-up" data-aos-delay="100">
          Your project request is in good hands.
        </p>
      </div>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-5xl" aria-hidden="true">
            😊
          </p>
          <h2 className="mt-6 text-3xl font-bold text-[#1F2937]">
            Thank you! We’ve received your project request.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We’ll contact you shortly.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Homepage</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
