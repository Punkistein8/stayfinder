'use client'

import Card from "./card/Card"
import { useSearchParams } from "next/navigation";
import capitalizeWords from "app/helpers/capitalizeWords";

import { CgUnavailable } from 'react-icons/cg'

export default function CardsContainer({ hoteles }) {

    const params = useSearchParams(); // used to get the category from the url query
    const category = params?.get('category');

    if (category) {
        if (category === 'economicos') {
            hoteles = hoteles.filter(hotel => {
                const entero = parseInt(hotel.precio.replace('$', ''), 10);
                return entero <= 15;
            });
            console.log(hoteles);
        } else if (category === 'huespedes') {
            hoteles = hoteles.filter(hotel => {
                return hotel.informacion.find(info => {
                    return info.toLowerCase().includes('albergue');
                });
            });
            console.log(hoteles);
        } else if (category === 'boutique') {
            hoteles = []
        } else if (category === 'BB') {
            const palabrasClave = ['bed', 'breakfast', 'desayuno', 'restaurante'];
            const elementosEncontrados = hoteles.filter(hotel => {
                return hotel.informacion.find(info => {
                    return palabrasClave.find(palabra => {
                        return info.toLowerCase().includes(palabra);
                    });
                });
            });
            hoteles = elementosEncontrados;
            console.log(hoteles);
        } else if (category === 'lujo') {
            hoteles = hoteles.filter(hotel => {
                return parseFloat(hotel.estrellas.replace(',', '.')) >= 4.6 && parseFloat(hotel.precio.replace('$', '')) >= 25;
            });
            console.log(hoteles);
        } else if (category === 'resort') {
            hoteles = []
        }

    }


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
                    <div className="flex flex-col justify-center items-center mt-36 gap-5 border-2 w-1/2 mx-auto p-5 rounded-lg">
                        <CgUnavailable size={32} className="fill-[#5DB299] text-[#5DB299]" />
                        <h1 className="text-2xl text-gray-700 select-none">No hay hoteles de esta categoría disponibles aún...</h1>
                    </div>
                )
            }
        </>
    )
}