import React, {useEffect, useState} from "react";

function NoteEditor({ displayContent, handleEditToggle, handleUpdatedNote, setDisplayNote }) {

  const [formData, setFormData] = useState({
    title: displayContent.title,
    body: displayContent.body
  })
  

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleNotePatch(event) {
    event.preventDefault()
    const options = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: displayContent.id,
        userId: displayContent.userId,
        title: formData.title,
        body: formData.body
      })
    }
    fetch(`http://localhost:3000/notes/${displayContent.id}`, options)
      .then(resp => resp.json())
      .then(updatedNote => {
        handleUpdatedNote(updatedNote)
        setDisplayNote(updatedNote)
        handleEditToggle()
      })
  }
  

  return (
    <form onSubmit={handleNotePatch} className="note-editor">
      <input onChange={handleChange} type="text" name="title" value={formData.title} />
      <textarea onChange={handleChange} name="body" value={formData.body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={() => handleEditToggle(false)}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
