import React from 'react';
import Note from './Note';

export default function ViewNotes(props) {
  let emptyMessage;
  const NOTES = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

  if (NOTES.length === 0) {
    emptyMessage = <p>Nothing saved yet</p>
  }

  function deleteNote(id) {
    const confirmDeletion = window.confirm("Are you sure you want to delete this?");

    if (confirmDeletion) {
      NOTES.splice(id, 1);
      localStorage.setItem('notes', JSON.stringify(NOTES));
      props.listHasUpdated(NOTES.length);
    }
  }

  function editNote(id) {
    props.isEditing(NOTES[id]);
  }

  return (
    <section className="take-note__section js-saved-notes">
        <h3>Your previously saved notes</h3>
  
        {emptyMessage}
        
        {NOTES.map((note, index) => (
          <Note source={note} key={index} onEdit={editNote} onDelete={deleteNote} id={index} />
        ))}
      </section>
  );
}
