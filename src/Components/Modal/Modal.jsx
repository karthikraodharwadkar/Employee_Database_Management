import React, { useContext } from "react";
import "./Modal.scss";
import { employeeContext } from "../../App";

export default function Modal({ setToggle }) {
  const { addEmployee, setAddEmployee, employeeData, setEmployeeData } =
    useContext(employeeContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEmployeeData([...employeeData, addEmployee]);
    setToggle(false);
  };
  const handleEmployeeChange = (event) => {
    setAddEmployee({
      ...addEmployee,
      [event.target.name]: event.target.value,
      address: {
        ...addEmployee.address,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleModalDelete = () => {
    setToggle(false);
  };

  return (
    <div className="modal-container">
      <div className="modal-delete-btn" onClick={handleModalDelete}>
        X
      </div>
      <div className="modal-header">Add a new Employee</div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={addEmployee.firstName}
          placeholder="Enter FirstName"
          onChange={handleEmployeeChange}
          className="modal-name"
        />
        <input
          type="text"
          name="lastName"
          value={addEmployee.lastName}
          placeholder="Enter LastName"
          onChange={handleEmployeeChange}
          className="modal-name"
        />
        <br />
        <input
          className="modal-ipt"
          name="image"
          type="text"
          value={addEmployee.image}
          placeholder="Enter Employee Image"
          onChange={handleEmployeeChange}
        />
        <br />
        <input
          type="email"
          name="email"
          value={addEmployee.email}
          className="modal-ipt"
          placeholder="Enter Email"
          onChange={handleEmployeeChange}
        />
        <br />
        <input
          type="number"
          name="phone"
          value={addEmployee.phone}
          className="modal-ipt"
          placeholder="Enter Contact Number"
          onChange={handleEmployeeChange}
        />
        <br />
        <input
          type="text"
          name="age"
          value={addEmployee.age}
          className="modal-ipt"
          placeholder="Enter age"
          onChange={handleEmployeeChange}
        />
        <br />
        <input
          type="text"
          name="address"
          value={addEmployee.address.address}
          className="modal-ipt"
          placeholder="Enter Address"
          onChange={handleEmployeeChange}
        />
        <br />
        <input
          type="date"
          name="birthDate"
          value={addEmployee.birthDate}
          className="modal-ipt"
          onChange={handleEmployeeChange}
        />
        <br />
        <button type="submit" className="modal-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
