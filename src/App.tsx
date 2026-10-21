import { useState } from "react";
import "./App.css";
import { BookAddForm } from "./components/BookAddForm/BookAddForm";
import { BookList } from "./components/BookList/BookList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Stats } from "./components/Stats/Stats";
import { initialBooks } from "./helpers/initialBooks";
import type { UserDataType } from "./types/UserDataType";
import type { Book } from "./types/BookType";
import styled from "@emotion/styled";
import { TaskDemo } from "./Demo/TaskDemo";

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const App = styled.section`
    padding: 20px 20px;
  `;

  function deleteBook(id: number): void {
    const newBooks = books.filter((b) => {
      if (b.id !== id) return b;
    });
    setBooks(newBooks);
  }

  function addBook(newBook: Book): void {
    console.log(books);
    return setBooks((books) => [...books, newBook]);
  }

  return (
    <App>
      <Header />
      <Stats books={books} />
      <BookList books={books} deleteBook={deleteBook} />
      <BookAddForm addBook={addBook} id={books.length + 1} />

      <Footer />
    </App>
  );
}
export default App;
