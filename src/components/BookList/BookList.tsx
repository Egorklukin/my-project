import styled from "@emotion/styled";
import type { BookListProps } from "../../props/BookListProps";
import { BookCard } from "../BookCard/BookCard";

export function BookList(props: BookListProps) {
  const ListSection = styled.section``;
  const ListTitle = styled.h2``;
  const BookList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  const Placeholder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 5px 10px;
    margin: 20px 10px;
  `;
  const PlaceholderTitle = styled.h2``;
  const PlaceholderDescrition = styled.div``;

  const { books, deleteBook } = props;
  return (
    <ListSection>
      <ListTitle>Список книг</ListTitle>
      <BookList>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard book={book} key={book.id} deleteBook={deleteBook} />
          ))
        ) : (
          <Placeholder>
            <PlaceholderTitle>Список книг пуст</PlaceholderTitle>
            <PlaceholderDescrition>
              Вы не добавили ни одной книги.
              <br />
              Добавьте книгу в форме ниже
            </PlaceholderDescrition>
          </Placeholder>
        )}
      </BookList>
    </ListSection>
  );
}
