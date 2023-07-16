// 'use client'

import Image from 'next/image'

import Hotel from '@/public/images/hotel1.webp'
import Estrella from '@/public/svg/estrella.svg'
import Marcador from '@/public/svg/ubicacion-marcador.svg'

import './cardStyle.css'

let saludo

const makeCall = async () => {
    const resGet = await fetch('http://localhost:3000/api/hoteles', { method: 'GET' })
    const resPost = await fetch('http://localhost:3000/api/hoteles', { method: 'POST', body: JSON.stringify({ text: 'This is the body!' }) });

    const dataGet = await resGet.json()
    const dataPost = await resPost.json()
    console.log(dataGet)
    console.log(dataPost)
}


const Card = ({ className }) => {
    makeCall()
    return (
        <div className={`card mb-24 mx-auto ${className}`}>
            <div className="overlap">
                <Image className="hotel rounded-md" alt="Pais" src={Hotel} />
                <div className="card-secundaria" />
                <div className="pais-provincia">
                    <Image className="ubicacion-marcador" alt="Ubicacion marcador" src={Marcador} />
                    <div className="latacunga">Latacunga</div>
                    <div className="ecuador">Ecuador</div>
                </div>
                <p className="caracteristicas">económico • en las afueras</p>
                <p className="direccion">Av. Simón Rodriguez y Otawa</p>
                <div className="por-noche">por noche</div>
                <div className="hotel-las-armenias">{saludo ? saludo : 'Hotel Las Armenias'}</div>
                <div className="precio">
                    <div className="overlap-group">
                        <div className="element">$16</div>
                    </div>
                </div>
                <div className="calificacion">
                    <Image className="estrella" alt="Estrella" src={Estrella} />
                    <div className="text-wrapper">4.6</div>
                </div>
            </div>
        </div>
    );
};

export default Card;