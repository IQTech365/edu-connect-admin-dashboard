import Logo from "../../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full  flex bg-white shadow-md py-2 px-8 items-center justify-between">
      <img src={Logo} className="h-[50px]" />
      <div className="flex gap-5 items-center">
        <span className="text-lg  leading-3 font-medium text-gray-600">
          John Doe
        </span>
        <span className="p-2 items-center ring-2 rounded-full bg-red-200">
        <FaCircleUser />
        </span>
      </div>
    </div>
  );
};

export default Header;
