export default async function obtenerHoteles() {
  return (
    await fetch('http://localhost:3000/api/hoteles', { method: 'GET', cache: 'no-store' })
      .then(data => data.json())
      .catch(err => console.log(err))
  )
}