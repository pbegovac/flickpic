import { useState } from "react";

const Images = ({ src, alt }) => {
  const [areImagesScaledUp, setImagesScaledUp] = useState(false);

  const scaleUp = () => {
    setImagesScaledUp(true);
  };

  const scaleDown = () => {
    setImagesScaledUp(false);
  };

  return (
    <div className="w-50">
      <div className="w-full flex flex-col justify-end items-center">
        <img
          className="rounded-3xl cursor-pointer h-500 w-60"
          src={src}
          alt={alt}
          onClick={scaleUp}
        />
        <div className="w-60 flex justify-end">
          <button className="p-2 mt-2 text-sm bg-buttonBG font-Harmattan text-white font-bold rounded-3xl hover:bg-buttonHoover ">
            CLAIM
          </button>
        </div>
      </div>

      {areImagesScaledUp && (
        <div
          onClick={scaleDown}
          className="fixed flex justify-center items-center z-10 bg-backdrop min-w-full h-full top-0 left-0"
        >
          <img className="rounded h-90 cursor-pointer" src={src} alt={alt} />
        </div>
      )}
    </div>
  );
};

export default Images;
