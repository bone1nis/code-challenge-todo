import { makeAutoObservable } from "mobx";
import { Note } from "../types";

class NotesStore {
    notes: Note[] = [
        {
            id: "ыва",
            title: "первая",
            description: "описание 1",
            createdAt: 174282403397,
            completed: false
        },
        {
            id: "ыва2",
            title: "вторая",
            description: "описание 2",
            createdAt: 1742824013327,
            completed: true
        }
    ];

    constructor() {
        makeAutoObservable(this);
        this.loadNotesLocalStorage();
    }

    saveNotesLocalStorage() {
        localStorage.setItem("notes", JSON.stringify(this.notes));
    }

    loadNotesLocalStorage() {
        const notes = localStorage.getItem("notes");
        if (notes) {
            this.notes = JSON.parse(notes);
        }
    }

    loadNotes(notes: Note[]) {
        this.notes = [...notes];
        this.saveNotesLocalStorage();
    }

    removeCompletedNotes() {
        this.notes = this.notes.filter(note => !note.completed);
    }

    addNote(newnote: Note) {
        this.notes.push(newnote);
        this.saveNotesLocalStorage();
    }

    removeNote(id: Note["id"]) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotesLocalStorage();
    }

    updateNote(id: string, newnote: Partial<Note>) {
        this.notes = this.notes.map(note => {
            if (note.id === id) {
                return {
                    ...note,
                    ...newnote
                };
            }
            return note;
        });
        this.saveNotesLocalStorage();
    }

    get uncompletedNotes() {
        return this.notes.reduce((sum, note) => {
            if (!note.completed) {
                sum += 1;
            }
            return sum;
        }, 0);
    }
}

const store = new NotesStore();
export default store;