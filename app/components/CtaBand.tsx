import { LINKS } from '../lib/site';

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <div>
          <h2 id="cta-title">Price your whole catalog before the next tariff change</h2>
          <p>Start a free trial and scan your own product list.</p>
        </div>
        <div className="actions">
          <a className="btn btn-primary" href={LINKS.freeTrial}>
            Start a free trial
          </a>
          <a className="btn btn-outline" href={LINKS.contact}>
            Email the team
          </a>
        </div>
      </div>
    </section>
  );
}
