import React from 'react';
import Form from './components/Form';
import ViewNotes from './components/ViewNotes';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       isUpdated: false,
    };
    this.listHasUpdated = this.listHasUpdated.bind(this);
  }

  listHasUpdated() {
    this.setState({
       isUpdated: true
    });
  }

  render() {
    return (
      <main className="take-note__main take-note__wrapper">
        <section className="take-note__section">
          <h3>Make a new note</h3>
          <Form listHasUpdated={this.listHasUpdated} />
        </section>
        <ViewNotes />
      </main>
    );
  }
}

export default Notes;