import React from 'react';

export function Button(props) {

  return (
    <button type="button" className={props.classes} onClick={props.handleClick}>
      {props.label}
    </button>
  );
  
}