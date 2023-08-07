import styles from './comparacionPrecios.css'
import Link from 'next/link'

const ComparacionPrecios = () => {
  return (
    <Link href='/comparacion-precios' passHref>
      <div className="container-der cursor-pointer flex justify-center items-center rounded-r-full select-none">
        <span className='rotate-180 select-none'>
          Compara Precios
        </span>
        <div className="box-1">
        </div>
      </div>
    </Link>


  )
}

export default ComparacionPrecios