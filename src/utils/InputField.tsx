import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  state: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  state,
  handleChange,
}) => {
  return (
    <input
      required
      type={type}
      placeholder={placeholder}
      value={state}
      className="my-1 border focus:outline-slate-300 w-full mb-6 px-6 py-3 rounded p-2"
      onChange={handleChange}
    />
  );
};

export default InputField;
