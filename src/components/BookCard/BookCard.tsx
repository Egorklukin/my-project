import type { Book } from "../../types/BookType";
import "./BookCard.css";

const formatStatus = {
  want: "Запланировано",
  reading: "В процессе",
  done: "Прочитано",
};

const getUrlImg = {
  want: "src/assets/want.png",
  reading: "src/assets/reading.png",
  done: "src/assets/done.png",
};

export function BookCard(props: { book: Book }) {
  const { title, author, status, rating, note, cover } = props.book;
  return (
    <article className="card">
      <div className="card__cover">
        <img src={cover} />
      </div>
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <div className="container-author container">
          <h2 className="card__author">{author}</h2>
          <img src="src\assets\author.png" width={15} height={15} />
        </div>
        {status == "want" || status == "reading" ? (
          <h2 className="card__rating no-rating">Вы еще не прочитали</h2>
        ) : (
          <div className="container-rating container">
            <img src="src\assets\raiting.png" width={15} height={15} />
            <h2 className="card__rating">{rating || "Вы не оставили отзыв"}</h2>
          </div>
        )}
        {!note || (
          <div className="container-note container">
            <img src="src\assets\note.png" width={15} height={15} />
            <h2 className="card___note">{note}</h2>
          </div>
        )}
        <div className="container-status container">
          <img src={getUrlImg[status]} width={15} height={15} />
          <h2 className="card__status">{formatStatus[status]}</h2>
        </div>
      </div>
    </article>
  );
}
