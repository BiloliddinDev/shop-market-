import React from "react";
import Nav from "../Components/Nav";
import SideBar from "../Components/SideBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div>
        <SideBar />
        {children}
      </div>
    </div>
  );
};
