import { Section } from '@/components/Section';
import { PlantCard } from '@/components/PlantCard';
import { featuredPlants } from '@/lib/plants';

export default function HomePage() {
  const featured = featuredPlants();

  return (
    <>
      <Section title="Welcome to Mossgate">
        <p>
          Mossgate Nursery &amp; Garden Center has been growing and selling houseplants, perennials,
          and garden supplies out of the same Hollow Creek Road greenhouse since 1994.
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
