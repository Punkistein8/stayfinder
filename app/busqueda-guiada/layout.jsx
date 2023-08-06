import '../globals.css'
import { Kodchasan } from 'next/font/google'

const kodchasan = Kodchasan({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
    title: 'Búsqueda Guiada',
    description: '¡Encuentra tu lugar ideal para quedarte!',
    image: '@public/logoColor.svg',
    type: 'website',
    site_name: 'StayFinder',
    locale: 'es_ES',
}


export default function layout({ children }) {
    return (
        <>
            <div>
                <h1>Búsqueda Guiada layout</h1>
                {children}
            </div>
        </>
    );
}