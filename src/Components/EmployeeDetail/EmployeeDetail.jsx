import React, { useContext } from "react";
import { employeeContext } from "../../App";
import "./EmployeeDetail.scss";

export default function EmployeeDetail() {
  const { displayEmployeeData } = useContext(employeeContext);

  return (
    <div className="employee-detail-main-container">
      <div className="employee-detail-header">Employee Information</div>
      {displayEmployeeData.length===0 ? 
      <div className="emp-detail-msg">Click on the Employee Name</div>:
      <div className="employee-detail-container">
        <img
          src={displayEmployeeData?.image}
          alt={displayEmployeeData?.firstName}
          className="emp-image"
        />
        <p className="emp-name">
          {displayEmployeeData?.firstName} {displayEmployeeData?.lastName} (
          {displayEmployeeData?.age})
        </p>
        <p className="emp-addresses">
          {displayEmployeeData?.address?.address}{" "}
          {displayEmployeeData?.address?.city}
        </p>
        <p className="emp-email">{displayEmployeeData?.email}</p>
        <p>Mobile - {displayEmployeeData?.phone}</p>
        <p>DOB - {displayEmployeeData?.birthDate}</p>
      </div>
}
    </div>
  );
}
