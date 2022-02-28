export const NavTab = (props) => {
  return (
    <div>
      <ul className="flex justify-evenly">
        {props.tabs.map((tab, index) => {
          const active = tab === props.selected ? "" : "";
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
