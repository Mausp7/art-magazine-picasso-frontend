import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import http from "axios";

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const response = await http.post(
        "http://localhost:5000/api/user/signup",
        {
          username: username,
          password: password,
        }
      );
      setUsername("");
      setPassword("");
      alert("Success");
    } catch (error) {
      if (error.response.status === 400) {
        alert("Missing credentials");
      } else if (error.response.status === 409)
        alert("Username already exists");
    }
  };

  return (
    <div className='card'>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="reg" onClick={(e) => signUp()}>Register</button>
      <Link to="/login"><button>I already have an account</button></Link>
    </div>
  )
}

export default Register