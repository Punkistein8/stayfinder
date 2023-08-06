import "./style.css";
import Image from 'next/image'

export const Box = ({ svg, text }) => {
  return (
    <div className="box cursor-pointer hover:scale-105 transition-all ease-in-out">
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
