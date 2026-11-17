// Product and integration pages. Copy marked [confirm] or [..] needs
// checking against what Guled Labs actually ships before launch.
import type { IndustryKey } from '../config/site';

export type CatalogItem = {
  slug: string;
  name: string;
  h1: string;
  lead: string;
  points: { title: string; text: string }[];
  industries: IndustryKey[];
  related: string[]; // slugs within the same catalog
};

const ALL: IndustryKey[] = ['fuel', 'retail', 'restaurant', 'pharmacy'];

export const products: CatalogItem[] = [
  {
    slug: 'point-of-sale', name: 'Point of sale',
    h1: 'A till that keeps selling, whatever the network does.',
    lead: 'Checkout on Android terminals, tablets, desktops and handhelds — with eTIMS signing and M-Pesa built in.',
    points: [
      { title: 'Works offline', text: 'Sales continue when the internet drops and sync when it’s back.' },
      { title: 'Every way to pay', text: 'Cash, M-Pesa, card, credit account and split payments on one bill.' },
      { title: 'Receipts KRA accepts', text: 'Each sale is signed through eTIMS and the QR code printed on the receipt.' },
      { title: 'Cashier controls', text: 'PIN log-in, discounts and voids that need a supervisor, and a drawer count at close.' },
    ],
    industries: ALL, related: ['inventory', 'loyalty', 'owner-app'],
  },
  {
    slug: 'online-ordering', name: 'Online & QR ordering',
    h1: 'Orders from phones, straight into the system.',
    lead: 'QR menus at the table and an ordering page for collection and delivery, feeding the same kitchen and stock.',
    points: [
      { title: 'QR at the table', text: 'Guests scan, order and pay by M-Pesa without waiting for a waiter.' },
      { title: 'Collection & delivery', text: 'Your own ordering page, so you keep the customer and the margin.' },
      { title: 'Same kitchen flow', text: 'Online orders arrive on the kitchen screens like any other order.' },
      { title: 'Delivery apps', text: '[Confirm which delivery platforms are supported.]' },
    ],
    industries: ['restaurant', 'retail'], related: ['point-of-sale', 'loyalty'],
  },
  {
    slug: 'loyalty', name: 'Customers & loyalty',
    h1: 'Know your regulars, and give them a reason to come back.',
    lead: 'Customer records, points by phone number, credit accounts and statements in one place.',
    points: [
      { title: 'Points by phone number', text: 'No cards to carry; customers are found by the number they pay with.' },
      { title: 'Credit accounts', text: 'Limits, LPOs and monthly statements for business customers and fleets.' },
      { title: 'Promotions', text: 'Bundles and time-limited prices pushed to every branch at once.' },
      { title: 'Messages', text: '[Confirm SMS / WhatsApp messaging support.]' },
    ],
    industries: ALL, related: ['point-of-sale', 'accounting'],
  },
  {
    slug: 'inventory', name: 'Inventory & warehouses',
    h1: 'Stock you can trust, in every branch.',
    lead: 'Live stock by branch and store, batches and expiry, transfers, counts and wastage.',
    points: [
      { title: 'Live by branch', text: 'Every sale, delivery and transfer updates stock as it happens.' },
      { title: 'Batches & expiry', text: 'Track batches where it matters and sell the earliest expiry first.' },
      { title: 'Counts on a phone', text: 'Cycle counts and stock-takes without closing the shop.' },
      { title: 'Wastage recorded', text: 'Breakage, spoilage and staff use logged with a reason.' },
    ],
    industries: ALL, related: ['purchasing', 'devices'],
  },
  {
    slug: 'purchasing', name: 'Purchasing',
    h1: 'Order what sells, and pay for what arrived.',
    lead: 'Reorder suggestions, purchase orders, receiving against the order, and supplier bills.',
    points: [
      { title: 'Suggested orders', text: 'Reorder levels worked out from real sales.' },
      { title: 'Receive against the order', text: 'Short or damaged deliveries are recorded at the door.' },
      { title: 'Supplier bills', text: 'Bills matched to what was received before they are paid.' },
      { title: 'Price history', text: 'See what each supplier charged over time.' },
    ],
    industries: ALL, related: ['inventory', 'accounting'],
  },
  {
    slug: 'devices', name: 'Devices & IoT',
    h1: 'The machines on your floor, feeding the books.',
    lead: 'Pump controllers, tank gauges, scales, printers and biometric clocks connected to the same system.',
    points: [
      { title: 'Pumps & tanks', text: 'Nozzle-level sales and live tank levels for fuel stations.' },
      { title: 'Scales & printers', text: 'Weighed items, labels and receipts from the till.' },
      { title: 'Attendance', text: 'Biometric clock-ins flow straight into shifts and payroll.' },
      { title: 'Something else?', text: 'We connect other devices on request.' },
    ],
    industries: ALL, related: ['inventory', 'payroll'],
  },
  {
    slug: 'accounting', name: 'Accounting',
    h1: 'Books that close themselves.',
    lead: 'General ledger, banking, VAT and reports, fed automatically by every sale, purchase and payment.',
    points: [
      { title: 'Posted as you trade', text: 'Sales, purchases and payments post without re-keying.' },
      { title: 'Bank & M-Pesa reconciliation', text: 'Statements matched to what the system expected.' },
      { title: 'Multi-branch', text: 'Branch-level results and a combined view for the owner.' },
      { title: 'Tax reports', text: '[Confirm VAT and withholding reports provided.]' },
    ],
    industries: ALL, related: ['owner-app', 'purchasing'],
  },
  {
    slug: 'payroll', name: 'HR & payroll',
    h1: 'Shifts, attendance and payslips in one place.',
    lead: 'Rosters, biometric attendance, leave and payroll with Kenyan statutory deductions.',
    points: [
      { title: 'Shifts & rosters', text: 'Plan shifts per site and see who actually clocked in.' },
      { title: 'Payroll', text: 'Payslips with statutory deductions. [Confirm current PAYE, SHIF, NSSF and housing levy handling.]' },
      { title: 'Leave & advances', text: 'Requests, approvals and salary advances tracked.' },
      { title: 'Staff self-service', text: 'Payslips and leave balances on the staff member’s phone.' },
    ],
    industries: ALL, related: ['devices', 'accounting'],
  },
  {
    slug: 'owner-app', name: 'Reports & owner app',
    h1: 'Every branch on your phone.',
    lead: 'Sales, stock, cash and exceptions across every site, with a daily summary sent to you.',
    points: [
      { title: 'One screen', text: 'Every branch, till and pump at a glance.' },
      { title: 'Exceptions first', text: 'Variances, unmatched payments and low stock flagged for you.' },
      { title: 'Daily summary', text: 'A short end-of-day report on WhatsApp or email.' },
      { title: 'Drill down', text: 'From a number on the dashboard to the receipt behind it.' },
    ],
    industries: ALL, related: ['accounting', 'point-of-sale'],
  },
];

export const integrations: CatalogItem[] = [
  {
    slug: 'kra-etims', name: 'KRA eTIMS',
    h1: 'Every invoice signed by KRA, without anyone retyping it.',
    lead: 'Sales, credit notes and stock movements go to KRA eTIMS from the till, with the QR code printed on the receipt.',
    points: [
      { title: 'From the till', text: 'Invoices are signed as the sale happens, not keyed into a separate portal.' },
      { title: 'Per branch', text: 'Each branch transmits under its own eTIMS registration.' },
      { title: 'Offline-safe', text: 'If the line drops, invoices queue and are sent when it returns.' },
      { title: 'Integration type', text: '[Confirm OSCU / VSCU support and certification status.]' },
    ],
    industries: ALL, related: ['mpesa', 'banks'],
  },
  {
    slug: 'mpesa', name: 'M-Pesa',
    h1: 'M-Pesa payments that match themselves.',
    lead: 'Till and paybill payments arrive in real time and are matched to the right sale, shift or invoice.',
    points: [
      { title: 'Prompt to pay', text: 'Send a payment prompt to the customer’s phone from the till.' },
      { title: 'Automatic matching', text: 'Incoming payments matched to the sale or customer account.' },
      { title: 'Exceptions flagged', text: 'Payments that don’t match anything are listed for a person to check.' },
      { title: 'Into the books', text: 'Settlements reconcile against your M-Pesa statement.' },
    ],
    industries: ALL, related: ['kra-etims', 'banks'],
  },
  {
    slug: 'card-terminals', name: 'Card terminals',
    h1: 'Card payments on the same bill.',
    lead: 'Card payments recorded against the sale, so the drawer and the books agree.',
    points: [
      { title: 'Supported providers', text: '[List supported card terminal providers.]' },
      { title: 'Split payments', text: 'Part card, part cash or M-Pesa on one bill.' },
      { title: 'Settlement matching', text: 'Card settlements reconciled against sales.' },
    ],
    industries: ALL, related: ['mpesa', 'banks'],
  },
  {
    slug: 'banks', name: 'Bank statements',
    h1: 'Bank statements reconciled for you.',
    lead: 'Bank transactions brought in and matched to deposits, supplier payments and settlements.',
    points: [
      { title: 'Supported banks', text: '[List supported banks and how statements are imported.]' },
      { title: 'Deposit matching', text: 'Cash banked from each shift matched to the deposit.' },
      { title: 'Supplier payments', text: 'Payments matched to the bills they settle.' },
    ],
    industries: ALL, related: ['mpesa', 'kra-etims'],
  },
  {
    slug: 'pump-controllers', name: 'Pump controllers (PTS-2)',
    h1: 'Every nozzle, connected.',
    lead: 'Live sales and totals from PTS-2 forecourt controllers, tied to the attendant, the payment and the receipt.',
    points: [
      { title: 'Nozzle-level sales', text: 'Each transaction recorded with pump, nozzle, volume and price.' },
      { title: 'Authorise & lock', text: 'Control pumps from the attendant terminal or the office.' },
      { title: 'Price updates', text: 'New prices sent to the pumps when you change them.' },
      { title: 'Supported dispensers', text: '[List tested dispenser brands.]' },
    ],
    industries: ['fuel'], related: ['tank-gauges', 'biometric-clocks'],
  },
  {
    slug: 'tank-gauges', name: 'Tank gauges',
    h1: 'Know what’s in the tanks, all day.',
    lead: 'Live levels, deliveries and temperature from automatic tank gauges, reconciled against sales.',
    points: [
      { title: 'Live levels', text: 'Product, water and temperature for every tank.' },
      { title: 'Deliveries', text: 'Deliveries detected and checked against the supplier’s note.' },
      { title: 'Daily reconciliation', text: 'Gauge, dips and sales compared, with variance flagged.' },
    ],
    industries: ['fuel'], related: ['pump-controllers'],
  },
  {
    slug: 'scales-printers', name: 'Scales & printers',
    h1: 'Weigh, label and print from the same system.',
    lead: 'Label scales, receipt printers, kitchen printers and cash drawers driven by the till.',
    points: [
      { title: 'Label scales', text: 'Price-embedded barcodes for weighed items.' },
      { title: 'Receipt & kitchen printers', text: 'Receipts at the till, tickets in the kitchen.' },
      { title: 'Supported models', text: '[List tested scales and printers.]' },
    ],
    industries: ['retail', 'restaurant', 'pharmacy'], related: ['pump-controllers'],
  },
  {
    slug: 'biometric-clocks', name: 'Biometric clocks',
    h1: 'Clock-ins that go straight to payroll.',
    lead: 'Fingerprint and face attendance devices feeding shifts, overtime and payroll.',
    points: [
      { title: 'Real attendance', text: 'Who actually worked, per site and per shift.' },
      { title: 'Into payroll', text: 'Hours and overtime flow into payslips.' },
      { title: 'Supported devices', text: '[List supported attendance devices.]' },
    ],
    industries: ALL, related: ['pump-controllers'],
  },
  {
    slug: 'api', name: 'API & webhooks',
    h1: 'Connect your own systems.',
    lead: 'A documented API and webhooks for the things we don’t connect out of the box.',
    points: [
      { title: 'REST API', text: 'Read and write customers, items, orders and invoices.' },
      { title: 'Webhooks', text: 'Get notified when sales, payments or stock change.' },
      { title: 'Your data', text: 'Export everything, any time.' },
      { title: 'Docs', text: '[Link to API documentation.]' },
    ],
    industries: ALL, related: ['kra-etims', 'mpesa'],
  },
];
