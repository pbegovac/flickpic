import { useState } from "react";

const GuidanceScale = () => {
  const [guidanceValue, setGuidanceValue] = useState(10);

  return (
    <div className="w-full flex justify-around items-center my-10 px-80">
      <form className="flex flex-col items-start justify-end">
        <label className="text-textBlack text-center mb-2" htmlFor="range">
          Guidance Scale
        </label>
        <input
          name="range"
          type="range"
          min="0"
          max="100"
          value={guidanceValue}
          onChange={(e) => {
            setGuidanceValue(e.target.value);
          }}
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
