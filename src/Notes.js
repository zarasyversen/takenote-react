import React, { useState } from 'react';
import Form from './components/Form';
import ViewNotes from './components/ViewNotes';

export default function Notes() {
  const [updated, setIsUpdated] = useState(false);
  const [editingNote, setIsEditing] = useState(false);

  function listHasUpdated(noteAmount) {
    return setIsUpdated('Number of notes: ' + noteAmount);
  }

  function editNote(note) {
    return setIsEditing(note);
  }

  function cancelEditing() {
    return setIsEditing(false);
  }

  return (
    <main className="take-note__main take-note__wrapper">
      <section className="take-note__section">
        <h3>Make a new note</h3>
        <Form noteUpdate={updated} cancelEditing={cancelEditing} listHasUpdated={listHasUpdated} isEditing={editingNote} />
      </section>
      <ViewNotes noteUpdate={updated} listHasUpdated={listHasUpdated} isEditing={editNote} />
    </main>
  );
}
