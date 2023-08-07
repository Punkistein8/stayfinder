import { Info } from "./Info/info";
import { AiOutlineArrowLeft } from 'react-icons/ai'

import LogoWhite from "./svgs/Logo"
import Link from "next/link";
const Header = () => {
  return (
    <div className="grid grid-cols-3 h-40">
      <div className="flex justify-start items-center pl-40">
        <Link href="/">
          <AiOutlineArrowLeft className="animate__animated animate__fadeInLeft text-white text-3xl pt-5 pl-5 cursor-pointer" size={'72px'} />
        </Link>
      </div>
      <div className="flex justify-center">
        <LogoWhite />
      </div>
      <div className="flex justify-center pt-10">
        <Info className={'animate__animated animate__fadeInRight'} />
      </div>
    </div>
  );
}

export default Header