import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { note: '' };
  }

  saveNote = (event) => {
    event.preventDefault();
    const storedNotes = localStorage.getItem("notes"),
          savedNotes = storedNotes ? JSON.parse(storedNotes) : [];

    savedNotes.push(this.state.note);
    this.setState({note: ''});
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    this.emptyForm();
  }

  emptyForm() {
    const note = document.querySelector('.js-note');
    note.value = '';
  }

  updateNoteState = (event) => {
    this.setState({note: event.target.value});
  }

  render() {
    return (
      <form className="js-note-form" onSubmit={this.saveNote}>
          <label htmlFor="note" className="visually-hidden">Write a note that you want to save</label>
          <textarea className="take-note__input js-note" id="note" onChange={this.updateNoteState} required></textarea>
          <button type="submit" className="take-note__button take-note__button--save">Save your note</button>
      </form>
    );
  }
}

export default Form;