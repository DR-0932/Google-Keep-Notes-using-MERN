import { useEffect,useState,useRef } from "react"
import { zustStore } from "../Store/store";
import {Bell, Palette,Type,Users,Image as Img,Download,Undo2,Redo2,X} from "lucide-react";
import { useAutoResize } from "../hooks/useAutoResize.js";


export default function Inputbox(){
  const [title,settitle] = useState("");
  const [content,setContent] = useState("");
  const [Isexpanded,setIsExpanded] = useState(false);

 const addNote =zustStore((s)=>s.addNote)
 const noteRef = useRef();
 const getNotes = zustStore((s) => s.getNotes);
 const textareaRef = useRef();
 useAutoResize(textareaRef,content)
  
  const iconStyle = "w-6 h-6 text-gray-400 hover:text-neutral-50 rounded-full hover:bg-neutral-700 cursor-pointer"

 //POST request
 const handleSubmit=async()=>{
  // POST request + Instant state update in store  
  await addNote({title,content}); 
  settitle("");
  // GET request
  await getNotes();
  setContent("");
  console.log(JSON.stringify(content))

 }

 
 //Submit the notes and set to default when click occurs outside container
 useEffect(()=>{
  function handleClickOutside(e){
    if(noteRef.current && !noteRef.current.contains(e.target)){
      if(title.trim() || content.trim()){
        addNote({title,content});
        settitle(""); 
        setContent("");
      }
      setIsExpanded(false);
    }
  }
  document.addEventListener("mousedown",handleClickOutside);
  return()=>
    document.removeEventListener("mousedown",handleClickOutside);
 },[title,content,addNote]);
  
useEffect(()=>{
    const vl =  textareaRef.current;
    if(vl){
      vl.style.height ="auto"; // to understand this
      vl.style.height=vl.scrollHeight+"px";
    }
  },[content]);

  return(<>
    <div ref={noteRef} className="bg-[#202125] text-gray-300 w-full max-w-[566px] rounded-lg px-4 py-3  border border-white  my-10 ">
      {Isexpanded && (
      
      <input 
        className="w-full bg-transparent text-xl font-semibold outline-none mb-2 placeholder-[#a3a2a5]" 
        type="text" 
        value={title}
        placeholder="Title" 
        onChange={(e)=>settitle(e.target.value)}
        />)}
      
      
      <textarea
      ref= {textareaRef}
        className="flex overflow-hidden w-full bg-transparent resize-none outline-none text-xl  mb-3 placeholder-[#a3a2a5] transition-all"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        placeholder="Take a note..."
        rows={1}
        onClick={()=>setIsExpanded(true)}
      />
      
       {Isexpanded && (
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex gap-3 ">
          
          <Type className={iconStyle}/>
          <Palette className={iconStyle}/>
          <Bell className={iconStyle}/>
          <Img className={iconStyle}/>
          <Download className={iconStyle}/>
        </div>

        <div className="flex items-center gap-3">
          <Undo2 className={iconStyle}/>
          <Redo2 className={iconStyle}/>
          <button onClick={handleSubmit} className="text-sm text-gray-300 hover:text-neutral-50">Close</button>
        </div>
          
        
      </div>
      )}
    </div>
  
  </>)
}