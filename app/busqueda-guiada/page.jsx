'use client'
import 'animate.css';
import { Box } from "./components/box/box"
import { Timeline } from "./components/timeline/timeline"
import { useState } from "react";

// svgs 0
import Solo from '@/public/svg/busqueda-guiada/1/solo.svg'
import Acompa from '@/public/svg/busqueda-guiada/1/acompa.svg'

// svgs 1
import Barato from '@/public/svg/busqueda-guiada/2/barato.svg'
import Necesario from '@/public/svg/busqueda-guiada/2/necesario.svg'
import Costoso from '@/public/svg/busqueda-guiada/2/costoso.svg'

// svgs 2
import Economicos from '@/public/svg/busqueda-guiada/3/1.economicos.svg'
import Huespedes from '@/public/svg/busqueda-guiada/3/1.huespedes.svg'
import BB from '@/public/svg/busqueda-guiada/3/2.bb.svg'
import Boutique from '@/public/svg/busqueda-guiada/3/2.boutique.svg'
import Lujo from '@/public/svg/busqueda-guiada/3/3.lujo.svg'
import Resort from '@/public/svg/busqueda-guiada/3/3.resort.svg'

// svgs3
import Gim from '@/public/svg/busqueda-guiada/4/gim.svg'
import Piscina from '@/public/svg/busqueda-guiada/4/piscina.svg'
import Spa from '@/public/svg/busqueda-guiada/4/spa.svg'
import Restaurante from '@/public/svg/busqueda-guiada/4/restaurante.svg'
import Parqueadero from '@/public/svg/busqueda-guiada/4/parqueadero.svg'
import Wifi from '@/public/svg/busqueda-guiada/4/wifi.svg'
import Link from 'next/link';


const page = () => {

  const [actualQuestion, setActualQuestion] = useState(0)
  const [answers, setAnswers] = useState([])

  console.log(answers)

  return (
    <>
      {actualQuestion === 0 ?
        (
          <div>
            <Timeline actualQuestion={actualQuestion} className={`mx-auto pt-24 pb-20 animate__animated animate__fadeInDown`} />
            <h1 className={`select-none text-center text-3xl pb-20 animate__animated animate__fadeInDown`}>¿Estás <span className="font-bold">solo</span> o <span className="font-bold">acompañado</span>?</h1>

            <div className="flex justify-center gap-20">
              <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Solo/a'} svg={Solo} className={`animate__animated animate__fadeInUp animate__delay-1s`} />
              <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Acompañado/a'} svg={Acompa} className={`animate__animated animate__fadeInUp animate__delay-1s`} />
            </div>
          </div>
        ) : actualQuestion === 1 ?
          (
            <div>
              <Timeline actualQuestion={actualQuestion} className={`mx-auto pt-24 pb-20 animate__animated animate__fadeInDown`} />
              <h1 className={`select-none text-center text-3xl pb-20 animate__animated animate__fadeInDown`}>¿Cuánto <span className="font-bold">dinero</span> piensas <span className="font-bold">usar</span>?</h1>

              <div className="flex justify-center gap-20">
                <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Lo más barato'} svg={Barato} />
                <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Lo necesario'} svg={Necesario} />
                <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Lo más costoso'} svg={Costoso} />
              </div>
            </div>
          ) : actualQuestion == 2 ?
            (
              answers[1] == 'Lo más barato' ?
                (
                  <div>
                    <Timeline actualQuestion={actualQuestion} className={`mx-auto pt-24 pb-20 animate__animated animate__fadeInDown`} />
                    <h1 className={`select-none text-center text-3xl pb-20 animate__animated animate__fadeInDown`}>¿Qué tipo de  <span className="font-bold">alojamiento</span> prefieres?</h1>

                    <div className="flex justify-center gap-20">
                      <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Hoteles Económicos'} svg={Economicos} />
                      <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Casas de Huéspedes'} svg={Huespedes} />
                    </div>
                  </div>

                ) : answers[1] == 'Lo necesario' ?
                  (
                    <div>
                      <Timeline actualQuestion={actualQuestion} className={`mx-auto pt-24 pb-20 animate__animated animate__fadeInDown`} />
                      <h1 className={`select-none text-center text-3xl pb-20 animate__animated animate__fadeInDown`}>¿Qué tipo de  <span className="font-bold">alojamiento</span> prefieres?</h1>

                      <div className="flex justify-center gap-20">
                        <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Hoteles Boutique'} svg={Boutique} />
                        <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Hotel B&B'} svg={BB} />
                      </div>
                    </div>
                  ) : answers[1] == 'Lo más costoso' ?
                    (
                      <div>
                        <Timeline actualQuestion={actualQuestion} className={`mx-auto pt-24 pb-20 animate__animated animate__fadeInDown`} />
                        <h1 className={`select-none text-center text-3xl pb-20 animate__animated animate__fadeInDown`}>¿Qué tipo de  <span className="font-bold">alojamiento</span> prefieres?</h1>

                        <div className="flex justify-center gap-20">
                          <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Hoteles de Lujo'} svg={Lujo} />
                          <Box answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Hoteles Resort'} svg={Resort} />
                        </div>
                      </div>
                    ) : null

            ) : actualQuestion == 3 ?
              (
                <div>
                  <Timeline actualQuestion={actualQuestion} className={`mx-auto pt-24 pb-20 animate__animated animate__fadeInDown`} />
                  <h1 className={`select-none text-center text-3xl pb-20 animate__animated animate__fadeInDown`}>¿Qué clase de  <span className="font-bold">servicios</span> necesitas?</h1>
                  <div className='flex justify-center'>
                    <div className="grid grid-cols-3">
                      <Box isInServices={true} classNameBox={'w-[210px] h-[170px]'} classNameRectangle={'w-[180px] h-[150px]'} classNameSvg={'w-20 mt-4'} answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Parqueadero'} svg={Parqueadero} className={`h-[15px]`} />
                      <Box isInServices={true} classNameBox={'w-[210px] h-[170px]'} classNameRectangle={'w-[180px] h-[150px]'} classNameSvg={'w-20 mt-4'} answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Restaurante'} svg={Restaurante} />
                      <Box isInServices={true} classNameBox={'w-[210px] h-[170px]'} classNameRectangle={'w-[180px] h-[150px]'} classNameSvg={'w-20 mt-4'} answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Gimnasio'} svg={Gim} />
                      <Box isInServices={true} classNameBox={'w-[210px] h-[170px]'} classNameRectangle={'w-[180px] h-[150px]'} classNameSvg={'w-20 mt-4'} answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Spa'} svg={Spa} />
                      <Box isInServices={true} classNameBox={'w-[210px] h-[170px]'} classNameRectangle={'w-[180px] h-[150px]'} classNameSvg={'w-20 mt-4'} answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Wi-fi'} svg={Wifi} />
                      <Box isInServices={true} classNameBox={'w-[210px] h-[170px]'} classNameRectangle={'w-[180px] h-[150px]'} classNameSvg={'w-20 mt-4'} answers={answers} setAnswers={setAnswers} setActualQuestion={setActualQuestion} actualQuestion={actualQuestion} text={'Piscina'} svg={Piscina} />
                    </div>
                    {/* boton de finalizar */}
                  </div>
                  <Link href={'/'} >
                    <div className="flex justify-center">
                      <button onClick={() => setActualQuestion(actualQuestion + 1)} className="bg-[#5DB299] hover:bg-[#4ca588] text-white font-bold py-2 px-4 rounded-full">¡Finalizar!</button>
                    </div>
                  </Link>
                </div>
              ) : null
      }
    </>
  )
}

export default page