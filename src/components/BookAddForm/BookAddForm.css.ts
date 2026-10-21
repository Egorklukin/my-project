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

const FormLabel = styled.label<{ required?: boolean }>`
  font-size: 16px;
  text-align: left;
  color: black;
  ${({ required }) =>
    required &&
    `&::after {
    content: '*';
    color: red;
    margin-left: 4px;
    font-weight: bold;
  }`}
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

const FormTextarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  font-size: 14px;

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
  &:disabled {
    cursor: not-allowed;
    opasity: 0.5;
  }
`;
const ErrorMessage = styled.h2`
  color: red;
  font-size: 14px;
  text-align: left;
`;

export {
  FormSection,
  Form,
  FormButton,
  FormContainer,
  FormField,
  FormTextarea,
  FormSelect,
  FormLabel,
  FormTitle,
  ErrorMessage,
};
