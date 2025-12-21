import {useState,useRef,useEffect} from 'react'
import {Bell, Palette,Type,Users,Image as Img,Download,Undo2,Redo2,X} from "lucide-react";
import NotecardModal from './NotecardModal';
import { useAutoResize } from "../hooks/useAutoResize.js";


export default function NoteCard({note}) {
  const [showModal,setShowModal] = useState(false);
  const textarearef = useRef(null);
  const modalRef = useRef();
  useAutoResize(textarearef,note.content)
  
  const iconStyle = "w-6 h-6 text-gray-400 hover:text-neutral-50 rounded-full hover:bg-neutral-700 cursor-pointer"

  useEffect(() => {
  if (!showModal) return;

  function handleClickOutside(e) {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      setShowModal(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showModal]);


  return (<>
  {showModal && (
    <div  className='grid place-items-center fixed inset-0 backdrop-blur-sm'>
      <div ref ={modalRef} className='w-full max-w-[600px]' >

      <NotecardModal 
        key={note.id}
        note={note}      
        />
        </div>

    </div>
  )}    
    

    <div className='bg-[#202125] text-gray-300 w-full max-w-[566px] rounded-lg px-4 py-3  border border-[#545659]' >
        
        <input 
        
        onClick={()=>setShowModal(true)}
        className='w-full bg-transparent text-xl font-semibold outline-none mb-2 placeholder-[#a3a2a5]'
        value = {note.title}
        readOnly

        />

        <textarea  
        ref = {textarearef}
        onClick={()=>setShowModal(true)}
        className='flex overflow-hidden w-full bg-transparent outline-none text-xl  mb-3 placeholder-[#a3a2a5] transition-all'
        value = {note.content}
        readOnly

        />
      
        
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
        </div>  
      </div>  
    </div>
    </>
  )
}
