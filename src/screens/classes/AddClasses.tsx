import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DropDwon, { TOption } from '../../components/drop-down/index'
import * as ClassesService from "../../service/classes.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IAddClassesPayload, IUpdateClassesPayload } from "../../types/Classes.type";

type TProps = {
  onClose?: () => void;
  isEditable: boolean;
  classId: string;
};
const AddClassesForm: React.FC<TProps> = ({ onClose, isEditable, classId }) => {
 
  const [formData, setFormData] = useState({
    department: "",
    section :"",
        });
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
      
        const handleDropdownChange = (selectedOption: TOption) => {
          setFormData((prev) => ({ ...prev, ClassesType: selectedOption.value }));
        };

     const fetchClasses = async () => {
           try {
             const response = await ClassesService.getClassesById(classId);
             const { success, classes, message } = response;
             if (success) {
               const formattedData = {
                department: classes.department, 
                section: classes.section, 
               }
               setFormData(formattedData);
               console.log("Updated formData-----:", formattedData);
             } else {
               toast.error(message);
             }
           } catch (error) {
             console.error('Error fetching Classes:', error);
           } finally {
             setLoading(false);
           }
         };
       
         useEffect(() => {
           if (isEditable) {
             fetchClasses();
           }
         }, [isEditable, classId]);
       
         const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           setError(null);
       
           const { section,department } = formData;
      
           // Basic validation
           if (!department || !section) {
             setError("All fields are required.");
             return;
           }
  
           const payload: IUpdateClassesPayload = {
            section,
            department
           };
           try {
             setLoading(true);
             const result = await  ClassesService.updateClasses(payload, classId);
       
             const { success, message } = result;
             console.log(success);
             if (success) {
               toast.success(result.message);
               if (onClose) onClose();
             }
             else {
               toast.error(result.message);
             }
           } catch (err: any) {
             setError(err.message || "Failed to update Classes. Please try again.");
           } finally {
             setLoading(false);
           }
         };
     
      
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null); // Clear previous errors
      
          const { section,department } = formData;
      
           // Basic validation
           if (!department || !section) {
             setError("All fields are required.");
             return;
           }
  
      
          const payload: IAddClassesPayload = {
            section,
            department,
          };
      
          console.log(payload);
          
      
          try {
            setLoading(true);
            const result = await ClassesService.AddClasses(payload);
            alert(result.message || "Classes added successfully!");
            if (onClose) onClose(); // Close the modal on success
          } catch (err: any) {
            setError(err.message || "Failed to add Classes. Please try again.");
          } finally {
            setLoading(false);
          }
        };
  
  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add Classess Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer"/>
      </div>
      {/*Form */}
      <div className="bg-white p-6 shadow-b-lg">
        <form className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
          
            <div className="">
              <Input
                label="Name"
                placeholderText="Enter Department Name"
                name="department"
                onChangeText={handleChange}
                value={formData.department}
              />
            </div>
            <div className="">
              <Input
                label="Name"
                placeholderText="Enter Section Name"
                name="section"
                onChangeText={handleChange}
                value={formData.section}
              />
            </div>
            </div>
        <div className="flex items-center justify-center my-2">
        <Button
              type={BUTTON_TYPES.PRIMARY}
              btnText={loading ? "Submitting..." : "Submit"}
              onClick={
                isEditable ? handleUpdate : handleSubmit
              }
            />
        </div>           
           </form>
      </div>
    </>
  );
};
export default AddClassesForm;
