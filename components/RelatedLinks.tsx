import Link from 'next/link';

export type RelatedLink = {
  href: string;
  label: string;
  detail?: string;
};

type RelatedLinksProps = {
  heading: string;
  links: RelatedLink[];
};

export default function RelatedLinks({ heading, links }: RelatedLinksProps) {
  if (!links.length) {
    return null;
  }

  return (
    <section className="mt-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-[#1F2937]">{heading}</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg bg-[#F9FAFB] p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="text-lg font-semibold text-[#D97706]">{link.label}</span>
            {link.detail ? <p className="mt-2 text-gray-600">{link.detail}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
