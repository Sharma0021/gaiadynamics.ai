// Every product fact on this page is taken from gaiadynamics.ai (October 2026).
// Sources are noted next to each block so the copy can be re-checked quickly.

export const GAIA = 'https://www.gaiadynamics.ai';

export const SITE = {
  name: 'Gaia Dynamics',
  // Proposed production URL for this page on Gaia's own domain.
  canonical: `${GAIA}/product/catalog-tariff-scan`,
  title: 'Bulk HTS Classification for Your Whole Catalog | Gaia',
  description:
    'Classify an entire product catalog at once. Gaia suggests HTS codes for every SKU and calculates duties, including Section 232 and 301 tariffs, by arrival date.',
};

export const LINKS = {
  freeTrial: `${GAIA}/free-trial`,
  pricing: `${GAIA}/pricing`,
  signIn: 'https://app.gaiadynamics.ai/login',
  contact: 'mailto:info@gaiadynamics.ai',
  trustCenter: 'https://trust.gaiadynamics.ai/',
  bulkGuide: `${GAIA}/blog/how-to-classify-an-entire-sku-catalog-a-bulk-classification-guide`,
  examPost: `${GAIA}/blog/why-general-ai-fails-the-customs-broker-license-exam-and-specialized-ai-passes`,
  hsFinder: `${GAIA}/hs-code-lookup/us`,
  importers: `${GAIA}/solutions/importers-and-exporters`,
  brokers: `${GAIA}/solutions/customs-brokers`,
};

export const NAV = [
  { label: 'Product', href: `${GAIA}/product/tariffs` },
  { label: 'Solutions', href: `${GAIA}/solutions/importers-and-exporters` },
  { label: 'Pricing', href: `${GAIA}/pricing` },
  { label: 'Company', href: `${GAIA}/company` },
  { label: 'Resources', href: `${GAIA}/blog` },
];

// Source: Gaia HS Code Finder pages (/hs-code-lookup/us/<product>), meta descriptions.
export type ScanStatus = 'classified' | 'review' | 'duties';

export const SCAN_ROWS: {
  product: string;
  detail: string;
  code: string;
  rate: string;
  status: ScanStatus;
  statusLabel: string;
}[] = [
  { product: 'Backpack', detail: 'Polyester outer', code: '4202.92.31.20', rate: '17.6%', status: 'classified', statusLabel: 'Classified' },
  { product: 'T-shirt', detail: '100% cotton, knit', code: '6109.10', rate: '16.5%', status: 'classified', statusLabel: 'Classified' },
  { product: 'Laptop', detail: '14-inch notebook', code: '8471', rate: 'Free', status: 'classified', statusLabel: 'Classified' },
  { product: 'Office desk', detail: 'Solid oak', code: '9403', rate: 'Free', status: 'review', statusLabel: 'Lacey Act check' },
  { product: 'Bearing', detail: 'Steel, type not stated', code: '8482', rate: '2.4–9.9%', status: 'review', statusLabel: 'Needs bearing type' },
  { product: 'Solar panel', detail: 'Monocrystalline PV', code: '8541', rate: 'See duties', status: 'duties', statusLabel: 'Extra duties apply' },
];

// Source: /product/tariffs (feature list) and the in-product note on rumored tariffs.
export const TARIFF_LAYERS = [
  {
    id: 'base',
    name: 'Base tariff rates',
    text: 'Base and preferential duty rates applicable to your imports.',
    locked: true,
  },
  {
    id: 'additional',
    name: 'Additional tariffs',
    text: 'Trade remedy duties under Sections 201, 232 and 301.',
    locked: false,
  },
  {
    id: 'upcoming',
    name: 'Upcoming tariffs',
    text: 'Officially announced tariffs with future implementation dates.',
    locked: false,
  },
  {
    id: 'rumored',
    name: 'Rumored tariffs',
    text: 'Potential future tariffs identified through credible media and government sources, marked as speculative.',
    locked: false,
  },
] as const;

// Source: /product/tariffs, /product/classification.
export const STEPS = [
  {
    title: 'Upload your product list',
    text: 'Add the products you import with the detail you have: names, descriptions, materials and country of origin. Fuller descriptions produce more confident codes.',
  },
  {
    title: 'Review the suggested codes',
    text: 'Gaia proposes an HTS code for each product and asks a follow-up question when one detail, such as material or construction, decides the classification.',
  },
  {
    title: 'Set the scenario',
    text: 'Choose which tariff types to include and the date your shipment arrives, so announced changes are priced in before they take effect.',
  },
  {
    title: 'Export and share the report',
    text: 'Download the tariff report and send it to colleagues, your customs broker or your own customers.',
  },
];

// Source: /blog/how-to-classify-an-entire-sku-catalog-a-bulk-classification-guide
export const CASE_DELIVERABLES = [
  'CBP-compliant product descriptions',
  '10-digit HTS codes',
  'Duty and tariff estimates spanning Section 301, Section 232 and other layers',
  'Written classification rationales',
  'Discrepancies flagged for expert review',
  'Alternate codes with usage conditions',
];

// Sources: /pricing, the bulk classification guide, /product/tariffs.
export const FAQS = [
  {
    q: 'What is a catalog tariff scan?',
    a: 'A catalog tariff scan classifies a full product list and returns tariff rates for every item at once, instead of one lookup per product. In Gaia it covers base and preferential rates, additional tariffs under Sections 201, 232 and 301, officially announced upcoming tariffs and, if you choose, rumored ones.',
  },
  {
    q: 'How many products can I scan?',
    a: 'Product limits depend on your plan: 100 on Free, 1,000 on Starter, 10,000 on Pro, 100,000 on Advanced and unlimited on Enterprise. Every plan includes unlimited users. The pricing page lists which features each plan includes.',
  },
  {
    q: 'What product data gives the best results?',
    a: 'Material composition, function, physical form, principal use, country of origin, manufacturing process and technical specifications. Gaia can also work from sparse data such as part numbers and legacy HTS codes, and it flags the items that need more detail.',
  },
  {
    q: 'Does the scan replace my customs broker?',
    a: 'No. The importer of record remains responsible for classification. Gaia speeds up the research and records the rationale behind each code, and every classification should still get a human review before filing.',
  },
  {
    q: 'How often should I rescan my catalog?',
    a: 'At least once a year, and whenever an HTS revision, a product change, a new supplier or manufacturing process, or a relevant CBP ruling affects a SKU.',
  },
  {
    q: 'How are rumored tariffs handled?',
    a: 'They sit in a separate, optional layer, sourced from credible media and government reports and marked as speculative. Leave them out to see the duty you owe today, or include them to stress-test your margins.',
  },
];

export const FOOTER = [
  {
    heading: 'Product',
    links: [
      { label: 'Tariff Discovery', href: `${GAIA}/product/tariffs` },
      { label: 'Product Classification', href: `${GAIA}/product/classification` },
      { label: 'Tariff Audits', href: `${GAIA}/product/tariff-audits` },
      { label: 'Platform API', href: `${GAIA}/product/api` },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'For Customs Brokers', href: `${GAIA}/solutions/customs-brokers` },
      { label: 'For Importers & Exporters', href: `${GAIA}/solutions/importers-and-exporters` },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: `${GAIA}/blog` },
      { label: 'HS Code Finder', href: `${GAIA}/hs-code-lookup/us` },
      { label: 'Press', href: `${GAIA}/press` },
      { label: 'Podcast', href: `${GAIA}/podcast` },
      { label: 'Whitepapers', href: `${GAIA}/whitepapers` },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: `${GAIA}/company` },
      { label: 'Contact', href: 'mailto:info@gaiadynamics.ai' },
      { label: 'Trust Center', href: 'https://trust.gaiadynamics.ai/' },
    ],
  },
  {
    heading: 'Get started',
    links: [
      { label: 'Pricing', href: `${GAIA}/pricing` },
      { label: 'Free trial', href: `${GAIA}/free-trial` },
    ],
  },
];
