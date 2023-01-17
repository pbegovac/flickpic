const Loader = () => {
  return (
    <div className="my-32">
      <div className="loading-spinner w-180 animate-spin-slower rounded-full h-180 flex justify-center items-center">
        <div className="w-170 rounded-full h-170 bg-background"></div>
      </div>
    </div>
  );
};

export default Loader;
