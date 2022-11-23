import React, { useState } from "react";
import classes from "./sidebar-item.module.css";
// import ChevronIcon from "../../icons/chevron";

const SidebarItem = (props) => {
  const [open, setOpen] = useState(false);
  if (props.subMenu) {
    return (
      <div
        className={
          open ? `${classes.sidebarLink} ${classes.open}` : classes.sidebarLink
        }>
        <div className={classes.sidebarItem} onClick={() => setOpen(!open)}>
          <span className={classes.icons}>
            {props.icon}
            {props.title}
          </span>

          <span>
            <svg
              className={classes.toggleBtn}
              width='12'
              height='9'
              viewBox='0 0 12 9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                opacity='0.3'
                d='M5.9 8.4001L0 2.20598L1.52963 0.600098L5.9 5.18833L10.2704 0.600098L11.8 2.20598L5.9 8.4001Z'
                fill='#111111'
              />
            </svg>
          </span>
        </div>
        <div className={classes.subMenu}>
          {props.subMenu.map((menu, index) => (
            <p>{menu.title}</p>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          open ? `${classes.sidebarLink} ${classes.open}` : classes.sidebarLink
        }>
        <div className={classes.sidebarItem} onClick={() => setOpen(!open)}>
          <span className={classes.icons}>
            {props.icon}
            {props.title}
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
