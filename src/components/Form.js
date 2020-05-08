import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <form className="js-note-form">
          <label htmlFor="note" className="visually-hidden">Write a note that you want to save</label>
          <textarea className="take-note__input js-note" id="note" required></textarea>
          <button type="submit" className="take-note__button take-note__button--save js-save-note">Save your note</button>
      </form>
    );
  }
}

export default Form;