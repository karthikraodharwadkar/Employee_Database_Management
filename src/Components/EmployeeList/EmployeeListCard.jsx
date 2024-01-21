import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import "./EmployeeList.scss";
import { employeeContext } from "../../App";
import EditModal from "../Modal/EditModal";

export default function EmployeeListCard({ employee }) {
  const {
    employeeData,
    setEmployeeData,
    setDisplayEmployeeData,
    displayEmployeeData,
    setEmployeeToBeEdited,
  } = useContext(employeeContext);

  const [editEmployee, setEditEmployee] = useState(false);

  const handleDisplayEmployee = (id) => {
    const requiredEmployeedata = employeeData.filter((item) => item.id === id);
    setDisplayEmployeeData(requiredEmployeedata[0]);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployeeData = employeeData.filter((item) => item.id !== id);
    setEmployeeData(updatedEmployeeData);

    if (displayEmployeeData?.id === id) {
      setDisplayEmployeeData([]);
    }
  };

  const handleEditEmployee = (id) => {
    const selectedEmployeetoEdit = employeeData.filter(
      (item) => item.id === id
    );
    setEditEmployee(!editEmployee);
    setEmployeeToBeEdited(selectedEmployeetoEdit[0]);
  };

  
  return (
    <div className="list-card-container">
      <div
        className="employee-name"
        onClick={() => handleDisplayEmployee(employee.id)}
      >
        <span>{employee.firstName}</span>
        <span>{employee.lastName}</span>
      </div>
      <div className="remove-icon">
        {editEmployee ? (
          <>
            <EditModal setEditEmployee={setEditEmployee} />
          </>
        ) : (
          <FaEdit
            className="edit-icon"
            onClick={() => handleEditEmployee(employee.id)}
          />
        )}
        <MdDelete
          className="delete-icon"
          onClick={() => handleDeleteEmployee(employee.id)}
        />
      </div>
    </div>
  );
}
