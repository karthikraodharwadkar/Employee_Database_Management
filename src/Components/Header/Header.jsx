import React, { useState } from "react";
import "./Header.scss";
import Modal from "../Modal/Modal";

export default function Header() {

  const [toggle, setToggle] = useState(false);

  const handleAddEmployee = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header-container">
      <h2>Employee Database Management</h2>
      {toggle ? (
        <>
          <Modal setToggle={setToggle} />
        </>
      ) : (
        <button onClick={handleAddEmployee} className="add-emp-btn">
          Add Employee
        </button>
      )}
    </div>
  );
}
