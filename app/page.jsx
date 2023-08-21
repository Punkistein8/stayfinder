import Navbar from '@/app/components/navbar/Navbar'
import TiposHoteles from './components/tipos-hoteles/TiposHoteles'
import CardsContainer from "./components/cards/CardsContainer"

import obtenerHoteles from '@/app/actions/getHoteles'
import { Suspense } from 'react'
import Loader from './components/Loader'

const Home = async () => {

  // await new Promise(resolve => setTimeout(resolve, 1000));

  const hoteles = await obtenerHoteles();


  return (
    <>
      <Navbar />
      <TiposHoteles />
      <Suspense fallback={Loader}>
        <CardsContainer hoteles={hoteles} />
      </Suspense>
    </>
  )
}

export default Home