import type { BookCardProps } from "../../props/BookCardProps";
import { BookCard } from "../BookCard/BookCard";
import "./BoookList.css";

export function BookList(props: BookCardProps) {
  return (
    <section>
      <h2>Список книг</h2>
      <div className="list">
        {props.books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </section>
  );
}
