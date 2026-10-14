// Event details and scoring for Focodeathon. Shared by the event page, the
// home page teaser, and the printable scoresheet so they never drift apart.

export const edition = 1;
export const date = 'Saturday, January 16, 2027';

// Only printed on the certificates. The public pages keep it secret
// ("announced at the event"), so don't use this anywhere visitors can see.
export const theme = 'Command line game';
export const hours = '9:30 AM – 5:00 PM';

export const venue = {
  name: 'Harmony Library — Community Room',
  address: '4616 S Shields St, Fort Collins, CO 80526',
};

export const schedule = [
  { time: '9:30 AM', event: 'Doors open', note: 'Check in, grab a seat, get on the Wi-Fi.' },
  { time: '9:45 AM', event: 'Team formation', note: 'Pitch ideas, find your people.' },
  { time: '10:00 AM', event: 'Coding starts', note: 'Heads down. Build something.' },
  { time: '3:45 PM', event: '15 Minute Warning', note: 'Push what you have to avoid technical difficulties.' },
  { time: '4:00 PM', event: 'Code cutoff', note: 'Hands off keyboards. Final commits only.' },
  { time: '4:30 PM', event: 'Judging', note: 'Demo your project to the judges.' },
];

export const rules = [
  'Be nice to your team and other teams.',
  'No AI code generation this time. This is a for-fun-and-learning event — AI tools may be allowed at future events.',
  'Submissions started outside of the 10 AM → 4 PM coding window will be disqualified from scoring.',
];

export interface JudgingCategory {
  name: string;
  /** Used for the category's bar segment and table header row. */
  color: string;
  items: { label: string; points: number }[];
  total: number;
}

export const judging: JudgingCategory[] = [
  {
    name: 'Cross-platform functionality',
    color: '#3d5a4a',
    items: [
      { label: 'Runs on Linux', points: 1 },
      { label: 'Runs on macOS', points: 1 },
      { label: 'Runs on Windows', points: 1 },
    ],
  },
  {
    name: 'Teamwork',
    color: '#4b3f8f',
    items: [{ label: 'Has a team name', points: 1 }],
  },
  {
    name: 'Quality',
    color: '#b5532a',
    items: [
      { label: 'Implementation of the theme', points: 3 },
      { label: 'Performance', points: 2 },
      { label: 'Bug free', points: 1 },
    ],
  },
].map((c) => ({ ...c, total: c.items.reduce((sum, i) => sum + i.points, 0) }));

export const maxPoints = judging.reduce((sum, c) => sum + c.total, 0);
