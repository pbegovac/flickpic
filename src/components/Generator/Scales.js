const Scale = ({ label, inputValue, setInputValue, name, max, min }) => {
  return (
    <div className="w-full flex justify-around items-center mb-10 px-80 xs:px-12 lg:px-40 lg:mt-10 xl:px-60 xl:justify-center">
      <form className="flex flex-col items-start justify-end w-50">
        <label className="text-textBlack text-center mb-2" htmlFor={name}>
          {label}
        </label>
        <input
          name={name}
          type="range"
          min={min}
          max={max}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="range overflow-hidden bg-white rounded-3xl h-13 border appearance-none border-themeBlue xs:w-full xl:w-full"
        />
      </form>
      <div className=" flex flex-col justify-end items-start">
        <p className="mb-2">{inputValue} </p>
        <div className="h-13"></div>
      </div>
    </div>
  );
};

export default Scale;
