import { useEffect, useState } from "react";
import { api } from "../services/api";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchNotes = async () => {
    const res = await api.get("/api/notes");
    setNotes(res.data);
  };

  const addNote = async () => {
    if (!title || !content) return;

    await api.post("/api/notes", { title, content });
    setTitle("");
    setContent("");
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Notes Manager</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <br />

      <input
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <br />

      <button onClick={addNote}>Add Note</button>

      <hr />

      {notes.map((note, index) => (
        <div key={index}>
          <h4>{note.title}</h4>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Notes;