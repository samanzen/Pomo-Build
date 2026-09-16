import JsonLd from '@/components/JsonLd';
import { buildBusinessSchema, buildWebsiteSchema } from '@/lib/schema';

export default function SchemaMarkup() {
  return (
    <>
      <JsonLd data={buildBusinessSchema()} />
      <JsonLd data={buildWebsiteSchema()} />
    </>
  );
}
