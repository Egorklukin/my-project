import styled from "@emotion/styled";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

const StatsWrapper = styled.div`
  margin-bottom: 20px;
`;
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
const products: Product[] = [
  { id: 1, name: "Ноутбук", quantity: 5 },
  { id: 2, name: "Смартфон", quantity: 12 },
  { id: 3, name: "Наушники", quantity: 25 },
  { id: 4, name: "Клавиатура", quantity: 8 },
  { id: 5, name: "Монитор", quantity: 3 },
];

const countProducts = products.length;
const countAvailabilityProducts = products.filter((p) => p.quantity > 0).length;
const countNoAvailabilityProducts = products.filter(
  (p) => p.quantity === 0,
).length;
const countLittleQuantityProducts = products.filter((p) => {
  if (p.quantity > 0 && p.quantity <= 5) return p;
}).length;

export function StatsDemo({
  countProducts,
  countAvailabilityProducts,
  countNoAvailabilityProducts,
  countLittleQuantityProducts,
}: {
  countProducts: number;
  countAvailabilityProducts: number;
  countNoAvailabilityProducts: number;
  countLittleQuantityProducts: number;
}) {
  return (
    <StatsWrapper>
      <StatsSection>
        <StatCard>
          <Label>общее количество товаров:</Label>
          <Value>{countProducts} шт</Value>
        </StatCard>
        <StatCard>
          <Label>количество товаров, которые есть в наличии:</Label>
          <Value>{countAvailabilityProducts} шт</Value>
        </StatCard>
        <StatCard>
          <Label>количество закончившихся товаров:</Label>
          <Value>{countNoAvailabilityProducts} шт</Value>
        </StatCard>
        <StatCard>
          <Label>количество товаров, которых осталось мало:</Label>
          <Value>{countLittleQuantityProducts} шт</Value>
        </StatCard>
      </StatsSection>
    </StatsWrapper>
  );
}

export {
  countProducts,
  countAvailabilityProducts,
  countNoAvailabilityProducts,
  countLittleQuantityProducts,
};
