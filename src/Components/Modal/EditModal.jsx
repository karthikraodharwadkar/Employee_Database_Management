import React, { useContext, useState } from "react";
import { employeeContext } from "../../App";

export default function EditModal({ setEditEmployee }) {
  const {
    employeeToBeEdited,
    employeeData,
    setEmployeeData,
    setDisplayEmployeeData,
  } = useContext(employeeContext);

  const [editedEmployee, setEditedEmployee] = useState({
    ...employeeToBeEdited,
  });

  const handleEmployeeEditChange = (e) => {
    setEditedEmployee({
      ...employeeToBeEdited,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditModal = () => {
    setEditEmployee(false);
  };

  const handleEditedEmployee = (e) => {
    e.preventDefault();
    const saveEditedEmployee = employeeData.map((item) =>
      item.id === editedEmployee.id ? { ...item, ...editedEmployee } : item
    );
    setEmployeeData(saveEditedEmployee);

    const displayEditedEmployee = saveEditedEmployee.filter(
      (item) => item.id === editedEmployee.id
    );
    setDisplayEmployeeData(displayEditedEmployee[0]);
    setEditEmployee(false)
  };

  return (
    <div className="modal-container">
      <div className="modal-delete-btn" onClick={handleEditModal}>
        X
      </div>
      <div className="modal-header">Edit Employee</div>
      <form onSubmit={handleEditedEmployee}>
        <input
          type="text"
          name="firstName"
          value={editedEmployee.firstName}
          placeholder="Enter FirstName"
          onChange={handleEmployeeEditChange}
        />
        <input
          type="text"
          name="lastName"
          value={editedEmployee.lastName}
          placeholder="Enter LastName"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <input
          className="modal-ipt"
          name="image"
          type="text"
          value={editedEmployee.image}
          placeholder="Enter Employee Image"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <input
          type="email"
          name="email"
          value={editedEmployee.email}
          className="modal-ipt"
          placeholder="Enter Email"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          value={editedEmployee.phone}
          className="modal-ipt"
          placeholder="Enter Contact Number"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <input
          type="text"
          name="age"
          value={editedEmployee.age}
          className="modal-ipt"
          placeholder="Enter age"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <input
          type="text"
          name="address"
          value={editedEmployee.address.address}
          className="modal-ipt"
          placeholder="Enter Address"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <input
          type="date"
          name="birthDate"
          value={editedEmployee.birthDate}
          className="modal-ipt"
          onChange={handleEmployeeEditChange}
        />
        <br />
        <button type="submit" className="modal-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
