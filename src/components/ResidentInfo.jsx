import axios from "axios";
import { useEffect, useState } from "react"

const ResidentInfo = ({ resdURL }) => {
  const status = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-slate-500'
  }


  const [resdUser, setResdUser] = useState(null)
  useEffect(()=>{
    axios
    .get(resdURL)
    .then(({data})=>setResdUser(data))
    .catch((err)=>console.log(err))
  }), [];


  return (
    <section className="relative border-2 border-green-500 text-white ">
      <img src={resdUser?.image} alt="" />
      {/* Status */}
      <div className="flex items-center gap-2 relative bottom-16 w-[90px] left-1/2 -translate-x-1/2 bg-black/60 p-2 text-white  border-2 border-green-500">
        <div className={`h-3  aspect-square rounded-full ${status[resdUser?.status]}`}></div>
        <p>{resdUser?.status}</p>
      </div>
      <h3 className="p-4">Resident Name</h3>
      <ul className="px-2 ">
        <li><span className="px-2">Species </span>{resdUser?.species}</li>
        <li><span className="px-2">Origin </span>{resdUser?.origin.name}</li>
        <li><span className="px-2">Times appear </span>{resdUser?.episode.length}</li>
      </ul>
    </section>     
  )
}
export default ResidentInfo