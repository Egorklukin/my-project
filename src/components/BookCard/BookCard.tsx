import type { Book } from "../../types/BookType";
import styled from "@emotion/styled";

const Card = styled.article`
  gap: 10px;
  margin: 10px 20px;
  max-width: 190px;
  height: 100%;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
`;

const TitleCard = styled.h1`
  letter-spacing: normal;
  font-size: 14px;
  font-weight: 500;
`;

const AuthorCard = styled.h2`
  color: rgb(105, 105, 105);
  font-size: 14px;
  font-weight: 500;
`;

const StatusCard = styled.h2`
  text-wrap: nowrap;
  font-size: 14px;
  font-weight: 500;
`;

const CoverCard = styled.div``;

const CoverImgCard = styled.img`
  height: 270px;
  width: 180px;
  border-radius: 14px;
`;

const RaitingCard = styled.h2`
  text-align: right;
  font-size: 14px;
  font-weight: 500;
`;
const NoRaitingCard = styled.h2`
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  color: gray;
`;

const NoteCard = styled.h2`
  font-size: 14px;
  font-weight: 500;
`;

const ImgCard = styled.img``;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 5px;
  justify-content: left;
`;

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
      <CoverCard>
        <CoverImgCard src={cover} />
      </CoverCard>
      <CardContent>
        <TitleCard>{title}</TitleCard>
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
          <StatusCard>{formatStatus[status]}</StatusCard>
        </ContainerCard>
      </CardContent>
    </Card>
  );
}
