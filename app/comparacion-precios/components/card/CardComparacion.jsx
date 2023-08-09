// 'use client'

import Image from 'next/image'

import 'animate.css';

import Hotel from '@/public/images/hotel1.webp'
import Estrella from '@/public/svg/estrella.svg'
import Marcador from '@/public/svg/ubicacion-marcador.svg'

import './cardStyle.css'

const CardComparacion = ({ indice, className, nombreHotel, estrellas, precio, foto, comparacion }) => {
  return (
    <>
      {
        indice === 0 | indice === 1 | indice === 2 ? (
          <>
            <div className={`border-2 m-5 rounded-2xl ${indice === 0 && 'border-[#36d7b7] border-4'} ${indice === 1 && 'border-[#b2ddd5] border-[3px]'}`}>

              {indice === 0 & comparacion === 'baratos' ? (
                <>
                  <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#36d7b7] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">1</div>
                  <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#36d7b7] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El más <span className='font-bold'>&nbsp;económico</span>
                  </div>
                </>
              ) : indice === 1 & comparacion === 'baratos' ? (
                <>
                  <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#8ecfc2] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">2</div>
                  <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#8ecfc2] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El  <span className='font-bold'>&nbsp;segundo</span>&nbsp;barato
                  </div>
                </>
              ) :
                indice === 2 & comparacion === 'baratos' ? (
                  <>
                    <div className="absolute select-none -translate-y-6 translate-x-2 bg-gray-300 rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">3</div>

                  </>
                ) :
                  indice === 0 & comparacion === 'costosos' ? (
                    <>
                      <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#36d7b7] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">1</div>
                      <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#36d7b7] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El más <span className='font-bold'>&nbsp;costoso</span>
                      </div>
                    </>
                  ) :
                    indice === 1 & comparacion === 'costosos' ? (
                      <>
                        <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#8ecfc2] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">2</div>
                        <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#8ecfc2] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El  <span className='font-bold'>&nbsp;segundo</span>&nbsp;más caro
                        </div>
                      </>
                    ) :
                      indice === 2 & comparacion === 'costosos' ? (
                        <>
                          <div className="absolute select-none -translate-y-6 translate-x-2 bg-gray-300 rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">3</div>
                        </>
                      ) :
                        indice === 0 & comparacion === 'valorados' ? (
                          <>
                            <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#36d7b7] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">1</div>
                            <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#36d7b7] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El mejor <span className='font-bold'>&nbsp;valorado</span>
                            </div>
                          </>
                        ) :
                          indice === 1 & comparacion === 'valorados' ? (
                            <>
                              <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#8ecfc2] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">2</div>
                              <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#8ecfc2] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El  <span className='font-bold'>&nbsp;segundo</span>&nbsp;mejor
                              </div>
                            </>
                          ) :
                            indice === 2 & comparacion === 'valorados' ? (
                              <>
                                <div className="absolute select-none -translate-y-6 translate-x-2 bg-gray-300 rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">3</div>
                              </>
                            ) : indice === 0 & comparacion === 'novalorados' ? (
                              <>
                                <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#36d7b7] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">1</div>
                                <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#36d7b7] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El peor <span className='font-bold'>&nbsp;valorado</span>
                                </div>
                              </>
                            ) :
                              indice === 1 & comparacion === 'novalorados' ? (
                                <>
                                  <div className="absolute select-none -translate-y-6 translate-x-2 bg-[#8ecfc2] rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">2</div>
                                  <div className='absolute select-none -translate-y-[16px] translate-x-10 bg-[#8ecfc2] w-64 h-7 rounded-tr-md rounded-br-md flex justify-center items-center text-white text-xl'>El  <span className='font-bold'>&nbsp;segundo</span>&nbsp;peor
                                  </div>
                                </>
                              ) :
                                indice === 2 & comparacion === 'novalorados' ? (
                                  <>
                                    <div className="absolute select-none -translate-y-6 translate-x-2 bg-gray-300 rounded-full w-12 h-12 flex justify-center items-center text-white text-xl font-bold">3</div>
                                  </>
                                ) : null
              }

              <div className={`card ${indice === 0 && 'animate__animated animate__zoomIn animate__delay-2s'} ${indice === 1 && 'animate__animated animate__zoomIn animate__delay-1s'} ${indice === 2 && 'animate__animated animate__zoomIn'}  my-16 mx-auto hover:scale-[102%] hover:shadow-2xl cursor-pointer transition-all select-none ${className}`}>
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