// Type declarations for physiology topics data

interface Topic {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  mcqs?: string[];
  [key: string]: unknown;
}

declare const topicsData: Topic[];
export default topicsData;

export const mcqFilters: {
  id: string;
  name: string;
  description: string;
  topics: number[];
}[];
