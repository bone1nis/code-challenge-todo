import { Typography } from "@mui/material";

import { observer } from "mobx-react";
import store from "../stores/NotesStore";

const NotesCounter = observer(() => {
    const uncompletedNotes = store.uncompletedNotes;


    return (
        <Typography variant="h5">
            {uncompletedNotes} {uncompletedNotes === 1 ? "активная" : "активных"}
        </Typography>
    );
});

export default NotesCounter;