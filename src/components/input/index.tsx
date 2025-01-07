import React from "react";
import "./input.css";

interface IInputProps {
  label: string;
  placeholderText?: string;
  onChangeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: any;
  style?: any;
  isRequired?: boolean;
  value: string;
  name: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  value,
  isRequired = false,
  placeholderText,
  onChangeText,
  name
}) => {
  return (
    <div>
      <p className={"mb-6px font-[12px] text-[#afafaf]"}>
        {label}
        {isRequired ? <span className={"text-red-500"}>*</span> : null}
      </p>
      <input
        className={
          "bg-none border-[1px] border-[#c5c5c5] p-[6px] max-w-full rounded-[4px] w-[-webkit-fill-available] focus:outline-none focus:ring-1 focus:ring-blue-200"
        }
        placeholder={placeholderText}
        onChange={onChangeText}
        name={name}
      />
    </div>
  );
};

export default Input;
