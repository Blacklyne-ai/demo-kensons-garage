// ─────────────────────────────────────────────────────────────
// Editorial content — anchored to VERBATIM copy from the live
// kensonsgarage.com (homepage, /about, /services, /gallery FAQs).
// Nothing invented. UK English. "Maintenance" corrects the
// original "Maintainence" typo (see JUDGEMENT_CALLS.md).
// ─────────────────────────────────────────────────────────────

// ── 4-step repair process (verbatim wording) ──────────────────
export interface Step { n: string; title: string; body: string; icon: string; }

export const processTitle = 'Simple & Hassle Free Repairs';
export const processSteps: Step[] = [
  { n: '01', title: 'Send us photos', body: 'Send us photos of the damage, call or WhatsApp us.', icon: 'Camera' },
  { n: '02', title: 'Get your estimate', body: 'Receive a clear estimate and advice.', icon: 'FileText' },
  { n: '03', title: 'Book your repair', body: 'Book your repair at a convenient time.', icon: 'Calendar' },
  { n: '04', title: 'Collect, restored', body: 'Collect your vehicle fully restored.', icon: 'CircleCheck' },
];

// ── "Trust Your Car to Our Skilled Technicians" (homepage list) ─
export const trustListTitle = 'Trust Your Car to Our Skilled Technicians';
export interface TrustItem { label: string; icon: string; }
export const trustList: TrustItem[] = [
  { label: 'Accident repair and insurance work', icon: 'Hammer' },
  { label: 'Dent and scratch repair', icon: 'CircleDot' },
  { label: 'Full and partial resprays', icon: 'SprayCan' },
  { label: 'Vehicle servicing & maintenance', icon: 'Settings' },
  { label: 'Brakes, Wheels & Rims', icon: 'Disc' },
  { label: 'Local trusted garage', icon: 'MapPin' },
  { label: 'Fast turnaround times', icon: 'Clock' },
  { label: 'Customisation & interiors', icon: 'Sparkles' },
];

// ── Why Choose Us (verbatim intro + 5 verbatim bullets) ────────
export const whyIntro =
  'We combine family-run care with expert workmanship, delivering precision, reliability, and peace of mind every time.';

export interface WhyItem { title: string; body: string; icon: string; }
export const whyChooseUs: WhyItem[] = [
  { title: 'Skilled and experienced technicians', body: 'A skilled, experienced team that takes extreme pride in its workmanship on every job.', icon: 'Award' },
  { title: 'High quality materials and finishes', body: 'Quality materials and advanced paint-matching for finishes that look factory-fresh.', icon: 'BadgeCheck' },
  { title: 'Clear communication and fair pricing', body: 'Honest advice and a clear estimate up front — the final bill matches the quote.', icon: 'Handshake' },
  { title: 'Insurance and private work accepted', body: 'We work with private customers, insurers and fleets, handling claims directly.', icon: 'ShieldCheck' },
  { title: 'Local garage with a strong reputation', body: 'A Brixton reputation built through word of mouth and recommendations alone.', icon: 'MapPin' },
];

// ── About teaser (homepage "Craftsmanship You Can Trust" — verbatim) ─
export const aboutTeaser = {
  title: 'Craftsmanship You Can Trust',
  body: [
    'At Kensons Garage, we specialise in high quality vehicle body repairs and refinishing. From minor scratches to full accident damage repairs, every job is handled with care, precision, and attention to detail.',
    'We work with private customers, insurers, and fleets, delivering reliable repairs that restore your vehicle to its best condition.',
  ],
};

// ── Full About story (verbatim from /about) ────────────────────
export const aboutStory: string[] = [
  'Kensons Garage is a family-run business specialising in high-quality vehicle body repairs and auto collision damage restoration. Our slogan, “This is Art,” reflects the precision, care, and attention to detail we bring to every job, making damage invisible and restoring vehicles to their best condition.',
  'From minor scratches and refinishing to full accident damage repairs, every vehicle is handled with pride and craftsmanship. Whether you’re a private customer, insurer, or fleet operator, you can have complete peace of mind knowing your vehicle is in the hands of a reputable and experienced garage.',
  'Based in Brixton, SW9, we provide affordable and reliable body repair services to drivers across south London, including Clapham SW4, Streatham SW16, Dulwich SE19, and surrounding areas. As a family business, we take extreme pride in our workmanship, and our commitment to quality has helped us build a strong reputation through word of mouth and recommendations alone.',
  'This dedication has earned the trust of first-time customers and the loyalty of many returning clients — proof that at Kensons Garage, this truly is art.',
];

// ── Quick-quote band (verbatim) ────────────────────────────────
export const quickQuote = {
  title: 'Need a Repair Quote?',
  body: 'Call us today or send photos for a fast and honest estimate.',
};

// ── Gallery copy (verbatim) ────────────────────────────────────
export const galleryIntro =
  'Take a closer look at the work we do for our customers. From minor scratches to major repairs — this is art.';
export const galleryClosing =
  'From dents to flawless finishes, we bring your vehicle back to its best. Our team handles every repair with precision and care. Contact us today for your free quote and experience the difference in quality restoration.';

// ── FAQs (all 13, verbatim from /gallery#FAQ) ──────────────────
export interface Faq { q: string; a: string; }
export const faqs: Faq[] = [
  { q: 'What types of damage can you repair?', a: 'We handle everything from minor scratches and dents to major collision damage. Our team restores panels, paintwork, and structural repairs to bring your vehicle back to its original condition.' },
  { q: 'How long will my repair take?', a: 'Repair times depend on the extent of the damage. Minor scratches may take a few hours / a day or two, while larger accident repairs can take several days. We always provide an estimated timeline before starting work.' },
  { q: 'Do you handle insurance claims?', a: 'Yes. We work directly with insurance companies to ensure a smooth claims process.' },
  { q: 'Can you match my car’s paint exactly?', a: 'Absolutely. Using advanced paint-matching technology, we ensure your vehicle’s finish looks seamless and matches the original colour perfectly.' },
  { q: 'Can I get a quote before committing to repairs?', a: 'Definitely. We provide free, no-obligation quotes so you know the cost and scope of repairs before any work begins.' },
  { q: 'Do you offer a mobile service?', a: 'Depending on the situation, we may be able to provide a mobile service to assist your vehicle on-site. For more extensive damage, we can also arrange flatbed collection to bring your vehicle safely to our garage for repairs.' },
  { q: 'Do I need an appointment, or do you accept walk-ins?', a: 'Walk-ins are welcome, especially for minor damage that may be repaired the same day. It’s always best for us to see the damage in person, so larger repairs will be scheduled for a convenient date to ensure we have the right time and resources.' },
  { q: 'Do you offer a warranty on repairs?', a: 'Yes. All our repairs come with a workmanship guarantee, giving you peace of mind that the work is done to the highest standards. Please note, this guarantee does not cover new damage from accidents, wear and tear, or issues unrelated to the original repair.' },
  { q: 'Do you offer additional services like polishing?', a: 'Yes. In addition to collision repairs, we offer polishing, waxing, rim refurbishment, and minor cosmetic enhancements to keep your vehicle looking its best. All vehicles are washed after repairs as standard.' },
  { q: 'What should I do immediately after an accident?', a: 'Ensure everyone is safe and exchange insurance information if necessary. Bring your vehicle to us as soon as possible so we can assess the damage and advise on repairs.' },
  { q: 'Can you repair all makes and models?', a: 'Yes. Our team has experience working with vehicles of all makes and models, including cars, SUVs, and light commercial vehicles. We use industry-standard techniques to ensure every repair meets the manufacturer’s specifications.' },
  { q: 'What payment methods do you accept?', a: 'We offer flexible payment options, including BACS transfers, secure online payment links for convenience, and a card terminal for in-person payments. Soon, we’ll also be offering Klarna for flexible payment options.' },
];

// ── Get in touch (contact intro) ───────────────────────────────
export const getInTouch = {
  title: 'Get in touch for a quote, advice, or to book your repair.',
  body: [
    'Send us clear photos of the damage and we will get back to you with an estimate as soon as possible.',
    'Call or WhatsApp the team, drop us an email, or pop into the workshop at Arch 2 on Ferndale Road.',
  ],
};
