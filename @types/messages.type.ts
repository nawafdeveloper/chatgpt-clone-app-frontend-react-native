export type Sender = 'user' | 'ai';

export interface Message {
  id: string;
  sender: Sender;
  content: string;
  timestamp: string;
}