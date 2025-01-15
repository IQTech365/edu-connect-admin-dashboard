import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
// import { PiFileArrowUpLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import * as TeacherService from "../../service/teacher.service";
import { IAddTeacherPayload, IUpdateTeacherPayload } from "../../types/teacher.types";
import { toast, ToastContainer } from "react-toastify";

type TProps = {
  onClose?: () => void;
  isEditable: boolean;
  teacherId: string;
};

const AddTeacherFrom: React.FC<TProps> = ({ onClose, isEditable, teacherId }) => {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };
  const handleImageChange = (e: any) => {
    const file = e.target.files;
    console.log(file);
    setImage(" ");
  };

  //TODO ----
  // Make and image picker

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    avatar: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    qualification: ""
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

    const fetchTeachers = async () => {
      try {
        const response = await TeacherService.getTeacherById(teacherId);
        const { success, teachers, message } = response;
        if (success) {
          const formattedData = {
            name: teachers.name, 
            email: teachers.email,
            phone: teachers.phone,
            password: teachers.password,
            address: teachers.address,
            pincode: teachers.pincode,
            city: teachers.city,
            state: teachers.state,
            country: teachers.country,
            qualification: teachers.qualification,
          }
          setFormData(formattedData);
          console.log("Updated formData-----:", formattedData);
        } else {
          toast.error(message);
        }
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      if (isEditable) {
        fetchTeachers();
      }
    }, [isEditable, teacherId]);
  
    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);
  
      const { name, email, phone, password, qualification, address, pincode, city, state, country } = formData;

      if (!name || !email || !phone || !password || !qualification || !address || !pincode || !city || !state || !country) {
        setError("All fields are required.");
        return;
      }
      const payload: IUpdateTeacherPayload = {
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
        qualification,
      };
      try {
        setLoading(true);
        const result = await TeacherService.updateTeacher(payload, teacherId);
        console.log(result);
  
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
        setError(err.message || "Failed to update school. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { name, email, phone, password, qualification, address, pincode, city, state, country } = formData;

    if (!name || !email || !phone || !password || !qualification || !address || !pincode || !city || !state || !country) {
      setError("All fields are required.");
      return;
    }

    const payload: IAddTeacherPayload = {
      name,
      email,
      phone: parseInt(phone, 10),
      avatar: '',
      password,
      address,
      pincode,
      city,
      state,
      country,
      qualification
    };

    console.log(payload);


    try {
      setLoading(true);
      const result = await TeacherService.AddTeacher(payload);
      if (result.success) {
        toast.success(result.message);
        if (onClose) onClose();
      }
      else if(!result.success) {
        toast.error(result.message);
      }
    } catch (err: any) {
      setError(err.message || "Failed to add Teacher. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/*Close Icon */}
      <div className="flex justify-between  bg-slate-500 p-[17px] shadow-b-lg">
        <h3 className="text-2xl font-medium">Add Teacher Form</h3>
        <MdClose size={24} onClick={onClose} />
      </div>
      {/*Form */}
      <div className="bg-white p-6 shadow-b-lg">
        {/* <div className="h-28 w-28 bg-green-300 flex items-center justify-center cursor-pointer" onClick={handleImageClick}>
            {
            image ? <img src={URL.createObjectURL(image)} alt=""/>:<PiFileArrowUpLight size={40}/> }
            <input type="file" ref={imageInputRef} onChange={handleImageChange} style={{display:"none"}}/>
          </div> */}
        <form onSubmit={handleSubmit} className="w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4   rounded-lg ">
            <div className="">
              <Input
                label="Name"
                placeholderText="Enter Teacher Name"
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
                label="Qualification"
                placeholderText="Enter Qualification"
                name="qualification"
                onChangeText={handleChange}
                value={formData.qualification}
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
          <div className="flex flex-col mt-4">
            <label className="text-[#b2b2b2] mb-1">Address</label>
            <textarea
              className="rounded-[5px] border border-[#c5c5c5] focus:outline-none focus:ring-1 focus:ring-blue-200"
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
              onClick={
                isEditable ? handleUpdate : handleSubmit
              }
            />
          </div>
        </form>
      </div>
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

export default AddTeacherFrom;
