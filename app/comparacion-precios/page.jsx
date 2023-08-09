import obtenerHoteles from '@/app/actions/getHoteles'
import ComparacionContainer from './components/tipo-comparacion/ComparacionContainer';
import { Suspense } from 'react'
import Loader from '../components/Loader';

const page = async () => {
  const hoteles = await obtenerHoteles();

  return (
    <>
      <Suspense fallback={Loader}>
        <ComparacionContainer hoteles={hoteles} />
      </Suspense>

    </>
  )
}

export default page