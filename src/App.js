import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const employeeContext = createContext();

function App() {
  const [employeeData, setEmployeeData] = useState([]);

  const [employeeToBeEdited, setEmployeeToBeEdited] = useState([]);

  const [addEmployee, setAddEmployee] = useState({
    firstName: "",
    lastName: "",
    image: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    birthDate: "",
  });

  const [displayEmployeeData, setDisplayEmployeeData] = useState([]);

  const fetchData = async () => {
    let response = await axios.get("https://dummyjson.com/users");
    setEmployeeData(response.data.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <employeeContext.Provider
        value={{
          employeeData,
          setEmployeeData,
          addEmployee,
          setAddEmployee,
          displayEmployeeData,
          setDisplayEmployeeData,
          employeeToBeEdited,
          setEmployeeToBeEdited,
        }}
      >
        <LandingPage />
      </employeeContext.Provider>
    </div>
  );
}

export default App;
