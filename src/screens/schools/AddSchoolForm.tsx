import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import { IAddSchoolPayload } from "../../types";
import { useState } from "react";
import * as SchoolService from "../../service/school.service";

type TProps = {
  onClose?: () => void;
};

const AddSchoolForm: React.FC<TProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
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

    const { name, address, pincode, city, state, country } = formData;

    // Basic validation
    if (!name || !address || !pincode || !city || !state || !country) {
      setError("All fields are required.");
      return;
    }

    const payload: IAddSchoolPayload = {
      name,
      address,
      pincode,
      city,
      state,
      country,
    };

    console.log(payload);
    

    try {
      setLoading(true);
      const result = await SchoolService.AddSchool(payload);
      alert(result.message || "School added successfully!");
      if (onClose) onClose(); // Close the modal on success
    } catch (err: any) {
      setError(err.message || "Failed to add school. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Close Icon */}
      <div className="flex justify-between bg-slate-500 p-[17px]">
        <h3 className="text-2xl font-medium">Add School Form</h3>
        <MdClose size={24} onClick={onClose} className="cursor-pointer" />
      </div>
      {/* Form */}
      <div className="bg-white p-6">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 gap-3 mb-1 rounded-lg">
            <Input
              label="School Name"
              placeholderText="Enter School Name"
              name="name"
              onChangeText={handleChange}
              value={formData.name}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-lg">
            <Input
              label="Pincode"
              placeholderText="Enter Pincode"
              name="pincode"
              onChangeText={handleChange}
              value={formData.pincode}
            />
            <Input
              label="City"
              placeholderText="Enter School City"
              name="city"
              onChangeText={handleChange}
              value={formData.city}
            />
            <Input
              label="State"
              placeholderText="Enter School State"
              name="state"
              onChangeText={handleChange}
              value={formData.state}
            />
            <Input
              label="Country"
              placeholderText="Enter School Country"
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
              placeholder="Enter School Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex items-center justify-center my-4">
            <Button
              type={BUTTON_TYPES.PRIMARY}
              btnText={loading ? "Submitting..." : "Submit"}
            // disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddSchoolForm;
