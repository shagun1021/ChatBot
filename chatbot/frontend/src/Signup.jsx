import axios from "axios";
import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
    const [data,setData]=useState({
      email:"",
      password:""
    })

    const signUp=async()=>{
      await axios.post("http://localhost:9999/signup",{
        email: data.email,
        password:data.password
      }) .then(response => {
        alert("Signup Sucessfully")
        navigate("/login")
      })
      .catch(error => {
        console.error('Signin Error:', error);
      });
    }
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
            Set Email
          </label>
          <input type="mail" name="email" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="">Set Password</label>
          <input type="password" name="password" onChange={handleInputChange}/>
        </div>
        <button onClick={signUp}>Signup</button>
        <NavLink to="/login">
          {" "}
          <span>Login?</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Signup;
