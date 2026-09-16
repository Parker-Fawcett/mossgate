export type Plant = {
  slug: string;
  name: string;
  price: number;
  light: 'Full sun' | 'Partial shade' | 'Full shade';
  inStock: boolean;
};

export const PLANTS: Plant[] = [
  { slug: 'fiddle-leaf-fig', name: 'Fiddle Leaf Fig', price: 42, light: 'Partial shade', inStock: true },
  { slug: 'snake-plant', name: 'Snake Plant', price: 18, light: 'Full shade', inStock: true },
  { slug: 'monstera-deliciosa', name: 'Monstera Deliciosa', price: 35, light: 'Partial shade', inStock: true },
  { slug: 'birds-of-paradise', name: "Bird of Paradise", price: 58, light: 'Full sun', inStock: false },
  { slug: 'pothos-marble-queen', name: 'Marble Queen Pothos', price: 14, light: 'Partial shade', inStock: true },
  { slug: 'zz-plant', name: 'ZZ Plant', price: 22, light: 'Full shade', inStock: true },
  { slug: 'rubber-tree', name: 'Rubber Tree', price: 29, light: 'Partial shade', inStock: true },
  { slug: 'lavender', name: 'English Lavender', price: 11, light: 'Full sun', inStock: true },
  { slug: 'boston-fern', name: 'Boston Fern', price: 16, light: 'Full shade', inStock: false },
  { slug: 'succulent-trio', name: 'Succulent Trio', price: 19, light: 'Full sun', inStock: true },
];

export const FEATURED_SLUGS = ['fiddle-leaf-fig', 'snake-plant', 'monstera-deliciosa', 'pothos-marble-queen'];

export function featuredPlants(): Plant[] {
  return PLANTS.filter((p) => FEATURED_SLUGS.includes(p.slug));
}
