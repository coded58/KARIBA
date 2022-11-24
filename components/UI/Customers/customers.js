import React from "react";
import classes from "./customers.module.css";

const Customers = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h3>New Customers</h3>
        <p className={classes.view}>View -&gt;</p>
      </div>
      <div className={classes.topSec}>
        <p>NAME</p>
        <p>EMAIL</p>
      </div>
      <div className={classes.info}>
        <div className={classes.emailInfo}>
          <img src='/images/emailProfile.png' alt='email Profile' />
          <p>Alex Shatov</p>
        </div>
        <h2>alexshatov@gmail.com</h2>
      </div>
    </div>
  );
};

export default Customers;
