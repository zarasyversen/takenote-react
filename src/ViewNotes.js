import React from 'react';

class ViewNotes extends React.Component {

  render() {
    return (
      <section className="take-note__section">
        <h3>Your previously saved notes</h3>
        <p className="js-saved-notes--empty">Nothing saved yet.</p>
      </section>
    );
  }
}

export default ViewNotes;