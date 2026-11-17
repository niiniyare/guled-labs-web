import type { IndustryKey } from '../config/site';

export type Industry = {
  key: IndustryKey;
  slug: string;
  name: string;
  short: string;
  summary: string;
  metaDescription: string;
  h1: string;
  sub: string;
  problemsTitle: string;
  problems: { strong: string; rest: string }[];
  features: { id: string; tag: string; title: string; text: string }[];
  dayTitle: string;
  day: { when: string; text: string }[];
  worksWith: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  quoteFrom: string;
  ctaTitle: string;
  ctaButton: string;
};

export const industries: Industry[] = [
  {
    key: 'fuel',
    slug: 'fuel-stations',
    name: 'Fuel stations',
    short: 'Fuel stations',
    summary: 'Pump sales, tank stock, attendant cash-ups and fleet accounts. Works with PTS-2 pump controllers and tank gauges.',
    metaDescription: 'Forecourt management for Kenyan fuel stations: pump-level sales, wetstock reconciliation, shift cash-ups, fleet accounts, KRA eTIMS and M-Pesa in one system.',
    h1: 'Forecourt management that reconciles itself.',
    sub: 'Every litre from tank to nozzle to receipt — matched to cash, M-Pesa and KRA eTIMS before the shift ends.',
    problemsTitle: 'Most stations find their losses at month end.',
    problems: [
      { strong: 'Meter, dip and till never agree', rest: ' — and nobody knows which one is wrong.' },
      { strong: 'M-Pesa is matched by hand,', rest: ' statement against notebook, after the shift has gone home.' },
      { strong: 'eTIMS sits apart from sales,', rest: ' so receipts get missed or keyed twice.' },
      { strong: 'Price changes on the 15th', rest: ' mean late nights updating pumps, tills and books.' },
    ],
    features: [
      { id: 'pumps', tag: 'Pumps', title: 'Live pump integration', text: 'Nozzle totals and transactions from PTS-2 controllers. Authorise or lock pumps from the office.' },
      { id: 'tanks', tag: 'Tanks', title: 'Wetstock reconciliation', text: 'Tank gauge, dips, deliveries and sales compared every day, with variance flagged per tank.' },
      { id: 'shifts', tag: 'Shifts', title: 'Attendant cash-ups', text: 'Expected vs. declared cash, M-Pesa and cards for each attendant, signed off by the supervisor.' },
      { id: 'etims', tag: 'Tax', title: 'eTIMS on every sale', text: 'Pump and shop sales signed by KRA, QR receipts, and a retry queue for when the line drops.' },
      { id: 'accounts', tag: 'Accounts', title: 'Fleet & credit customers', text: 'Vehicle limits, LPOs and monthly statements for corporate clients.' },
      { id: 'pricing', tag: 'Pricing', title: 'EPRA prices in one step', text: 'Enter the new price once; pumps, tills and stock value update together. Shop, lubes and LPG on the same till.' },
    ],
    dayTitle: 'A shift, start to finish',
    day: [
      { when: '6:00 · Open', text: 'Opening meters and dips captured; attendants clock in by fingerprint.' },
      { when: 'All day · Sell', text: 'Each sale is tied to a nozzle, a payment and an eTIMS receipt.' },
      { when: '14:00 · Hand over', text: 'Expected cash per attendant is shown before counting starts.' },
      { when: 'Close · Post', text: 'Variances explained, the shift posted, and the owner gets a summary on WhatsApp.' },
    ],
    worksWith: ['PTS-2 pump controllers', 'Tank gauges (ATG)', 'Android POS', 'Biometric clocks', 'KRA eTIMS', 'M-Pesa'],
    faqTitle: 'Questions station owners ask',
    faq: [
      { q: 'Which dispensers and controllers do you support?', a: '[List supported dispenser brands and controllers.]' },
      { q: 'What happens when the internet drops?', a: 'Pumps and tills keep selling. Invoices queue and go to eTIMS as soon as the line is back.' },
      { q: 'Can I run several stations?', a: 'Yes. Each site has its own tanks, staff and eTIMS branch, with combined reports for the owner.' },
      { q: 'How much does it cost?', a: '[Your pricing — for example per site per month, plus a one-off setup fee.]' },
    ],
    quoteFrom: '[Name], [role], [station], [county]',
    ctaTitle: 'Run your next shift on Guled Labs',
    ctaButton: 'Book a forecourt demo',
  },
  {
    key: 'retail',
    slug: 'retail',
    name: 'Supermarkets & shops',
    short: 'Retail',
    summary: 'Fast tills that keep selling offline, weighed items, branch stock and supplier orders.',
    metaDescription: 'Retail POS and stock control for Kenyan supermarkets and shops: offline-ready tills, scales, branch stock, supplier orders, loyalty, KRA eTIMS and M-Pesa.',
    h1: 'Short queues. Full shelves. Books that balance.',
    sub: 'A till that keeps up on a Saturday rush, stock you can trust in every branch, and eTIMS on every receipt.',
    problemsTitle: 'Retail margins are thin. Small leaks add up.',
    problems: [
      { strong: 'The system says 40, the shelf says 12', rest: ' — and shrinkage only shows at stock-take.' },
      { strong: 'Slow tills at peak hours', rest: ' send customers to the shop next door.' },
      { strong: 'Each branch runs its own way,', rest: ' with prices and stock out of step.' },
      { strong: 'Supplier orders are guesses', rest: ' — too much of one thing, none of another.' },
    ],
    features: [
      { id: 'tills', tag: 'Tills', title: 'Fast, offline-ready checkout', text: 'Barcode scanning, quick keys, held carts and split payments. Keeps selling when the internet drops.' },
      { id: 'fresh', tag: 'Fresh', title: 'Scales & weighed items', text: 'Label scales and price-embedded barcodes for produce, butchery and bakery.' },
      { id: 'stock', tag: 'Stock', title: 'Branch stock & transfers', text: 'Live stock per branch, transfers between branches, and counts done on a phone.' },
      { id: 'buying', tag: 'Buying', title: 'Suggested supplier orders', text: 'Reorder levels from real sales; purchase orders, receiving and supplier invoices.' },
      { id: 'customers', tag: 'Customers', title: 'Loyalty & promotions', text: 'Points by phone number, bundle offers, and price changes sent to every branch at once.' },
      { id: 'money', tag: 'Tax & money', title: 'eTIMS, M-Pesa and cash-up', text: 'Every receipt signed by KRA, M-Pesa matched, and each cashier’s drawer balanced at close.' },
    ],
    dayTitle: 'A trading day, start to finish',
    day: [
      { when: '7:30 · Open', text: 'Floats issued, and today’s price changes are already on every till.' },
      { when: 'All day · Sell', text: 'Scan, weigh, pay by M-Pesa or card — eTIMS signs in the background.' },
      { when: 'Afternoon · Restock', text: 'Low-stock alerts become a supplier order in two taps.' },
      { when: 'Close · Balance', text: 'Drawers counted, sales posted, every branch on one screen for the owner.' },
    ],
    worksWith: ['Barcode scanners', 'Label scales', 'Receipt printers', 'Cash drawers', 'KRA eTIMS', 'M-Pesa'],
    faqTitle: 'Questions shop owners ask',
    faq: [
      { q: 'Can I bring my existing items and barcodes?', a: 'Yes. We import your item list, prices and opening stock from a spreadsheet or your old system.' },
      { q: 'Which hardware do I need?', a: '[List supported POS terminals, printers and scales, or the bundles you sell.]' },
      { q: 'Does it work for one small shop?', a: 'Yes. Start with one till and add branches when you grow.' },
      { q: 'How much does it cost?', a: '[Your pricing — for example per till per month, plus a one-off setup fee.]' },
    ],
    quoteFrom: '[Name], [role], [store], [town]',
    ctaTitle: 'Open tomorrow on Guled Labs',
    ctaButton: 'Book a retail demo',
  },
  {
    key: 'restaurant',
    slug: 'restaurants',
    name: 'Restaurants & cafés',
    short: 'Restaurants',
    summary: 'Orders from table to kitchen screen, dishes costed by recipe, bills paid by M-Pesa at the table.',
    metaDescription: 'Restaurant POS for Kenyan restaurants and cafés: table and takeaway orders, kitchen screens, recipe costing, stock, QR menus, KRA eTIMS and M-Pesa.',
    h1: 'From order to plate to profit, in one system.',
    sub: 'Orders go from table to kitchen screen, every plate is costed to the ingredient, and every bill carries its eTIMS stamp.',
    problemsTitle: 'Busy doesn’t always mean profitable.',
    problems: [
      { strong: 'Paper tickets get lost', rest: ' between the floor and the kitchen.' },
      { strong: 'Nobody knows what a dish really costs', rest: ' once meat and gas prices move.' },
      { strong: 'Stock walks out the back door', rest: ' and only shows up as a bad month.' },
      { strong: 'Delivery orders are typed in by hand', rest: ' from three different tablets.' },
    ],
    features: [
      { id: 'floor', tag: 'Floor', title: 'Tables, tabs & takeaway', text: 'Floor plan, waiter tablets, split bills and takeaway orders on one screen.' },
      { id: 'kitchen', tag: 'Kitchen', title: 'Kitchen display screens', text: 'Orders routed to grill, fryer or bar, with timers so nothing waits too long.' },
      { id: 'costing', tag: 'Costing', title: 'Recipes & plate cost', text: 'Each dish broken into ingredients, so margin updates when supplier prices change.' },
      { id: 'store', tag: 'Store', title: 'Stock & wastage', text: 'Ingredients drawn down with every sale; wastage and staff meals recorded, not hidden.' },
      { id: 'online', tag: 'Online', title: 'QR menus & delivery', text: 'Guests order from a QR code; delivery-app orders land straight in the kitchen. [Confirm supported apps.]' },
      { id: 'money', tag: 'Tax & money', title: 'eTIMS, M-Pesa and tips', text: 'Every bill signed by KRA, M-Pesa paid at the table, service charge and tips tracked per waiter.' },
    ],
    dayTitle: 'A service, start to finish',
    day: [
      { when: 'Morning · Prep', text: 'Prep list built from yesterday’s sales and today’s bookings.' },
      { when: 'Service · Order', text: 'The waiter taps the order; it appears on the right kitchen screen at once.' },
      { when: 'Table · Pay', text: 'Split the bill, pay by M-Pesa, receipt signed by eTIMS.' },
      { when: 'Close · Review', text: 'Sales, food cost and wastage in one report before you lock up.' },
    ],
    worksWith: ['Waiter tablets', 'Kitchen screens', 'Kitchen printers', 'QR menus', 'KRA eTIMS', 'M-Pesa'],
    faqTitle: 'Questions restaurant owners ask',
    faq: [
      { q: 'Will my waiters manage it?', a: 'Most pick it up in one shift. We train on the floor during service, not in a classroom.' },
      { q: 'Does it work for a small café?', a: 'Yes. One tablet and one printer is enough to start. Add kitchen screens later.' },
      { q: 'Can I run several outlets?', a: 'Yes. Shared menu and recipes, with separate stock and reports for each outlet.' },
      { q: 'How much does it cost?', a: '[Your pricing — for example per outlet per month, plus a one-off setup fee.]' },
    ],
    quoteFrom: '[Name], [role], [restaurant], [town]',
    ctaTitle: 'Run tonight’s service on Guled Labs',
    ctaButton: 'Book a restaurant demo',
  },
  {
    key: 'pharmacy',
    slug: 'pharmacies',
    name: 'Pharmacies',
    short: 'Pharmacy',
    summary: 'Batches and expiry dates, prescriptions, insurance claims and a digital controlled-drug register.',
    metaDescription: 'Pharmacy software for Kenyan pharmacies: batch and expiry tracking, dispensing and labels, insurance claims, controlled-drug register, KRA eTIMS and M-Pesa.',
    h1: 'Every batch tracked. Every claim followed up.',
    sub: 'Pharmacy software that knows batches, expiry dates and prescriptions — and keeps KRA and your insurers happy.',
    problemsTitle: 'In a pharmacy, small errors are expensive.',
    problems: [
      { strong: 'Stock expires at the back of the shelf', rest: ' while newer batches sell first.' },
      { strong: 'Insurance claims are rejected', rest: ' for missing details, and paid months late.' },
      { strong: 'Controlled medicines are logged on paper,', rest: ' and the register never quite matches.' },
      { strong: 'Thousands of items, hundreds of suppliers', rest: ' — and reorders done from memory.' },
    ],
    features: [
      { id: 'batches', tag: 'Batches', title: 'Batch & expiry tracking', text: 'Earliest expiry sold first at the counter, near-expiry alerts and supplier returns.' },
      { id: 'dispensing', tag: 'Dispensing', title: 'Prescriptions & labels', text: 'Record prescriber and patient, print dosage labels, keep patient history for refills.' },
      { id: 'insurance', tag: 'Insurance', title: 'Claims & co-pay', text: 'Split each sale between insurer and patient, and track claims to payment. [Confirm supported schemes.]' },
      { id: 'controlled', tag: 'Controlled', title: 'Controlled-drug register', text: 'Restricted items need a pharmacist’s sign-off; the register is built from every movement.' },
      { id: 'buying', tag: 'Buying', title: 'Smart reorders', text: 'Reorder suggestions from real sales, compared across your preferred suppliers.' },
      { id: 'money', tag: 'Tax & money', title: 'eTIMS, M-Pesa and branches', text: 'Every sale signed by KRA, M-Pesa matched, and stock transfers between branches.' },
    ],
    dayTitle: 'A day at the counter',
    day: [
      { when: 'Open · Check', text: 'Near-expiry and low-stock lists are waiting for the pharmacist.' },
      { when: 'Counter · Dispense', text: 'Scan, pick the right batch, print the label, take payment.' },
      { when: 'Afternoon · Claim', text: 'Insurance claims batched with everything the insurer needs.' },
      { when: 'Close · Reconcile', text: 'Drawer, M-Pesa and controlled-drug register balanced.' },
    ],
    worksWith: ['Barcode scanners', 'Label printers', 'Insurers [confirm]', 'KRA eTIMS', 'M-Pesa'],
    faqTitle: 'Questions pharmacists ask',
    faq: [
      { q: 'Can you import my drug list and current batches?', a: 'Yes. Items, batches, expiry dates and opening stock come in from a spreadsheet or your old system.' },
      { q: 'Which insurers do you work with?', a: '[List supported insurance schemes and how claims are submitted.]' },
      { q: 'Is patient information kept private?', a: '[Describe access controls, hosting and Data Protection Act compliance.]' },
      { q: 'How much does it cost?', a: '[Your pricing — for example per branch per month, plus a one-off setup fee.]' },
    ],
    quoteFrom: '[Name], [role], [pharmacy], [town]',
    ctaTitle: 'Dispense with confidence on Guled Labs',
    ctaButton: 'Book a pharmacy demo',
  },
];
