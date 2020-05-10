import React, { useState } from 'react';
import Form from './components/Form';
import ViewNotes from './components/ViewNotes';

export default function Notes() {
  const [updated, setIsUpdated] = useState(false);

  function listHasUpdated() {
    return setIsUpdated(true);
  }

  return (
    <main className="take-note__main take-note__wrapper">
      <section className="take-note__section">
        <h3>Make a new note</h3>
        <Form listHasUpdated={listHasUpdated} />
      </section>
      <ViewNotes noteUpdate={updated} />
    </main>
  );
}
