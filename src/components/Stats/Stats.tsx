import styled from "@emotion/styled";
import type { Book, StatusVariant } from "../../types/BookType";

const StatsWrapper = styled.div``;
const StatsSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
`;
const StatCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px 10px;
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;
const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export function Stats({ books }: { books: Book[] }) {
  const total = books.length;
  function getBook(status: StatusVariant): number {
    return books.filter((b) => b.status === status).length;
  }
  const getDone = getBook("done");
  const getReading = getBook("reading");
  const getWant = getBook("want");
  return (
    <StatsWrapper>
      <StatsSection>
        <StatCard>
          <Label>Общее количество:</Label>
          <Value>{total} шт</Value>
        </StatCard>
        <StatCard>
          <Label>Прочитано:</Label>
          <Value>{getDone} шт</Value>
        </StatCard>
        <StatCard>
          <Label>Планируется прочесть:</Label>
          <Value>{getWant} шт</Value>
        </StatCard>
        <StatCard>
          <Label>Читаете:</Label>
          <Value>{getReading} шт</Value>
        </StatCard>
      </StatsSection>
    </StatsWrapper>
  );
}
