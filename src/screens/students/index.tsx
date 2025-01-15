import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import AddStudentForm from "./AddStudentForm";
import * as StudentService from "../../service/student.service";
import { ToastContainer, toast } from 'react-toastify';

interface IStudentIdProps {
  studentId: string;
}

interface Row {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  pincode: string;
  classes: string;
  rollNumber: string;
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
    name: "Student Name",
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

const StudentsList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Row[]>([]);
    const [edit, setEdit] = useState<boolean>(false);
    const [studentId, setStudentId] = useState<string>("");

    const fetchStudent = async () => {
      try {
        const response = await StudentService.getAllStudent();
        const { students, success, message } = response;

        if (success) {
          const formattedData = students.map((student) => ({
            name: student.name,
            email: student.email,
            phone: student.phone,
            city: student.city,
            state: student.state,
            pincode: student.pincode,
            classes: student.classes,
            rollNumber: student.rollNumber,
            action: <ActionButtons studentId={student._id} />,
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

   const handleDelete = async (studentId: string) => {
       try {
         const response = await StudentService.deleteStudent(studentId);
         if (response.success) {
          fetchStudent();
           toast.success(response.message);
         } else {
           toast.error(response.message);
         }
   
       } catch (error) {
         toast.error(error);
       }
     }
   
   
     const ActionButtons: React.FC<IStudentIdProps> = ({ studentId }) => {
       return (
         <div className="flex items-center">
           <FiEdit
             onClick={() => {
               setShowModal(true)
               setEdit(true)
               setStudentId(studentId)
             }}
             size={36}
             className="text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
           />
           <AiOutlineDelete
             onClick={() => handleDelete(studentId)}
             size={34}
             className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
           />
         </div>
       );
     };
   
     useEffect(() => {
      fetchStudent();
     }, [showModal]);
   
  return (
    <>
      <div className="p-3 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Students&nbsp;:&nbsp;{data.length}
          </span>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText="Add Student"
            onClick={() => {setShowModal(true)
              setEdit(false)
              setStudentId('')
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
        <AddStudentForm
          onClose={() => {
            setShowModal(false);
          }}
          isEditable={edit}
          studentId={studentId}
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

export default StudentsList;
