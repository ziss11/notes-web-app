import React from "react"
import { NoteItem } from "./NoteItem"

export const NoteList = ({ notes, onDelete, onArchive, isArchivedList = false }) => {
    const result = notes
        .filter((note) => note.archived === isArchivedList)
    return (result.length !== 0)
        ? <div className="notes-list" >
            {
                result
                    .map((note) => (
                        <NoteItem key={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note}
                        />
                    ))
            }
        </div >
        : <p className="notes-list__empty-message">Tidak ada catatan</p>
}