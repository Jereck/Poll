// types/poll.ts
export interface PollOption {
  id?: number;
  text: string;
  voteCount?: number;
}

export interface Poll {
  id?: string;
  question: string;
  options: PollOption[];
}
