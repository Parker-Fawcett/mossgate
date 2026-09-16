import Link from 'next/link';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/plants', label: 'Plants' },
  { href: '/about', label: 'About' },
  { href: '/visit', label: 'Visit' },
  { href: '/care-guides', label: 'Care Guides' },
  { href: '/events', label: 'Events' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__brand">Mossgate Nursery &amp; Garden Center</div>
      <nav className="site-header__nav">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
