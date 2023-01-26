import { useState } from "react";
import { imageAspectRatio } from "../../utils/imageAspectRatio";

const Images = ({ src, alt }) => {
  const [newImageRatio, setNewImageRatio] = useState({
    id: 1,
    aspectRatio: "square",
  });

  return (
    <div className="flex items-center h-screen w-full xs:flex-col xs:justify-center">
      <img
        className={`rounded-xl w-30 aspect-${newImageRatio.aspectRatio}`}
        src={src}
        alt={alt}
      />

      {/* <div className=" w-30 flex justify-end mt-3">
        <button className="p-2 text-sm bg-buttonBG font-Harmattan text-white font-bold rounded-3xl hover:bg-buttonHoover">
          CLAIM
        </button>
      </div> */}

      <div className=" mt-3 justify-between w-500 hidden">
        {imageAspectRatio.map((item) => {
          return (
            <div className="flex justify-center items-center">
              <button
                key={item.id}
                className="text-white font-Harmattan cursor-pointer border h-full w-full bg-themeRed rounded p-2 hover:opacity-80"
                onClick={() => {
                  setNewImageRatio(item);
                }}
              >
                Ratio {item.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Images;
