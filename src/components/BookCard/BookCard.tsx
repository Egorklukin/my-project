import styled from "@emotion/styled";
import type {
  Book,
  StatusStyleProps,
  StatusVariant,
} from "../../types/BookType";
import {
  Card,
  CardContent,
  TitleCard,
  AuthorCard,
  StatusCard,
  CoverCard,
  RaitingCard,
  NoRaitingCard,
  NoteCard,
  ImgCard,
  ContainerCard,
  CoverImgCard,
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

  return (
    <Card>
      <CoverCard status={status}>
        <CoverImgCard src={cover} />
      </CoverCard>
      <CardContent>
        <TitleCard length={title.length}>{title}</TitleCard>
        <ContainerCard>
          <AuthorCard>{author}</AuthorCard>
          <ImgCard src="src\assets\author.png" width={15} height={15} />
        </ContainerCard>
        {status == "want" || status == "reading" ? (
          <NoRaitingCard>Вы еще не прочитали</NoRaitingCard>
        ) : (
          <ContainerCard>
            <ImgCard src="src\assets\raiting.png" width={15} height={15} />
            <RaitingCard>{rating || "Вы не оставили отзыв"}</RaitingCard>
          </ContainerCard>
        )}
        {note && (
          <ContainerCard>
            <ImgCard src="src\assets\note.png" width={15} height={15} />
            <NoteCard>{note}</NoteCard>
          </ContainerCard>
        )}
        <ContainerCard>
          <ImgCard src={getUrlImg[status]} width={15} height={15} />
          <StatusCard status={status}>{formatStatus[status]}</StatusCard>
        </ContainerCard>
      </CardContent>
    </Card>
  );
}
