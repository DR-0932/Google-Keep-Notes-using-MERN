import { useState } from 'react'
import Inputbox from './components/Inputbox'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Notesection from './components/Notesection'

function App() {
    

  return (
    <>
    <div className=''> 
      
      <Navbar/>
    
    </div>

    <div className='grid grid-cols-[20%_70%]'>

      <div className='sidebar'>

        <Sidebar/>

      </div>

      <div className="bg-[#202125]">
       
        <div>
          
          <Inputbox/>

        </div>
        <div>

          <Notesection/>
          
        </div>

      </div>

    </div>
    </>
  )
}

export default App
