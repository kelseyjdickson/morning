import React, { useState } from "react";

const Register = ({ onFormSwitch }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="name"
          placeholder="Full name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="youemail@gmail.com"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => onFormSwitch("/login")}>
        Already have an account? Log in here
      </button>
    </div>
  );
};

export default Register;
