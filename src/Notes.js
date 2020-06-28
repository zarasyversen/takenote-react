import React, { useState } from 'react';
import Form from './components/Form';
import ViewNotes from './components/ViewNotes';

import AddNote from './container/AddNote';

export default function Notes() {
  return (
    <main className="take-note__main take-note__wrapper">
      <AddNote />
    </main>
  );
}
