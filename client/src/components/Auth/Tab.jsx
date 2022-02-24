export const Tab = (props) => {
  if (props.isSelected) {
    return <div>{props.children}</div>;
  }
  return null;
};
