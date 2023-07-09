import Navbar from '@/app/components/navbar/Navbar'
import './globals.css'
import { Kodchasan } from 'next/font/google'
import TiposHoteles from './components/tipos-hoteles/TiposHoteles'

const kodchasan = Kodchasan({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'StayFinder',
  description: '¡Encuentra tu lugar ideal para quedarte!',
  image: '@public/logoColor.svg',
  type: 'website',
  site_name: 'StayFinder',
  locale: 'es_ES',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kodchasan.className}>
        <Navbar />
        <TiposHoteles />
        {children}
      </body>
    </html>
  )
}
