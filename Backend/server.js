const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

// temporary storage
let notes = [];

// GET all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});  


// CREATE a note
app.post("/notes", (req, res) => {
  const { title, content, dateCreated } = req.body;

  const newNote = {
    id: String(Date.now()), // simple unique id
    title,
    content,
    dateCreated,
    pinned: false
  };
  
  notes.push(newNote);
  
  res.status(201).json(newNote);
});

// GET a single note by id
app.get("/notes/:id", (req, res) => {
  const note = notes.find(n => n.id == req.params.id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  res.json(note);
});

// UPDATE a note
app.patch("/notes/:id", (req, res) => {
  const note = notes.find(n => n.id == req.params.id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  const { title, content } = req.body;

  if (title !== undefined) note.title = title;
  if (content !== undefined) note.content = content;

  res.json(note);
});

// PIN a note
app.patch("/notes/:id/pin", (req, res) => {
  const note = notes.find(n => n.id == req.params.id);

  if (!note) return res.status(404).json({ error: "Note not found" });

  note.pinned = !note.pinned; // toggle pin state

  res.json(note);
});

// DELETE a note
app.delete("/notes/:id", (req, res) => {
  notes = notes.filter(n => n.id !== req.params.id);

  res.json({ success: true });
});

// start server
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
