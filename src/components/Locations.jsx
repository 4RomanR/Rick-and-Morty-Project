import axios from "axios"

const Locations = ({locInfo, setLocationInfo}) => {
    console.log(locInfo)
    const handleSubmit = (e) => {
      e.preventDefault()
      const newLocationID = e.target.newLocation.value
      axios
      .get(`https://rickandmortyapi.com/api/location/${newLocationID}`)
      .then(({data})=> setLocationInfo(data))
      .catch((error)=> console.log(error))

    }
  return (
    <section className="flex flex-col justify-center items-center text-center mx-auto w-[80%] mt-60">
        <form onSubmit={handleSubmit} className="w-[419px] my-3 border-2 border-green-500">
          <div className="flex justify-between text-white">
            <input className="shink w-full px-2 bg-transparent" type="number" name="newLocation" placeholder="Type a location ID..." required/>
            <button className="shink w-30 bg-green-800 m-0 py-1 px-5" type="submit">Search</button>
          </div>
        </form>
        <div className="min-w-[360px] w-[70%] text-white my-6 border-2 border-green-500 p-6">
            <h2 className="my-3">¡Wellcome to {locInfo?.name}!</h2>
            <ul className="flex justify-center gap-6 my">
                <li>Type: {locInfo?.type}</li>
                <li>Dimension: {locInfo?.dimension}</li>
                <li>Population: {locInfo?.residents.length}</li>
            </ul>
        </div>
    </section>
  )
}
export default Locations