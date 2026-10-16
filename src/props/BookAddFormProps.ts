import type { Book } from "../types/BookType";

export interface BookAddFormProps {
  addBook: (addBook: Book) => void;
  id: number;
}
