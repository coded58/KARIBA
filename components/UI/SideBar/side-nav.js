import React from "react";
import classes from "./side-nav.module.css";
import LogoIcon from "../../icons/logo-icon";
import Link from "next/link";
import SidebarItem from "./sidebar-items";
import sidebarData from "../../../data/sidebar";

const SideBar = () => {
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.logo}>
        <LogoIcon />
      </div>
      {sidebarData.map((sideLink) => (
        <SidebarItem
          key={sideLink.id}
          title={sideLink.title}
          icon={sideLink.icon}
          subMenu={sideLink.subMenu}
          path={sideLink.path}
        />
      ))}
      <div className={classes.logout}>
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default SideBar;
