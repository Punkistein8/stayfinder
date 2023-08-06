import Navbar from '@/app/components/navbar/Navbar'
import TiposHoteles from './components/tipos-hoteles/TiposHoteles'
import CardsContainer from "./components/cards/CardsContainer"

const Home = () => {
  return (
    <>
      <Navbar />
      <TiposHoteles />
      <CardsContainer />
    </>
  )
}

export default Home