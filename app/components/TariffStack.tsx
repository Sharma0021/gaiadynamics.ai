'use client';

import { useState } from 'react';
import { TARIFF_LAYERS } from '../lib/site';

type LayerId = (typeof TARIFF_LAYERS)[number]['id'];

export default function TariffStack() {
  const [active, setActive] = useState<Record<LayerId, boolean>>({
    base: true,
    additional: true,
    upcoming: true,
    rumored: false,
  });

  const toggle = (id: LayerId) => setActive((prev) => ({ ...prev, [id]: !prev[id] }));

  const included = TARIFF_LAYERS.filter((l) => active[l.id]).map((l) => l.name.toLowerCase());
  const summary =
    included.length === 1
      ? `This scenario prices ${included[0]} only.`
      : `This scenario prices ${included.slice(0, -1).join(', ')} and ${included[included.length - 1]}.`;

  return (
    <section className="section tint" aria-labelledby="stack-title">
      <div className="container stack-grid">
        <div className="stack-copy">
          <h2 id="stack-title">Every layer of duty in one view</h2>
          <p>
            A product&rsquo;s duty rarely comes from one number. The scan breaks each line into the
            layers that apply, so you can see what you owe now and what is coming.
          </p>
          <p>
            Pick a date of arrival and the scan applies the rates in force on that day, including
            changes that are announced but not yet live.
          </p>
        </div>

        <div className="stack">
          <p className="stack-hint" id="stack-hint">
            Choose the layers to include in your scenario.
          </p>
          <ul className="layers" aria-describedby="stack-hint">
            {[...TARIFF_LAYERS].reverse().map((layer) => {
              const on = active[layer.id];
              return (
                <li key={layer.id} className={`layer layer-${layer.id}${on ? ' is-on' : ''}`}>
                  <div className="layer-text">
                    <h3>{layer.name}</h3>
                    <p>{layer.text}</p>
                  </div>
                  {layer.locked ? (
                    <span className="layer-fixed">Always included</span>
                  ) : (
                    <button
                      type="button"
                      className="switch"
                      role="switch"
                      aria-checked={on}
                      aria-label={`Include ${layer.name.toLowerCase()}`}
                      onClick={() => toggle(layer.id)}
                    >
                      <span className="switch-knob" aria-hidden="true" />
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="stack-summary" aria-live="polite">
            {summary}
          </p>
        </div>
      </div>
    </section>
  );
}
