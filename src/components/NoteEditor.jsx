import React, { useState } from 'react';
import '../styles/NoteEditor.css';

const NoteEditor = ({ onSave, note}) => {

    const [isNoteOpen, setIsNoteOpen] = useState(false);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    const closeNote = () => {
        setIsNoteOpen(false);
    };

    const handleNoteClick = () => {
        setIsNoteOpen(true);
        setNoteTitle(note.title);
        setNoteContent(note.content);
    };

    const handleTitleChange = (event) => {
        setNoteTitle(event.target.value);
    };
    
    const handleContentChange = (event) => {
        setNoteContent(event.target.value);
    };

    const handleSave = () => {
        closeNote();
        onSave({ title: noteTitle, content: noteContent });
        setNoteTitle('');
        setNoteContent('');
    };

    return(
        <>
            { isNoteOpen ? 
                <div className="note-overlay">
                <div className="note-container">
                    <label>
                        Titulo:
                        <input type="text"
                                value={noteTitle}
                                onChange={handleTitleChange}
                                placeholder="Título de la nota" />
                    </label>
                    <label>
                        Contenido:
                        <textarea  
                            value={noteContent}
                            onChange={handleContentChange}
                            placeholder="Escribe tu nota aquí"/>
                    </label>
                    <button onClick={handleSave}>Guardar Nota</button>
                </div>
                </div>
                : 
                null
            }
            <button className='iconos' onClick={() => handleNoteClick()}>Añadir/Editar ➕</button> 
        </>
    );
};

export default NoteEditor;
