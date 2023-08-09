'use client'
import styles from './comparacionPrecios.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ComparacionPrecios = () => {

  const [comparacionSelected, setcomparacionSelected] = useState(false)

  useEffect(() => {
    if (window.location.pathname === '/comparacion-precios') {
      setcomparacionSelected(true)
    } else {
      setcomparacionSelected(false)
    }
  }, [])

  const handleClick = () => {
    setcomparacionSelected(!comparacionSelected)
  }



  return (
    <Link href='/comparacion-precios' passHref>
      <div className={`container-der ${comparacionSelected && 'bg-[#5db299]'} cursor-pointer flex justify-center items-center rounded-r-full select-none`} onClick={handleClick}>
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