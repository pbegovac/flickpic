export const Header = (props) => {
  return (
    <header className="h-20 shadow-md fixed w-header opacity-80 bg-gradient-to-r from-green to-blue flex justify-around items-center">
      {props.children}
    </header>
  );
};

export const Navigation = (props) => {
  return <nav className="h-full flex items-center">{props.children}</nav>;
};

export const UnorderedList = (props) => {
  return (
    <ul className="h-full w-700 flex justify-between items-center">
      {props.children}
    </ul>
  );
};

export const ListElement = (props) => {
  return (
    <li className=" h-1/2 flex items-center justify-between ">
      {props.children}
    </li>
  );
};

export const Paragraph = (props) => {
  return (
    <p className="text-white font-extrabold font-mono hover:opacity-80">
      {props.children}
    </p>
  );
};
