import React from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions';

const EditNote = ({ dispatch }) => {

  function saveNote(event) {
    event.preventDefault();

    const formValue = event.target[0].value,
          storedNotes = localStorage.getItem("notes"),
          savedNotes = storedNotes ? JSON.parse(storedNotes) : [];

    savedNotes.push(formValue);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    emptyForm();
    dispatch(editNote(formValue))
  }

  function emptyForm() {
    const note = document.querySelector('.js-note');
    note.value = '';
  }

  return (
    <div>
        <form className="js-note-form" onSubmit={editNote}>
          <label htmlFor="note" className="visually-hidden">Edit your note</label>
          <textarea className="take-note__input js-note" id="note" value={editingNote} required></textarea>
          <button type="submit" className="take-note__button">Update</button>
        </form>
    </div>
  )
}

export default connect()(EditNote);