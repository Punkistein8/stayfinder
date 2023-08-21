import { PrismaClient } from '@prisma/client'

// export default async function obtenerHoteles() {
//   const url = process.env.LOCAL_API
//   return (
//     await fetch(`${url}/api/hoteles`, { method: 'GET', cache: 'no-store' })
//       .then(data => data.json())
//       .catch(err => console.log(err))
//   )
// }
export default async function obtenerHoteles() {
  const stayfinder = new PrismaClient();
  const data = await stayfinder.hoteles.findMany()
  return data;
}