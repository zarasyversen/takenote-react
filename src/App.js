import React from 'react';
import './App.css';
import Header from './components/Header';
import CreateNote from './CreateNote';
import ViewNotes from './ViewNotes';

function App() {
  return (
    <div className="App">
        <Header />
        <main className="take-note__main take-note__wrapper">
          <CreateNote />
          <ViewNotes />
        </main>
    </div>
  );
}

export default App;
