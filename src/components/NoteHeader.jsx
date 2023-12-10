import React from 'react';
import { SearchInput } from './SearchInput';

export const NoteHeader = ({ onSearch }) => (
    <header className='note-app__header'>
        <h1>Notes</h1>
        <SearchInput onSearch={onSearch} />
    </header>
);
