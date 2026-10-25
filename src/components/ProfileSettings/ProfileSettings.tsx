import { useState, type ChangeEvent } from "react";
import {
  ProfileSection,
  Profile,
  ProfileButton,
  ProfileContainer,
  ProfileField,
  ProfileSelect,
  ProfileLabel,
  ProfileTextarea,
  ErrorMessage,
  ProfileTitle,
  PreviewField,
  PreviewLabel,
  Preview,
} from "./ProfileSettings.css.tsx";

type themeType = "light" | "dark";

export function ProfileSettings() {
  const [name, setName] = useState<string | undefined>();
  const [theme, setTheme] = useState<themeType>("light");
  const [fontSize, setFontSize] = useState<number>(16);
  const [description, setDescription] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  function resetSettings() {
    setName(undefined);
    setTheme("light");
    setFontSize(16);
    setDescription("");
    setIsVisible(true);
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  function validateFontSize() {
    if (fontSize > 11 && fontSize < 31) return true;
    return false;
  }
  const themes = {
    light: "Светлая",
    dark: "Тёмная",
  };
  return (
    <ProfileSection>
      <Profile>
        <ProfileTitle>Настройки профиля</ProfileTitle>
        <ProfileContainer>
          <ProfileLabel htmlFor="name">ФИО</ProfileLabel>
          <ProfileField
            id="name"
            value={name ?? ""}
            placeholder="Укажите ваше ФИО"
            onChange={(e) => setName(e.target.value)}
          />
        </ProfileContainer>
        <ProfileContainer>
          <ProfileLabel htmlFor="fontSize">Размер шрифта</ProfileLabel>
          <ProfileField
            id="fontSize"
            value={fontSize}
            type="number"
            placeholder="Укажите размер шрифта"
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
          {!validateFontSize() && (
            <ErrorMessage>
              Максимальное значение: 30, минимальное: 12
            </ErrorMessage>
          )}
        </ProfileContainer>
        <ProfileContainer>
          <ProfileLabel htmlFor="theme">Тема</ProfileLabel>
          <ProfileSelect
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value as themeType)}
          >
            <option value="light">Светлая</option>
            <option value="dark">Темная</option>
          </ProfileSelect>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileLabel htmlFor="description">Описание</ProfileLabel>
          <ProfileTextarea
            id="description"
            value={description}
            onChange={(e) => handleDescriptionChange(e)}
            placeholder="Укажите информацию о себе здесь"
          />
        </ProfileContainer>
        <ProfileContainer>
          <ProfileButton
            type="button"
            name="preview-button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? "Скрыть просмотр" : "Показать просмотр"}
          </ProfileButton>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileButton
            type="reset"
            name="reset-button"
            onClick={() => resetSettings()}
          >
            Сбросить настройки
          </ProfileButton>
        </ProfileContainer>
      </Profile>
      {isVisible && (
        <Preview>
          <ProfileContainer>
            <PreviewLabel>ФИО</PreviewLabel>
            <PreviewField>{name ?? "Не указано"}</PreviewField>
          </ProfileContainer>
          <ProfileContainer>
            <PreviewLabel>Размер шрифта</PreviewLabel>
            <PreviewField>{fontSize}</PreviewField>
          </ProfileContainer>
          <ProfileContainer>
            <PreviewLabel>Тема</PreviewLabel>
            <PreviewField>{themes[theme]}</PreviewField>
          </ProfileContainer>
          <ProfileContainer>
            <PreviewLabel>Описание</PreviewLabel>
            <PreviewField>
              {description || "Описание не добавлено"}
            </PreviewField>
          </ProfileContainer>
        </Preview>
      )}
    </ProfileSection>
  );
}
