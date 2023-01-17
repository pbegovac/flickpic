import { useState } from "react";

const FormInput = ({ label, onChange, errorMessage, id, ...inputProps }) => {
  const [errorIsShown, setErrorIsShown] = useState(false);

  const handleFocus = () => {
    setErrorIsShown(true);
  };

  return (
    <div className="h-20">
      <div className="py-2 w-400">
        <label>{label}</label>
      </div>
      <input
        {...inputProps}
        onChange={onChange}
        className="w-400 h-40 border rounded-md pl-2 outline-0 font-semibold"
        onBlur={handleFocus}
        onFocus={() => {
          inputProps.name === "confirmPassword" && setErrorIsShown(true);
        }}
        focused={errorIsShown.toString()}
      />
      <span className="hidden py-2 text-errorRed w-400 text-sm">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
