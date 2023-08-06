import styles from './busquedaGuiada.css'
import Link from 'next/link'

const BusquedaGuiada = () => {
  return (
    // <button className="flex p-4 relative pl-3 h-[2rem] w-[10rem] after:absolute after:inline-block after:right-0 after:content-[''] after:w-[2rem] after:h-[2rem] after:rounded-l-[1rem] after:bg-[#F1F8F6] after:mr-[0px] after:border-l-2 border-2 border-r-0 rounded-l-full after:align-middle border-slate-200 items-center text-slate-500 bg-white hover:bg-white transition-all ease-in-out duration-300">
    //   Búsqueda Guiada
    // </button>
    <div className="container-izq cursor-pointer flex justify-center items-center rounded-r-full">
      <Link href='/busqueda-guiada' passHref>
        Búsqueda Guiada
      </Link>
      <div className="box-1">
      </div>
    </div>
  )
}

export default BusquedaGuiada