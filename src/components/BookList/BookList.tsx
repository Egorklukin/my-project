import type { BookCardProps } from "../../props/BookCardProps";
import { BookCard } from "../BookCard/BookCard";
import "./BoookList.css";

export function BookList(props: BookCardProps) {
  const { books } = props;
  return (
    <section>
      <h2>Список книг</h2>
      <div className="list">
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </section>
  );
}
