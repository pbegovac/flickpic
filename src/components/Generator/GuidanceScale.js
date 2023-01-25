const GuidanceScale = ({ guidanceValue, setGuidanceValue }) => {
  return (
    <div className="w-full flex justify-around items-center mb-10 px-80 xs:px-12 lg:px-40 lg:mt-10 xl:px-80 xl:justify-center">
      <form className="flex flex-col items-start justify-end w-full xl:w-500">
        <label
          className="text-textBlack text-center mb-2"
          htmlFor="guidanceValue"
        >
          Guidance Scale
        </label>
        <input
          name="guidanceValue"
          type="range"
          min="0"
          max="20"
          onChange={(e) => setGuidanceValue(e.target.value)}
          value={guidanceValue}
          className="range overflow-hidden bg-white rounded-3xl h-13 border appearance-none border-themeBlue xs:w-full xl:w-full"
        />
      </form>
      <div className="flex items-start xl:mb-6">
        <p>{guidanceValue}</p>
      </div>
    </div>
  );
};

export default GuidanceScale;
