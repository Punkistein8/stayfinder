import Navbar from '@/app/components/navbar/Navbar'
import TipoComparacion from '@/app/comparacion-precios/components/TipoComparacion'


export const metadata = {
  title: 'Búsqueda Guiada',
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