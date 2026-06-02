// ─────────────────────────────────────────────────────────────
// The six services Kensons Garage offers. Titles are the canonical
// footer names; the detail (lead, features, includes) is taken
// VERBATIM from the live /services page breakdown. Nothing invented —
// no services added, none omitted. UK English ("Maintenance" corrects
// the original "Maintainence" typo — see JUDGEMENT_CALLS.md).
// ─────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  icon: string; // Lucide name (see Icon.astro)
  image: string;
  eyebrow: string;
  tagline: string; // one line for cards
  lead: string; // intro paragraph for detail page
  features: { title: string; body: string; icon: string }[];
  includes: string[]; // "what's covered" checklist (verbatim sub-services)
  cta: string;
  metaDescription: string;
  reviewAuthor?: string; // optional: featured review on the detail page
}

export const services: Service[] = [
  {
    slug: 'accident-repair',
    href: '/services/accident-repair',
    title: 'Accident Repair & Restoration',
    navLabel: 'Accident Repair',
    icon: 'Hammer',
    image: '/images/service-1.jpg',
    eyebrow: 'Body & Collision',
    tagline: 'Professional repairs for both minor and major vehicle damage.',
    lead:
      'From minor scratches to full accident damage, every job is handled with care, precision and attention to detail — making the damage disappear and restoring your vehicle to its best condition. We work with private customers, insurers and fleets alike.',
    features: [
      { title: 'Minor & major accident repairs', body: 'Front-end, rear-end and side-impact damage returned to a straight, factory-true finish.', icon: 'Hammer' },
      { title: 'Panel replacement', body: 'When a panel is beyond repair we replace it and refinish it so the join is invisible.', icon: 'PanelTop' },
      { title: 'Scratches, scrapes & dents', body: 'From car-park knocks to deep scratches, we make everyday damage disappear.', icon: 'CircleDot' },
      { title: 'SMART repairs', body: 'Small to Medium Area Repair Technology for fast, cost-effective localised fixes.', icon: 'Sparkles' },
    ],
    includes: [
      'Scratches, scrapes & dents',
      'Minor and major accident repairs',
      'Panel replacement',
      'SMART repairs',
      'Full body restoration',
    ],
    cta: 'Get an Accident Repair Quote',
    metaDescription:
      'Accident & collision repair in South London — panel replacement, dent & scratch repair, SMART repairs and full restoration. Family-run Brixton garage.',
    reviewAuthor: 'Niels Busink',
  },
  {
    slug: 'resprays',
    href: '/services/resprays',
    title: 'Full & Partial Resprays',
    navLabel: 'Resprays',
    icon: 'SprayCan',
    image: '/images/service-2.jpg',
    eyebrow: 'Paintwork & Finishing',
    tagline: 'High-quality finishes designed to restore and protect your vehicle.',
    lead:
      'From a single panel to a full vehicle respray, we deliver an even, durable finish with precise colour matching. Using advanced paint-matching technology, your vehicle’s finish looks seamless and matches the original colour perfectly.',
    features: [
      { title: 'Panel & full resprays', body: 'Single panels through to complete vehicle resprays, finished to a showroom standard.', icon: 'SprayCan' },
      { title: 'Exact colour matching', body: 'Advanced paint-matching technology ensures a seamless, invisible repair.', icon: 'Palette' },
      { title: 'Paint refinishing', body: 'Tired, faded or damaged paintwork brought back to a deep, even shine.', icon: 'Brush' },
      { title: 'Polishing & waxing', body: 'A finishing polish and wax — and every vehicle is washed after repairs as standard.', icon: 'Sparkles' },
    ],
    includes: [
      'Panel spraying',
      'Full resprays',
      'Paint refinishing',
      'Polishing and waxing',
    ],
    cta: 'Get a Respray Quote',
    metaDescription:
      'Full & partial car resprays in South London. Panel spraying, paint refinishing, polishing and exact colour matching from a family-run Brixton body shop.',
  },
  {
    slug: 'insurance-claims',
    href: '/services/insurance-claims',
    title: 'Insurance & Claims Work',
    navLabel: 'Insurance & Claims',
    icon: 'FileCheck',
    image: '/images/service-3.jpg',
    eyebrow: 'Hassle-Free Claims',
    tagline: 'Hassle-free repairs carried out in line with insurance requirements.',
    lead:
      'We work directly with insurance companies to ensure a smooth claims process. From the first damage assessment to the finished repair, we handle the work in line with insurer requirements so you can get back on the road with minimal fuss.',
    features: [
      { title: 'Insurance-approved repairs', body: 'Repairs carried out to insurer standards, with the paperwork handled properly.', icon: 'ShieldCheck' },
      { title: 'Damage assessments', body: 'A clear, honest assessment of the damage and what the repair involves.', icon: 'Search' },
      { title: 'Claims support', body: 'We liaise directly with your insurer to keep the claims process moving.', icon: 'FileText' },
      { title: 'Fast turnaround', body: 'We work efficiently to return your vehicle as quickly as the repair allows.', icon: 'Clock' },
    ],
    includes: [
      'Insurance-approved repairs',
      'Damage assessments',
      'Claims support',
      'Fast turnaround',
    ],
    cta: 'Start an Insurance Claim',
    metaDescription:
      'Insurance & claims body repair in South London. Insurance-approved repairs, damage assessments and claims support handled directly with your insurer.',
  },
  {
    slug: 'servicing',
    href: '/services/servicing',
    title: 'Vehicle Servicing & Maintenance',
    navLabel: 'Servicing',
    icon: 'Settings',
    image: '/images/service-4.jpg',
    eyebrow: 'Servicing',
    tagline: 'Routine servicing to keep your vehicle safe and reliable.',
    lead:
      'Beyond bodywork, we keep your vehicle running safely with routine servicing and thorough health checks — the same care and attention to detail we bring to every repair.',
    features: [
      { title: 'General servicing', body: 'Routine servicing to keep your vehicle running smoothly and reliably.', icon: 'Settings' },
      { title: 'Safety & health checks', body: 'Thorough checks of the key safety items so you can drive with confidence.', icon: 'Gauge' },
      { title: 'Honest advice', body: 'Clear communication and fair pricing — we tell you what needs doing and what can wait.', icon: 'Handshake' },
      { title: 'One trusted garage', body: 'Servicing and bodywork under one roof, by a team that knows your vehicle.', icon: 'Wrench' },
    ],
    includes: [
      'General servicing',
      'Safety and health checks',
    ],
    cta: 'Book a Service',
    metaDescription:
      'Vehicle servicing & maintenance in South London. General servicing plus safety and health checks from a family-run Brixton garage. Honest pricing.',
  },
  {
    slug: 'brakes-wheels',
    href: '/services/brakes-wheels',
    title: 'Brakes, Wheels & Rims',
    navLabel: 'Brakes & Wheels',
    icon: 'Disc',
    image: '/images/service-5.jpg',
    eyebrow: 'Safety & Wheels',
    tagline: 'Safety-critical repairs and cosmetic wheel restoration.',
    lead:
      'Brakes are safety-critical and wheels are the first thing people notice. We cover both — from brake inspections and replacements to kerbed-rim repairs and full wheel refurbishment.',
    features: [
      { title: 'Brake inspections & repairs', body: 'Safety-critical brake checks and repairs to keep you stopping safely.', icon: 'Disc' },
      { title: 'Pads & disc replacement', body: 'Worn brake pads and discs replaced with quality parts.', icon: 'CircleDot' },
      { title: 'Rim repairs', body: 'Kerbed and scuffed rims repaired and made good as new.', icon: 'CircleCheck' },
      { title: 'Wheel refurbishment', body: 'Full cosmetic wheel refurbishment for a fresh, factory-style finish.', icon: 'Sparkles' },
    ],
    includes: [
      'Brake inspections and repairs',
      'Brake pad and disc replacement',
      'Rim repairs',
      'Wheel refurbishment',
    ],
    cta: 'Ask About Brakes & Wheels',
    metaDescription:
      'Brakes, wheels & rims in South London. Brake inspections, pad and disc replacement, rim repairs and wheel refurbishment from a family-run Brixton garage.',
  },
  {
    slug: 'customisation',
    href: '/services/customisation',
    title: 'Customisation & Interiors',
    navLabel: 'Customisation',
    icon: 'Sparkles',
    image: '/images/work-2.jpg',
    eyebrow: 'Personalisation',
    tagline: 'Personalised upgrades and interior repairs tailored to your needs.',
    lead:
      'Make it yours. From exterior modifications to interior lighting and trim repairs, we carry out personalised upgrades and interior work with the same craftsmanship we bring to every job.',
    features: [
      { title: 'Vehicle modifications', body: 'Personalised exterior and styling modifications tailored to your taste.', icon: 'Sparkles' },
      { title: 'Interior lighting', body: 'Custom interior lighting to refresh and personalise your cabin.', icon: 'Lightbulb' },
      { title: 'Interior tear repairs', body: 'Seats, trim and interior tears repaired and restored.', icon: 'Wrench' },
      { title: 'Finished with care', body: 'Every custom job is handled with the precision and pride of "This is Art".', icon: 'Star' },
    ],
    includes: [
      'Vehicle modifications',
      'Interior lighting',
      'Interior tear repairs',
    ],
    cta: 'Discuss a Custom Project',
    metaDescription:
      'Car customisation & interior work in South London. Vehicle modifications, interior lighting and interior tear repairs from a family-run Brixton body shop.',
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
