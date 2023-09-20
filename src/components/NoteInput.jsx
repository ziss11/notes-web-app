import React from "react";

export class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onNoteCreated = this.onNoteCreated.bind(this)
    }

    onTitleChange(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChange(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onNoteCreated(event) {
        event.preventDefault()
        this.props.onNoteCreated(this.state)
    }

    render() {
        return (
            <div className="note-input">
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter: </p>

                <form onSubmit={this.onNoteCreated}>
                    <input
                        type="text"
                        placeholder="Judul..."
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Tuliskan catatanmu disini..."
                        value={this.state.body}
                        onChange={this.onBodyChange}
                    />
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}