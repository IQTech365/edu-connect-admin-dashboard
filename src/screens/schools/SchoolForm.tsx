import { MdClose } from "react-icons/md";
import Input from "../../components/input";
import Button from "../../components/button/index";
import { BUTTON_TYPES } from "../../components/button/data/button";
import { IAddSchoolPayload } from "../../types";
import { useEffect, useState } from "react";
import * as SchoolService from "../../service/school.service";
import { toast } from "react-toastify";
import { IUpdateSchoolPayload } from "../../types/school.type";

type TProps = {
  onClose?: () => void;
  isEditable: boolean;
  schoolId: string;
};

const SchoolForm: React.FC<TProps> = ({ onClose, isEditable, schoolId }) => {
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

  const fetchSchools = async () => {
    try {
      const response = await SchoolService.getSchoolById(schoolId);
      const { success, school, message } = response;
      if (success) {
        const formattedData = {
          name: school.name,
          address: school.address,
          pincode: school.pincode,
          city: school.city,
          state: school.state,
          country: school.country,
        }
        setFormData(formattedData);
        console.log("Updated formData-----:", formattedData);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error('Error fetching schools:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isEditable) {
      fetchSchools();
    }
  }, [isEditable, schoolId]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { name, address, pincode, city, state, country } = formData;
    if (!name || !address || !pincode || !city || !state || !country) {
      setError("All fields are required.");
      return;
    }
    const payload: IUpdateSchoolPayload = {
      name,
      address,
      pincode,
      city,
      state,
      country,
    };
    try {
      setLoading(true);
      const result = await SchoolService.updateSchool(payload, schoolId);
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

    const { name, address, pincode, city, state, country } = formData;
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
    try {
      setLoading(true);
      const result = await SchoolService.AddSchool(payload);
      if (result.success) {
        toast.success(result.message)
        if (onClose) onClose();
      }
      else {
        toast.error(result.message);
      }
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
        <h3 className="text-2xl font-medium">{
          isEditable ? "Edit School" : "Add New School"
        }</h3>
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
              onClick={
                isEditable ? handleUpdate : handleSubmit
              }
            // disabled={loading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SchoolForm;