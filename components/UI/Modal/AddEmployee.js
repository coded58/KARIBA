import React from "react";

const AddEmployee = () => {
  return (
    <div id='add-employee-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Add New Employee Details</h4>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
export default AddEmployee;
