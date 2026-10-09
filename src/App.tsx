import "./App.css";
import { BookAddForm } from "./components/BookAddForm/BookAddForm";
import { BookList } from "./components/BookList/BookList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Stats } from "./components/Stats/Stats";
import { initialBooks } from "./helpers/initialBooks";
import type { UserDataType } from "./types/UserDataType";

function App() {
  const userData: UserDataType[] = [
    {
      id: 1,
      username: "Egor",
      isAdmin: false,
    },
    {
      id: 2,
      username: "Ivan",
      isAdmin: false,
    },
  ];
  return (
    <>
      <Header userData={userData} />
      <Stats books={initialBooks} />
      <BookList books={initialBooks} />
      <BookAddForm />

      <Footer />
    </>
  );
}
export default App;
