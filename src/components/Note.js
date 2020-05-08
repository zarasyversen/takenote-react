import React from "react";
import {Button} from './Button';

function deleteNote() {
  console.log('delete me');
}

const Note = ({ source }) => (
  <li className="take-note__saved-list-item">  
    <p>{`${source}`}</p>
    <Button classes="take-note__button" label="Delete" handleClick={deleteNote}/>
  </li>
);

export default Note;
