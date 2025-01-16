import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import { toast, ToastContainer } from "react-toastify";
import * as ClasseService from "../../service/classes.service";
import AddClassesForm from "./AddClasses";

interface IClassIdProps {
  classId: string;
}

interface Row {
  department: string;
  section: string;
  avatar: string;
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
    name: "Section Name",
    selector: (row: Row) => row.section,
  },
  {
    name: "Department Name",
    selector: (row: Row) => row.department,
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

const ClassesList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Row[]>([]);
      const [edit, setEdit] = useState<boolean>(false);
      const [classId, setClassId] = useState<string>("");
   const fetchClasses = async () => {
        try {
          const response = await ClasseService.getAllClasses();
          const { classes, success, message } = response;
  
          if (success) {
            const formattedData = classes.map((classes) => ({
              department: classes.department,
              section: classes.section,
              action: <ActionButtons classId={classes._id} />,
            }));
            setData(formattedData);
            toast.success(message);
          } else {
            toast.error("Failed to fetch Classe.");
          }
        } catch (error) {
          toast.error("Error fetching Classe.");
        } finally {
          setLoading(false);
        }
      };
  
     const handleDelete = async (studentId: string) => {
         try {
           const response = await ClasseService.deleteClasses(studentId);
           if (response.success) {
            fetchClasses();
             toast.success(response.message);
           } else {
             toast.error(response.message);
           }
     
         } catch (error) {
           toast.error(error);
         }
       }
     
     
       const ActionButtons: React.FC<IClassIdProps> = ({ classId }) => {
         return (
           <div className="flex items-center">
             <FiEdit
               onClick={() => {
                 setShowModal(true)
                 setEdit(true)
                 setClassId(classId)
               }}
               size={36}
               className="text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
             />
             <AiOutlineDelete
               onClick={() => handleDelete(classId)}
               size={34}
               className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
             />
           </div>
         );
       };
     
       useEffect(() => {
        fetchClasses();
       }, [showModal]);
       
  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Classes&nbsp;:&nbsp;2
          </span>
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Add Classes" 
          onClick={()=>{setShowModal(true) 
            setEdit(false)
            setClassId('')
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
        <AddClassesForm
          onClose={() => {
            setShowModal(false);
          }}
          isEditable={edit}
          classId={classId}
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

export default ClassesList;
