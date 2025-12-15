import {create} from 'zustand'

export const zustStore = create((set)=>({
  notes:[],

  //GET request
  getNotes: async()=>{
    const res = await fetch("http://localhost:3000/notes");
    const data = await res.json();
    set({notes:data});
  },

  //POST request
  addNote: async({title,content})=>{
    const res =await fetch("http://localhost:3000/notes",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({title,content}),
    });

    const newNote= await res.json();
    //Instant UI update
    set((state)=>({
      notes:[...state.notes,newNote],
    }));

  },
updateNote: async (id, updates) => {
  const res = await fetch(`http://localhost:3000/notes/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  });

  const updatedNote = await res.json();

  set((state) => ({
    notes: state.notes.map((n) =>
      n.id === id ? updatedNote : n
    ),
  }));
  }

})) 