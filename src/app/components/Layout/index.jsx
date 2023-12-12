// src/app/components/Layout.js
import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="pt-15 px-15">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
