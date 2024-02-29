import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter your email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Enter your password"
          value={loginFormData.password}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
