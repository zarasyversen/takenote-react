import React from "react";
import {Button} from './Button';

export default function Note (props) {
  return (
    <li className="take-note__saved-list-item">  
      <p>{`${props.source}`}</p>
      <Button classes="take-note__button" label="Edit" handleClick={() => props.onEdit(props.id)}/>
      <Button classes="take-note__button" label="Delete" handleClick={() => props.onDelete(props.id)}/>
    </li>
  )
}
