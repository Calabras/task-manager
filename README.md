# Task Manager

Просто одностраничное приложение для редактирования и просмотра текущих задач.

## Стек

| Технология | Версия | Назначение |
|------------|--------|------------|
| Vite       | 7.x    | Сборка / dev‑сервер |
| React      | 18     | UI |
| TypeScript | 5      | Статическая типизация |
| React Router | 6     | Маршрутизация SPA |
| Material UI | 5     | UI‑компоненты + темы |
| nanoid     | 5      | Генерация уникальных id |
| React Context API | — | Хранение задач в памяти |

## Быстрый старт

```bash
#Обновите Node (требуется версия не ниже 20.19 или 22 LTS)
nvm install 22
nvm use 22

#Создайте и скачайте мой репозиторий
git clone https://github.com/Calabras/task-manager.git
cd task-manager

#Установите необходимые зависимости
npm install

#Запустите dev‑сервер
npm run dev
