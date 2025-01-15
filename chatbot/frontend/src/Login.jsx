import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    console.log(data);
    await axios
      .post("http://localhost:9999/login", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        alert("Login Sucessfully");
        Cookies.set("auth_token", response.data.token);
        navigate("/homepage");
      })
      .catch((error) => {
        console.error("login Error:", error.message);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="box">
      <div className="card">
        <h1>Welcome to ChatBot</h1>
        <div>
          <label htmlFor="" className="em">
            Enter Email
          </label>
          <input type="mail" name="email" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Enter Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>

        <button onClick={logIn}>Login</button>
        <NavLink to="/signup">
          <span>Signup?</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
