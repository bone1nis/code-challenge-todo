import { Container, Stack } from '@mui/material';

import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App: React.FC = () => {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyItems="center"
        gap={5}
        sx={{ marginY: 5 }}>
        <AddTask />
        <TaskList />
      </Stack>
    </Container>
  );
};

export default App;