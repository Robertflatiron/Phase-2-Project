import React from "react";

function NoteViewer({ displayContent, handleEditToggle }) {


  return (
    <>
      <h2>{displayContent.title}</h2>
      <p>{displayContent.body}</p>
      <button onClick={() => handleEditToggle(true)} >Edit</button>
    </>
  );
}

export default NoteViewer;
