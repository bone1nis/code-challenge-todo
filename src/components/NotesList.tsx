import { Stack } from '@mui/material';

import NoteItem from './NoteItem';

import { observer } from 'mobx-react';
import store from '../stores/NotesStore';

const NotesList: React.FC = observer(() => {
    const notes = store.notes;

    return (
        <Stack
            alignItems="center"
            gap={5}
            sx={{
                width: "100%"
            }}>
            {notes.map(note => <NoteItem note={note} key={note.id} />)}
        </Stack>
    );
});

export default NotesList;