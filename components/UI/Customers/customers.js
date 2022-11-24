import React from "react";
import classes from "./customers.module.css";

const Customers = () => {
  return (
    <div className={classes.wraapper}>
      <div className={classes.header}>
        <h3>New Customers</h3>
        <p className={classes.view}>View -&gt;</p>
      </div>
    </div>
  );
};

export default Customers;
