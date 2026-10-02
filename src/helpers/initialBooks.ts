import type { Book } from "../types/BookType";

export const initialBooks: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "Джордж Оруэлл",
    status: "done",
    rating: 0,
    note: "Сильная антиутопия.",
    cover: "https://cdn.litres.ru/pub/c/cover_415/67066479",
  },
  {
    id: 2,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    status: "done",
    cover: "https://cdn.litres.ru/pub/c/cover_415/67066479",
    rating: 3,
  },
  {
    id: 3,
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    status: "want",
    cover: "https://cdn.litres.ru/pub/c/cover_415/67066479",
    rating: 3,
  },
  {
    id: 4,
    title: "Лолита",
    author: "Дж. К. Роулинг",
    status: "reading",
    cover: "https://cdn.litres.ru/pub/c/cover_415/67066479",
    rating: 3,
  },
];
