import { useState } from "react";

type EventFormatType = "online" | "offline";

export function EventFormat() {
  const [title, setTitle] = useState<string | undefined>("");
  const [format, setFormat] = useState<EventFormatType>("offline");
  const [countOfParticipants, setCountOfParticipants] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <section>
      <input
        value={title ?? undefined}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value as EventFormatType)}
      >
        <option value="online">Онлайн</option>
        <option value="offline">Офлайн</option>
      </select>
      <input
        value={countOfParticipants}
        onChange={(e) => setCountOfParticipants(Number(e.target.value))}
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <h3>Текущие данные</h3>
        <p>Название: {title ?? "-"}</p>
        <p>Формат: {format}</p>
        <p>Участники: {countOfParticipants}</p>
        <p>Описание: {description || "-"}</p>
      </div>
    </section>
  );
}
