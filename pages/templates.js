import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/UI/Header/Header";
import classes from "../styles/templates.module.css";

const Template = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 7,
      }}>
      <Head>
        <title>Templates</title>
      </Head>
      <Header link='Template' />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.topText}>
            <h2 className={classes.overviewText}>Template</h2>
            <p>
              Choose and customise templates that best suit your needs at a go
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
