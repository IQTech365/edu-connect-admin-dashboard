import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DropDwon, { TOption } from '../../components/drop-down/index'
import * as ParentService from "../../service/parent.service";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IAddParentPayload, IUpdateParentPayload } from "../../types/parent.type";

type TProps = {
  onClose?: () => void;
  isEditable: boolean;
  parentId: string;
};
const optionsData: TOption[] = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "grandFather", label: "Grand Father" },
  { value: "grandMother", label: "Grand Mother" },
];
const AddParentsForm: React.FC<TProps> = ({ onClose, isEditable, parentId }) => {
 
  const [formData, setFormData] = useState({
          name: "",
          email: "",
          phone: "",
          password: "",
          address: "",
          pincode: "",
          city: "",
          state: "",
          country: "",
          parentType: "",
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
          setFormData((prev) => ({ ...prev, parentType: selectedOption.value }));
        };

     const fetchParent = async () => {
           try {
             const response = await ParentService.getParentById(parentId);
             const { success, parents, message } = response;
             if (success) {
               const formattedData = {
                 name: parents.name, 
                 email: parents.email,
                 phone: parents.phone,
                 password: parents.password,
                 address: parents.address,
                 pincode: parents.pincode,
                 city: parents.city,
                 state: parents.state,
                 country: parents.country,
                 parentType: parents.parentType,
               }
               setFormData(formattedData);
               console.log("Updated formData-----:", formattedData);
             } else {
               toast.error(message);
             }
           } catch (error) {
             console.error('Error fetching Parent:', error);
           } finally {
             setLoading(false);
           }
         };
       
         useEffect(() => {
           if (isEditable) {
             fetchParent();
           }
         }, [isEditable, parentId]);
       
         const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           setError(null);
       
           const { name,parentType,email,phone,password, address, pincode, city, state, country } = formData;
      
           // Basic validation
           if (!name || !email || !phone || !password || !address || !pincode || !city || !state || !country) {
             setError("All fields are required.");
             return;
           }
  
           const payload: IUpdateParentPayload = {
             name,
             email,
             phone: parseInt(phone, 10),
             password,
             avatar: '',
             address,
             pincode,
             city,
             state,
             country,
             parentType
           };
           try {
             setLoading(true);
             const result = await  ParentService.updateParent(payload, parentId);
       
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
             setError(err.message || "Failed to update parent. Please try again.");
           } finally {
             setLoading(false);
           }
         };
     
      
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setError(null); // Clear previous errors
      
          const { name,parentType,email,phone,password, address, pincode, city, state, country } = formData;
      
          // Basic validation
          if (!name || !email || !phone || !password || !address || !pincode || !city || !state || !country) {
            setError("All fields are required.");
            return;
          }
      
          const payload: IAddParentPayload = {
            name,
            email,
            phone: parseInt(phone, 10),
            password,
            avatar: '',
            address,
            pincode,
            city,
            state,
            country,
            parentType,
          };
      
          console.log(payload);
          
      
          try {
            setLoading(true);
            const result = await ParentService.AddParent(payload);
            alert(result.message || "Parent added successfully!");
            if (onClose) onClose(); // Close the modal on success
          } catch (err: any) {
            setError(err.message || "Failed to add Parent. Please try again.");
          } finally {
            setLoading(false);
          }
        };
  
  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add Parents Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer"/>
      </div>
      {/*Form */}
      <div className="bg-white p-6 shadow-b-lg">
        <form className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
          <div className="">
            <DropDwon
                  label="Choose Parent Role"
                  options={optionsData}
                  value={formData.parentType}
                  onChange={handleDropdownChange}
                />
            </div>
            <div className="">
              <Input
                label="Name"
                placeholderText="Enter Parent Name"
                name="name"
                onChangeText={handleChange}
                value={formData.name}
              />
            </div>
            <div className="">
              <Input
                label="Email"
                placeholderText="Enter Email Address"
                name="email"
                onChangeText={handleChange}
                value={formData.email}
              />
            </div>
            <div className="">
              <Input
                label="Phone"
                placeholderText="Enter Phone Number"
                name="phone"
                onChangeText={handleChange}
                value={formData.phone}
              />
            </div>
            <div className="">
              <Input
                  label="Password"
                 placeholderText="Enter Password"
                 name="password"
                 onChangeText={handleChange}
                 value={formData.password}
              />
            </div>
            <div className="">
                <Input
                  label="Pincode"
                  placeholderText="Enter Pin Code"
                  name="pincode"
                  onChangeText={handleChange}
                  value={formData.pincode}
                />
              </div>
            <div className="">
              <Input
                label="City"
                placeholderText="Enter city"
                name="city"
                onChangeText={handleChange}
                value={formData.city}
              />
            </div>
            <div className="">
              <Input
                label="State"
                placeholderText="Enter State"
                  name="state"
                  onChangeText={handleChange}
                  value={formData.state}
              />
            </div>
            <div className="">
              <Input
                label="Country"
                placeholderText="Enter Country"
                name="country"
                onChangeText={handleChange}
                value={formData.country}
              />
            </div>
          </div>
          <div className="flex flex-col mt-1">
            <span className="text-[#b2b2b2]">Address</span>
            <textarea className="rounded-[5px] border-solid border-[1px] border-[#c5c5c5] focus:outline-none focus:ring-1 focus:ring-blue-200" 
               name="address"
               placeholder="Enter School Address"
               value={formData.address}
               onChange={handleChange}/>
          </div>
        </form>
        <div className="flex items-center justify-center my-2">
        <Button
              type={BUTTON_TYPES.PRIMARY}
              btnText={loading ? "Submitting..." : "Submit"}
              onClick={
                isEditable ? handleUpdate : handleSubmit
              }
            />
        </div>
      </div>
    </>
  );
};
export default AddParentsForm;
