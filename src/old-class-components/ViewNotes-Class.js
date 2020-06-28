import React from 'react';
import Note from './Note';

class ViewNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       isUpdated: false,
    };
    this.notesListUpdated = this.notesListUpdated.bind(this);
  }

  notesListUpdated() {
    this.setState({
       isUpdated: true
    });
  }

  render() {
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
          <Note source={note} key={index} notesListUpdated={this.notesListUpdated}/>
        ))}
      </section>
    );
  }
}

export default ViewNotes;