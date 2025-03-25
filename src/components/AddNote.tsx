import { FormEvent, useState } from 'react';

import { Button, Stack, TextField } from '@mui/material';

import { observer } from 'mobx-react-lite';
import store from '../stores/NotesStore';

const AddNote: React.FC = observer(() => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (title && description) {
            const newNote = {
                id: crypto.randomUUID(),
                title,
                description,
                createdAt: Date.now(),
                completed: false
            }

            store.addNote(newNote)
        }
    }

    return (
        <Stack
            component="form"
            direction={{xs: "column", sm: "row"}}
            gap={4}
            onSubmit={handleSubmit}>
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
                Добавить
            </Button>
        </Stack>
    );
});

export default AddNote;