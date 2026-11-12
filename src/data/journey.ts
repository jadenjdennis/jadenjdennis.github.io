/**
 * The Journey section. Edit freely: entries render top to bottom.
 * `placeholder: true` entries render with a visible TODO treatment.
 * Only add facts Jaden has confirmed.
 */
export interface JourneyEntry {
  when: string;
  title: string;
  body: string;
  placeholder?: boolean;
}

export const journey: JourneyEntry[] = [
  {
    when: 'Now',
    title: 'Exploring',
    body: 'Computer science, AI, cognitive science, and psychology, along with books and ideas.',
  },
  {
    when: 'Earlier',
    title: 'What shaped how I think',
    body: 'TODO (Jaden): the experiences, people, or turning points worth sharing. Only details you are happy to make public.',
    placeholder: true,
  },
  {
    when: 'Next',
    title: 'Where I’m heading',
    body: 'TODO (Jaden): the direction you would say out loud today, even if it is a question rather than a plan.',
    placeholder: true,
  },
];
