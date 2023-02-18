const Scale = ({ label, inputValue, setInputValue, max, min }) => {
  return (
    <div className="w-full flex items-center my-10 px-80 xs:px-12 lg:mt-10 lg:px-60 justify-center">
      <form className="flex flex-col items-start justify-end w-50">
        <label
          className="text-textBlack text-center mb-2 xs:text-xs lg:text-lg"
          htmlFor={label}
        >
          {label}
        </label>
        <input
          name={label}
          type="range"
          min={min}
          max={max}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="range overflow-hidden bg-white rounded-3xl h-13 border appearance-none border-themeBlue w-full"
        />
      </form>
      <div className=" flex flex-col justify-end items-start">
        <p className="mb-2 xs:text-xs lg:text-lg">{inputValue} </p>
        <div className="h-13"></div>
      </div>
    </div>
  );
};

export default Scale;
