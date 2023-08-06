import { Info } from "./Info/info";
import LogoWhite from "./svgs/Logo"
const Header = () => {
  return (
    <div className="grid grid-cols-3 h-40">
      <div className="flex justify-center pt-5">
        <Info />
      </div>
      <div className="flex justify-center">
        <LogoWhite />
      </div>
    </div>
  );
}

export default Header