import styled from "@emotion/styled";

const ProfileSection = styled.section`
  padding: 20px;
`;

const Profile = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ProfileTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const ProfileLabel = styled.label`
  font-size: 16px;
  text-align: left;
  color: black;
`;

const ProfileField = styled.input`
  padding: 8px 12px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const ProfileSelect = styled.select`
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

const ProfileTextarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

const ProfileButton = styled.button`
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
const Preview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;
const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
const PreviewLabel = styled.label`
  font-size: 16px;
  text-align: left;
  color: black;
`;

const PreviewField = styled.h2`
  padding: 8px 12px;
  border: 1px solid #9c9c9c;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: blue;
  }
`;

export {
  ProfileSection,
  Profile,
  ProfileButton,
  ProfileContainer,
  ProfileField,
  ProfileTextarea,
  ProfileSelect,
  ProfileLabel,
  ProfileTitle,
  ErrorMessage,
  PreviewContainer,
  PreviewLabel,
  PreviewField,
  Preview,
};
