import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/UI/Header/Header";
import classes from "../styles/business.module.css";
import Modal from "../components/UI/Modal/Modal";

const BusinessProcess = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 7,
      }}>
      <Head>
        <title>Buisness Process</title>
      </Head>
      <Header link='Business Process' />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.topText}>
            <h2 className={classes.overviewText}>Business Process</h2>
            <p>Find all assigned task here</p>
          </div>
        </div>
        <div className={classes.subSection}>
          <div className={classes.searchBox}>
            <div className={classes.searchInput}>
              <input
                type='text'
                className={classes.inputField}
                placeholder='Search in task'
              />
            </div>
          </div>
          <div className={classes.newEmployee}>
            <img src='/images/filter.png' alt='filter jpeg' />
            <a onClick={() => setShowModal(true)} className={classes.addBtn}>
              Add New Task
            </a>
          </div>
          <Modal show={showModal} onClose={() => setShowModal(false)}>
            <h1 className={classes.modalHeader}>Add New Task</h1>
          </Modal>
        </div>
        <div className={classes.taskList}>
          <h1>No Task Added Yet!</h1>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcess;
