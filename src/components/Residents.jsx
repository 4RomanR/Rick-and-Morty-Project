import { useEffect, useState } from "react"
import { paginationLogic } from "../utils/paginations"
import ResidentInfo from "./ResidentInfo"

const Residents = ({ resd }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { pages, resdCurrentPage } = paginationLogic(currentPage, resd)

  const handlePage = (newPage) => {
    setCurrentPage(newPage)
  }
  console.log(resd)


  useEffect(() => {
    setCurrentPage(1)
  }, [resd])


  return (

      <section className=" max-w-[1000px] mx-auto ">
        <img className="relative bottom-60 opacity-30 w-[250px]" src="./image/stars.png" alt="stars" />
        <img className="relative bottom-60 opacity-30 w-[250px]" src="./image/gradient.png" alt="gradient" />
        
        <section className="flex gap-4 flex-wrap place-content-center mx-auto">
          {
            resdCurrentPage.map((resdt) => <ResidentInfo key={resdt} resdURL={resdt} />)
          }


          

        </section>

        {/* Pagination */}
        <ul className="flex justify-center p-4 gap-6 flex-wrap items-center  ">
          {
            pages.map((page) => (
              <li className="text-white" key={page}>
                <button className={`${currentPage === page && "bg-green-950/70 py-2 px-4 text-white"}`} onClick={() => handlePage(page)}>{page}</button>
              </li>

            ))}
        </ul>

      </section>
     



  )
}
export default Residents