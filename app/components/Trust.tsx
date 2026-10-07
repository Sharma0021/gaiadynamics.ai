import { LINKS } from '../lib/site';

export default function Trust() {
  return (
    <section className="trust" aria-labelledby="trust-title">
      <div className="container">
        <h2 id="trust-title" className="visually-hidden">
          Why teams trust Gaia
        </h2>
        <ul className="trust-list">
          <li>
            <p className="trust-fact">100% on the U.S. Customs Broker License Exam</p>
            <p>
              Gaia&rsquo;s AI sat the fall 2025 exam.{' '}
              <a href={LINKS.examPost}>How it was tested</a>
            </p>
          </li>
          <li>
            <p className="trust-fact">SOC 2</p>
            <p>
              Details in Gaia&rsquo;s <a href={LINKS.trustCenter}>Trust Center</a>
            </p>
          </li>
          <li>
            <p className="trust-fact">NCBFAA, AAEI and ICPA</p>
            <p>Member associations for customs brokers, importers and exporters, and compliance professionals</p>
          </li>
          <li>
            <p className="trust-fact">Backed by AI Fund and Corazon Capital</p>
            <p>$7M seed round, announced September 2026</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
