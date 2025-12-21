import {useRef} from 'react'
import { useAutoResize } from '../hooks/useAutoResize'

function NotecardModal({note}) {
  const textareref = useRef();
  useAutoResize(textareref,note.content)
  
  return (
      
      <div  className='grid bg-[#202125] text-gray-300 w-full max-w-[566px] rounded-lg px-4 py-3  border border-[#545659]'>

        <input 
          className='outline-none'
          defaultValue={note.title}
          />
        
        <textarea
          ref={textareref}
          className='whitespace-pre-wrap break-words flex overflow-hidden w-full bg-transparent resize-none outline-none text-xl  mb-3 placeholder-[#a3a2a5] transition-all'
          defaultValue={note.content}
          />
      
      </div>

    
  )
}

export default NotecardModal