import { Section } from '@/components/Section';

export default function FaqPage() {
  const returnWindowDays = 14;
  const isTwoWeeks = returnWindowDays <= 14;

  return (
    <Section title="Frequently asked questions">
      <p>
        <strong>Do you deliver?</strong> Not currently &mdash; everything leaves in your own car or
        cart.
      </p>
      <p>
        <strong>Do you take returns on live plants?</strong> Within{' '}
        {isTwoWeeks ? 'two weeks' : `${returnWindowDays} days`}, with the original receipt, if the
        plant hasn&apos;t been repotted.
      </p>
      <p>
        <strong>Can I special-order something you don&apos;t stock?</strong> Yes, ask at the
        register &mdash; most special orders take one to two weeks.
      </p>
    </Section>
  );
}
