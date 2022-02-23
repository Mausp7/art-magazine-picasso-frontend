import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import message from "./message";

const Register = ({api}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      await axios.post(
        `${api}user`,
        {
          username: username,
          password: password,
        }
      );
      setUsername("");
      setPassword("");
      navigate("/login");
      message("Success");
    } catch (error) {
      if (error.response.status === 400) {
        message("Missing credentials");
      } else if (error.response.status === 409)
      message("Username already exists");
    }
  };

  return (
    <div className='card'>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="reg" onClick={(e) => signUp()}>Register</button>
      <Link to="/login"><button>I already have an account</button></Link>
    </div>
  )
}

export default Register