import Image from 'next/image';
import { FOOTER, GAIA } from '../lib/site';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <a href={GAIA} className="footer-brand">
          <Image src="/gaia-dynamics-logo-white.png" alt="Gaia Dynamics" width={157} height={32} />
        </a>
        {FOOTER.map((col) => (
          <nav key={col.heading} aria-label={col.heading} className="footer-col">
            <p className="footer-heading">{col.heading}</p>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-note">
        <p>
          Concept page proposed as part of an SEO audit. Product details and figures are taken from
          gaiadynamics.ai. Not an official Gaia Dynamics page.
        </p>
      </div>
    </footer>
  );
}
