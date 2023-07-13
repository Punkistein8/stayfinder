import Item from "./item/Item"

const TiposHoteles = () => {
    return (
        <>
            <div className='grid grid-cols-12'>
                <div className="col-span-3">
                </div>
                <div className="col-span-1">
                    <Item name='economicos' label={'Economicos'} />
                </div>
                <div className="col-span-1">
                    <Item name='huespedes' label={'Casa de Huéspedes'} />

                </div>
                <div className="col-span-1">
                    <Item name='boutique' label={'Boutique'} />

                </div>
                <div className="col-span-1">
                    <Item name='BB' label={'B&B'} />

                </div>
                <div className="col-span-1">
                    <Item name='lujo' label={'Lujo'} />

                </div>
                <div className="col-span-1">
                    <Item name='resort' label={'Resort'} />

                </div>

                <div className="col-span-3">
                </div>
            </div>
            <hr className='border-[#ccc]' />
        </>
    )
}

export default TiposHoteles