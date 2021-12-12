import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, addDisplayNote, handleEditToggle }) {



  const renderNotes = notes.map((note) => (
    <NoteItem 
      key={note.id} 
      note={note} 
      addDisplayNote={addDisplayNote} 
      handleEditToggle={handleEditToggle} 
    />
  ))
  


  return (
    <ul>
      {renderNotes}
    </ul>
  );
}

export default NoteList;
