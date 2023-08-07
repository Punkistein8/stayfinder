'use client'

import qs from "query-string";
import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation";

import IconoEconomicos from "@/app/components/svgs/IconoEconomicos";
import IconoBoutique from "@/app/components/svgs/IconoBoutique";
import IconoHuespedes from "@/app/components/svgs/IconoHuespedes";

import { PiCurrencyDollarSimpleDuotone } from 'react-icons/pi'
import { BsStars } from 'react-icons/bs'
const Item = ({ name, label, selected }) => {

    const [hovered, setHovered] = useState(false);
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery = {
            ...currentQuery,
            comparacion: name,
        };

        if (params?.get("comparacion") === name) {
            delete updatedQuery.comparacion;
        }


        const url = qs.stringifyUrl(
            {
                url: "/comparacion-precios/",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        router.push(url);
    }, [name, router, params]);
    return (
        <div className="col-span-1 text-center flex justify-center" onClick={handleClick}>
            <div className={`cursor-pointer h-[80px] w-[90px] my-7 rounded-[10px] gap-3 ${selected ? 'bg-[#5db299]' : 'bg-[#fcfcfc]'} flex flex-col justify-center items-center hover:bg-[#5db299] transition-all ease-in-out ${hovered && 'shadow-xl hover:scale-105'}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {name === 'baratos' && (
                    <div className="flex">
                        <PiCurrencyDollarSimpleDuotone fill={`${(selected | hovered) ? '#fff' : '#b9b9b9'}`} />
                    </div>
                )}
                {name === 'costosos' && (
                    <div className="flex">
                        <PiCurrencyDollarSimpleDuotone fill={`${(selected | hovered) ? '#fff' : '#b9b9b9'}`} />
                        <PiCurrencyDollarSimpleDuotone fill={`${(selected | hovered) ? '#fff' : '#b9b9b9'}`} hovered={hovered} selected={selected} className="transition-all ease-in-out" />
                        <PiCurrencyDollarSimpleDuotone fill={`${(selected | hovered) ? '#fff' : '#b9b9b9'}`} hovered={hovered} selected={selected} className="transition-all ease-in-out" />
                    </div>
                )}
                {name === 'valorados' && <BsStars fill={`${(selected | hovered) ? '#fff' : '#b9b9b9'}`} hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
 
                <small className={`text-center block{text-xs transition-all ease-in-out select-none ${selected ? 'text-white' : 'text-[#b9b9b9]'} ${hovered && 'text-white'}`}>{label}</small>
            </div>
        </div>

    )
}

export default Item