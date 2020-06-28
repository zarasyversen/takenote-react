import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

const AddNote = ({ dispatch }) => {

  function saveNote(event) {
    event.preventDefault();

    const formValue = event.target[0].value,
          storedNotes = localStorage.getItem("notes"),
          savedNotes = storedNotes ? JSON.parse(storedNotes) : [];

    savedNotes.push(formValue);
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    emptyForm();
    dispatch(addNote(formValue))
  }

  function emptyForm() {
    const note = document.querySelector('.js-note');
    note.value = '';
  }

  return (
    <section className="take-note__section">
      <form onSubmit={saveNote}>
          <label htmlFor="note" className="visually-hidden">Write a note that you want to save</label>
          <textarea className="take-note__input js-note" id="note" required></textarea>
          <button type="submit" className="take-note__button take-note__button--save">Save your note</button>
        </form>
    </section>
  )
}

export default connect()(AddNote);