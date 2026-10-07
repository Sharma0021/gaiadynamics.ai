import { CASE_DELIVERABLES, LINKS } from '../lib/site';

// 180 business days = 36 working weeks = 252 calendar days. 72 hours = 3 calendar days.
const MANUAL_DAYS = 252;
const GAIA_DAYS = 3;
const gaiaShare = `${((GAIA_DAYS / MANUAL_DAYS) * 100).toFixed(2)}%`;

export default function CaseStudy() {
  return (
    <section className="section tint" aria-labelledby="case-title">
      <div className="container case-grid">
        <div className="case-copy">
          <h2 id="case-title">30,000 SKUs validated in 72 hours</h2>
          <p>
            A customs brokerage had a client who needed classifications validated for 30,000 SKUs,
            fast. The data was thin: part numbers, abbreviations, country of origin and legacy HTS
            codes. A manual audit was projected at 180 business days for a team of ten.
          </p>
          <p>
            Running the catalog through Gaia&rsquo;s bulk classification, the brokerage delivered in
            72 hours, at 97% accuracy and roughly 8 seconds per product, without adding headcount.
          </p>
          <a className="text-link" href={LINKS.bulkGuide}>
            Read the bulk classification guide
          </a>
        </div>

        <div className="case-visual">
          <div
            className="timeline"
            role="img"
            aria-label="Manual audit estimate of 180 business days compared with 72 hours in Gaia, drawn to scale"
          >
            <div className="timeline-row">
              <p className="timeline-label">
                Manual audit estimate
                <span>180 business days, 10 people</span>
              </p>
              <div className="bar bar-manual" />
            </div>
            <div className="timeline-row">
              <p className="timeline-label">
                With Gaia
                <span>72 hours</span>
              </p>
              <div className="bar-track">
                <div className="bar bar-gaia" style={{ width: gaiaShare }} />
              </div>
            </div>
            <p className="timeline-note">Bars drawn to scale in calendar days.</p>
          </div>

          <div className="deliverables">
            <h3>What the brokerage handed back</h3>
            <ul>
              {CASE_DELIVERABLES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
