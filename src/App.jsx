import React from "react";
import { NoteHeader } from "./components/NoteHeader";
import { NoteInput } from "./components/NoteInput";

export class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: []
        }

        this.onSearch = this.onSearch.bind(this)
        this.onNoteCreated = this.onNoteCreated.bind(this)
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
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        craatedAt: new Date().toISOString(),
                    }
                ]
            }
        })
    }

    render() {
        return (
            <>
                <NoteHeader onSearch={this.onSearch} />
                <div className="note-app__body">
                    <NoteInput onNoteCreated={this.onNoteCreated} />
                </div>
            </>
        );
    }
}