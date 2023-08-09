'use client'

import qs from "query-string";
import { useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation";

import IconoEconomicos from "@/app/components/svgs/IconoEconomicos";
import IconoBoutique from "@/app/components/svgs/IconoBoutique";
import IconoBB from "@/app/components/svgs/IconoBB";
import IconoHuespedes from "../../svgs/IconoHuespedes";
import IconoLujo from "../../svgs/IconoLujo";
import IconoResort from "../../svgs/IconoResort";

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
            category: name,
        };

        if (params?.get("category") === name) {
            delete updatedQuery.category;
        }


        const url = qs.stringifyUrl(
            {
                url: "/",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        router.push(url);
    }, [name, router, params]);
    return (
        <div className="col-span-1 text-center flex justify-center" onClick={handleClick}>
            <div className={`cursor-pointer h-[80px] w-[90px] my-7 rounded-[10px] ${selected | hovered ? 'bg-[#5db299] shadow-xl hover:scale-105' : 'bg-[#fcfcfc]'} flex flex-col justify-center items-center hover:bg-[#5db299] transition-all ease-in-out`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                {name === 'economicos' && <IconoEconomicos hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
                {name === 'huespedes' && <IconoHuespedes hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
                {name === 'boutique' && <IconoBoutique hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
                {name === 'BB' && <IconoBB hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
                {name === 'lujo' && <IconoLujo hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
                {name === 'resort' && <IconoResort hovered={hovered} selected={selected} className="transition-all ease-in-out" />}
                <small className={`text-center block text-xs transition-all ease-in-out select-none ${selected ? 'text-white' : 'text-[#b9b9b9]'} ${hovered && 'text-white'}`}>{label}</small>
            </div>
        </div>

    )
}

export default Item