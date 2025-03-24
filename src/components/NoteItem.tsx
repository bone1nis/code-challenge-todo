import { useState } from 'react';

import { Box, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography, useTheme } from '@mui/material';
import { AccessTime, Description } from '@mui/icons-material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { red } from '@mui/material/colors';

import store from '../stores/NotesStore';

import { Note } from '../types';

type NoteItemProps = {
    note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
    const theme = useTheme();

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(note.title);
    const [editedDescription, setEditedDescription] = useState(note.description);

    const formattedDate = new Date(note.createdAt).toLocaleDateString('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const removeTask = () => {
        store.removeNote(note.id);
    }


    const saveChanges = () => {
        store.updateNote(note.id, { title: editedTitle, description: editedDescription });
        setIsEditing(false);
    }

    const stopEditing = () => {
        setEditedTitle(note.title);
        setEditedDescription(note.description);
        setIsEditing(false);
    }

    const toggleCompleted = () => {
        store.updateNote(note.id, { completed: !note.completed });
    }


    return (
        <Paper
            sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: 3,
                transition: '0.3s ease-in-out',
                width: "100%",
                '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1)',
                },
            }}
        >
            <Stack
                direction="column"
                gap={2}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap={10}>
                    {isEditing ? (
                        <TextField
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            variant="outlined"
                            size="small"
                            sx={{ width: '80%' }}
                        />
                    ) : (
                        <Typography
                            variant="h6"
                            sx={{
                                wordBreak: "break-word",
                                fontWeight: 'bold',
                                color: theme.palette.primary.main,
                            }}
                        >
                            {note.title}
                        </Typography>
                    )}
                    <Stack
                        direction="row"
                        gap={2}
                        alignItems="center">
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={0.5}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={note.completed}
                                        onChange={toggleCompleted}
                                    />
                                }
                                label="Завершено"
                            />
                            <AccessTime
                                sx={{ color: theme.palette.text.primary }} />
                            <Typography
                                variant="body2"
                                sx={{ color: theme.palette.text.primary }}>
                                {formattedDate}
                            </Typography>
                        </Stack>
                        <Button
                            sx={{
                                padding: 0,
                                minWidth: "auto"
                            }}
                            onClick={removeTask}>
                            <RemoveCircleIcon
                                sx={{ color: red[400] }}
                            />
                        </Button>
                    </Stack>
                </Stack>

                <Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={0.5}>
                        {isEditing ? (
                            <TextField
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                                variant="outlined"
                                size="small"
                                sx={{ width: '100%' }}
                                multiline
                                rows={4}
                            />
                        ) : (
                            <Stack direction="row" alignItems="center" gap={0.5}>
                                <Description sx={{ color: theme.palette.text.primary }} />
                                <Typography variant="body1" sx={{ wordBreak: "break-word", color: theme.palette.text.primary }}>
                                    {note.description}
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                </Box>

                {isEditing ? (
                    <Stack direction="row" gap={2}>
                        <Button
                            variant="contained"
                            onClick={saveChanges}>Сохранить</Button>
                        <Button
                            variant="outlined"
                            onClick={stopEditing}>Отменить</Button>
                    </Stack>
                ) : (
                    <Button variant="outlined" onClick={() => setIsEditing(true)}>Редактировать</Button>
                )}
            </Stack>
        </Paper>
    );
};

export default NoteItem;