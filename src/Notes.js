import React from 'react';
import AddNote from './container/AddNote';
import NotesList from './container/NotesList';

export default function Notes() {
  return (
    <main className="take-note__main take-note__wrapper">
      <AddNote />
      <NotesList />
    </main>
  );
}
