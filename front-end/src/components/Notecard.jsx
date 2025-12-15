import React from 'react'
import {Bell, Palette,Type,Users,Image as Img,Download,Undo2,Redo2,X} from "lucide-react";

export default function NoteCard({note}) {

  const iconStyle = "w-6 h-6 text-gray-400 hover:text-neutral-50 rounded-full hover:bg-neutral-700 cursor-pointer"

  return (
    <div className='bg-[#202125] text-gray-300 w-full max-w-[566px] rounded-lg px-4 py-3  border border-[#545659]' >
      <div className='w-full bg-transparent text-xl font-semibold outline-none mb-2 placeholder-[#a3a2a5]'>
        {note.title}
        </div>

        <p className='flex overflow-hidden w-full bg-transparent resize-none outline-none text-xl  mb-3 placeholder-[#a3a2a5] transition-all'>
          {note.content}
        </p>
      

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
  )
}
