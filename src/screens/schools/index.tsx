import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import AddSchoolForm from "./AddSchoolForm";
import { FaRegEye } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { NavLink } from "react-router-dom";

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
    <NavLink to={'/principal-list'}  className="flex items-center gap-2 bg-[#b997cd44] px-3 py-2 rounded-sm cursor-pointer">
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
  {
    avatar: "S",
    name: "Saraswati Vidya Mandir",
    city: "Delhi",
    state: "Delhi",
    pincode: "11001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "M",
    name: "Modern Public School",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    principal: <ViewPrincipal principalNo={0} />,
    action: <DropDown />,
  },
  {
    avatar: "A",
    name: "Alok International School",
    city: "Faridabad",
    state: "Haryana",
    pincode: "121001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "R",
    name: "Rainbow Academy",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122018",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "B",
    name: "Bharatiya Vidya Bhavan",
    city: "Delhi",
    state: "Delhi",
    pincode: "11007",
    principal: <ViewPrincipal principalNo={0} />,
    action: <DropDown />,
  },
  {
    avatar: "P",
    name: "Pioneer School",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226010",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "J",
    name: "Jayshree International School",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302021",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "V",
    name: "Vasant Valley School",
    city: "Delhi",
    state: "Delhi",
    pincode: "110030",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "T",
    name: "Tagore International School",
    city: "Delhi",
    state: "Delhi",
    pincode: "110016",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "C",
    name: "Chandralok Public School",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "N",
    name: "National Public School",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600100",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "K",
    name: "Kendriya Vidyalaya",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700027",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "L",
    name: "Lotus International School",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500062",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "W",
    name: "Whitefield Academy",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560068",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "F",
    name: "Flame School",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411007",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "O",
    name: "Oxford Senior Secondary School",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "I",
    name: "International School of Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500062",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "D",
    name: "Delhi Public School",
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: "462001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "Q",
    name: "Queen’s School",
    city: "Chandigarh",
    state: "Chandigarh",
    pincode: "160101",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "X",
    name: "Xavier International School",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751005",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "Y",
    name: "Yogic Public School",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302004",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "E",
    name: "Eagle International School",
    city: "Surat",
    state: "Gujarat",
    pincode: "395001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "Z",
    name: "Zenith School",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380015",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "H",
    name: "Holy Cross International School",
    city: "Navi Mumbai",
    state: "Maharashtra",
    pincode: "400705",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "U",
    name: "Uptown School",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411041",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "L",
    name: "Lajpat Nagar Public School",
    city: "Delhi",
    state: "Delhi",
    pincode: "110024",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "K",
    name: "Kishore International School",
    city: "Vadodara",
    state: "Gujarat",
    pincode: "390017",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "A",
    name: "Aspire School",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "V",
    name: "Vivekananda School",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "M",
    name: "Maitreyee Public School",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452002",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "B",
    name: "Budding Stars Academy",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122018",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "S",
    name: "Shanti Niketan School",
    city: "Kanpur",
    state: "Uttar Pradesh",
    pincode: "208001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "C",
    name: "Chitrakoot School",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411033",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "R",
    name: "Ravindra Public School",
    city: "Gwalior",
    state: "Madhya Pradesh",
    pincode: "474001",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "T",
    name: "The Global Academy",
    city: "Delhi",
    state: "Delhi",
    pincode: "110054",
    principal: <ViewPrincipal principalNo={2} />,
    action: <DropDown />,
  },
  {
    avatar: "F",
    name: "Future Generation School",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600100",
    principal: <ViewPrincipal principalNo={2} />,
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
