import { SCAN_ROWS } from '../lib/site';

const classified = SCAN_ROWS.filter((r) => r.status === 'classified').length;
const flagged = SCAN_ROWS.length - classified;

export default function ScanPreview() {
  return (
    <figure className="scan" aria-labelledby="scan-caption">
      <div className="scan-head">
        <div>
          <p className="scan-title">Catalog tariff scan</p>
          <p className="scan-sub">Sample catalog, {SCAN_ROWS.length} products</p>
        </div>
        <p className="scan-count">
          <span className="scan-dot" aria-hidden="true" />
          {SCAN_ROWS.length} of {SCAN_ROWS.length} scanned
        </p>
      </div>
      <div className="scan-progress" aria-hidden="true">
        <span />
      </div>

      <div className="scan-table-wrap">
        <table className="scan-table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">HTS code</th>
              <th scope="col" className="num">General rate</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {SCAN_ROWS.map((row, i) => (
              <tr key={row.product} style={{ '--i': i } as React.CSSProperties}>
                <th scope="row">
                  <span className="product-name">{row.product}</span>
                  <span className="product-detail">{row.detail}</span>
                </th>
                <td className="resolve">
                  <span className="skeleton" aria-hidden="true" />
                  <span className="value code">{row.code}</span>
                </td>
                <td className="resolve num">
                  <span className="skeleton" aria-hidden="true" />
                  <span className="value">{row.rate}</span>
                </td>
                <td className="resolve">
                  <span className="skeleton" aria-hidden="true" />
                  <span className={`value status status-${row.status}`}>{row.statusLabel}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="scan-foot">
        <p>
          <strong>{classified}</strong> classified
        </p>
        <p>
          <strong>{flagged}</strong> flagged for review
        </p>
      </div>

      <figcaption id="scan-caption">
        Sample scan. Codes and general duty rates as published on Gaia&rsquo;s HS Code Finder.
        Additional tariffs depend on origin and arrival date.
      </figcaption>
    </figure>
  );
}
