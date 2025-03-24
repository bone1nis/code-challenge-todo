import { FormEvent, useState } from 'react';

import { Button, Stack, TextField } from '@mui/material';

import { observer } from 'mobx-react-lite';
import store from '../stores/TasksStore';

const AddTask: React.FC = observer(() => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title && description) {
            const newTask = {
                id: crypto.randomUUID(),
                title,
                description,
                createdAt: Date.now()
            }

            store.addTask(newTask)
        }
    }

    return (
        <Stack component="form" direction="row" gap={4} onSubmit={handleSubmit}>
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Название задачи"
                variant="outlined"
                size="small"
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Описание задачи"
                variant="outlined"
                size="small"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Add
            </Button>
        </Stack>
    );
});

export default AddTask;