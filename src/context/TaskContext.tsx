import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Task } from '../types';
import { nanoid } from 'nanoid';

interface TaskContextValue {
  tasks: Task[];
  updateTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextValue | null>(null);

const initialTasks: Task[] = [
  {
    id: nanoid(),
    title: 'Исправить ошибку 500',
    description: 'Падает при сохранении профиля',
    category: 'Bug',
    status: 'To Do',
    priority: 'High'
  },
  {
    id: nanoid(),
    title: 'Добавить тёмную тему',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium'
  }
];

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const updateTask = (task: Task) =>
    setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));

  return (
    <TaskContext.Provider value={{ tasks, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error('useTasks must be inside TaskProvider');
  return ctx;
};
