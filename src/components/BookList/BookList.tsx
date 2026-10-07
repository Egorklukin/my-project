import styled from "@emotion/styled";
import type { BookCardProps } from "../../props/BookCardProps";
import { BookCard } from "../BookCard/BookCard";

export function BookList(props: BookCardProps) {
  const ListSection = styled.section``;
  const ListTitle = styled.h2``;
  const BookList = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const { books } = props;
  return (
    <ListSection>
      <ListTitle>Список книг</ListTitle>
      <BookList>
        {books.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </BookList>
    </ListSection>
  );
}
