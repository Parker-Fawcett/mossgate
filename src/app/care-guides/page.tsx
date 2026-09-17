import { Section } from '@/components/Section';

export default function CareGuidesPage() {
  const sampleMoistureReadingPercent = 22;
  const needsWater = sampleMoistureReadingPercent < 30;

  return (
    <Section title="General care guides">
      <p>
        Most houseplant trouble comes from water, not light: check soil moisture with a finger
        before watering on a schedule. A cheap moisture meter reading of{' '}
        {sampleMoistureReadingPercent}% means {needsWater ? 'it needs water now' : "it's still fine"}{' '}
        &mdash; anything below 30% is dry enough to water, above that, wait.
      </p>
      <p>
        Repot in spring when roots start circling the bottom of the pot, and go up one pot size at
        a time rather than jumping straight to something much larger.
      </p>
    </Section>
  );
}
