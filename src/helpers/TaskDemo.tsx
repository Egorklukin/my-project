import styled from "@emotion/styled";
import { useState } from "react";

type TaskType = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export const initialTasks: TaskType[] = [
  {
    id: 1,
    title: "Прочитать документацию",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Повторить работу с хуками",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Проверить задачи в Jira",
    isCompleted: false,
  },
];

const Input = styled.input``;

export function TaskDemo() {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);
  const [newTaks, setNewTask] = useState("");
  function addTask(title: string): void {
    if (newTaks.trim() === "") return;
    const newTask: TaskType = {
      id: Date.now(),
      title,
      isCompleted: false,
    };
    setTasks((tasks) => [...tasks, newTask]);
    setNewTask("");
  }

  function toggleTask(id: number): void {
    setTasks((tasks) =>
      tasks.map((t) =>
        t.id == id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  }

  function deleteTask(id: number): void {
    setTasks(tasks.filter((t) => t.id != id));
  }

  return (
    <section>
      <Input
        type="text"
        value={newTaks}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Введите название задачи"
      />
      <button type="button" onClick={() => addTask(newTaks)}>
        Добавить задачу
      </button>

      {tasks.length === 0 ? (
        <p>Задач пока нет</p>
      ) : (
        <article>
          {tasks.map((task) => (
            <div key={task.id}>
              <span>
                {task.isCompleted ? "Выполнено" : "В процессе"} {task.title}
              </span>

              <button type="button" onClick={() => toggleTask(task.id)}>
                Изменить статус
              </button>

              <button type="button" onClick={() => deleteTask(task.id)}>
                Удалить
              </button>
            </div>
          ))}
        </article>
      )}
    </section>
  );
}
