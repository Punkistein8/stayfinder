import "./style.css";
import Image from 'next/image'

export const Box = ({ svg, text, className }) => {
  return (
    <div className={`box cursor-pointer hover:scale-105 transition-all ease-in-out animate__animated animate__fadeInUp animate__delay-1s ${className}`}>
      <div className="rectangle flex flex-col justify-between" >
        <div className="flex justify-center my-auto">
          <Image src={svg} alt='boton' priority className='w-32' />
        </div>
        <div className="flex justify-center py-5 text-xl">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
