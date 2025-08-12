import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

// --- Placeholder Data ---
const placeholderPost = {
  slug: "5-signs-its-time-to-renovate-your-kitchen",
  title: "5 Signs It's Time to Renovate Your Kitchen",
  category: "Kitchens",
  publishDate: "August 6, 2025",
  author: "Saman Zen",
  heroImage: "/images/blog-hero-kitchen-signs.webp",
  heroAlt: "A dated 1990s kitchen with oak cabinets, clearly in need of a professional renovation.",
  description: "Is your kitchen feeling dated or dysfunctional? Here are the top 5 signs that it might be time for a professional remodel to improve your home's value and your daily life."
};
const relatedPosts = [
    { title: "Choosing the Right Countertop Material", href: "#"},
    { title: "Open Concept Living: Is It Right for You?", href: "#"},
];
// --- End of Placeholder Data ---

export const metadata: Metadata = {
  title: `${placeholderPost.title} | Pomo Build Blog`,
  description: placeholderPost.description,
  alternates: { canonical: `/blog/${placeholderPost.slug}` },
  openGraph: {
    title: placeholderPost.title,
    description: placeholderPost.description,
    images: [{ url: placeholderPost.heroImage }],
  },
};

const articleSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting", "headline": placeholderPost.title, "description": placeholderPost.description, "image": `https://www.pomobuild.com${placeholderPost.heroImage}`, "author": { "@type": "Person", "name": placeholderPost.author }, "publisher": { "@type": "Organization", "name": "Pomo Build", "logo": { "@type": "ImageObject", "url": "https://www.pomobuild.com/logo.png" } }, "datePublished": "2025-08-06", "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.pomobuild.com/blog/${placeholderPost.slug}` }
};
const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.pomobuild.com" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.pomobuild.com/blog" }, { "@type": "ListItem", "position": 3, "name": placeholderPost.title } ]
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "How long does a kitchen renovation take?", "acceptedAnswer": { "@type": "Answer", "text": "A standard kitchen remodel typically takes between 4 to 8 weeks, depending on the scope of work. We provide a detailed project schedule before we begin so you know exactly what to expect." } }, { "@type": "Question", "name": "Can I use my kitchen during the renovation?", "acceptedAnswer": { "@type": "Answer", "text": "For large-scale kitchen renovations, it can be challenging to use the space during demolition and construction. We set up temporary kitchen stations when possible and work efficiently to minimize the disruption to your daily life." } } ]
};

export default function BlogPostPage() {
  return (
    <div className="bg-white">
      <a href="#main-article-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4 text-black">Skip to content</a>
      <script key="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script key="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script key="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative h-[50vh] w-full text-center text-white">
        <Image src={placeholderPost.heroImage} alt={placeholderPost.heroAlt} fill className="object-cover" priority sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6" data-aos="fade-up">
          <p className="font-semibold text-[#D97706]">{placeholderPost.category}</p>
          <h1 className="mt-4 text-3xl font-bold md:text-5xl max-w-3xl">{placeholderPost.title}</h1>
          <p className="mt-4 text-lg text-gray-200">Posted by {placeholderPost.author} on {placeholderPost.publishDate}</p>
        </div>
      </section>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-6 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#D97706]">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#D97706]">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{placeholderPost.title}</span>
        </div>
      </div>

      <section id="main-article-content" className="container mx-auto px-6 py-16 md:py-20">
        <article className="prose lg:prose-xl max-w-3xl mx-auto">
          <h2 className="sr-only">Introduction</h2>
          <p className="lead">The kitchen is often called the heart of the home, but what happens when that heart is a little... tired? For many homeowners in Port Moody and across Metro Vancouver, the kitchen they inherited doesn't match their modern lifestyle. A dated, cramped, or dysfunctional kitchen can impact your daily life and even your home's overall value. If you're wondering whether it's time for an upgrade, you're in the right place. Here are the top five signs that it's time to renovate your kitchen.</p>

          <h3>1. Your Layout Doesn't Work Anymore</h3>
          <p>Older kitchens were often designed as small, enclosed spaces. If you find yourself constantly bumping into family members or struggling with a poor workflow, it's a clear sign your layout is outdated. A modern renovation can create an open-concept space that's perfect for both cooking and entertaining.</p>
          <Image src="/images/blog-kitchen-layout.webp" alt="A photo illustrating a cramped kitchen layout, a common reason for renovation." width={800} height={500} className="rounded-lg shadow-md my-8" />

          <h3>2. Lack of Counter Space and Storage</h3>
          <p>Are your countertops cluttered with appliances, leaving little room for food prep? Are your cabinets overflowing? A well-designed remodel can dramatically increase your usable space with clever storage solutions like a pantry or a larger island.</p>
          <Image src="/images/blog-kitchen-clutter.webp" alt="A cluttered kitchen countertop showing the need for more storage space." width={800} height={500} className="rounded-lg shadow-md my-8" />

          <h3>3. Your Appliances Are Outdated</h3>
          <p>If your oven takes forever to preheat or your dishwasher is loud, it might be time for an upgrade. Modern appliances are more energy-efficient and can be seamlessly integrated into a new design.</p>
          <div className="bg-[#1F2937] text-white rounded-lg p-8 my-12 text-center not-prose">
            <h3 className="text-2xl font-bold">Ready to Reimagine Your Kitchen?</h3>
            <p className="mt-4 text-gray-300">Let's talk about the possibilities. We offer free, no-obligation design consultations.</p>
            <div className="mt-6">
              <Link href="/contact"><button className="bg-[#D97706] text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-amber-600 transition-colors">Book Your Free Consultation</button></Link>
            </div>
          </div>

          <h3>4. The Style is from a Different Decade</h3>
          <p>If your kitchen's style feels like a time capsule, it can bring down the feel of your entire home. A modern aesthetic with timeless materials like quartz countertops and a fresh color palette can breathe new life into your space.</p>
          <Image src="/images/blog-kitchen-style.webp" alt="A close-up of dated 1990s kitchen cabinets and laminate countertops." width={800} height={500} className="rounded-lg shadow-md my-8" />

          <h3>5. You're Planning to Sell Soon</h3>
          <p>In the competitive Metro Vancouver real estate market, kitchens sell houses. A modern, updated kitchen is one of the best investments you can make to increase your home's resale value, leading to a higher listing price and a faster sale.</p>
          <div className="bg-[#F9FAFB] rounded-lg p-8 my-12 text-left not-prose border-l-4 border-[#D97706]">
            <h3 className="text-2xl font-bold mt-0 text-[#1F2937]">Bonus Tip: Budgeting for Your Renovation</h3>
            <p className="mt-4 text-gray-600">A good starting point for a full kitchen renovation budget is typically 10-15% of your home's total value. Always set aside an extra 10% contingency for unexpected surprises that can arise once walls are opened up.</p>
          </div>
          <h2>Your Dream Kitchen is an Investment</h2>
          <p>Recognizing these signs is the first step toward creating a kitchen you love. A professional renovation is an investment in your home's value and your family's quality of life. When you're ready to take the next step, our team is here to help you plan a project that fits your vision and your budget.</p>
        </article>

        <section role="region" aria-labelledby="author-section-heading" className="mt-16 max-w-3xl mx-auto border-t pt-12" data-aos="fade-up">
          <div className="flex items-center gap-6 bg-[#F9FAFB] p-6 rounded-lg">
            <div className="relative h-24 w-24 flex-shrink-0">
               <Image src="/images/handyman-intro.webp" alt="Saman Zen, owner of Pomo Build" fill className="rounded-full object-cover"/>
            </div>
            <div>
              <h2 id="author-section-heading" className="text-2xl font-bold text-[#1F2937]">About the Author</h2>
              <p className="mt-2 text-gray-600">Saman Zen is the founder of Pomo Build and has over 15 years of experience in the construction and renovation industry. He is passionate about helping homeowners in Metro Vancouver create beautiful, functional spaces they love.</p>
            </div>
          </div>
        </section>

        <section role="region" aria-labelledby="faq-section-heading" className="mt-16 max-w-3xl mx-auto border-t pt-12" data-aos="fade-up">
            <h2 id="faq-section-heading" className="text-2xl font-bold text-[#1F2937]">Frequently Asked Questions</h2>
            <div className="mt-8 space-y-4">
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary aria-controls="faq1_content" className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">How long does a kitchen renovation take?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p id="faq1_content" className="mt-4 text-gray-600">A standard kitchen remodel typically takes between 4 to 8 weeks, depending on the scope of work. We provide a detailed project schedule before we begin so you know exactly what to expect.</p></details>
                <details className="group rounded-lg bg-[#F9FAFB] p-6 shadow-sm"><summary aria-controls="faq2_content" className="cursor-pointer font-semibold text-lg text-[#1F2937] flex justify-between items-center">Can I use my kitchen during the renovation?<span className="transform transition-transform duration-300 group-open:rotate-180" aria-hidden="true">▼</span></summary><p id="faq2_content" className="mt-4 text-gray-600">For large-scale kitchen renovations, it can be challenging to use the space during demolition and construction. We set up temporary kitchen stations when possible and work efficiently to minimize the disruption to your daily life.</p></details>
            </div>
        </section>

        <section className="mt-16 max-w-3xl mx-auto border-t pt-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#1F2937]">You Might Also Like</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {relatedPosts.map(post => (
                    <Link key={post.title} href={post.href}>
                        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow h-full">
                            <h3 className="font-bold text-lg text-[#1F2937]">{post.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
      </section>
    </div>
  );
}