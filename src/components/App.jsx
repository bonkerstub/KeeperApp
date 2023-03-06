import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(title, content) {
    const newNote = { title: title, content: content };
    setNotes((previousValue) => [newNote, ...previousValue]);
  }

  function deleteNote(id) {
    setNotes((previousValue) =>
      previousValue.filter((eachNote, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((eachNote, index) => (
        <Note
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
