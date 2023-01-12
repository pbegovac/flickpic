const Images = (props) => {
  return (
    <img
      className="w-500 h-400 cursor-pointer"
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Images;
