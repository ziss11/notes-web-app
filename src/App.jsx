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
    }

    onSearch(query) {
        const notes = this.state.notes.filter(
            (note) => note.title.toLowerCase().includes(query)
        )
        this.setState({ notes })
    }

    render() {
        return (
            <>
                <NoteHeader onSearch={this.onSearch} />
                <div className="note-app__body">
                    <NoteInput />
                </div>
            </>
        );
    }
}