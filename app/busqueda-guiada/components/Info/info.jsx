
export const Info = ({ className }) => {
  return (
    <div className={`bg-[#6983b5] rounded-[30px] relative w-96 h-28 ${className}`}>
      <div className="absolute bg-[#45536e] rounded-tl-none rounded-tr-[30px] rounded-br-none rounded-bl-[30px] h-full right-0 w-16  flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      </div>
      <div className="text-white flex items-center text-md h-full select-none">
        <p className="pl-5 pr-24 text-justify">
          La búsqueda guiada permitirá ajustar y mostrar los mejores resultados de acuerdo a tus necesidades.
        </p>
      </div>
    </div>
  );
};
