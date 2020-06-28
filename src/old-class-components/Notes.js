import React, { useState } from 'react';
import Form from './components/Form';
import ViewNotes from './components/ViewNotes';

export default function Notes() {
  const [update, setIsUpdated] = useState(false);
  const [editingNote, setIsEditing] = useState(false);

  // How can I better do this
  function listHasUpdated(action) {
    return setIsUpdated(action);
  }
  function editNote(note) {
    return setIsEditing(note);
  }

  function cancelEditing() {
    const note = document.querySelector('.js-note');
    note.value = '';
    return setIsEditing(false);
  }

  let updatedNote;
  if (update === 'deleted') {
    updatedNote = 'Your note has been deleted.';
  } else if (update === 'saved') {
    updatedNote = 'Your note has been saved.';
  } else if (update === 'edited') {
    updatedNote = 'Your note has been edited.';
  }

  return (
    <main className="take-note__main take-note__wrapper">
      <Form cancelEditing={cancelEditing} listHasUpdated={listHasUpdated} isEditing={editingNote}/>
      <ViewNotes listHasUpdated={listHasUpdated} isEditing={editNote} updatedMessage={updatedNote} />
    </main>
  );
}
