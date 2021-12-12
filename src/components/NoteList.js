import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, addNewNote, addDisplayNote }) {



  const renderNotes = notes.map((note) => (
    <NoteItem key={note.id} note={note} addDisplayNote={addDisplayNote} />
  ))
  


  return (
    <ul>
      {renderNotes}
    </ul>
  );
}

export default NoteList;
