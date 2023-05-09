export type Score = {
  name: string;
  value: number;
};

export type StudentScore = {
  name: string;
  scores: Score[];
};
