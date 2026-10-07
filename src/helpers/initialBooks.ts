import type { Book } from "../types/BookType";

export const initialBooks: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "Джордж Оруэлл",
    status: "done",
    rating: 0,
    note: "Сильная антиутопия.",
    cover:
      "https://avatars.mds.yandex.net/get-mpic/17699281/2a0000019d009e9670bfa2bb6a50b0b03ff8/optimize",
  },
  {
    id: 2,
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    status: "done",
    cover:
      "https://avatars.mds.yandex.net/i?id=12a26b0fb02f8f041403b2ac5bc7c297_l-5286781-images-thumbs&n=13",
    rating: 3,
  },
  {
    id: 3,
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    status: "want",
    cover:
      "https://avatars.mds.yandex.net/get-mpic/5277040/img_id5331936139505364773.jpeg/orig",
    rating: 3,
  },
  {
    id: 4,
    title: "Лолита",
    author: "Владимир Набоков",
    status: "reading",
    cover:
      "https://avatars.mds.yandex.net/i?id=513487174d900a51f19941df7a6b6eea_l-12569941-images-thumbs&n=13",
    rating: 3,
  },
];
