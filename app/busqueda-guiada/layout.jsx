import Header from "./components/header";

export const metadata = {
  title: 'Búsqueda Guiada',
  description: '¡Te guiaremos para encontrar el mejor lugar!',
  locale: 'es_ES',
}

export default async function layout({ children }) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <>
      <div className='bg-[#002733] h-screen text-white'>
        <Header />
        {children}
      </div>
    </>
  );
}