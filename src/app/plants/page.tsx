import { Section } from '@/components/Section';
import { PlantCard } from '@/components/PlantCard';
import { PLANTS } from '@/lib/plants';

export default function PlantsPage() {
  const premiumCount = PLANTS.filter((p) => p.price >= 40).length;

  return (
    <>
      <Section title="Full plant catalog">
        <p>{premiumCount} premium plants priced at $40 or more.</p>
        <div className="plant-grid">
          {PLANTS.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      </Section>
    </>
  );
}
