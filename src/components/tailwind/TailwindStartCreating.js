export const Background = (props) => {
  return (
    <main className="h-screen bg-gradient-to-r from-darkgreen to-darkergreen flex justify-center items-center flex-col">
      {props.children}
    </main>
  );
};

export const Boxes = (props) => {
  return (
    <div className="flex h-32 w-500 justify-between items-center">
      {props.children}
    </div>
  );
};

export const Div = (props) => {
  return <div className="w-700 h-10">{props.children}</div>;
};

export const Button = (props) => {
  return (
    <button className="bg-lightgold h-full rounded w-150 ml-2 text-pantone hover:opacity-80">
      {props.children}
    </button>
  );
};
