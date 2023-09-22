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

        this.onSearch = this.onSearch.bind(this)
        this.onNoteCreated = this.onNoteCreated.bind(this)
        this.onNoteDeleted = this.onNoteDeleted.bind(this)
        this.onNoteArchived = this.onNoteArchived.bind(this)
    }

    onSearch(query) {
        const notes = this.state.notes.filter(
            (note) => note.title.toLowerCase().includes(query)
        )
        this.setState({ notes })
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
        return (
            <>
                <NoteHeader onSearch={this.onSearch} />
                <div className="note-app__body">
                    <NoteInput onNoteCreated={this.onNoteCreated} />

                    <h2>Catatan Aktif</h2>
                    <NoteList
                        notes={this.state.notes}
                        onDelete={this.onNoteDeleted}
                        onArchive={this.onNoteArchived}
                    />

                    <h2>Arsip</h2>
                    <NoteList
                        notes={this.state.notes}
                        isArchivedList={true}
                        onDelete={this.onNoteDeleted}
                        onArchive={this.onNoteArchived}
                    />
                </div>
            </>
        );
    }
}