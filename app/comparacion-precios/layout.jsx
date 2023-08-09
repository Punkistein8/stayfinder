import Navbar from '@/app/components/navbar/Navbar'
import TipoComparacion from '@/app/comparacion-precios/components/tipo-comparacion/TipoComparacion'


export const metadata = {
  title: 'Comparacion de Precios',
  description: '¡Te guiaremos para encontrar el mejor lugar!',
  locale: 'es_ES',
}

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      <TipoComparacion />

      {children}
    </>
  );
}