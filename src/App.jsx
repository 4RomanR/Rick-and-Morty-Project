import axios from "axios"
import { useEffect, useState } from "react"
import { getRandomNumber } from "./helpers/random"
import Locations from "./components/Locations";
import Residents from "./components/Residents";
import Logo from "./components/Logo";

function App() {
  const [locationInfo, setLocationInfo] = useState(null)
  useEffect(() => {
    const randomWorld = getRandomNumber(126)
    console.log(randomWorld)
    axios.get(`https://rickandmortyapi.com/api/location/${randomWorld}`)
    .then(({data}) => setLocationInfo(data))
    .catch((err)=> console.log(err))
  }, []);

  return (
    <body className="bg-black">
      <Logo />
      <Locations locInfo={locationInfo} setLocationInfo={setLocationInfo} />
      <Residents resd={locationInfo?.residents ?? []} />

    </body>
  )
}

export default App
