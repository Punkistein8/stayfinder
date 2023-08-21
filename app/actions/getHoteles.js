import { PrismaClient } from '@prisma/client'

import { cache } from 'react'

export const revalidate = 100 // revalidate


// export default async function obtenerHoteles() {
//   const url = process.env.LOCAL_API
//   return (
//     await fetch(`${url}/api/hoteles`, { method: 'GET', cache: 'no-store' })
//       .then(data => data.json())
//       .catch(err => console.log(err))
//   )
// }
const obtenerHoteles = cache(async () => {
  const stayfinder = new PrismaClient();
  const data = await stayfinder.hoteles.findMany()
  return data;
})

export default obtenerHoteles;