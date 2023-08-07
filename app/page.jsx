import Navbar from '@/app/components/navbar/Navbar'
import TiposHoteles from './components/tipos-hoteles/TiposHoteles'
import CardsContainer from "./components/cards/CardsContainer"

import obtenerHoteles from '@/app/actions/getHoteles'

const Home = async () => {

  const hoteles = await obtenerHoteles();

  return (
    <>
      <Navbar />
      <TiposHoteles />
      <CardsContainer hoteles={hoteles} />
    </>
  )
}

export default Home