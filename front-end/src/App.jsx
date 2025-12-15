import { useState } from 'react'
import Inputbox from './components/Inputbox'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Notesection from './components/Notesection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex bg-red-300'> <Navbar></Navbar></div>
    <div className='grid grid-cols-[20%_70%]'>

      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className="main bg-gray-500">
        <div>
          <Inputbox></Inputbox>
        </div>
        <div>
          <Notesection></Notesection>
        </div>

      </div>     
    </div>
    </>
  )
}

export default App
