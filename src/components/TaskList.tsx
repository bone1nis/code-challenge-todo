import { Stack } from '@mui/material';

import TaskItem from "./TaskItem";

import { observer } from 'mobx-react';
import store from '../stores/TasksStore';

const TaskList: React.FC = observer(() => {
    const tasks = store.tasks;
    return (
        <Stack
            alignItems="center"
            gap={5}
            sx={{
                width: "100%"
            }}>
            {tasks.map(task => <TaskItem task={task} key={task.id} />)}
        </Stack>
    );
});

export default TaskList;