import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DropDwon, { TOption } from '../../components/drop-down/index'
import * as SubjectService from "../../service/subject.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IAddSubjectPayload, IUpdateSubjectPayload } from "../../types/Subject.type";

type TProps = {
  onClose?: () => void;
  isEditable: boolean;
  subjectId: string;
};
const AddSubjectsForm: React.FC<TProps> = ({ onClose, isEditable, subjectId }) => {
 
  const [formData, setFormData] = useState({
    subject: "",
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
          setFormData((prev) => ({ ...prev, SubjectType: selectedOption.value }));
        };

     const fetchSubject = async () => {
           try {
             const response = await SubjectService.getSubjectById(subjectId);
             const { success, subjects, message } = response;
             if (success) {
               const formattedData = {
                subject: subjects.subject, 
               }
               setFormData(formattedData);
               console.log("Updated formData-----:", formattedData);
             } else {
               toast.error(message);
             }
           } catch (error) {
             console.error('Error fetching Subject:', error);
           } finally {
             setLoading(false);
           }
         };
       
         useEffect(() => {
           if (isEditable) {
             fetchSubject();
           }
         }, [isEditable, subjectId]);
       
         const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           setError(null);
       
           const { subject } = formData;
      
           // Basic validation
           if (!subject) {
             setError("All fields are required.");
             return;
           }
  
           const payload: IUpdateSubjectPayload = {
            subject
           };
           try {
             setLoading(true);
             const result = await  SubjectService.updateSubject(payload, subjectId);
       
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
             setError(err.message || "Failed to update Subject. Please try again.");
           } finally {
             setLoading(false);
           }
         };
     
      
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null); // Clear previous errors
      
          const { subject } = formData;
      
          // Basic validation
          if (!subject ) {
            setError("All fields are required.");
            return;
          }
      
          const payload: IAddSubjectPayload = {
            subject
          };
      
          console.log(payload);
          
      
          try {
            setLoading(true);
            const result = await SubjectService.AddSubject(payload);
            alert(result.message || "Subject added successfully!");
            if (onClose) onClose(); // Close the modal on success
          } catch (err: any) {
            setError(err.message || "Failed to add Subject. Please try again.");
          } finally {
            setLoading(false);
          }
        };
  
  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add Subjects Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer"/>
      </div>
      {/*Form */}
      <div className="bg-white p-6 shadow-b-lg">
        <form className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
          
            <div className="">
              <Input
                label="Name"
                placeholderText="Enter Subject Name"
                name="subject"
                onChangeText={handleChange}
                value={formData.subject}
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
export default AddSubjectsForm;
