import { useState } from "react";
import { Login } from "../components/Auth/Login";
import { NavTab } from "../components/NavTab";
import { Register } from "../components/Auth/Register";
import { Tab } from "../components/Tab";

export const Auth = () => {
  const tabs = ["Register", "Login"];
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <NavTab tabs={tabs} selected={selected} setSelected={setSelected}>
      <Tab isSelected={selected === tabs[0]}>
        <Register />
      </Tab>
      <Tab isSelected={selected === tabs[1]}>
        <Login />
      </Tab>
    </NavTab>
  );
};
