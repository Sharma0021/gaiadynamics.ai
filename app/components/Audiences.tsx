import { LINKS } from '../lib/site';

export default function Audiences() {
  return (
    <section className="section" aria-labelledby="who-title">
      <div className="container">
        <div className="section-head">
          <h2 id="who-title">Built for the people who own the codes</h2>
        </div>
        <div className="audiences">
          <article className="audience">
            <h3>Importers and exporters</h3>
            <p>
              Know the duty on every SKU before you place the order, and see which products a new
              tariff touches as soon as it is announced. Bring the report to sourcing, finance and
              your broker in the same format.
            </p>
            <a className="text-link" href={LINKS.importers}>
              Gaia for importers and exporters
            </a>
          </article>
          <article className="audience">
            <h3>Customs brokers and consultants</h3>
            <p>
              Take on catalog-sized requests without adding headcount. Hand clients a report with
              codes, written rationales and flagged exceptions, ready for your licensed review.
            </p>
            <a className="text-link" href={LINKS.brokers}>
              Gaia for customs brokers
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
