import { useState } from "react"

export default function Navbar(){
  const [logo, setLogo] = useState("Keep Notes");
  


  return(<>
    <nav className="flex h-20 items-center bg-[#202125] text-gray-300 w-full px-4 py-3  border border-[#545659]">
      <div className="w-60  bg-red-400">
          {logo}
      </div>
      <div className="w-750 bg-blue-400">
          Search Bar
      </div>
      <div className="w-150 bg-green-400">
          OPtions
      </div>
    </nav>
  </>)
}