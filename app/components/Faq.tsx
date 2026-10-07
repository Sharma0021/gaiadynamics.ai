import { FAQS } from '../lib/site';

export default function Faq() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <div className="section-head">
          <h2 id="faq-title">Questions about catalog scans</h2>
        </div>
        <div className="faq">
          {FAQS.map((item, i) => (
            <details key={item.q} className="faq-item" open={i === 0}>
              <summary>
                <h3>{item.q}</h3>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
