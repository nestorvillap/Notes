import React from 'react';
import '../styles/Note.css';

const Note = ({CurrentNote, note ,onSelect}) => {

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={
        
        () => onSelect(note)
        
        }>{(CurrentNote == note) ? 'Seleccionada' : 'Seleccionar'}</button>
    </div>
  );
};

export default Note;
