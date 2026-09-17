import type { Plant } from '@/lib/plants';

export function PlantCard({ plant }: { plant: Plant }) {
  return (
    <article className="plant-card" data-slug={plant.slug}>
      <h3>{plant.name}</h3>
      <p className="plant-card__price">${plant.price}</p>
      <p className="plant-card__light">{plant.light}</p>
      <p className="plant-card__stock">{!plant.inStock ? 'Out of stock' : 'In stock'}</p>
    </article>
  );
}
