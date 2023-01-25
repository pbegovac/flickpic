import { useState } from "react";

import { imageAspectRatio } from "../../utils/imageAspectRatio";

const Images = ({ src, alt }) => {
  const [newImageRatio, setNewImageRatio] = useState({
    id: 1,
    aspectRatio: "square",
    height: "50",
    width: "50",
  });

  return (
    <div className="xs:my-8 w-full h-full flex flex-col justify-center items-center">
      <img
        className={`rounded-xl cursor-pointer w-${newImageRatio.width} h-${newImageRatio.height} aspect-${newImageRatio.aspectRatio}`}
        src={src}
        alt={alt}
      />

      <div className=" w-70 flex justify-end mt-3">
        <button className="p-2 text-sm bg-buttonBG font-Harmattan text-white font-bold rounded-3xl hover:bg-buttonHoover">
          CLAIM
        </button>
      </div>

      <div className="flex mt-3 justify-between w-70">
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
      <div className="aspect-[2/3] p-0 m-0 hidden bg-themeYellow"></div>
      <div className="aspect-[3/4] p-0 m-0 hidden"></div>
      <div className="aspect-[4/5] p-0 m-0 hidden"></div>
      <div className="aspect-[4/3] p-0 m-0 hidden"></div>
      <div className="aspect-[3/2] p-0 m-0 hidden"></div>
      <div className="aspect-video p-0 m-0 hidden"></div>
      <div className="aspect-square p-0 m-0 hidden"></div>
    </div>
  );
};

export default Images;
