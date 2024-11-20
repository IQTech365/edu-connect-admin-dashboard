import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";

type TProps = {
  onClose?: () => void;
};
const AddSchoolForm: React.FC<TProps> = ({ onClose }) => {
  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add School Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer" />
      </div>
      {/*Form */}
      <div className="bg-white p-6 shadow-b-lg">
        <form className="w-full ">
          <div className="grid grid-cols-1 gap-3 mb-1  rounded-lg ">
            <div className="">
              <Input
                label="School Name"
                // placeholderText="Enter School Nmae"
                onChangeText={() => {}}
                value=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
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
            <textarea className="rounded-[5px] border-solid border-[1px] border-[#c5c5c5] focus:outline-none focus:ring-1 focus:ring-blue-200" />
          </div>
        </form>
        <div className="flex items-center justify-center my-2">
            <Button type={BUTTON_TYPES.PRIMARY} btnText="Submit" />
        </div>
      </div>
    </>
  );
};
export default AddSchoolForm;
