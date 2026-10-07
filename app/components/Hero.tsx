import { LINKS } from '../lib/site';
import ScanPreview from './ScanPreview';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="tag">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
              <rect x="2" y="2.5" width="12" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M2 6.5h12M6 6.5v7" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            Catalog tariff scan
          </p>
          <h1 id="hero-title">Bulk HTS classification and tariff rates for your whole catalog</h1>
          <p className="lede">
            Upload your product list and Gaia suggests an HTS code for every SKU, then calculates
            duties across base rates, Section 201, 232 and 301 tariffs, and announced changes for the
            date your goods arrive. Your team reviews the exceptions instead of researching every line.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href={LINKS.freeTrial}>
              Start a free trial
            </a>
            <a className="btn btn-outline" href={LINKS.pricing}>
              See pricing
            </a>
          </div>
          <p className="hero-note">14-day full-access trial. Unlimited users on every plan.</p>
        </div>
        <ScanPreview />
      </div>
    </section>
  );
}
