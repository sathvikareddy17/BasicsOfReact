import React from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";
import SearchBar from "./SearchBar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="left"><Sidebar /></div>
      <div className="middle"><Form /></div>
      <div className="right"><SearchBar /></div>
    </div>
  );
};

export default Layout;
