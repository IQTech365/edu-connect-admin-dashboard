import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
// import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import AddPrincipalForm from "./AddPrincipalForm";
import principalData from "./principalData";
const PrincipalList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Principals&nbsp;:&nbsp;2
          </span>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText="Add Principal"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="flex flex-col gap-5">
          {principalData.map((item: any, index: any) => {
            return (
              <div
                className="w-full bg-white p-3 gap-4 shadow-b-md rounded-md flex relative"
                key={index}
              >
                <span className="absolute right-2 flex flex-col items-center justify-center">
                  <FiEdit
                    size={36}
                    className="mb-3 text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
                  />
                  <AiOutlineDelete
                    size={34}
                    className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
                  />
                </span>

                <div className="h-24 w-24 bg-slate-600 rounded-[4px]">
                  <img
                    className="w-full h-full object-cover rounded-[4px]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-2xl font-medium text-headingTxt">{item.name}</p>
                  <p>Email :- {item.email}</p>
                  <p>Phone :- +91 {item.phone}</p>
                  <p>City :- {item.city}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <RightSideDrawer isOpen={showModal}>
        <AddPrincipalForm
          onClose={() => {
            setShowModal(false);
          }}
        />
      </RightSideDrawer>
    </>
  );
};

export default PrincipalList;
