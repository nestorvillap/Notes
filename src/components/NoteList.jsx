import { useState , useEffect} from 'react'
import React from 'react';
import Note from './Note.jsx';
import NoteEditor from './NoteEditor.jsx'
import SearchComponent from './SearchComponent.jsx'
import '../styles/NoteList.css';

const NoteList = () => {
    
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [CurrentNote, setCurrentNote] = useState(null);
    
    const addNote = (newNote) => {
        if(CurrentNote!=null){
            const updatedNotes = [...(notes.filter((note) => note !== CurrentNote)),newNote];
            setNotes(updatedNotes);
            saveNotesToLocalStorage(updatedNotes);
            setCurrentNote(null);
        }else{
            const updatedNotes = [...notes, newNote];
            setNotes(updatedNotes);
            saveNotesToLocalStorage(updatedNotes);
        }
    };

    const deleteNote = () => {
        if(CurrentNote!=null){
            const updatedNotes = notes.filter((note) => note !== CurrentNote);
            setNotes(updatedNotes);
            saveNotesToLocalStorage(updatedNotes);
            setCurrentNote(null);
        }
    };

    const seleccionar = (note) => {
        if(CurrentNote == note){
            setCurrentNote(null);
        }else{
            setCurrentNote(note);
        }
        
    }
    

    const saveNotesToLocalStorage = (notes) => {
        localStorage.setItem('notes', JSON.stringify(notes));
    };

    const loadNotesFromLocalStorage = () => {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    };

    useEffect(() => {
        loadNotesFromLocalStorage();
    }, []);

    const filteredNotes = notes.filter((note) =>
        note.title.includes(searchTerm) || note.content.includes(searchTerm)
    );

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
    <>
        <section>
            <SearchComponent filtrar={handleSearch}/>
            <NoteEditor onSave={addNote} note={CurrentNote}/>
            <button onClick={deleteNote}>Eliminar 🗑️</button>
        </section>
        <section>
            {filteredNotes.map((note) => (
            <Note note={note} onSelect={seleccionar} CurrentNote={CurrentNote}/>
            ))}
        </section>
    </>
    );
};

export default NoteList;

