import React from "react";

const Note = ({ source }) => (
  <li className="take-note__saved-list-item">  
    <p>{`${source}`}</p>
  </li>
);

export default Note;
