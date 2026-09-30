import "./App.css";
import { Book } from "./Book";
import { BookList } from "./BookList";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <>
      <Header />
      <h1>Hello, world!</h1>
      <BookList />
      <Book />

      <Footer />
    </>
  );
}
export default App;
