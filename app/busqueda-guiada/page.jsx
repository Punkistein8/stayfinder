'use client'

import { Box } from "./components/box/box"
import { Timeline } from "./components/timeline/timeline"

// svgs
import Solo from '@/public/svg/busqueda-guiada/1/solo.svg'
import Acompa from '@/public/svg/busqueda-guiada/1/acompa.svg'




const page = () => {
  return (
    <>
      <div>
        <Timeline className={`mx-auto pt-24 pb-20`} />
        <h1 className={`text-center text-3xl pb-20`}>¿Estás <span className="font-bold">solo</span> o <span className="font-bold">acompañado</span>?</h1>

        <div className="flex justify-center gap-20">
          <Box text={'Solo/a'} svg={Solo} />
          <Box text={'Acompañado/a'} svg={Acompa} />
        </div>
      </div>
    </>
  )
}

export default page