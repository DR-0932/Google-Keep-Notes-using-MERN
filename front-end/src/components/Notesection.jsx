import { useEffect } from "react";
import { zustStore } from "../Store/store";
import NoteCard from "./Notecard"

export default function NotesSection() {
  const notes = zustStore((s) => s.notes);
  const getNotes = zustStore((s) => s.getNotes);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return (
    <div className="flex flex-col gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}
