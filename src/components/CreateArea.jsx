import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleTitle(event) {
    const { value: title } = event.target;
    setNote((previousValue) => {
      return { ...previousValue, title: title };
    });
  }

  function handleContent(event) {
    const { value: content } = event.target;
    setNote((previousValue) => {
      return { ...previousValue, content: content };
    });
  }

  function handleSubmit(event) {
    props.onAdd(note.title, note.content);
    event.preventDefault();
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleTitle}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleContent}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
