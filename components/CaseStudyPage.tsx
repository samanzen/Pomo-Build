import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import RelatedLinks from '@/components/RelatedLinks';
import type { PortfolioProject } from '@/lib/portfolio';
import { getRelatedProjects } from '@/lib/portfolio';
import { getServiceBySlug } from '@/lib/services';
import { getLocationBySlug } from '@/lib/locations';
import { buildBreadcrumbSchema, buildCaseStudySchema } from '@/lib/schema';

type CaseStudyPageProps = {
  project: PortfolioProject;
};

export default function CaseStudyPage({ project }: CaseStudyPageProps) {
  const service = getServiceBySlug(project.serviceSlug);
  const location = project.locationSlug ? getLocationBySlug(project.locationSlug) : undefined;
  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <div className="bg-white">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: project.title, path: project.href },
        ])}
      />
      <JsonLd
        data={buildCaseStudySchema({
          headline: project.headline,
          description: project.description,
          path: project.href,
          image: project.heroImage,
        })}
      />

      <section className="relative h-[60vh] w-full text-center text-white">
        <Image
          src={project.heroImage}
          alt={project.headline}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold md:text-5xl">Case Study: {project.title}</h1>
          <p className="mt-4 text-lg text-gray-200">{project.location}</p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 md:py-20">
        <section className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">The Challenge</h2>
              <p className="mt-4 text-gray-600">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937]">Our Solution</h2>
              <p className="mt-4 text-gray-600">{project.solution}</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-[#F9FAFB] p-6">
              <h3 className="text-xl font-bold text-[#1F2937]">Scope</h3>
              <p className="mt-3 text-gray-600">{project.scope}</p>
            </div>
            <div className="rounded-lg bg-[#F9FAFB] p-6">
              <h3 className="text-xl font-bold text-[#1F2937]">Materials</h3>
              <p className="mt-3 text-gray-600">{project.materials}</p>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={project.afterImage}
              alt={`${project.title} after completion`}
              width={1200}
              height={800}
              className="w-full"
            />
          </div>
        </section>

        {project.quote ? (
          <section className="mt-16 bg-[#F9FAFB] p-12 rounded-lg max-w-4xl mx-auto" data-aos="fade-up">
            <blockquote className="text-center text-xl italic text-gray-700">
              &ldquo;{project.quote.text}&rdquo;
            </blockquote>
            <div className="mt-6 text-center font-bold text-[#1F2937]">
              - {project.quote.attribution}
            </div>
          </section>
        ) : null}

        <RelatedLinks
          heading="Related service and projects"
          links={[
            { href: service.href, label: service.title, detail: service.description },
            ...(location
              ? [{ href: location.href, label: `${location.name} renovations`, detail: `Based in Port Moody; serving ${location.name}.` }]
              : []),
            ...relatedProjects.map((related) => ({
              href: related.href,
              label: related.title,
              detail: `${related.location} · ${related.category}`,
            })),
          ]}
        />
      </div>

      <section className="bg-[#1F2937]">
        <div className="container mx-auto px-6 py-16 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Ready to Start Your Transformation?</h2>
          <div className="mt-8">
            <Link href="/contact#quote-form">
              <button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">
                Schedule Your Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
