import styled from "@emotion/styled";
import type { Book, StatusVariant } from "../../types/BookType";

const StatsWrapper = styled.div``;
const StatsSection = styled.section``;
const StatCard = styled.div``;
const Label = styled.div``;
const Value = styled.span``;

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
          <Label>Общее количество</Label>
          <Value>{total} шт</Value>
        </StatCard>
        <StatCard>
          <Label>Прочитано</Label>
          <Value>{getDone} шт</Value>
        </StatCard>
        <StatCard>
          <Label>Планируется прочесть</Label>
          <Value>{getWant} шт</Value>
        </StatCard>
        <StatCard>
          <Label>Читаете</Label>
          <Value>{getReading} шт</Value>
        </StatCard>
      </StatsSection>
    </StatsWrapper>
  );
}
