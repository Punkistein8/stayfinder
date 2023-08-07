'use client'

import Card from "./card/Card"
import { useSearchParams } from "next/navigation";

function capitalizeString(str) {
    // Asegurarse de que el parámetro sea una cadena
    if (typeof str !== 'string') {
        return '';
    }

    // Capitalizar la primera letra y combinarla con el resto de la cadena
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

function capitalizeWords(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str.split(' ').map(word => capitalizeString(word)).join(' ');
}

export default function CardsContainer({ hoteles }) {

    const params = useSearchParams(); // used to get the category from the url query
    const category = params?.get('category');

    return (
        <>
            {
                hoteles.length > 0 ? (
                    <div className="flex flex-col justify-center items-center mt-10 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4 xl:gap-4" >
                        {
                            hoteles.map((item, index) => {
                                return (
                                    <Card
                                        key={index}
                                        nombreHotel={capitalizeWords(item.nombreHotel)}
                                        estrellas={item.estrellas}
                                        precio={item.precio}
                                        foto={item.foto}
                                    />
                                )
                            })
                        }
                    </div >
                ) : (
                    <div className="flex flex-col justify-center items-center mt-10">
                        <h1 className="text-2xl font-bold text-gray-700">No hay hoteles disponibles aún</h1>
                    </div>
                )
            }
        </>
    )
}