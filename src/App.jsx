import autoBind from "auto-bind";
import React from "react";
import { NoteHeader } from "./components/NoteHeader";
import { NoteInput } from "./components/NoteInput";
import { NoteList } from "./components/NoteList";
import { getInitialData } from "./utils";

export class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getInitialData(),
        }

        autoBind(this)
    }

    onSearch(query) {
        if (query.length !== 0) {
            const notes = this.state.notes.filter(
                (note) => note.title.toLowerCase().includes(query)
            )
            this.setState({ notes })
        } else {
            this.setState({ notes: getInitialData() })
        }
    }

    onNoteCreated({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    },
                    ...prevState.notes,
                ]
            }
        })
    }

    onNoteDeleted(id) {
        const notes = this.state.notes.filter((note) => note.id !== id)
        this.setState({ notes })
    }

    onNoteArchived(id, isArchive) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return { ...note, archived: isArchive }
            }
            return note;
        })
        this.setState({ notes })
    }

    render() {
        const activeNotes = this.state.notes.filter((note) => note.archived === false)
        const archiveNotes = this.state.notes.filter((note) => note.archived === true)
        return (
            <>
                <NoteHeader onSearch={this.onSearch} />
                <div className="note-app__body">
                    <NoteInput onNoteCreated={this.onNoteCreated} />

                    <h2>Catatan Aktif</h2>
                    <NoteList
                        notes={activeNotes}
                        onDelete={this.onNoteDeleted}
                        onArchive={this.onNoteArchived}
                    />

                    <h2>Arsip</h2>
                    <NoteList
                        notes={archiveNotes}
                        onDelete={this.onNoteDeleted}
                        onArchive={this.onNoteArchived}
                    />
                </div>
            </>
        );
    }
}