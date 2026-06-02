// ─────────────────────────────────────────────────────────────
// Reviews — the 3 REAL, verbatim Google reviews shown on the live
// Kensons homepage, each linked to the Google Maps profile. Used
// exactly as written. Sheldon (lead/owner) is named in two of them.
// No invented or edited reviews. (Per the Google-Reviews-only rule.)
// ─────────────────────────────────────────────────────────────
import { site } from './site';

export interface Review {
  name: string;
  vehicle: string; // make/model subtitle
  quote: string; // verbatim
  rating: number;
  source: 'Google';
}

export const reviews: Review[] = [
  {
    name: 'Niels Busink',
    vehicle: 'Ford S-Max owner',
    rating: 5,
    source: 'Google',
    quote:
      "Outstanding service on our Ford S-Max which had several dents, scratches, a panel replacement and a broken wing mirror. Kensons are wonderful people who went out of their way to do a great job. I'm really, really happy with the result which was even better than expected. The job was finished on time and the final bill was exactly as quoted at the outset.",
  },
  {
    name: 'Lana Price',
    vehicle: 'Lexus NX owner',
    rating: 5,
    source: 'Google',
    quote:
      'Sheldon done a great job on my car. He completed the job within a few days and kept me updated. Car was also washed on completion. I have another repair on my car and will definitely take it back to his garage. I would highly recommend Kensons Auto repairs.',
  },
  {
    name: 'Oliver Munns',
    vehicle: 'MG owner',
    rating: 5,
    source: 'Google',
    quote:
      "Highly recommend using Kensons, I cannot speak highly enough of Sheldon and the team. I had a minor issue and was worried that a garage would see it as not worth their time but this wasn't the case at all. Kensons are definitely a 'no job too big or too small' shop. I was able to bring my car in and get a formal quote the next day. Work was done to perfection and customer service was excellent throughout. Thank you for the excellent service and all the best as you continue to grow your business.",
  },
];

export const reviewsMeta = {
  source: 'Google',
  rating: '5.0',
  count: reviews.length,
  url: site.googleReviewsUrl,
  intro: 'Real feedback from customers who trust us with their vehicles.',
};

export function reviewBy(name: string) {
  return reviews.find((r) => r.name === name);
}
