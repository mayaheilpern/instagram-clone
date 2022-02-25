import React from "react";
import { Footer } from "../components/Layout/Footer";
import { Navbar } from "../components/Layout/Navbar";

export const Layout = (props) => {
  return (
    <>
      <Navbar currentUser={props.currentUser} />
      {props.children}
      <Footer />
    </>
  );
};
