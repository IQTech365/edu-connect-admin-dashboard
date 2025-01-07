import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import DropDwon, { TOption } from '../../components/drop-down/index'
import { IAddStudentPayload } from "../../types";
import * as StudentService from "../../service/student.service";
import { useState } from "react";


const opetionsData: TOption[] = [
    {
        value: "chocolate",
        label: "Math"
    },
    {
        value: "harpic",
        label: "English"
    },
    {
        value: "wiper",
        label: "Science"
    },
    {
        value: "sabun",
        label: "Hindi"
    },
    {
        value: "tset",
        label: "Physical Education"
    },
]

type TProps = {
    onClose?: () => void;
  };


const AddStudentForm: React.FC<TProps> = ({onClose}) =>{
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
        classes: "",
        section: "",
        rollNumber: "",
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
    
      console.info(formData);
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null); // Clear previous errors
    
        const { name,classes,section,rollNumber,email,phone,password, address, pincode, city, state, country } = formData;
    
        // Basic validation
        if (!name || !email || !phone || !password || !address || !pincode || !city || !state || !country) {
          setError("All fields are required.");
          return;
        }
    
        const payload: IAddStudentPayload = {
          name,
          email,
          phone,
          password,
          address,
          pincode,
          city,
          state,
          country,
          classes,
          section,
          rollNumber,
        };
    
        console.log(payload);
        
    
        try {
          setLoading(true);
          const result = await StudentService.AddStudent(payload);
          alert(result.message || "Student added successfully!");
          if (onClose) onClose(); // Close the modal on success
        } catch (err: any) {
          setError(err.message || "Failed to add Student. Please try again.");
        } finally {
          setLoading(false);
        }
      };

  return(
        <>
        {/*Close Icon */}
        <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
          <h3 className="text-2xl font-medium">Add Student Form</h3>
          <MdClose size={24} onClick={onClose}  className="cursor-pointer"/>
        </div>
        {/*Form */}
        <div className="bg-white p-6 shadow-b-lg">
          <form onSubmit={handleSubmit} className="w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
              <div className="">
                <Input
                  label="Name"
                  placeholderText="Enter Student Name"
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
                  label="Class"
                  placeholderText="Enter classes Name"
                  name="classes"
                onChangeText={handleChange}
                value={formData.classes}
                />
              </div>
              <div className="">
              <Input
                  label="Section"
                  placeholderText="Enter Section Name"
                  name="section"
                onChangeText={handleChange}
                value={formData.section}
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
              onChange={handleChange}
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex items-center justify-center my-2">
        <Button
              type={BUTTON_TYPES.PRIMARY}
              btnText={loading ? "Submitting..." : "Submit"}
              onClick={handleSubmit}
            />
        </div>
        </form>
        </div>
      </>
    )
}

export default AddStudentForm