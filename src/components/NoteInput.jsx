import React from "react";

export class NoteInput extends React.Component {
    render() {
        return (
            <>
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa karakter</p>
            </>
        )
    }
}