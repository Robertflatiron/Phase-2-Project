import React from "react";

function NoteItem({ note, addDisplayNote }) {
  const truncatedBody = note.body.length > 17 ? note.body.substring(0, 17)+"..." : note.body
  return (
    <li onClick={() => addDisplayNote(note)}>
      <h2>{note.title}</h2>
      <p>{truncatedBody}</p>
    </li>
  );
}

export default NoteItem;
