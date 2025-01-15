import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import * as TeacherService from "../../service/teacher.service";
import { ToastContainer, toast } from 'react-toastify';

import AddTeacherFrom from "./AddTeachersForm";


interface ITeacherIdProps {
  teacherId: string;
}

interface Row {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  pincode: string;
  action?: any;
}

interface Column {
  name: string;
  selector: (row: Row) => string | JSX.Element;
  width?: String;
  maxWidth?: String;
}

const columns: Column[] = [
  {
    name: "Avatar",
    selector: (row: Row) => (
      <div
        className={
          "rounded-md flex justify-center items-center bg-slate-100 h-9 w-9 p-2"
        }
      >
        {" "}
        <span className=" text-lg font-semibold">{row.avatar}</span>
      </div>
    ),
    width: "80px",
  },
  {
    name: "Teacher Name",
    selector: (row: Row) => row.name,
  },
  {
    name: "Email",
    selector: (row: Row) => row.email,
  },
  {
    name: "Phone",
    selector: (row: Row) => row.phone,
  },
  {
    name: "City",
    selector: (row: Row) => row.city,
  },
  {
    name: "State",
    selector: (row: Row) => row.state,
  },
  {
    name: "Pincode",
    selector: (row: Row) => row.pincode,
  },
  {
    name: "Action",
    selector: (row: Row) => row.action,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "45px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontSize: "18px",
      fontWeight: 600,
      color: "#5c5a5a",
      fontFamily: "roboto",
    },
  },
  cells: {
    style: {
      padding: "8px",
    },
  },
};

const TeachersList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Row[]>([]);
    const [edit, setEdit] = useState<boolean>(false);
    const [teacherId, setTeacherId] = useState<string>("");

    const fetchTeacher = async () => {
      try {
        const response = await TeacherService.getAllTeachers();
        const { teachers, success, message } = response;

        if (success) {
          const formattedData = teachers.map((teacher) => ({
            name: teacher.name,
            email: teacher.email,
            phone: teacher.phone,
            city: teacher.city,
            state: teacher.state,
            pincode: teacher.pincode,
            action: <ActionButtons teacherId={teacher._id} />,
          }));
          setData(formattedData);
          toast.success(message);
        } else {
          toast.error("Failed to fetch teachers.");
        }
      } catch (error) {
        toast.error("Error fetching teachers.");
      } finally {
        setLoading(false);
      }
    };

   const handleDelete = async (teacherId: string) => {
       try {
         console.log("handle Delete is Clickeddd...!!!");
         const response = await TeacherService.deleteTeacher(teacherId);
         if (response.success) {
           fetchTeacher();
           toast.success(response.message);
         } else {
           toast.error(response.message);
         }
   
       } catch (error) {
         toast.error(error);
       }
     }
   
   
     const ActionButtons: React.FC<ITeacherIdProps> = ({ teacherId }) => {
       return (
         <div className="flex items-center">
           <FiEdit
             onClick={() => {
               setShowModal(true)
               setEdit(true)
               setTeacherId(teacherId)
             }}
             size={36}
             className="text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
           />
           <AiOutlineDelete
             onClick={() => handleDelete(teacherId)}
             size={34}
             className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
           />
         </div>
       );
     };
   
     useEffect(() => {
      fetchTeacher();
     }, [showModal]);
   
   

  return (
    <>
      <div className="p-3 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Teachers&nbsp;:&nbsp;{data.length}
          </span>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText="Add Teacher"
            onClick={() => {setShowModal(true)
              setEdit(false)
              setTeacherId('')
            }}
          />
        </div>
        <div className="p-2 shadow-md">
          <DataTable
            columns={columns as any}
            data={data}
            selectableRowsHighlight
            highlightOnHover
            customStyles={customStyles}
            fixedHeader
            fixedHeaderScrollHeight="400px"
            pagination
          />
        </div>
      </div>
      <RightSideDrawer isOpen={showModal}>
        <AddTeacherFrom
          onClose={() => {
            setShowModal(false);
          }}
          isEditable={edit}
          teacherId={teacherId}
        />
      </RightSideDrawer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default TeachersList;
