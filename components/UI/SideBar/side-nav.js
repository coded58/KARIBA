import React from "react";
import classes from "./side-nav.module.css";
import Link from "next/link";
import SidebarItem from "./sidebar-items";

const SideBar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.logo}>
        <LogoIcon />
      </div>
      <SidebarItem />
    </div>
  );
};

export default SideBar;
