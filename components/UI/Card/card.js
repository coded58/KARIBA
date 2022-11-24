import React from "react";
import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.details}>
        <span>{props.icon}</span>
        <h1>{props.count}</h1>
      </div>
    </div>
  );
};

export default Card;
