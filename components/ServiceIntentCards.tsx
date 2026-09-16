import Link from 'next/link';
import type { CityServiceCard } from '@/lib/city-service-cards';

type ServiceIntentCardsProps = {
  heading: string;
  cards: CityServiceCard[];
};

export default function ServiceIntentCards({ heading, cards }: ServiceIntentCardsProps) {
  return (
    <section className="mt-16" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-[#1F2937]">{heading}</h2>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="group block">
            <div className="rounded-lg bg-[#F9FAFB] p-8 shadow-sm h-full hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#1F2937] group-hover:text-[#D97706] transition-colors">
                {card.title}
              </h3>
              <p className="mt-4 text-gray-600">{card.description}</p>
              <span className="mt-6 inline-block font-semibold text-[#D97706]">
                Explore {card.title.toLowerCase()} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
