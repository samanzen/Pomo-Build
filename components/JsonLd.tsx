import { isRenderableJsonLd, type JsonLdObject } from '@/lib/schema';

type JsonLdProps = {
  data: JsonLdObject | JsonLdObject[] | undefined | null;
};

export default function JsonLd({ data }: JsonLdProps) {
  if (!isRenderableJsonLd(data)) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
