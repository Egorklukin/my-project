export interface Book {
  id: number;
  title: string;
  author: string;
  status: "want" | "reading" | "done";
  rating?: number;
  note?: string;
  cover?: string;
}
