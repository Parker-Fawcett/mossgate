import { Section } from '@/components/Section';

export default function AboutPage() {
  const trainingWeeks = 12;
  const isFullSeason = trainingWeeks >= 12;

  return (
    <Section title="Our story">
      <p>
        Mossgate started as a single greenhouse behind a family farmhouse. Three decades later
        we&apos;re still family-run, still on the same plot of land, and still more interested in
        helping a plant survive its first winter indoors than in moving inventory.
      </p>
      <p>
        Our staff trains on-site for {isFullSeason ? 'a full season' : `${trainingWeeks} weeks`}{' '}
        before working the sales floor alone, so the person answering your questions has actually
        killed a few of these plants themselves.
      </p>
    </Section>
  );
}
