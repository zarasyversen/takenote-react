import React, { useState, useEffect } from 'react';

export default function Header() {
  const [status, setStatus] = useState("You are Online 😎");

  useEffect(() => {
    if (!navigator.onLine) {
     return setStatus("You are Offline 😩");
    }
  }, []);

  return (
    <header className="take-note__header">
      <div className="take-note__header-wrapper take-note__wrapper">
        <h1>Take A Note</h1>
        <h2>{status}</h2>
      </div>
    </header>
  );
  
}
