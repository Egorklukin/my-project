import type { Book } from "../types/BookType";

export interface BookListProps {
  books: Book;
  deleteBook: Book[];
}
