import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import RightSideDrawer from "../../components/right-side-drawer";
import { toast, ToastContainer } from "react-toastify";
import * as SubjectService from "../../service/subject.service";
import AddSubjectsForm from "./AddSubjects";

interface IsubjectIdProps {
  subjectId: string;
}

interface Row {
  subject: string;
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
    name: "Subject Name",
    selector: (row: Row) => row.subject,
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

const SubjectsList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Row[]>([]);
      const [edit, setEdit] = useState<boolean>(false);
      const [subjectId, setSubjectId] = useState<string>("");
   const fetchSubject = async () => {
        try {
          const response = await SubjectService.getAllSubject();
          const { subjects, success, message } = response;
  
          if (success) {
            const formattedData = subjects.map((subject) => ({
              subject: subject.subject,
              action: <ActionButtons subjectId={subject._id} />,
            }));
            setData(formattedData);
            toast.success(message);
          } else {
            toast.error("Failed to fetch subject.");
          }
        } catch (error) {
          toast.error("Error fetching subject.");
        } finally {
          setLoading(false);
        }
      };
  
     const handleDelete = async (studentId: string) => {
         try {
           const response = await SubjectService.deleteSubject(studentId);
           if (response.success) {
            fetchSubject();
             toast.success(response.message);
           } else {
             toast.error(response.message);
           }
     
         } catch (error) {
           toast.error(error);
         }
       }
     
     
       const ActionButtons: React.FC<IsubjectIdProps> = ({ subjectId }) => {
         return (
           <div className="flex items-center">
             <FiEdit
               onClick={() => {
                 setShowModal(true)
                 setEdit(true)
                 setSubjectId(subjectId)
               }}
               size={36}
               className="text-blue-500 cursor-pointer p-2 hover:bg-blue-100 rounded-lg transition-all ease-linear duration-200"
             />
             <AiOutlineDelete
               onClick={() => handleDelete(subjectId)}
               size={34}
               className="text-red-500 cursor-pointer p-1 hover:bg-red-100 rounded-lg transition-all ease-linear duration-200"
             />
           </div>
         );
       };
     
       useEffect(() => {
        fetchSubject();
       }, [showModal]);
       
  return (
    <>
      <div className="p-3 md:p-8  ">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-semibold text-headingTxt">
            Total Subjects&nbsp;:&nbsp;2
          </span>
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Add Subjects" 
          onClick={()=>{setShowModal(true) 
            setEdit(false)
            setSubjectId('')
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
        <AddSubjectsForm
          onClose={() => {
            setShowModal(false);
          }}
          isEditable={edit}
          subjectId={subjectId}
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

export default SubjectsList;
