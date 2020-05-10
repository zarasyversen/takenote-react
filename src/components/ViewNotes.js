import React from 'react';
import Note from './Note';

export default function ViewNotes() {
  let emptyMessage;
  const NOTES = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

  if (NOTES.length === 0) {
    emptyMessage = <p>Nothing saved yet</p>
  }

  return (
    <section className="take-note__section js-saved-notes">
        <h3>Your previously saved notes</h3>
  
        {emptyMessage}
        
        {NOTES.map((note, index) => (
          <Note source={note} key={index} />
        ))}
      </section>
  );
}
