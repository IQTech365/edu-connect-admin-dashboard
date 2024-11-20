import React from "react";
import Select, { StylesConfig } from "react-select";

export type TOption = {
  value: string;
  label: string;
};

interface IDropDownProps {
  label?: string;
  placeholderText?: string;
  options: TOption[];
}

const DropDwon: React.FC<IDropDownProps> = ({
  label,
  placeholderText,
  options,
}) => {
  const customStyles: StylesConfig<TOption> = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused
        ? "0 0 0 1px rgba(59, 130, 246, 0.5)"
        : undefined,
      borderColor: state.isFocused
        ? "rgb(191, 219, 254, 0.5)"
        : base.borderColor,
      "&:hover": {
        borderColor: state.isFocused
          ? "rgb(191, 219, 254, 0.5)"
          : base.borderColor,
      },
    }),
  };
  return (
    <div>
      <p className="text-[#afafaf]">{label} </p>
      <Select
        options={options}
        placeholder={placeholderText}
        styles={customStyles}
        className="focus:outline-none"
      />
    </div>
  );
};

export default DropDwon;
