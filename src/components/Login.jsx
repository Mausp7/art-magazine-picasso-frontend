import React, { useState } from "react";
import { Link } from "react-router-dom";
import http from "axios";

const Login = () => {

  const [authUsername, setAuthUsername] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const login = async () => {
    try {
      const response = await http.post(
        "http://localhost:5000/api/user/login",
        {},
        {
          //Authorization
        }
      );

      localStorage.setItem("sessionId", response.data);

    } catch (error) {
      alert("Wrong username or password");
    }
  };

  return (
    <div className="box">
          <h1>Login</h1>
          <input
            type="text"
            value={authUsername}
            onChange={(e) => setAuthUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
            placeholder="Password"
          />
          <Link to="/"><button onClick={(e) => login()}>Log in</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>
  )
}

export default Login