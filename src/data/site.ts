// ─────────────────────────────────────────────────────────────
// Kensons Garage — central site configuration.
// Every business fact is taken VERBATIM from the existing site
// (kensonsgarage.com) and the brief. Nothing invented.
// UK English throughout. Currency £ GBP. Phone format UK +44.
//
// Two mobile lines serve the business:
//   PRIMARY   07950 428 012  → also WhatsApp; mapped to the *Mobile* fields
//   SECONDARY 07730 273 608  → mapped to the *Landline* fields
// (field names retained from the base scaffold so shared helpers work.)
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Kensons Garage',
  shortName: 'Kensons',
  tagline: 'This is Art',
  logoTagline: 'Auto Repair · Collision Centre',
  description:
    'Family-run car body repair & accident repair specialists in South London. Accident repair, resprays, insurance work, servicing. Call Sheldon on 07950 428 012 for a free quote. This is Art.',
  url: 'https://demo-kensons-garage.pages.dev',

  // PRIMARY line (07950) — direct, also WhatsApp. (Mobile* fields.)
  phoneMobile: '07950 428 012',
  phoneMobileIntl: '+447950428012',
  phoneMobileDigits: '447950428012',
  // SECONDARY line (07730). (Landline* fields.)
  phoneLandline: '07730 273 608',
  phoneLandlineIntl: '+447730273608',
  phoneLandlineDigits: '447730273608',
  // Clear semantic aliases for new code
  phonePrimary: '07950 428 012',
  phoneSecondary: '07730 273 608',

  email: 'kensons173@gmail.com',

  // Pre-filled WhatsApp enquiry per brief (photos-for-quote workflow)
  whatsappMessage: "Hi, I'd like to send photos of my car for a quote please",

  social: {
    instagram: 'https://www.instagram.com/kensons_garage/',
    instagramHandle: '@kensons_garage',
    tiktok: 'https://www.tiktok.com/@kensonsgarage',
    tiktokHandle: '@kensonsgarage',
  },

  // Arch 2 — a railway-arch workshop in Brixton, South London.
  address: {
    unit: 'Arch 2',
    street: '173 Ferndale Road',
    area: 'Brixton',
    city: 'London',
    region: 'South London',
    postcode: 'SW9 8BA',
    country: 'United Kingdom',
    countryCode: 'GB',
    // Approximate — Ferndale Road railway arches, Brixton SW9.
    lat: 51.4633,
    lng: -0.1158,
  },

  // Areas served — verbatim from the About page.
  areasServed: ['Brixton SW9', 'Clapham SW4', 'Streatham SW16', 'Dulwich SE19', 'South London'],

  // Opening hours. Original site lists ONLY "Mon–Fri 09:00–19:00" and
  // "Sun: Closed". Saturday is NOT stated → shown as "by appointment"
  // and flagged for the operator to confirm (see JUDGEMENT_CALLS.md).
  hours: [
    { day: 'Monday', open: '09:00', close: '19:00' },
    { day: 'Tuesday', open: '09:00', close: '19:00' },
    { day: 'Wednesday', open: '09:00', close: '19:00' },
    { day: 'Thursday', open: '09:00', close: '19:00' },
    { day: 'Friday', open: '09:00', close: '19:00' },
    { day: 'Saturday', open: null, close: null, note: 'By appointment' },
    { day: 'Sunday', open: null, close: null },
  ] as { day: string; open: string | null; close: string | null; note?: string }[],

  hoursSummary: [
    { label: 'Monday – Friday', value: '9:00am – 7:00pm' },
    { label: 'Saturday', value: 'By appointment' },
    { label: 'Sunday', value: 'Closed' },
  ],

  // PLACEHOLDER trust counters — the live site shows "0+" placeholders,
  // meaning the business should fill in real figures. These animate on
  // scroll; CONFIRM real numbers before launch (see JUDGEMENT_CALLS.md).
  stats: {
    completedRepairs: 2000,   // placeholder → "2,000+"
    happyCustomersPct: 98,    // placeholder → "98%"
    panelsResprayed: 5,       // placeholder, thousands → "5K+"
    yearsExperience: 10,      // placeholder → "10+"
  },

  // Trust anchor: 3 real, verbatim 5-star Google reviews on file.
  rating: { value: '5.0', count: 3, source: 'Google' },

  // Google — query-based links (no API key needed).
  googleReviewsUrl: 'https://www.google.com/search?q=kensons+garage',
  googleMapsEmbed:
    'https://www.google.com/maps?q=Kensons+Garage,+Arch+2,+173+Ferndale+Road,+London+SW9+8BA&z=15&output=embed',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Kensons+Garage+Arch+2+173+Ferndale+Road+London+SW9+8BA',
  googleDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=173+Ferndale+Road+London+SW9+8BA',
};

// ── Link helpers ──────────────────────────────────────────────
export const telLandline = `tel:${site.phoneLandlineIntl}`; // secondary 07730
export const telMobile = `tel:${site.phoneMobileIntl}`;     // primary 07950
export const telPrimary = telMobile;
export const telSecondary = telLandline;
export const mailLink = `mailto:${site.email}`;
export const whatsappLink = `https://wa.me/${site.phoneMobileDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function whatsappFor(subject: string) {
  return `https://wa.me/${site.phoneMobileDigits}?text=${encodeURIComponent(subject)}`;
}
export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// ── Navigation ────────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'All Services' },
      { href: '/services/accident-repair', label: 'Accident Repair & Restoration' },
      { href: '/services/resprays', label: 'Full & Partial Resprays' },
      { href: '/services/insurance-claims', label: 'Insurance & Claims Work' },
      { href: '/services/servicing', label: 'Vehicle Servicing & Maintenance' },
      { href: '/services/brakes-wheels', label: 'Brakes, Wheels & Rims' },
      { href: '/services/customisation', label: 'Customisation & Interiors' },
    ],
  },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const legalNav = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

// ── Trust signals (hero strip) ────────────────────────────────
export const trustSignals = [
  'Family Run',
  'Insurance Approved',
  'South London',
  'No Job Too Big Or Small',
];
