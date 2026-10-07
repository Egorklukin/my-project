import styled from "@emotion/styled";

export function BookAddForm() {
  const FormSection = styled.section``;
  const Form = styled.form``;
  const FormTitle = styled.h2``;
  const FormLabel = styled.label``;
  const FormField = styled.input``;
  const FormButton = styled.button``;
  const FormSelect = styled.select``;
  const FormSelectOption = styled.option``;
  const FormContainer = styled.div``;

  return (
    <FormSection>
      <Form>
        <FormTitle>Добавить книгу</FormTitle>
        <FormContainer>
          <FormLabel htmlFor="name">Название</FormLabel>
          <FormField id="name"></FormField>
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="author">Автор</FormLabel>
          <FormField id="author"></FormField>
        </FormContainer>
        <FormSelect>
          <FormSelectOption value="want">Хочу прочитать</FormSelectOption>
          <FormSelectOption value="reading">Читаю сейчас</FormSelectOption>
          <FormSelectOption value="done">Прочитано</FormSelectOption>
        </FormSelect>
        <FormButton type="submit" name="add-button">
          Добавить книгу
        </FormButton>
      </Form>
    </FormSection>
  );
}
