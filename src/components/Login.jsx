import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "axios";
import message from "./message";
import "./Register-Login.css";


const Login = ( {api, url, setUser} ) => {

  const [authUsername, setAuthUsername] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await http.get(`${api}user`, {
        headers: {
        'Authorization': JSON.stringify({username: authUsername , password: authPassword })
        }
      });

      localStorage.setItem("sessionId", res.data);
      navigate(`${url}/collection`);
      setUser(authUsername)
      message(`Logged in as ${authUsername}`)

    } catch (error) {
      message("Wrong username or password");
    }
  };

  return (
    <div className="card">
      <form>
          <h1>Login</h1>
          <div className="username-box">
            <label>Username</label>
            <input
              type="text"
              value={authUsername}
              onChange={(e) => setAuthUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="username-box">
            <label>Password</label>
            <input
              type="password"
              value={authPassword}
              onChange={(e) => setAuthPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="login"
            onClick={(e) => login()}
          >Log in</button>
          <Link to={`${url}/register`}><button>Register</button></Link>
      </form>
    </div>
  )
}

export default Login