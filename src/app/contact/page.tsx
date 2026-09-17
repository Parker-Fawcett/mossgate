import { Section } from '@/components/Section';

const PHONE = '(555) 019-4471';

export default function ContactPage() {
  return (
    <Section title="Contact">
      <p>Questions about an order or a sick plant? Reach the greenhouse directly.</p>
      <p>{!PHONE ? 'Call ahead to check hours.' : `Phone: ${PHONE}`}</p>
      <p>Email: hello@mossgate.example</p>
    </Section>
  );
}
