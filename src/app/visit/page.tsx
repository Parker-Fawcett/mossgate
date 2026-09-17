import { Section } from '@/components/Section';

export default function VisitPage() {
  const parkingSpots = 14;
  const hasOverflowLot = parkingSpots >= 12;

  return (
    <Section title="Visit us">
      <p>412 Hollow Creek Road, open daily 9am&ndash;6pm, closed on major holidays.</p>
      <p>
        Parking is free in the gravel lot behind the greenhouse ({parkingSpots} spaces
        {hasOverflowLot ? ', plus overflow across the road' : ''}). The entrance nearest the lot
        leads directly into the houseplant room; the front entrance on Hollow Creek Road leads into
        the outdoor perennial yard.
      </p>
    </Section>
  );
}
