import React, { useState } from 'react';
import Form from './components/Form';
import ViewNotes from './components/ViewNotes';

export default function Notes() {
  const [updated, setIsUpdated] = useState(false);

  function listHasUpdated(noteAmount) {
    return setIsUpdated('Number of notes: ' + noteAmount);
  }

  return (
    <main className="take-note__main take-note__wrapper">
      <section className="take-note__section">
        <h3>Make a new note</h3>
        <Form noteUpdate={updated} listHasUpdated={listHasUpdated} />
      </section>
      <ViewNotes noteUpdate={updated} listHasUpdated={listHasUpdated} />
    </main>
  );
}
