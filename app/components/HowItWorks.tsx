import { STEPS } from '../lib/site';

export default function HowItWorks() {
  return (
    <section className="section" aria-labelledby="how-title">
      <div className="container">
        <div className="section-head">
          <h2 id="how-title">How a catalog scan works</h2>
          <p>
            One upload replaces hundreds of single lookups. You stay in control of the codes that
            need a decision.
          </p>
        </div>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className="step">
              <span className="step-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
