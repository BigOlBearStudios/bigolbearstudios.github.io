// Central config for the site. Most day-to-day edits (new tabs, books,
// store locations) should only need to touch this file.

export interface NavItem {
  label: string;
  href: string;
  /**
   * Set to true to get a tab whose page is auto-generated from the
   * "Under Construction" template (see src/pages/[slug].astro).
   * `href` must then be a single path segment like "/merch".
   */
  underConstruction?: boolean;
  /** Optional one-liner shown on the under-construction page. */
  teaser?: string;
}

// Order here is the order in the header. Keep Contact last.
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: '$10 Adventures', href: '/ten-dollar-adventures' },
  { label: 'Consulting', href: '/consulting' },
  {
    label: 'FoCodeathon',
    href: '/focodeathon',
    underConstruction: true,
    teaser: 'A Fort Collins build-a-thon is brewing. Bring a laptop and a snack.',
  },
  { label: 'Contact Us', href: '/contact' },
];

// Extra links that only appear in the footer, after the main nav.
export const footerNav: NavItem[] = [{ label: 'AI Use Disclosure', href: '/ai-use-disclosure' }];

export const portfolioUrl = 'https://threehoolagins.github.io';

// The contact email is stored split + reversed so it isn't sitting in the
// HTML as plain text for scrapers. It's reassembled in the browser only
// after the human check on /contact passes.
export const emailParts = ['moc.liamg', '02mahgninnucbc'];

// Every $10 Adventure shares the same format, so specs live here once.
export const adventureSpecs = {
  players: '3–5 players',
  playTime: '3–5 hours',
  prep: '30 minutes or less',
  includes: 'Tokens, maps & 5 premade character sheets',
};

export interface Book {
  slug: string;
  title: string;
  tagline: string;
  blurb: string;
  /** Path under /public, e.g. "/images/books/foo.jpg". Placeholder art is drawn if omitted. */
  cover?: string;
  /** Placeholder cover color. */
  color: string;
  featured?: boolean;
  /** Title is a working title — shows an "under construction" badge. */
  workingTitle?: boolean;
  /** Who made it. Anything left out shows as "Coming soon". */
  credits?: { story?: string; art?: string; printing?: string };
  /** Fake layout-testing entry: shown in `npm run dev`, hidden from the production build. */
  debug?: boolean;
}

const allBooks: Book[] = [
  {
    slug: 'wigglywugs-wizardly-tower',
    title: 'Wigglywug’s Wizardly Tower',
    tagline: 'Break in. Grab the keys. Get out. Mind the traps.',
    blurb:
      'Just outside the town of Rivershire stands the tower of Wigglywug — local legend, ' +
      'accomplished wizard, and very much a senior citizen. He’s teleported himself out of his ' +
      'tower… without his keys. All he asks is for a brave group of adventurers to break in, get ' +
      'his keys, and get out. Small problem, however: Wigglywug is a professional at traps.',
    color: '#4b3f8f',
    featured: true,
    workingTitle: true,
  },
  {
    slug: 'the-honey-heist',
    title: 'The Honey Heist',
    tagline: 'One hive. One night. Zero bees left un-bamboozled.',
    blurb:
      'A heist one-shot where the party must sneak into the royal ' +
      'apiary and make off with the queen’s honey before the beekeepers wake.',
    color: '#c8862a',
    debug: true,
  },
  {
    slug: 'cabin-at-the-edge',
    title: 'Cabin at the Edge of the Map',
    tagline: 'The trail ends. The story doesn’t.',
    blurb:
      'A snowed-in mystery one-shot. Ration supplies, piece together ' +
      'clues, and decide who to trust when the radio crackles at midnight.',
    color: '#3d5a4a',
    debug: true,
  },
  {
    slug: 'starlight-diner',
    title: 'Starlight Diner',
    tagline: 'Open 24 hours. Some of them are haunted.',
    blurb:
      'The party takes the late shift at a roadside inn where the regulars ' +
      'aren’t quite regular. Serve, survive, and solve a forty-year-old mystery before sunrise.',
    color: '#7a3b5c',
    debug: true,
  },
  {
    slug: 'the-lost-mine',
    title: 'The Lost Mine of Pinecone Peak',
    tagline: 'Gold, grudges, and one very suspicious mule.',
    blurb:
      'A mountain dungeon crawl: map the mine, ration your lantern oil, ' +
      'and find out what the old prospectors were really digging for.',
    color: '#5b4a35',
    debug: true,
  },
];

// Debug books only appear in dev, never on the hosted site.
export const books = allBooks.filter((b) => import.meta.env.DEV || !b.debug);

export interface Location {
  name: string;
  city: string;
  address: string;
  hours: { days: string; time: string }[];
  phone?: string;
  website?: string;
  note?: string;
}

// Covers the store cards with "under construction" tape until stockists are
// confirmed. Set to false to show the locations.
export const locationsUnderConstruction = true;

// TODO: confirm hours/addresses with each store before launch.
export const locations: Location[] = [
  {
    name: 'The Gamer’s Nest',
    city: 'Longmont, CO',
    address: '1801 Sunset Pl, Ste D, Longmont, CO 80501',
    hours: [
      { days: 'Mon – Fri', time: '10am – 10pm' },
      { days: 'Saturday', time: '10am – 8pm' },
      { days: 'Sunday', time: '10am – 6pm' },
    ],
    note: 'Ask at the counter — usually shelved near the RPG section.',
  },
  {
    name: 'The Haunted Game Cafe',
    city: 'Fort Collins, CO',
    address: '3307 S College Ave, Ste 107, Fort Collins, CO 80525',
    hours: [
      { days: 'Mon – Sat', time: '10am – 10pm' },
      { days: 'Sunday', time: '12pm – 7pm' },
    ],
    note: 'Grab a coffee and play one at the table before you buy.',
  },
];

export const directionsUrl = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
