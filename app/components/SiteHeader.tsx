import Image from 'next/image';
import { GAIA, LINKS, NAV } from '../lib/site';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={GAIA} className="brand">
          <Image
            src="/gaia-dynamics-logo.png"
            alt="Gaia Dynamics"
            width={157}
            height={32}
            priority
          />
        </a>

        <nav aria-label="Primary" className="nav-desktop">
          <ul>
            {NAV.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="btn btn-outline btn-sm" href={LINKS.signIn}>
            Sign in
          </a>
          <a className="btn btn-primary btn-sm" href={LINKS.freeTrial}>
            Sign up
          </a>
        </div>

        <details className="nav-mobile">
          <summary>
            <span className="visually-hidden">Open menu</span>
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </summary>
          <nav aria-label="Mobile">
            <ul>
              {NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href={LINKS.signIn}>Sign in</a>
              </li>
            </ul>
            <a className="btn btn-primary" href={LINKS.freeTrial}>
              Sign up
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
