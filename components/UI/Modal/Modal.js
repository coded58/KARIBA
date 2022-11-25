import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import classes from "./modal.module.css";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
    return <div>Modal</div>;
  };
  const modalContent = show ? (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <a href='#' onClick={handleClose}>
            <svg
              className={classes.close}
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.757812 11.2431L6.00081 6.00008M11.2438 0.75708L5.99981 6.00008M5.99981 6.00008L0.757812 0.75708M6.00081 6.00008L11.2438 11.2431'
                stroke='#111111'
                strokeOpacity='0.8'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
        <div className={classes.body}> {children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
