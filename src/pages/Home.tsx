import { Container, Typography, Box } from '@mui/material';
import TaskList from '../components/TaskList';

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Задачи
      </Typography>
      <Box>
        <TaskList />
      </Box>
    </Container>
  );
}
