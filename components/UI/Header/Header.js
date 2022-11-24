import React from "react";
import classes from "./Header.module.css";
import SearchIcon from "../../icons/search-icon";
import NotificationIcon from "../../icons/notification-icon";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <div className={classes.pageName}>
        <span className={classes.text}>
          {props.link} <span className={classes.boldText}>&gt; Overview</span>
        </span>
      </div>
      <div className={classes.rightMenu}>
        <SearchIcon />
        <NotificationIcon />
        <div className={classes.imageDiv}>
          <div>
            <img src='/images/ProfileImage.png' alt='Profile Img' />
          </div>
          <span>Temi - HR Manager</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
