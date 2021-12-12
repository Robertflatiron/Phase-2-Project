import React from "react";

function NoteItem({ note, addDisplayNote, handleEditToggle }) {
  const truncatedBody = note.body.length > 17 ? note.body.substring(0, 17)+"..." : note.body
  const handleClick = () => {
    addDisplayNote(note) 
    handleEditToggle(false)
  } 
  return (
    <li onClick={handleClick}>
      <h2>{note.title}</h2>
      <p>{truncatedBody}</p>
    </li>
  );
}

export default NoteItem;
