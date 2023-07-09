'use client'

import { useState } from "react"
import Lupa from "@/app/components/svgs/Lupa.jsx"

const BusquedaNormal = () => {

  const [hovered, setHovered] = useState(false);

  return (
    <div className="cursor-pointer rounded-full border-[1.8px] shadow-lg border-dashed p-[18px] clip hover:bg-[#5db299] transition-all" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Lupa color={hovered} />
    </div>

  )
}

export default BusquedaNormal