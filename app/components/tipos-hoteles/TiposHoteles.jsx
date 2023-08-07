'use client'

import Item from "./item/Item"
import { useSearchParams } from "next/navigation";

const TiposHoteles = () => {

    const params = useSearchParams(); // used to get the category from the url query
    const category = params?.get('category');

    return (
        <>
            <div className='grid grid-cols-12'>
                <div className="col-span-3">
                </div>
                <Item name={'economicos'} label={'Economicos'} selected={category === 'economicos'} />
                <Item name={'huespedes'} label={'Casa de Huéspedes'} selected={category === 'huespedes'} />
                <Item name={'boutique'} label={'Boutique'} selected={category === 'boutique'} />
                <Item name={'BB'} label={'B&B'} selected={category === 'BB'} />
                <Item name={'lujo'} label={'Lujo'} selected={category === 'lujo'} />
                <Item name={'resort'} label={'Resort'} selected={category === 'resort'} />
                <div className="col-span-3">
                </div>
            </div>
            <hr className='border-[#ccc]' />
        </>
    )
}

export default TiposHoteles