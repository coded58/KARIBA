import React from "react";
import Header from "../components/UI/Header/Header";

const about = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 7,
      }}>
      <Header link='Dashboard' />
      <div>hello</div>
    </div>
  );
};

export default about;
