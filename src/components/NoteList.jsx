import React from 'react';
import { NoteItem } from './NoteItem';

export const NoteList = ({ notes, onDelete, onArchive }) => {
    return notes.length !== 0 ? (
        <div className='notes-list'>
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note}
                />
            ))}
        </div>
    ) : (
        <p className='notes-list__empty-message'>Tidak ada catatan</p>
    );
};
