import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import { IAddPrincipalPayload } from "../../types";
import { useState } from "react";
import * as PrincipalService from "../../service/principal.service";
import { useParams } from "react-router-dom";

type TProps = {
  onClose?: () => void;
};


const AddPrincipalForm: React.FC<TProps> = ({ onClose }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    address: "",
  });

  const {schoolID} = useParams();
  console.log(schoolID);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { name, email, phone, password, pincode, city, state, country, address } = formData;
    if (!name || !email || !phone || !password || !pincode || !city || !state || !country || !address) {
      setError("All fields are required.");
      return;
    }

    const payload: IAddPrincipalPayload = {
      name,
      email,
      phone: parseInt(phone, 10),
      password,
      avatar: '',
      pincode: parseInt(phone, 10),
      city,
      state,
      country,
      address,
      school: schoolID
    };

    try {
      setLoading(true);
      const result = await PrincipalService.AddPrincipal(payload, schoolID as string);
      alert(result.message || "Principal added successfully!");
      if (onClose) onClose();
    } catch (err: any) {
      setError(err.message || "Failed to add principal. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Close Icon */}
      <div className="flex justify-between bg-slate-500 p-[17px]">
        <h3 className="text-2xl font-medium">Add Principal Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer" />
      </div>
      {/* Form */}
      <div className="bg-white p-6">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
            <Input
              label="Name"
              placeholderText="Enter Principal Name"
              name="name"
              onChangeText={handleChange}
              value={formData.name}
            />
            <Input
              label="Email"
              placeholderText="Enter Email"
              name="email"
              onChangeText={handleChange}
              value={formData.email}
            />
            <Input
              label="Phone"
              placeholderText="Enter Phone"
              name="phone"
              onChangeText={handleChange}
              value={formData.phone}
            />
            <Input
              label="Password"
              placeholderText="Enter Password"
              name="password"
              onChangeText={handleChange}
              value={formData.password}
            />
            <Input
              label="Pincode"
              placeholderText="Enter Pincode"
              name="pincode"
              onChangeText={handleChange}
              value={formData.pincode}
            />
            <Input
              label="City"
              placeholderText="Enter City"
              name="city"
              onChangeText={handleChange}
              value={formData.city}
            />
            <Input
              label="State"
              placeholderText="Enter State"
              name="state"
              onChangeText={handleChange}
              value={formData.state}
            />
            <Input
              label="Country"
              placeholderText="Enter Country"
              name="country"
              onChangeText={handleChange}
              value={formData.country}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-[#b2b2b2] mb-1">Address</label>
            <textarea
              className="rounded-[5px] border border-[#c5c5c5] focus:outline-none focus:ring-1 focus:ring-blue-200"
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex items-center justify-center my-4">
            <Button
              type={BUTTON_TYPES.PRIMARY}
              btnText={loading ? "Submitting..." : "Submit"}
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPrincipalForm;
