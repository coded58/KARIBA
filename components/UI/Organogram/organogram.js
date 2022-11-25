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
      <div className={classes.staffs}>
        {StaffData.map((staff) => (
          <CardType key={staff.id} item={staff} />
        ))}
      </div>
    </div>
  );
};

export default Organogram;
