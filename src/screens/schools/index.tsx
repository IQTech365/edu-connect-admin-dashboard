import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import AddSchoolForm from "./AddSchoolForm";
import { FaRegEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ISchool } from "../../types";
import * as SchoolService from "../../service/school.service";

const DropDown = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    console.log("juhghhjbh");

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
          className=" flex flex-col items-center
         justify-center min-h-[100px] min-w-[120px] 
         top-[40px] -left-[126px] absolute z-40
          bg-headingTxt  rounded-md p-1"
        >
          <ul>
            <li
              className="flex gap-2 justify-between items-center
             cursor-pointer bg-slate-100 py-1 px-2 rounded-sm 
             mb-2 opacity-85"
            >
              <span className="text-lg font-semibold">Edit</span>
              <FiEdit size={20} color="#22c55e" />
            </li>
            <li
              className="flex gap-2 justify-between 
            items-center cursor-pointer bg-slate-100
             py-1 px-2 rounded-sm opacity-85"
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

type ViewPrincipalProps = {
  principalNo: number;
};

const ViewPrincipal: React.FC<ViewPrincipalProps> = ({ principalNo }) => {
  if (principalNo <= 0) {
    return (
      <NavLink to={'/principal-list'} className="flex items-center gap-2 bg-[#b997cd44] px-3 py-2 rounded-sm cursor-pointer">
        <IoMdAdd color="#4D365B" size={15} />
        <p className="text-[#4D365B] font-medium">Add Principal</p>
      </NavLink>
    );
  }

  return (
    <NavLink to={'/principal-list'} className="flex items-center gap-2 bg-[#b997cd44] px-3 py-2 rounded-sm cursor-pointer">
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
  action?: any;
  principal: any;
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

const rows: Row[] = [
  {
    avatar: "G",
    name: "Gyan Deep Sr. Secondary Public",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "12201",
    principal: <ViewPrincipal principalNo={0} />,
    action: <DropDown />,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "45px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "18px",
      fontWeight: 600,
      //   backgroundColor: "#dcdeff",
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


  const [data, setData] = useState<ISchool[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchShowrooms = async () => {
      try {
        const response = await SchoolService.GetAllSchools();
        const { status, schools, count, message } = response;
        console.log(message);
        console.log('schools-----', schools);
        console.log(status);


        if (status) {
          setData(schools);
        } else {
          console.log('nxs');

        }
      } catch (error) {
        console.log('bycsvuycv');

      } finally {
        setLoading(false);
      }
    };

    fetchShowrooms();
  }, []);

  console.log("Data---", data);


  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Schools&nbsp;:&nbsp;2
          </span>
          <Button
            type={BUTTON_TYPES.PRIMARY}
            btnText="Add School"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="p-2 shadow-md">
          <DataTable
            columns={columns as any}
            data={rows}
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
        <AddSchoolForm
          onClose={() => {
            setShowModal(false);
          }}
        />
      </RightSideDrawer>
      {/* <Modal/> */}
    </>
  );
};

export default Schools;
