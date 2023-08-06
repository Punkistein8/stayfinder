import './globals.css'
import { Kodchasan } from 'next/font/google'

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
    <html lang="es">
      <body className={kodchasan.className}>
        {children}
      </body>
    </html>
  )
}
