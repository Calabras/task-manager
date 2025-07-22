import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  CardActions,
  Button
} from '@mui/material';
import { Task } from '../types';
import { Link as RouterLink } from 'react-router-dom';

export default function TaskItem({ task }: { task: Task }) {
  const { title, description, category, status, priority, id } = task;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom noWrap>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" noWrap>
            {description}
          </Typography>
        )}
        <Stack direction="row" spacing={1} pt={2} flexWrap="wrap" rowGap={1}>
          <Chip label={category} size="small" color="default" />
          <Chip label={status} size="small" color="warning" />
          <Chip label={priority} size="small" color="primary" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={RouterLink}
          to={`/task/${id}`}
          variant="outlined"
        >
          Редактировать
        </Button>
      </CardActions>
    </Card>
  );
}
