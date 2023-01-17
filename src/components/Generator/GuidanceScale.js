import { useState } from "react";

const GuidanceScale = () => {
  const [guidanceValue, setGuidanceValue] = useState(10);

  return (
    <div className="flex w-721 py-10">
      <form className="flex flex-col items-start justify-end">
        <label className="text-textBlack text-center pb-2" htmlFor="range">
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
          className="range overflow-hidden bg-white w-600 rounded-3xl h-13 border appearance-none border-themeBlue"
        />
      </form>
      <div className="w-full h-auto flex items-center justify-center">
        <p>{guidanceValue}</p>
      </div>
    </div>
  );
};

export default GuidanceScale;
