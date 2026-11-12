/**
 * The Interests & Exploration section. `note` is optional: add a sentence only when it is true and yours.
 */
export interface Interest {
  name: string;
  note?: string;
}
export interface InterestGroup {
  label: string;
  items: Interest[];
  /** Shown under the group as a visible TODO until Jaden fills it in. */
  todo?: string;
}

export const interestGroups: InterestGroup[] = [
  {
    label: 'Learning',
    items: [
      { name: 'Computer science' },
      { name: 'Artificial intelligence' },
      { name: 'Cognitive science' },
      { name: 'Psychology' },
      { name: 'Books & ideas' },
    ],
    todo: 'TODO (Jaden): what are you reading or working through right now?',
  },
  {
    label: 'Play',
    items: [
      { name: 'Basketball' },
      { name: 'Detroit Lions', note: 'Scores live in the footer.' },
      { name: 'Detroit Pistons', note: 'Also in the footer.' },
    ],
  },
  {
    label: 'Outlook',
    items: [
      {
        name: 'Faith',
        note: 'My Christian faith is meaningful to me and shapes my outlook.',
      },
    ],
  },
];
