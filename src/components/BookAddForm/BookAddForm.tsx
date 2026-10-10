import styled from "@emotion/styled";

const FormSection = styled.section`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const FormTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  text-align: left;
  color: black;
`;

const FormField = styled.input`
  padding: 8px 12px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const FormSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;
export function BookAddForm() {
  return (
    <FormSection>
      <Form>
        <FormTitle>Добавить книгу</FormTitle>
        <FormContainer>
          <FormLabel htmlFor="name">Название</FormLabel>
          <FormField id="name" placeholder="Укажите название" />
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="author">Автор</FormLabel>
          <FormField id="author" placeholder="Укажите автора" />
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="cover">Обложка</FormLabel>
          <FormField id="cover" placeholder="Укажите ссылку на обложку" />
        </FormContainer>
        <FormContainer>
          <FormSelect>
            <option value="want">Хочу прочитать</option>
            <option value="reading">Читаю сейчас</option>
            <option value="done">Прочитано</option>
          </FormSelect>
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="rating">Рейтинг</FormLabel>
          <FormField id="rating" placeholder="Укажите вашу оценку книге" />
        </FormContainer>
        <FormContainer>
          <FormButton type="submit" name="add-button">
            Добавить книгу
          </FormButton>
        </FormContainer>
      </Form>
    </FormSection>
  );
}
