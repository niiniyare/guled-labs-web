// ─────────────────────────────────────────────────────────────
// Site-wide settings. Change the company details here once and
// every page, the header and the footer pick them up.
// Anything in [SQUARE BRACKETS] is a placeholder to replace.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: 'Guled Labs',
  legalName: 'Guled Labs Ltd',
  description:
    'Business software for fuel stations, supermarkets, restaurants and pharmacies in Kenya — connected to KRA eTIMS, M-Pesa, your bank and the machines on your floor.',
  city: '[City]',
  country: 'Kenya',
  address: '[Street, building, floor]',
  appUrl: 'https://app.guledlabs.com', // "Sign in" goes here
  // Where the contact / demo form posts. Works with Formspree, Basin,
  // Netlify Forms, or your own endpoint. Leave '' to show the form without sending.
  formEndpoint: '',
  contacts: {
    salesPhone: '[PHONE]',
    salesPhoneHref: 'tel:+254000000000',
    supportPhone: '[SUPPORT PHONE]',
    supportPhoneHref: 'tel:+254000000000',
    supportHours: '[HOURS]',
    whatsapp: '[NUMBER]',
    whatsappHref: 'https://wa.me/254000000000',
    email: '[EMAIL]',
    emailHref: 'mailto:hello@guledlabs.com',
  },
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'X', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
};

// Industry colours: `bg` fills, `fg` is text on that fill,
// `text` is the accessible version for text on white/grey.
export const industryTheme = {
  fuel: { bg: '#F28C28', fg: '#1D2329', text: '#A3520A', soft: '#FFB46B' },
  retail: { bg: '#2F5BEA', fg: '#FFFFFF', text: '#2F5BEA', soft: '#9DB4FF' },
  restaurant: { bg: '#C23B1F', fg: '#FFFFFF', text: '#C23B1F', soft: '#FF9C86' },
  pharmacy: { bg: '#127A52', fg: '#FFFFFF', text: '#127A52', soft: '#6FD3A6' },
} as const;

export type IndustryKey = keyof typeof industryTheme;

type Link = { label: string; href: string; desc?: string };
type Section = { title: string; href?: string; industry?: IndustryKey; links: Link[] };
export type NavGroup = {
  id: string;
  label: string;
  top: boolean; // shown in the desktop bar
  aside?: { title: string; text: string; link: string; href: string };
  sections: Section[];
};

export const nav: NavGroup[] = [
  {
    id: 'solutions',
    label: 'Solutions',
    top: true,
    aside: {
      title: 'Not on the list?',
      text: 'Hardware stores, distributors and hotels run on the same platform.',
      link: 'Tell us about your business',
      href: '/contact',
    },
    sections: [
      {
        title: 'Fuel stations', href: '/industries/fuel-stations', industry: 'fuel',
        links: [
          { label: 'Forecourt & pumps', href: '/industries/fuel-stations#pumps', desc: 'Live sales from every nozzle' },
          { label: 'Tank stock & deliveries', href: '/industries/fuel-stations#tanks', desc: 'Gauge, dip and delivery checks' },
          { label: 'Shift cash-ups', href: '/industries/fuel-stations#shifts', desc: 'Expected vs. declared, per attendant' },
          { label: 'Fleet & credit accounts', href: '/industries/fuel-stations#accounts', desc: 'Limits, LPOs and statements' },
        ],
      },
      {
        title: 'Supermarkets & shops', href: '/industries/retail', industry: 'retail',
        links: [
          { label: 'Tills & checkout', href: '/industries/retail#tills', desc: 'Fast, and keeps selling offline' },
          { label: 'Weighed & fresh items', href: '/industries/retail#fresh', desc: 'Scales and price barcodes' },
          { label: 'Branch stock & transfers', href: '/industries/retail#stock', desc: 'One view of every shop' },
          { label: 'Loyalty & promotions', href: '/industries/retail#customers', desc: 'Points by phone number' },
        ],
      },
      {
        title: 'Restaurants & cafés', href: '/industries/restaurants', industry: 'restaurant',
        links: [
          { label: 'Tables & takeaway', href: '/industries/restaurants#floor', desc: 'Floor plan, tabs and split bills' },
          { label: 'Kitchen screens', href: '/industries/restaurants#kitchen', desc: 'Orders routed by station' },
          { label: 'Recipe costing', href: '/industries/restaurants#costing', desc: 'Margin per dish, kept current' },
          { label: 'QR menus & delivery', href: '/industries/restaurants#online', desc: 'Orders straight to the kitchen' },
        ],
      },
      {
        title: 'Pharmacies', href: '/industries/pharmacies', industry: 'pharmacy',
        links: [
          { label: 'Dispensing & labels', href: '/industries/pharmacies#dispensing', desc: 'Prescriptions and patient history' },
          { label: 'Batches & expiry', href: '/industries/pharmacies#batches', desc: 'Earliest expiry sold first' },
          { label: 'Insurance claims', href: '/industries/pharmacies#insurance', desc: 'Co-pay split and claim tracking' },
          { label: 'Controlled-drug register', href: '/industries/pharmacies#controlled', desc: 'Signed off, never on paper' },
        ],
      },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    top: true,
    aside: {
      title: 'One platform underneath',
      text: 'Every product shares one set of customers, items and accounts, so nothing is keyed twice.',
      link: 'How the platform connects',
      href: '/#connections',
    },
    sections: [
      {
        title: 'Sell',
        links: [
          { label: 'Point of sale', href: '/products/point-of-sale', desc: 'Tills, tablets and handhelds' },
          { label: 'Online & QR ordering', href: '/products/online-ordering', desc: 'Orders from phones' },
          { label: 'Customers & loyalty', href: '/products/loyalty', desc: 'Points, credit and statements' },
        ],
      },
      {
        title: 'Run the floor',
        links: [
          { label: 'Inventory & warehouses', href: '/products/inventory', desc: 'Stock, transfers and counts' },
          { label: 'Purchasing', href: '/products/purchasing', desc: 'Orders, receiving, supplier bills' },
          { label: 'Devices & IoT', href: '/products/devices', desc: 'Pumps, tanks, scales, clocks' },
        ],
      },
      {
        title: 'Manage the business',
        links: [
          { label: 'Accounting', href: '/products/accounting', desc: 'Ledger, banking and VAT' },
          { label: 'HR & payroll', href: '/products/payroll', desc: 'Shifts, attendance and payslips' },
          { label: 'Reports & owner app', href: '/products/owner-app', desc: 'Every branch on your phone' },
        ],
      },
    ],
  },
  {
    id: 'integrations',
    label: 'Integrations',
    top: true,
    aside: {
      title: 'Need something else connected?',
      text: 'We build integrations with local banks, suppliers and devices on request.',
      link: 'Ask about an integration',
      href: '/contact',
    },
    sections: [
      { title: 'Tax', links: [{ label: 'KRA eTIMS', href: '/integrations/kra-etims', desc: 'OSCU and VSCU, per branch' }] },
      {
        title: 'Payments',
        links: [
          { label: 'M-Pesa till & paybill', href: '/integrations/mpesa', desc: 'Payments matched automatically' },
          { label: 'Card terminals', href: '/integrations/card-terminals', desc: '[Confirm providers]' },
          { label: 'Bank statements', href: '/integrations/banks', desc: '[List supported banks]' },
        ],
      },
      {
        title: 'Devices',
        links: [
          { label: 'Pump controllers (PTS-2)', href: '/integrations/pump-controllers', desc: 'Nozzle-level sales' },
          { label: 'Tank gauges', href: '/integrations/tank-gauges', desc: 'Live levels and deliveries' },
          { label: 'Scales & printers', href: '/integrations/scales-printers', desc: 'Labels and receipts' },
          { label: 'Biometric clocks', href: '/integrations/biometric-clocks', desc: 'Attendance into payroll' },
        ],
      },
      { title: 'Developers', links: [{ label: 'API & webhooks', href: '/integrations/api', desc: 'Connect your own systems' }] },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    top: true,
    aside: {
      title: 'Getting ready for eTIMS?',
      text: 'A plain-language walkthrough for owners: what KRA asks for and how to switch without stopping sales.',
      link: 'Read about eTIMS',
      href: '/integrations/kra-etims',
    },
    sections: [
      {
        title: 'Learn',
        links: [
          { label: 'Customer stories', href: '/customers' },
          { label: 'Guides', href: '/guides' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'Get help',
        links: [
          { label: 'Help centre', href: '/help' },
          { label: 'Training', href: '/training' },
          { label: 'System status', href: '/status' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    top: false,
    sections: [
      {
        title: 'About us',
        links: [
          { label: 'Our story', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Partners & resellers', href: '/partners' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Contact sales', href: '/contact' },
          { label: 'Support', href: '/help' },
        ],
      },
    ],
  },
];

export const footerColumns = [
  {
    title: 'Solutions',
    links: [
      { label: 'Fuel stations', href: '/industries/fuel-stations', industry: 'fuel' as IndustryKey },
      { label: 'Supermarkets & shops', href: '/industries/retail', industry: 'retail' as IndustryKey },
      { label: 'Restaurants & cafés', href: '/industries/restaurants', industry: 'restaurant' as IndustryKey },
      { label: 'Pharmacies', href: '/industries/pharmacies', industry: 'pharmacy' as IndustryKey },
      { label: 'Other businesses', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Point of sale', href: '/products/point-of-sale' },
      { label: 'Inventory', href: '/products/inventory' },
      { label: 'Purchasing', href: '/products/purchasing' },
      { label: 'Accounting', href: '/products/accounting' },
      { label: 'HR & payroll', href: '/products/payroll' },
      { label: 'Owner app', href: '/products/owner-app' },
    ],
  },
  {
    title: 'Integrations',
    links: [
      { label: 'KRA eTIMS', href: '/integrations/kra-etims' },
      { label: 'M-Pesa', href: '/integrations/mpesa' },
      { label: 'Banks', href: '/integrations/banks' },
      { label: 'Pumps & tank gauges', href: '/integrations/pump-controllers' },
      { label: 'Scales & printers', href: '/integrations/scales-printers' },
      { label: 'API', href: '/integrations/api' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Customer stories', href: '/customers' },
      { label: 'Guides', href: '/guides' },
      { label: 'Blog', href: '/blog' },
      { label: 'Help centre', href: '/help' },
      { label: 'Training', href: '/training' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Data protection', href: '/data-protection' },
  { label: 'System status', href: '/status' },
];
