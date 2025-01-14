import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
// import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import AddPrincipalForm from "./AddPrincipalForm";
import principalData from "./principalData";
import * as PrincipalService from "../../service/principal.service";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const PrincipalList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const { schoolID } = useParams();
  console.log(schoolID);

  const handleDelete = async (id: string) => {
    try {
      const response = await PrincipalService.deletePrinciapl(id);
      const { message, success } = response;
      if (success) {
        alert(message);
      } else {
        console.error('Failed to delete principal');
      }
    } catch (error) {
      console.error('Error deleting principal:', error);
    }
  }

  useEffect(() => {
    const fetchPrincipals = async () => {
      try {
        const response = await PrincipalService.getAllPrincipalBySchool(schoolID as string);
        const { message, success, principals } = response;
        console.log(principals);

        if (success) {
          toast.success(message);
          setData(principals);
        } else {
          console.error('Failed to fetch principals');
        }
      } catch (error) {
        console.error('Error fetching principal:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPrincipals();
  }, [showModal, handleDelete]);



  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Principals&nbsp;:&nbsp;{data.length}
          </span>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText="Add Principal"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="flex flex-col gap-5">
          {data.map((item: any, index: any) => {
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
                    onClick={() => handleDelete(item._id)}
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
