'use client'

import { useSearchParams } from "next/navigation";
import capitalizeWords from "app/helpers/capitalizeWords";

import { BsHandIndex } from 'react-icons/bs'
import { CgUnavailable } from 'react-icons/cg'

import CardComparacion from "../card/CardComparacion";

export default function ComparacionContainer({ hoteles }) {

  const params = useSearchParams(); // used to get the comparacion from the url query
  const comparacion = params?.get('comparacion');

  if (comparacion) {
    if (comparacion === 'baratos') {
      hoteles = hoteles.sort((a, b) => {
        const precioA = parseFloat(a.precio.replace('$', ''));
        const precioB = parseFloat(b.precio.replace('$', ''));
        return precioA - precioB;
      });
      console.log(hoteles);
    } else if (comparacion === 'costosos') {
      hoteles = hoteles.sort((a, b) => {
        const precioA = parseFloat(a.precio.replace('$', ''));
        const precioB = parseFloat(b.precio.replace('$', ''));
        return precioB - precioA;
      });
      console.log(hoteles);
    } else if (comparacion === 'valorados') {
      hoteles = hoteles.sort((a, b) => {
        const estrellasA = parseFloat(a.estrellas.replace(',', '.'));
        const estrellasB = parseFloat(b.estrellas.replace(',', '.'));
        return estrellasB - estrellasA;
      });
      console.log(hoteles);
    } else if (comparacion === 'novalorados') {
      hoteles = hoteles.sort((a, b) => {
        const estrellasA = parseFloat(a.estrellas.replace(',', '.'));
        const estrellasB = parseFloat(b.estrellas.replace(',', '.'));
        return estrellasA - estrellasB;
      });
      console.log(hoteles);
    }
  } else {
    return (
      <div className="flex flex-col justify-center items-center mt-36 gap-5 border-2 w-1/2 mx-auto p-5 rounded-lg">
        <BsHandIndex size={32} className="fill-[#5DB299] text-[#5DB299]" />
        <h1 className="text-2xl text-gray-700 select-none">Selecciona un criterio para comparar...</h1>
      </div>
    )
  }

  return (
    <>
      {
        hoteles.length > 0 ? (
          <div className="flex flex-col justify-center items-center mt-10 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:gap-4" >
            {
              hoteles.map((item, index) => {
                console.log(index);
                return (
                  <CardComparacion
                    key={index}
                    indice={index}
                    nombreHotel={capitalizeWords(item.nombreHotel)}
                    estrellas={item.estrellas}
                    precio={item.precio}
                    foto={item.foto}
                  />
                )
              })
            }
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-36 gap-5 border-2 w-1/2 mx-auto p-5 rounded-lg">
            <CgUnavailable size={32} className="fill-[#5DB299] text-[#5DB299]" />
            <h1 className="text-2xl text-gray-700 select-none">No hay hoteles de esta categoría disponibles aún...</h1>
          </div>
        )
      }
    </>
  )
}