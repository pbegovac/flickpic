import UploadInput from "./UploadInput";
import { photos } from "../../utils/photos";

const UploadPictures = () => {
  return (
    <div className="grid grid-cols-2">
      {photos.map((item) => (
        <UploadInput key={item.id} index={item.id} />
      ))}
    </div>
  );
};

export default UploadPictures;
