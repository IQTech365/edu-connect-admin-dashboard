import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import AddStudentForm from "./AddStudentForm";
import * as StudentService from "../../service/student.service";
import { ToastContainer, toast } from 'react-toastify';

interface DropDownProps {
  studentId: string;
}

const handleDeleteStudent = async (studentId: string) => {
  try {
    console.log("Deleting student with ID:", studentId);
    await StudentService.deleteStudent(studentId);
    toast.success("Student deleted successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

const DropDown: React.FC<DropDownProps> = ({ studentId }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="relative cursor-pointer" onClick={() => toggleMenu()}>
        <div className="flex">
          <BsThreeDotsVertical size={22} />
        </div>
      </div>
      {openMenu ? (
        <div
          className="flex flex-col items-center justify-center min-h-[100px] min-w-[120px] top-[40px] -left-[126px] absolute z-40 bg-headingTxt rounded-md p-1"
        >
          <ul>
            <li
              className="flex gap-2 justify-between items-center cursor-pointer bg-slate-100 py-1 px-2 rounded-sm mb-2 opacity-85"
            >
              <span className="text-lg font-semibold">Edit</span>
              <FiEdit size={20} color="#22c55e" />
            </li>
            <li
              className="flex gap-2 justify-between items-center cursor-pointer bg-slate-100 py-1 px-2 rounded-sm opacity-85"
              onClick={() => handleDeleteStudent(studentId)}
            >
              <span className="text-lg font-semibold">Delete</span>
              <AiOutlineDelete size={22} color="#FF0000" />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

interface Row {
  name: string;
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
}

const columns: Column[] = [
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

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await StudentService.getAllStudents();
        const { students, success, message } = response;

        if (success) {
          const formattedData = students.map((student) => ({
            name: student.name,
            email: student.email,
            phone: student.phone,
            city: student.city,
            state: student.state,
            pincode: student.pincode,
            action: <DropDown studentId={student._id} />,
          }));
          setData(formattedData);
          toast.success(message);
        } else {
          toast.error("Failed to fetch students.");
        }
      } catch (error) {
        toast.error("Error fetching students.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();

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
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="p-2 shadow-md">
          <DataTable
            columns={columns}
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
