import { useState } from "react";
import {
  FormSection,
  Form,
  FormButton,
  FormContainer,
  FormField,
  FormSelect,
  FormLabel,
  FormTextarea,
  ErrorMessage, // TODO
  FormTitle,
} from "./BookAddForm.css.ts";
import type { BookAddFormProps } from "../../props/BookAddFormProps.ts";
import { type StatusVariant } from "../../types/BookType.tsx";

export function BookAddForm({ addBook, id }: BookAddFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState<StatusVariant>("want");
  const [note, setNote] = useState("");

  function getStateButton(): boolean {
    if (!title || !author) return true;
    return false;
  }

  function checkFormatUrl(): boolean {
    // TODO
    if (cover.includes("http")) return true;
    return false;
  }
  return (
    <FormSection>
      <Form>
        <FormTitle>Добавить книгу</FormTitle>
        <FormContainer>
          <FormLabel htmlFor="title" required>
            Название
          </FormLabel>
          <FormField
            id="title"
            value={title}
            placeholder="Укажите название"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="author" required>
            Автор
          </FormLabel>
          <FormField
            id="author"
            value={author}
            placeholder="Укажите автора"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="cover">Обложка</FormLabel>
          <FormField
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            placeholder="Укажите ссылку на обложку"
          />
        </FormContainer>
        <FormContainer>
          <FormLabel htmlFor="status">Укажите, на каком этапе книга</FormLabel>
          <FormSelect
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as StatusVariant)}
          >
            <option value="want">Хочу прочитать</option>
            <option value="reading">Читаю сейчас</option>
            <option value="done">Прочитано</option>
          </FormSelect>
        </FormContainer>
        {status === "done" && (
          <FormContainer>
            <FormLabel htmlFor="rating">Рейтинг</FormLabel>
            <FormField
              id="rating"
              value={rating}
              type="number"
              onChange={(e) => setRating(Number(e.target.value))}
              placeholder="Укажите вашу оценку книге"
            />
          </FormContainer>
        )}
        <FormContainer>
          <FormLabel htmlFor="note">Заметки</FormLabel>
          <FormTextarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Укажите ваши заметки здесь"
          />
        </FormContainer>
        <FormContainer>
          <FormButton
            type="submit"
            name="add-button"
            onClick={(e) => {
              e.preventDefault();
              addBook({ id, title, author, status, rating, note, cover });
            }}
            disabled={getStateButton()}
          >
            Добавить книгу
          </FormButton>
        </FormContainer>
      </Form>
    </FormSection>
  );
}
