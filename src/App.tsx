import { Container, Stack } from '@mui/material';

import TaskList from './components/NotesList';
import AddTask from './components/AddNote';
import TaskClearCompleted from './components/NotesClearCompleted';
import NotesCounter from './components/NotesCounter';

const App: React.FC = () => {
  return (
    <Container>
      <Stack
        alignItems="center"
        justifyItems="center"
        gap={5}
        sx={{ marginY: 5 }}>
        <AddTask />
        <Stack direction="row" gap={5} alignItems="center">
          <TaskClearCompleted />
          <NotesCounter />
        </Stack>
        <TaskList />
      </Stack>
    </Container>
  );
};

export default App;