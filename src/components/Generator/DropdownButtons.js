const DropdownButton = ({ onClick, children, className }) => {
  return (
    <button
      name="typeValue"
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DropdownButton;
