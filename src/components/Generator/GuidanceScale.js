const GuidanceScale = ({ guidanceValue, setGuidanceValue }) => {
  return (
    <div className="w-full flex justify-around items-center my-10 px-80">
      <form className="flex flex-col items-start justify-end">
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
          className="range overflow-hidden bg-white w-500 rounded-3xl h-13 border appearance-none border-themeBlue"
        />
      </form>
      <div className="flex items-center">
        <p>{guidanceValue}</p>
      </div>
    </div>
  );
};

export default GuidanceScale;
