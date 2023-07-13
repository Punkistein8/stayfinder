'use client'

import { useState } from "react"

import IconoEconomicos from "@/app/components/svgs/IconoEconomicos";
import IconoBoutique from "@/app/components/svgs/IconoBoutique";
import IconoBB from "@/app/components/svgs/IconoBB";
import IconoHuespedes from "../../svgs/IconoHuespedes";
import IconoLujo from "../../svgs/IconoLujo";
import IconoResort from "../../svgs/IconoResort";

const Item = ({ name, label }) => {

    const [hovered, setHovered] = useState(false);

    return (
        <div className={`cursor-pointer h-[80px] w-[90px] my-7 rounded-[10px] bg-[#fcfcfc] flex flex-col justify-center items-center hover:bg-[#5db299] transition-all ease-in-out ${hovered && 'shadow-xl hover:scale-105'}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {name === 'economicos' && <IconoEconomicos hovered={hovered} className="transition-all ease-in-out" />}
            {name === 'huespedes' && <IconoHuespedes hovered={hovered} className="transition-all ease-in-out" />}
            {name === 'boutique' && <IconoBoutique hovered={hovered} className="transition-all ease-in-out" />}
            {name === 'BB' && <IconoBB hovered={hovered} className="transition-all ease-in-out" />}
            {name === 'lujo' && <IconoLujo hovered={hovered} className="transition-all ease-in-out" />}
            {name === 'resort' && <IconoResort hovered={hovered} className="transition-all ease-in-out" />}
            <small className={`text-center block text-[#b9b9b9] text-xs transition-all ease-in-out ${hovered && 'text-white'}`}>{label}</small>
        </div>
    )
}

export default Item