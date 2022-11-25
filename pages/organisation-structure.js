import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/UI/Header/Header";
import classes from "../styles/organisation.module.css";
import OrganizationData from "../data/organization";
import Card from "../components/UI/Card/card";
import Link from "next/link";
import Employee from "../components/UI/Employee/Employee";
import Organogram from "../components/UI/Organogram/organogram";
const OrganisationStructure = () => {
  const [toggle, setToggle] = useState("Employee");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 7,
      }}>
      <Head>
        <title>Organization Structure</title>
      </Head>
      <Header link='Organization Structure' />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.topText}>
            <h2 className={classes.overviewText}>Employees Information</h2>
            <p>Add, Edit and Update employee database</p>
          </div>
        </div>
        <div className={classes.employee}>
          {OrganizationData.map((employee) => (
            <Card
              key={employee.id}
              title={employee.title}
              icon={employee.icon}
              count={employee.count}
            />
          ))}
        </div>
        <div className={classes.subSection}>
          <div className={classes.searchBox}>
            <div className={classes.categories}>
              <p
                className={toggle === "Employee" && classes.active}
                onClick={() => setToggle("Employee")}>
                All Employees
              </p>
              <p
                className={toggle === "Organogram" && classes.active}
                onClick={() => setToggle("Organogram")}>
                Organogram
              </p>
            </div>
            <div className={classes.searchInput}>
              <input
                type='text'
                className={classes.inputField}
                placeholder='search by name'
              />
            </div>
          </div>
          <div className={classes.newEmployee}>
            <img src='/images/filter.png' alt='filter jpeg' />
            <a href='#add-employee-modal' className={classes.addBtn}>
              Add New Employees
            </a>
          </div>
        </div>
        {toggle === "Employee" && <Employee />}
        {toggle === "Organogram" && <Organogram />}
      </div>
    </div>
  );
};

export default OrganisationStructure;
