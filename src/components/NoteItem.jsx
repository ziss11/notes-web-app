import React from 'react';
import { showFormattedDate } from '../utils';

export const NoteItem = ({
    id,
    title,
    createdAt,
    body,
    archived,
    onDelete,
    onArchive,
}) => {
    const date = showFormattedDate(createdAt);
    return (
        <div className='note-item'>
            <div className='note-item__content'>
                <h3 className='note-item__title'>{title}</h3>
                <p className='note-item__date'>{date}</p>
                <p className='note-item__body'>{body}</p>
            </div>

            <div className='note-item__action'>
                <button
                    className='note-item__delete-button'
                    onClick={() => onDelete(id)}
                >
                    Hapus
                </button>
                <button
                    className='note-item__archive-button'
                    onClick={() => onArchive(id, !archived)}
                >
                    {archived === false ? 'Arsipkan' : 'Pindahkan'}
                </button>
            </div>
        </div>
    );
};
