import { Section } from '@/components/Section';
import { PlantCard } from '@/components/PlantCard';
import { PLANTS } from '@/lib/plants';

export default function PlantsPage() {
  return (
    <Section title="Full plant catalog">
      <div className="plant-grid">
        {PLANTS.map((plant) => (
          <PlantCard key={plant.slug} plant={plant} />
        ))}
      </div>
    </Section>
  );
}
