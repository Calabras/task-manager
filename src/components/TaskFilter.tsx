import { MenuItem, TextField, Stack } from '@mui/material';
import { Status, Category, Priority } from '../types';

const statusOptions: (Status | 'All')[] = [
  'All',
  'To Do',
  'In Progress',
  'Done'
];
const categoryOptions: (Category | 'All')[] = [
  'All',
  'Bug',
  'Feature',
  'Documentation',
  'Refactor',
  'Test'
];
const priorityOptions: (Priority | 'All')[] = ['All', 'Low', 'Medium', 'High'];

interface Props {
  status: Status | 'All';
  category: Category | 'All';
  priority: Priority | 'All';
  onStatusChange: (v: Status | 'All') => void;
  onCategoryChange: (v: Category | 'All') => void;
  onPriorityChange: (v: Priority | 'All') => void;
}

export default function TaskFilters({
  status,
  category,
  priority,
  onStatusChange,
  onCategoryChange,
  onPriorityChange
}: Props) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      mb={2}
      flexWrap="wrap"
    >
      {/* Статус */}
      <TextField
        select
        size="small"
        label="Статус"
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value as Status | 'All')
        }
        sx={{ minWidth: 150 }}
      >
        {statusOptions.map((s) => (
          <MenuItem key={s} value={s}>
            {s}
          </MenuItem>
        ))}
      </TextField>

      {/* Категория */}
      <TextField
        select
        size="small"
        label="Категория"
        value={category}
        onChange={(e) =>
          onCategoryChange(e.target.value as Category | 'All')
        }
        sx={{ minWidth: 160 }}
      >
        {categoryOptions.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </TextField>

      {/* Приоритет */}
      <TextField
        select
        size="small"
        label="Приоритет"
        value={priority}
        onChange={(e) =>
          onPriorityChange(e.target.value as Priority | 'All')
        }
        sx={{ minWidth: 140 }}
      >
        {priorityOptions.map((p) => (
          <MenuItem key={p} value={p}>
            {p}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
