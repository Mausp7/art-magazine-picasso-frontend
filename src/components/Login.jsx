import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "axios";
import message from "./message";


const Login = ( {api} ) => {

  const [authUsername, setAuthUsername] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await http.get(`${api}user`, {
        headers: {
        'Authorization': JSON.stringify({username: authUsername , password: authPassword })
        }
      });

      localStorage.setItem("sessionId", res.data);
      navigate("/");
      message("Logging in succesfull.")

    } catch (error) {
      message("Wrong username or password");
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
          <button onClick={(e) => login()}>Log in</button>
          <Link to="/register"><button>Register</button></Link>
        </div>
  )
}

export default Login