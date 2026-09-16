import QuoteFormEmbed from '@/components/QuoteFormEmbed';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/page-seo';
import { buildBreadcrumbSchema } from '@/lib/schema';
import {
  BUSINESS_ADDRESS_LINE,
  BUSINESS_EMAIL,
  BUSINESS_HOURS_DISPLAY,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  GOOGLE_MAPS_EMBED,
} from '@/lib/site';

export const metadata = pageMetadata('contact');

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]);

export default function ContactPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      <div className="bg-[#1F2937] py-12 px-6 text-center text-white sm:py-16">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl" data-aos="fade-up">Get In Touch</h1>
        <p className="mt-4 text-base text-gray-300 sm:text-lg" data-aos="fade-up" data-aos-delay="100">
          Ready to start your next project? We&apos;re here to help from our Port Moody shop.
        </p>
      </div>

      <div className="container mx-auto px-4 py-10 sm:px-6 sm:py-16">
        <div
          id="quote-form"
          className="scroll-mt-28 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-start"
        >
          <QuoteFormEmbed
            heading="Project Inquiry Form"
            className="border border-gray-200 rounded-lg p-4 sm:p-8 flex flex-col"
          />
          <div className="border border-gray-200 rounded-lg p-4 sm:p-8" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-[#1F2937] sm:text-3xl">Contact Details</h2>
            <div className="mt-6 space-y-4 text-gray-600 sm:mt-8">
              <p><strong>Address:</strong> {BUSINESS_ADDRESS_LINE}</p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href={BUSINESS_PHONE_TEL} className="hover:text-[#D97706] transition-colors">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-[#D97706] transition-colors">
                  {BUSINESS_EMAIL}
                </a>
              </p>
              <p><strong>Hours:</strong> {BUSINESS_HOURS_DISPLAY}</p>
            </div>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg shadow-lg sm:mt-8">
              <iframe
                src={GOOGLE_MAPS_EMBED}
                title="Map of Pomo Build in Port Moody"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
