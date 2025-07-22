import { Grid } from '@mui/material';
import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import TaskFilters from './TaskFilter';
import { useState } from 'react';
import { Status, Category, Priority } from '../types';

export default function TaskList() {
  const { tasks } = useTasks();

  const [status, setStatus] = useState<Status | 'All'>('All');
  const [category, setCategory] = useState<Category | 'All'>('All');
  const [priority, setPriority] = useState<Priority | 'All'>('All');

  const filtered = tasks.filter(
    (t) =>
      (status === 'All' || t.status === status) &&
      (category === 'All' || t.category === category) &&
      (priority === 'All' || t.priority === priority)
  );

  return (
    <>
      <TaskFilters
        status={status}
        category={category}
        priority={priority}
        onStatusChange={setStatus}
        onCategoryChange={setCategory}
        onPriorityChange={setPriority}
      />

      <Grid container spacing={2}>
        {filtered.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskItem task={task} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
