// Simple text pages. Replace the bracketed text with real content before launch.
export type SimplePage = { slug: string; title: string; lead: string; body: { h?: string; p: string }[]; cta?: { label: string; href: string } };

export const pages: SimplePage[] = [
  { slug: 'about', title: 'About Guled Labs', lead: 'We build business software for the way Kenyan fuel stations, shops, restaurants and pharmacies actually run.',
    body: [
      { h: 'Built on a forecourt', p: 'Guled Labs started inside a working highway service station in Machakos County. The forecourt system was built and run there, shift after shift, before it was offered to anyone else.' },
      { h: 'What we believe', p: 'A sale should be entered once. Tax compliance should happen at the till, not at month end. And owners should see problems the same day, not at stock-take.' },
      { h: 'The team', p: '[Introduce the founders and team.]' },
    ], cta: { label: 'Talk to us', href: '/contact' } },
  { slug: 'careers', title: 'Careers', lead: 'Help Kenyan businesses run better.', body: [{ p: '[List open roles, or invite people to send a CV to your email.]' }], cta: { label: 'Get in touch', href: '/contact' } },
  { slug: 'partners', title: 'Partners & resellers', lead: 'Hardware suppliers, accountants and IT companies who work with businesses like ours.', body: [{ p: '[Describe your partner programme: referral, reseller and implementation partners.]' }], cta: { label: 'Become a partner', href: '/contact' } },
  { slug: 'customers', title: 'Customer stories', lead: 'How businesses run on Guled Labs.', body: [
      { h: 'A highway service station, Machakos County', p: '[Write the full story: what the station struggled with, what changed, and real numbers — fuel loss, shift close time, eTIMS coverage.]' },
    ], cta: { label: 'Book a demo', href: '/demo' } },
  { slug: 'guides', title: 'Guides', lead: 'Plain-language guides for owners and managers.', body: [{ p: '[Publish guides here — for example switching to eTIMS, reconciling M-Pesa, and reducing fuel loss.]' }] },
  { slug: 'blog', title: 'Blog', lead: 'News, product updates and changes that affect your tills.', body: [{ p: '[Blog posts will appear here.]' }] },
  { slug: 'help', title: 'Help centre', lead: 'Support for Guled Labs customers.', body: [
      { h: 'Call or WhatsApp support', p: 'Our support line is [SUPPORT PHONE], [HOURS]. You can also message us on WhatsApp at [NUMBER].' },
      { h: 'Articles', p: '[Link to your help articles or knowledge base.]' },
    ] },
  { slug: 'training', title: 'Training', lead: 'On-site and online training for owners, managers and staff.', body: [{ p: '[Describe training sessions, schedules and costs.]' }], cta: { label: 'Ask about training', href: '/contact' } },
  { slug: 'status', title: 'System status', lead: 'Current status of Guled Labs services.', body: [{ p: '[Link to a live status page, for example one hosted by your monitoring provider.]' }] },
  { slug: 'privacy', title: 'Privacy policy', lead: 'How Guled Labs collects and uses personal data.', body: [{ p: '[Your privacy policy. Have it reviewed for the Kenya Data Protection Act, 2019.]' }] },
  { slug: 'terms', title: 'Terms of service', lead: 'The terms for using Guled Labs.', body: [{ p: '[Your terms of service.]' }] },
  { slug: 'data-protection', title: 'Data protection', lead: 'How customer and patient data is protected.', body: [{ p: '[Describe hosting, backups, access controls and your registration with the Office of the Data Protection Commissioner, if applicable.]' }] },
];
