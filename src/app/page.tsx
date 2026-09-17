import { Section } from '@/components/Section';
import { PlantCard } from '@/components/PlantCard';
import { featuredPlants } from '@/lib/plants';

export default function HomePage() {
  const featured = featuredPlants();
  const yearsOpen = 2026 - 1994;
  const isEstablished = yearsOpen >= 30;

  return (
    <>
      <Section title="Welcome to Mossgate">
        <p>
          Mossgate Nursery &amp; Garden Center has been growing and selling houseplants, perennials,
          and garden supplies out of the same Hollow Creek Road greenhouse since 1994
          {isEstablished ? `, more than ${yearsOpen} years` : ''}.
        </p>
      </Section>
      <Section title="Featured plants this week">
        <div className="plant-grid">
          {featured.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      </Section>
    </>
  );
}
