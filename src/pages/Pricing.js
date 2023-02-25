import UploadPictures from "../components/Linkedin_generator/UploadPictures";

const Pricing = () => {
  return (
    <div>
      <UploadPictures />
      <div className="h-32 flex justify-center items-center">
        <button className="generateButton bg-themeRed font-Fredoka">
          GENERATE
        </button>
      </div>
    </div>
  );
};

export default Pricing;
