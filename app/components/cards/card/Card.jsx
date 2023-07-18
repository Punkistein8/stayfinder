// 'use client'

import Image from 'next/image'

import Hotel from '@/public/images/hotel1.webp'
import Estrella from '@/public/svg/estrella.svg'
import Marcador from '@/public/svg/ubicacion-marcador.svg'

import './cardStyle.css'

const Card = ({ className, nombreHotel, estrellas, precio, foto }) => {
    return (
        <div className={`card mb-24 mx-auto hover:scale-[102%] hover:shadow-2xl cursor-pointer transition-all ${className}`}>
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
                <marquee className='hotel-las-armenias'>
                    <p className="">
                        {nombreHotel ? nombreHotel : 'null'}
                    </p>
                </marquee>
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
    );
};

export default Card;