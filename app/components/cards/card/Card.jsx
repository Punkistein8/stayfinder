'use client'

import Image from 'next/image'

import 'animate.css';

import Hotel from '@/public/images/hotel1.webp'
import Estrella from '@/public/svg/estrella.svg'
import Marcador from '@/public/svg/ubicacion-marcador.svg'

import dynamic from "next/dynamic";


import './cardStyle.css'

const Card = ({ indice, className, nombreHotel, estrellas, precio, foto }) => {

    const DynamicModal = dynamic(() => import("./modal/Modal"), {
        ssr: false,
    });

    return (
        <>
            <DynamicModal
                indice={indice}
                nombreHotel={nombreHotel}
                estrellas={estrellas}
                precio={precio}
                foto={foto}
            />
            {
                <div
                    data-te-toggle="modal"
                    data-te-target={`#exampleModal${indice}`}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className={`card animate__animated animate__fadeIn mb-24 mx-auto hover:scale-[102%] hover:shadow-2xl cursor-pointer transition-all select-none ${className}`}>
                    <div className="overlap">
                        <Image className="hotel rounded-md" alt="Pais" width={500} height={500} src={foto ? foto : Hotel} />
                        <div className="card-secundaria" />
                        <div className="pais-provincia">
                            <Image className="ubicacion-marcador" alt="Ubicacion marcador" src={Marcador} />
                            <div className="latacunga">Latacunga</div>
                            <div className="ecuador">Ecuador</div>
                        </div>
                        <p className="caracteristicas">económico • en las afueras</p>
                        <p className="direccion">Av. Simón Rodriguez y Otawa</p>
                        <div className="por-noche">por noche</div>
                        <div className='hotel-las-armenias'>
                            <p className="truncate text-ellipsis overflow-hidden">
                                {nombreHotel ? nombreHotel : 'null'}
                            </p>
                        </div>
                        <div className="precio">
                            <div className="overlap-group">
                                <div className="element">{precio ? precio : 'null'}</div>
                            </div>
                        </div>
                        <div className="calificacion">
                            <Image className="estrella" alt="Estrella" src={Estrella} />
                            <div className="text-wrapper">{estrellas ? estrellas : 'null'}</div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Card;