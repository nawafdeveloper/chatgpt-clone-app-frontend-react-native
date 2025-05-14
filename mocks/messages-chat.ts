import { Message } from "@/@types/messages.type";

export const mockMessages: Message[] = [
  {
    id: '1',
    sender: 'user',
    content: 'Hey, can you help me write a summary?',
    timestamp: '2025-05-11T10:00:00Z',
  },
  {
    id: '2',
    sender: 'ai',
    content: 'Of course! What would you like me to summarize?',
    timestamp: '2025-05-11T10:00:03Z',
  },
  {
    id: '3',
    sender: 'user',
    content: 'A news article about climate change.',
    timestamp: '2025-05-11T10:00:10Z',
  },
  {
    id: '4',
    sender: 'ai',
    content:
      'Got it. Please paste the article here or provide a brief overview.',
    timestamp: '2025-05-11T10:00:14Z',
  },
  {
    id: '5',
    sender: 'user',
    content:
      'Sure, here’s a summary: Scientists warn that global temperatures are on track to rise above 1.5°C unless emissions are drastically cut.',
    timestamp: '2025-05-11T10:00:30Z',
  },
  {
    id: '6',
    sender: 'ai',
    content:
      'Here’s a short summary: Global temperatures may exceed 1.5°C unless significant emission reductions occur, scientists caution.',
    timestamp: '2025-05-11T10:00:38Z',
  },
];
