import React from "react";
import NoteList from "./NoteList";

function Sidebar({ notes, addNewNote, addDisplayNote, handleEditToggle }) {

  function handleNewNote() {
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json'
      }, 
      body: JSON.stringify({userId: 1, title: "default", body: "placeholder"}),
    })
      .then(resp => resp.json())
      .then(freshNote => addNewNote(freshNote))
  }
  
  const handleClick = () => {
    handleNewNote()
  }
  
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} key={notes.id} addDisplayNote={addDisplayNote} handleEditToggle={handleEditToggle} />
      <button onClick={handleClick}>New</button>
    </div>
  );
}

export default Sidebar;
