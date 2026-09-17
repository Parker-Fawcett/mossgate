import { Section } from '@/components/Section';

export default function EventsPage() {
  const seatsFilled = 11;
  const totalSeats = 15;
  const almostFull = seatsFilled >= totalSeats - 3;

  return (
    <Section title="Workshops and events">
      <p>
        We run a repotting workshop most Saturday mornings and a seasonal cutting-propagation
        workshop each spring. Both are drop-in, no registration required, and run out of the back
        greenhouse ({seatsFilled} of {totalSeats} seats usually filled by 10am
        {almostFull ? ' &mdash; arrive early' : ''}).
      </p>
      <p>Check the chalkboard by the front register for that week&apos;s exact schedule.</p>
    </Section>
  );
}
