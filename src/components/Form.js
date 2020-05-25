import React from 'react';

export default function Form(props) {

  function saveNote(event) {
    event.preventDefault();

    const formValue = event.target[0].value,
          storedNotes = localStorage.getItem("notes"),
          savedNotes = storedNotes ? JSON.parse(storedNotes) : [];

    savedNotes.push(formValue);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    emptyForm();
    props.listHasUpdated(savedNotes.length);
  }

  function emptyForm() {
    const note = document.querySelector('.js-note');
    note.value = '';
  }

  let editingNote;
  if (props.isEditing) {
    editingNote = props.isEditing;
  }

  return (
    <div> 
      {editingNote
        ? <form className="js-note-form" onSubmit={saveNote}>
        <label htmlFor="note" className="visually-hidden">Edit your note</label>
        <textarea className="take-note__input js-note" id="note" required></textarea>
        <button type="submit" className="take-note__button">Update</button>
        <button type="button" className="take-note__button" onClick={props.cancelEditing}>Cancel</button>
        </form>
        : <form className="js-note-form" onSubmit={saveNote}>
        <label htmlFor="note" className="visually-hidden">Write a note that you want to save</label>
        <textarea className="take-note__input js-note" id="note" required></textarea>
        <button type="submit" className="take-note__button take-note__button--save">Save your note</button>
        </form>
      }
    </div>
    
  );

}