import type { Book } from "../../types/BookType";
import {
  Card,
  CardContent,
  TitleCard,
  AuthorCard,
  StatusCard,
  CoverCard,
  RaitingCard,
  NoteCard,
  ImgCard,
  ContainerCard,
  CoverImgCard,
  DeleteButton,
} from "./BookCard.css.ts";

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
  function setTextOfRating() {
    if (status == "want" || status == "reading") return "Вы еще не прочитали";
    else {
      if (!rating) return "Вы не оставили отзыв";
      else return rating;
    }
  }

  return (
    <Card>
      <CoverCard status={status}>
        <CoverImgCard src={cover} />
      </CoverCard>
      <CardContent>
        <ContainerCard>
          <TitleCard length={title.length}>{title}</TitleCard>
        </ContainerCard>
        <ContainerCard position="left">
          <AuthorCard>{author}</AuthorCard>
          <ImgCard src="src\assets\author.png" width={15} height={15} />
        </ContainerCard>

        <ContainerCard position="right">
          <ImgCard
            src="src\assets\raiting.png"
            width={15}
            height={15}
            url="src\assets\raiting.png"
            rating={rating}
            status={status}
          />
          <RaitingCard status={status} rating={rating}>
            {setTextOfRating()}
          </RaitingCard>
        </ContainerCard>
        {note && (
          <ContainerCard position="left">
            <ImgCard src="src\assets\note.png" width={15} height={15} />
            <NoteCard>{note}</NoteCard>
          </ContainerCard>
        )}
        <ContainerCard position="left">
          <ImgCard src={getUrlImg[status]} width={15} height={15} />
          <StatusCard status={status}>{formatStatus[status]}</StatusCard>
        </ContainerCard>
        <ContainerCard position="right">
          <DeleteButton type="button" aria-label="Удалить книгу">
            <ImgCard src="src\assets\bin.png" width={18} height={18} />
          </DeleteButton>
        </ContainerCard>
      </CardContent>
    </Card>
  );
}
