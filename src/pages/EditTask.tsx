import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskDetails from '../components/TaskDetails';
import { Container, Typography } from '@mui/material';

export default function EditTask() {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === id);

  if (!task) return <Typography>Задача не найдена</Typography>;

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Редактирование
      </Typography>
      <TaskDetails task={task} onClose={() => navigate('/')} />
    </Container>
  );
}
