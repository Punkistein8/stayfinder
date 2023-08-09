// 'use client'

import Image from 'next/image'

import 'animate.css';

import Hotel from '@/public/images/hotel1.webp'
import Estrella from '@/public/svg/estrella.svg'
import Marcador from '@/public/svg/ubicacion-marcador.svg'

import './cardStyle.css'

const CardComparacion = ({ indice, className, nombreHotel, estrellas, precio, foto }) => {
  // console.log(indice);
  return (
    <>
      {
        indice === 0 | indice === 1 | indice === 2 | indice === 3 ? (
          <>
            <div className={`border-2 m-5 rounded-2xl ${indice === 0 && 'border-[#36d7b7] border-4'} ${indice === 1 && 'border-[#b2ddd5] border-[3px]'}`}>

              <div className="absolute -translate-y-5 translate-x-2 bg-[#36d7b7] rounded-full w-10 h-10 flex justify-center items-center text-white text-xl font-bold">1</div>
              <div className='absolute -translate-y-[14px] translate-x-10 bg-[#36d7b7] w-64 h-6 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl font-bold'>
              
              </div>
              <div className={`card ${indice === 0 && 'animate_animated animate__jackInTheBox'}  my-16 mx-auto hover:scale-[102%] hover:shadow-2xl cursor-pointer transition-all select-none ${className}`}>
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
            </div>
          </>
        ) : (
          <div className={`card animate__animated animate__fadeIn mb-24 mx-auto hover:scale-[102%] hover:shadow-2xl cursor-pointer transition-all select-none ${className}`}>
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
        )
      }
    </>
  );
};

export default CardComparacion;