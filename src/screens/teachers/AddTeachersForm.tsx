import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
// import { PiFileArrowUpLight } from "react-icons/pi";
import { useRef, useState } from "react";

type TProps = {
  onClose?: () => void;
};

const AddTeacherFrom: React.FC<TProps> = ({ onClose }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files;
    console.log(file);
    setImage(" ");
  };

  //TODO ----
  // Make and image picker

  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add Teacher Form</h3>
        <MdClose size={24} onClick={onClose} />
      </div>
      {/*Form */}
      <div className="bg-white p-6 shadow-b-lg">
        {/* <div className="h-28 w-28 bg-green-300 flex items-center justify-center cursor-pointer" onClick={handleImageClick}>
            {
            image ? <img src={URL.createObjectURL(image)} alt=""/>:<PiFileArrowUpLight size={40}/> }
            <input type="file" ref={imageInputRef} onChange={handleImageChange} style={{display:"none"}}/>
          </div> */}
        <form className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
            <div className="">
              <Input
                label="Name"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="Email"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="Phone"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="Password"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="School"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="Qualification"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="Pincode"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="City"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="State"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
            <div className="">
              <Input
                label="Country"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <span className="text-[#b2b2b2]">Address</span>
            <textarea className="rounded-[5px] border-solid border-[1px] border-[#967171] focus:outline-none focus:ring-1 focus:ring-blue-200" />
          </div>
          
        </form>
        <div className="flex items-center justify-center my-2">
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Submit" />
        </div>
      </div>
    </>
  );
};

export default AddTeacherFrom;
