import { MdClose } from "react-icons/md";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DropDwon, { TOption } from "../../components/drop-down/index";

type TProps = {
  onClose?: () => void;
};
const opetionsData: TOption[] = [
  {
    value: "father",
    label: "Father",
  },

  {
    value: "mother",
    label: "Mother",
  },
  {
    value: "grandFather",
    label: "Grand Father",
  },
  {
    value: "grandMother",
    label: "Grand Mother",
  },
];
const AddHeadOfDepartmentForm: React.FC<TProps> = ({ onClose }) => {
  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add Head Of Department Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer"/>
      </div>
      {/*Form */}
      <div className="bg-white p-6 ">
        <form className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
            <div className="">
              <DropDwon
                label="Teacher"
                // placeholderText="Enter School Nmae"
                options={opetionsData}
                //   value=""
              />
            </div>
            <div className="">
              <DropDwon
                label="Class"
                // placeholderText="Enter School Nmae"
                options={opetionsData}
                //   value=""
              />
            </div>
            <div className="">
              <DropDwon
                label="Section"
                // placeholderText="Enter School Nmae"
                options={opetionsData}
                //   value=""
              />
            </div>
          </div>
        </form>
        <div className="flex items-center justify-center my-2">
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Submit" />
        </div>
      </div>
    </>
  );
};
export default AddHeadOfDepartmentForm;
