import React from 'react';
import { connect } from 'react-redux';
import { editNote, deleteNote } from '../actions';
import Note from '../components/Note';

const NotesList = ({ dispatch }) => {
  let emptyMessage;
  const NOTES = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [];

  if (NOTES.length === 0) {
    emptyMessage = <p>Nothing saved yet</p>
  }

  function deleting(id) {
    const confirmDeletion = window.confirm("Are you sure you want to delete this?");

    if (confirmDeletion) {
      dispatch(deleteNote(id))
    }
  }

  function editing(id, newNote) {
    dispatch(editNote(NOTES, id, newNote))
  }

  return (
    <section className="take-note__section js-saved-notes">
      <h3>Your previously saved notes</h3>

      {emptyMessage}
       {NOTES.map((note, index) => (
          <Note source={note} key={index} onEdit={editing} onDelete={deleting} id={index} />
        ))}
    </section>
  )
}

export default connect()(NotesList);