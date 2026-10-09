export interface Book {
  id: number;
  title: string;
  author: string;
  status: StatusVariant;
  rating?: number;
  note?: string;
  cover?: string;
}

export type StatusVariant = "want" | "reading" | "done";

export type StatusStyleProps = {
  status: StatusVariant;
};
