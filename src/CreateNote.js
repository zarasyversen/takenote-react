import React from 'react';
import Form from './components/Form';

class CreateNote extends React.Component {

  render() {
    return (
      <section className="take-note__section">
        <h3>Make a new note</h3>
        <Form />
      </section>
    );
  }
}

export default CreateNote;