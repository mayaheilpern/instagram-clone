export const NavTab = (props) => {
  return (
    <div>
      <ul>
        {props.tabs.map((tab) => {
          const active = tab === props.selected ? "" : "";
          return (
            <li key={tab} className={active}>
              <p onClick={() => props.setSelected(tab)}>{tab}</p>
            </li>
          );
        })}
      </ul>
      {props.children}
    </div>
  );
};
