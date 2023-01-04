import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import "../../styles/main.css";

const Main = ({ data }) => {
  const [currentForm, setCurrentForm] = useState("/login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <Link to="/about">
        <About data={data} />
      </Link>
      <div id="auth-form-container">
        {/* <h1>Main Container</h1> */}
        {currentForm === "/login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </>
  );
};
export default Main;
