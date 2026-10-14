import { type Book } from "../types/BookType";

export interface BookListProps {
  books: Book[];
  deleteBook: (id: number) => void;
}
