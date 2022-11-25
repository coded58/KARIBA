import React from "react";
import ChevronIcon from "../../icons/chevron";
import StaffData from "../../../data/staffData";
import CardType from "../Card/cardProp";
import classes from "./organogram.module.css";
const Organogram = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.options}>
        <p>Human Resources</p>
        <ChevronIcon />
      </div>
      <div className={classes.cont}>
        <div className={classes.staffs}>
          {StaffData.map((staff) => (
            <CardType key={staff.id} item={staff} />
          ))}
        </div>
        <div className={classes.staffData}>
          <p>SELECTED</p>
          <span className={classes.head}>Human Resources</span>
          <div className={classes.inputs}></div>
          <span className={classes.head}>Projects</span>
          <div className={classes.card}>
            <div className={classes.col1}>
              <span className={classes.span}>TOTAL</span>
              <span className={classes.count}>148</span>
            </div>
            <div className={classes.col1}>
              <span className={classes.span}>IN-PROGRESS</span>
              <span className={classes.count}>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organogram;
