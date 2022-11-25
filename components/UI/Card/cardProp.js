import React from "react";
import classes from "./cardProps.module.css";

const CardType = ({ item }) => {
  return (
    <div className={classes.cardWrap}>
      <div className={classes.imgBox}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={classes.info}>
        <p>{item.name}</p>
        <span> {item.email}</span>
      </div>
      <h4 className={item.status === "On-Leave" && classes.styles}>
        {item.status}
      </h4>
      <h3>{item.role}</h3>
    </div>
  );
};

export default CardType;
