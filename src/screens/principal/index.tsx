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

interface Row {
  name: string;
  nativeName: string;
  capital: string;
  avatar: string;
  icon?: React.ReactNode;
  action?: any;
}

interface Column {
  name: string;
  selector: (row: Row) => string | JSX.Element;
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
  },
  {
    name: "Principal Name",
    selector: (row: Row) => row.nativeName,
  },
  {
    name: "Email",
    selector: (row: Row) => row.nativeName,
  },
  {
    name: "Phone",
    selector: (row: Row) => row.nativeName,
  },
  {
    name: "City",
    selector: (row: Row) => row.capital,
  },
  {
    name: "State",
    selector: (row: Row) => row.capital,
  },
  {
    name: "Pincode",
    selector: (row: Row) => row.capital,
  },
  {
    name: "Action",
    selector: (row: Row) => row.action,
  },
];

const rows: Row[] = [
  {
    avatar: "W",
    name: "United States",
    nativeName: "United States",
    capital: "Washington, D.C.",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Germany",
    nativeName: "Deutschland",
    capital: "Berlin",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Japan",
    nativeName: "日本",
    capital: "Tokyo",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Brazil",
    nativeName: "Brasil",
    capital: "Brasília",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "India",
    nativeName: "भारत",
    capital: "New Delhi",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "United States",
    nativeName: "United States",
    capital: "Washington, D.C.",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Germany",
    nativeName: "Deutschland",
    capital: "Berlin",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Japan",
    nativeName: "日本",
    capital: "Tokyo",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Brazil",
    nativeName: "Brasil",
    capital: "Brasília",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "India",
    nativeName: "भारत",
    capital: "New Delhi",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "United States",
    nativeName: "United States",
    capital: "Washington, D.C.",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Germany",
    nativeName: "Deutschland",
    capital: "Berlin",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Japan",
    nativeName: "日本",
    capital: "Tokyo",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Brazil",
    nativeName: "Brasil",
    capital: "Brasília",
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "India",
    nativeName: "भारत",
    capital: "New Delhi",
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
                </div>
                <div className="">
                  <p>{item.city}</p>
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
