import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import { FaRegEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import * as SchoolService from "../../service/school.service";
import { toast, ToastContainer } from "react-toastify";
import SchoolForm from "./SchoolForm";


interface ISchoolIdProps {
  schoolId: string;
}

const ViewPrincipal: React.FC<ISchoolIdProps> = ({ schoolId }) => {
  console.log(schoolId);
  return (
    <NavLink to={`/dashboard/principal-list/${schoolId}`} className="flex items-center gap-2 bg-[#b997cd44] px-3 py-2 rounded-sm cursor-pointer">
      <FaRegEye color="#4D365B" size={15} />
      <p className="text-[#4D365B] font-medium">Principal</p>
    </NavLink>
  );
};

interface Row {
  name: string;
  avatar: string;
  city: String;
  state: String;
  pincode: String;
  principal: any;
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
    name: "School Name",
    selector: (row: Row) => row.name,
    width: "260px",
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
    name: "Principals",
    selector: (row: Row) => row.principal,
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


const Schools = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [schoolId, setSchoolId] = useState<string>("");

  const fetchSchools = async () => {
    try {
      const response = await SchoolService.GetAllSchools();
      const { status, schools, message } = response;
      if (status) {
        const formattedData = schools.map((school) => ({
          avatar: school.name.charAt(0),
          name: school.name,
          city: school.city,
          state: school.state,
          pincode: school.pincode,
          principal: <ViewPrincipal schoolId={school._id} />,
          action: <ActionButtons schoolId={school._id} />,
        }));
        setData(formattedData);
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error('Error fetching schools:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (schoolId: string) => {
    try {
      console.log("handle Delete is Clickeddd...!!!");
      const response = await SchoolService.deleteSchool(schoolId);
      if (response.success) {
        fetchSchools();
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }

    } catch (error) {
      toast.error(error);
    }
  }


  const ActionButtons: React.FC<ISchoolIdProps> = ({ schoolId }) => {
    return (
      <div className="flex items-center">
        <FiEdit
          onClick={() => {
            setShowModal(true)
            setEdit(true)
            setSchoolId(schoolId)
          }}
          size={36}
          className="text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
        />
        <AiOutlineDelete
          onClick={() => handleDelete(schoolId)}
          size={34}
          className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
        />
      </div>
    );
  };

  useEffect(() => {
    fetchSchools();
  }, [showModal]);



  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Schools&nbsp;:&nbsp;{data.length}
          </span>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText="Add School"
            onClick={() => {
              setShowModal(true)
              setEdit(false)
              setSchoolId('')
            }}
          />
        </div>
        <div className="p-2 shadow-md">
          <DataTable
            columns={columns as any}
            data={data}
            //   selectableRows
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
        <SchoolForm
          onClose={() => {
            setShowModal(false);
          }}
          isEditable={edit}
          schoolId={schoolId}
        />
      </RightSideDrawer>
      {/* <Modal/> */}
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

export default Schools;
