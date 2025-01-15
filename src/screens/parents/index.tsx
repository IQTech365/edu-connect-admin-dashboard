import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import { toast, ToastContainer } from "react-toastify";
import * as ParentService from "../../service/parent.service";
import AddParentsForm from "./AddParents";

interface IParentIdProps {
  parentId: string;
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
  parentType: string;
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
  },
  {
    name: "School Name",
    selector: (row: Row) => row.name,
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
    name: "Parent Type",
    selector: (row: Row) => row.parentType,
  },
  {
    name: "Action",
    selector: (row: Row) => row.action,
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

const ParentsList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Row[]>([]);
      const [edit, setEdit] = useState<boolean>(false);
      const [parentId, setParentId] = useState<string>("");
   const fetchParent = async () => {
        try {
          const response = await ParentService.getAllParent();
          const { parents, success, message } = response;
  
          if (success) {
            const formattedData = parents.map((parent) => ({
              name: parent.name,
              email: parent.email,
              phone: parent.phone,
              city: parent.city,
              state: parent.state,
              pincode: parent.pincode,
              classes: parent.classes,
              parentType: parent.parentType,
              action: <ActionButtons parentId={parent._id} />,
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
           const response = await ParentService.deleteParent(studentId);
           if (response.success) {
            fetchParent();
             toast.success(response.message);
           } else {
             toast.error(response.message);
           }
     
         } catch (error) {
           toast.error(error);
         }
       }
     
     
       const ActionButtons: React.FC<IParentIdProps> = ({ parentId }) => {
         return (
           <div className="flex items-center">
             <FiEdit
               onClick={() => {
                 setShowModal(true)
                 setEdit(true)
                 setParentId(parentId)
               }}
               size={36}
               className="text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
             />
             <AiOutlineDelete
               onClick={() => handleDelete(parentId)}
               size={34}
               className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
             />
           </div>
         );
       };
     
       useEffect(() => {
        fetchParent();
       }, [showModal]);
       
  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Parents&nbsp;:&nbsp;2
          </span>
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Add Parents" 
          onClick={()=>{setShowModal(true) 
            setEdit(false)
            setParentId('')
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
        <AddParentsForm
          onClose={() => {
            setShowModal(false);
          }}
          isEditable={edit}
          parentId={parentId}
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

export default ParentsList;
