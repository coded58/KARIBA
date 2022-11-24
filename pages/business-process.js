import React from "react";
import Header from "../components/UI/Header/Header";
import classes from "../styles/business.module.css";

const BusinessProcess = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 7,
      }}>
      <Header link='Business Process' />
      <div>hello</div>
    </div>
  );
};

export default BusinessProcess;
