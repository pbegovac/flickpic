export const Background = (props) => {
  return (
    <main className="h-screen bg-gradient-to-r from-darkgreen to-darkergreen flex justify-center items-center">
      {props.children}
    </main>
  );
};

export const Div = (props) => {
  return <div className="w-700 h-10">{props.children}</div>;
};

export const Input = () => {
  return (
    <input
      className="bg-pantone h-full rounded min-w-full outline-0 pl-2"
      type="text"
      required
      id="textInput"
    />
  );
};

export const Button = (props) => {
  return (
    <button className="bg-lightgold h-full rounded w-150 ml-2 text-pantone hover:opacity-80">
      {props.children}
    </button>
  );
};
