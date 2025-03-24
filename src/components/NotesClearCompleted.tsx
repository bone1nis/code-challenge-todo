import { Button } from "@mui/material";

import { observer } from "mobx-react";
import store from "../stores/NotesStore";

const NotesClearCompleted = observer(() => {

    return (
        <Button
            variant="contained"
            onClick={() => store.removeCompletedNotes()}>
            Очистить выполненные
        </Button>
    );
});

export default NotesClearCompleted;