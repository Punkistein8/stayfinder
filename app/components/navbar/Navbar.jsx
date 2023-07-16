import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/public/logoColor.svg'
import BusquedaCentral from './busquedaCentral/BusquedaCentral'

const Navbar = () => {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 py-6">
                <div className="flex justify-center col-span-3">
                    <Link href='/' passHref>
                        <Image src={Logo} alt='StayFinder logo' priority className='w-72' />
                    </Link>
                </div>
                <div className="flex justify-center col-span-6">
                    <BusquedaCentral />
                </div>
                {/* <div className="flex justify-center col-span-3">
                    <Image src={Logo} alt='StayFinder logo' priority className='w-72' />
                </div> */}
            </div>
            <hr className='border-[#ccc]' />
        </>
    )
}

export default Navbar