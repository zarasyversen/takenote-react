import React, {useState} from 'react';

class ViewNotes extends React.Component {

  componentDidMount() {
  
    var form = document.querySelector('.js-note-form');
    form.addEventListener('submit', function(e){
      var note = document.querySelector('.js-note'),
          storedNotes = localStorage.getItem("notes"),
          savedNotes = storedNotes ? JSON.parse(storedNotes) : [];

      // Ignore submit form
      e.preventDefault();

      // Add our note to the array and empty the textarea
      savedNotes.push(note.value);
      note.value = '';

      // Add the array to local storage
      localStorage.setItem('notes', JSON.stringify(savedNotes));
    });
  }

  render() {
    return (
      <section className="take-note__section js-saved-notes">
        <h3>Your previously saved notes</h3>
        <p class="js-saved-notes--empty">Nothing saved yet.</p>
      </section>
    );
  }
}

export default ViewNotes;