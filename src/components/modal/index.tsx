import { SlClose } from "react-icons/sl";

const Modal = ({childer}) => {
    return(
        <div className="fixed top-0 left-0 w-full h-screen bg-[#00000056] z-[200] flex justify-center items-center">
            <div className="bg-white w-[80%] h-[80%] rounded-md relative">
                <span className="absolute top-2 right-2 cursor-pointer p-2 rounded-full hover:bg-[#b997cd44] transition-all ease-linear hover:text-[#4D365B] duration-300"><SlClose size={24} /></span>
            </div>
        </div>
    )
};


export default Modal;