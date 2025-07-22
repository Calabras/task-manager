import {
  TextField,
  Button,
  MenuItem,
  Stack,
  Paper
} from '@mui/material';
import { Task, Category, Status, Priority } from '../types';
import { useState } from 'react';
import { useTasks } from '../context/TaskContext';

interface Props {
  task: Task;
  onClose: () => void;
}

const categories: Category[] = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
const statuses: Status[] = ['To Do', 'In Progress', 'Done'];
const priorities: Priority[] = ['Low', 'Medium', 'High'];

export default function TaskDetails({ task, onClose }: Props) {
  const [form, setForm] = useState<Task>({ ...task });
  const { updateTask } = useTasks();

  const handleChange = (key: keyof Task) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const handleSave = () => {
    updateTask(form);
    onClose();
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 600 }}>
      <Stack spacing={2}>
        <TextField
          label="Заголовок"
          value={form.title}
          onChange={handleChange('title')}
          required
        />
        <TextField
          label="Описание"
          value={form.description || ''}
          onChange={handleChange('description')}
          multiline
          minRows={3}
        />
        <TextField
          select
          label="Категория"
          value={form.category}
          onChange={handleChange('category')}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>
              {c}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Статус"
          value={form.status}
          onChange={handleChange('status')}
        >
          {statuses.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Приоритет"
          value={form.priority}
          onChange={handleChange('priority')}
        >
          {priorities.map((p) => (
            <MenuItem key={p} value={p}>
              {p}
            </MenuItem>
          ))}
        </TextField>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            Отмена
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Сохранить
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
