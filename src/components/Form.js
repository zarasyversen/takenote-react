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
    props.listHasUpdated('saved');
  }

  function emptyForm() {
    const note = document.querySelector('.js-note');
    note.value = '';
  }

  let editingNote;
  let formTitle = 'Make a new note';
  if (props.isEditing) {
    editingNote = props.isEditing;
    formTitle = 'Edit your note';
  }

  function editNote(event) {
    event.preventDefault();

    const formValue = event.target[0].value,
          storedNotes = localStorage.getItem("notes"),
          savedNotes = storedNotes ? JSON.parse(storedNotes) : [];

    savedNotes.push(formValue);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    emptyForm();
    props.listHasUpdated('edited');
  }

  return (
    <section className="take-note__section">
      <h3>{formTitle}</h3>
      {editingNote
        ? 
        <form className="js-note-form" onSubmit={editNote}>
          <label htmlFor="note" className="visually-hidden">Edit your note</label>
          <textarea className="take-note__input js-note" id="note" value={editingNote} required></textarea>
          <button type="submit" className="take-note__button">Update</button>
          <button type="button" className="take-note__button" onClick={props.cancelEditing}>Cancel</button>
        </form>
        : 
        <form className="js-note-form" onSubmit={saveNote}>
          <label htmlFor="note" className="visually-hidden">Write a note that you want to save</label>
          <textarea className="take-note__input js-note" id="note" defaultValue="" required></textarea>
          <button type="submit" className="take-note__button take-note__button--save">Save your note</button>
        </form>
      }
    </section>
    
  );

}