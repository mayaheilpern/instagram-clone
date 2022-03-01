export const NavTab = (props) => {
  return (
    <div>
      <ul className="flex justify-evenly py-3">
        {props.tabs.map((tab, index) => {
          const active =
            tab === props.selected ? "border-b border-teal-500" : "";
          return (
            <li key={index} className={active}>
              <p onClick={() => props.setSelected(tab)}>{tab}</p>
            </li>
          );
        })}
      </ul>
      {props.children}
    </div>
  );
};
