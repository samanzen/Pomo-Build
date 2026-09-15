import Script from 'next/script';

type QuoteFormEmbedProps = {
  heading?: string;
  className?: string;
  includeScript?: boolean;
};

export default function QuoteFormEmbed({
  heading = 'Request a Free On-Site Estimate',
  className = '',
  includeScript = true,
}: QuoteFormEmbedProps) {
  return (
    <>
      <div className={className}>
        {heading ? (
          <h2 className="text-2xl font-bold text-center text-[#1F2937] sm:text-3xl">
            {heading}
          </h2>
        ) : null}
        <div className={heading ? 'mt-6 w-full sm:mt-8' : 'w-full'}>
          <iframe
            src="https://link.volohub.com/widget/form/wORgVIsWz2sJCOfrxADT"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            className="block w-full min-h-[900px] lg:min-h-[850px]"
            id="inline-wORgVIsWz2sJCOfrxADT"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Pomo Build – Google Ads Quote Form"
            data-height="undefined"
            data-layout-iframe-id="inline-wORgVIsWz2sJCOfrxADT"
            data-form-id="wORgVIsWz2sJCOfrxADT"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Pomo Build – Google Ads Quote Form"
          />
        </div>
      </div>
      {includeScript ? (
        <Script
          id="ghl-form-embed"
          src="https://link.volohub.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}
