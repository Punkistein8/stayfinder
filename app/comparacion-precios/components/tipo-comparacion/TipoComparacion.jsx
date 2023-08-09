'use client'

import Item from "./Item"
import { useSearchParams } from "next/navigation";

const TiposHoteles = () => {

  const params = useSearchParams(); // used to get the category from the url query
  const comparacion = params?.get('comparacion');

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className="col-span-4">
        </div>
        <Item name={'baratos'} label={'Más Baratos'} selected={comparacion === 'baratos'} />
        <Item name={'costosos'} label={'Más Costosos'} selected={comparacion === 'costosos'} />
        <Item name={'valorados'} label={'Mejor Valorados'} selected={comparacion === 'valorados'} />
        <Item name={'novalorados'} label={'Peor Valorados'} selected={comparacion === 'novalorados'} />
        <div className="col-span-4">
        </div>
      </div>
      <hr className='border-[#ccc]' />
    </>
  )
}

export default TiposHoteles