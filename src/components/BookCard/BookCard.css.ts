import styled from "@emotion/styled";
import type { StatusStyleProps, StatusVariant } from "../../types/BookType";

const Card = styled.article`
  gap: 10px;
  margin: 10px 20px;
  max-width: 190px;
  height: 100%;
  h1,
  h2 {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-weight: 500;
    color: black;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
`;

const TitleCard = styled.span<{ length: number }>`
  letter-spacing: normal;
  font-size: ${({ length }) => {
    if (length > 40) return "8px";
    else if (length > 28) return "10px";
    else if (length > 16) return "12px";
    else if (length <= 16) return "16px";
  }}};
`;

const AuthorCard = styled.h2`
  color: rgb(105, 105, 105);
`;

const StatusCard = styled.h2<StatusStyleProps>`
  text-wrap: nowrap;
  color: ${({ status }) => {
    if (status == "done") {
      return "green";
    }
    if (status == "reading") {
      return "yellow";
    }
    if (status == "want") {
      return "black";
    }
  }};
  background-color: ${({ status }) => {
    if (status == "done") {
      return "#2eff9622";
    }
    if (status == "reading") {
      return "rgba(252, 255, 241, 0.2)";
    }
    if (status == "want") {
      return "#dcdcdc";
    }
  }};
  border-radius: 10px;
  border: 2px solid
    ${({ status }) => {
      if (status == "done") {
        return "green";
      }
      if (status == "reading") {
        return "yellow";
      }
      if (status == "want") {
        return "black";
      }
    }};
  padding: 5px 10px;
`;

const CoverCard = styled.div<StatusStyleProps>`
  padding: 5px;
  border-radius: 15px;
  background: ${({ status }) => {
    if (status == "done") {
      return "linear-gradient(135deg, #B71C1C 0%, #000000 100%);";
    }
    if (status == "reading") {
      return "linear-gradient(135deg, #E6D3B2 0%, #5C3A21 100%);";
    }
    if (status == "want") {
      return "linear-gradient(135deg, #4A00E0 0%, #8E2DE2 100%);";
    }
  }};
`;
const CoverImgCard = styled.img`
  height: 270px;
  width: 180px;
  border-radius: 10px;
`;

const RaitingCard = styled.h2<{
  status: StatusVariant;
  rating: number | undefined;
}>`
  text-align: right;
  color: ${({ status, rating }) => {
    if (status == "want" || status == "reading") return "gray";
    else {
      if (!rating) return "gray";
    }
  }};
`;

const NoteCard = styled.h2``;

const ImgCard = styled.img<{
  url?: string;
  rating?: number | undefined;
  status?: StatusVariant;
}>`
  display: ${({ status, rating, url }) => {
    if (url) {
      if (status == "want" || status == "reading") return "none";
      else {
        if (!rating) return "none";
      }
    }
  }};
`;

const ContainerCard = styled.div<{ position?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  justify-content: ${({ position }) => {
    if (position) return position;
    else return "center";
  }};
  margin-top: 5px;
  * {
    margin: 0;
  }
`;

const DeleteButton = styled.button`
  width: 38px;
  heigth: 38px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #fffaf4;
  border: 1px solid #ded6cc;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #f3e9dd;
  }
  &:active {
    background-color: #e8d8c6;
  }
  &:focus-visible {
    border: 2px solid #8b735f;
    padding: 2px;
  }
  &:disabled {
    opasity: 0.5;
    cursor: not-allowed;
  }
`;

export {
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
};
