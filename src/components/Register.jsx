import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import message from "./message";

const Register = ({api, url}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpass, setReenterpass] = useState("")
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
      navigate(`${url}/login`);
      message("Success");
    } catch (error) {
      if (error.response.status === 400) {
        message("Missing credentials");
      } else if (error.response.status === 409)
      message("Username already exists");
    }
  };

  const getBottomBorderColor = (pw, pw2) => {
    if (pw.length < 8 && pw.length > 0) {
        return '#ff0000';
    }
    else if (pw !== pw2 && pw.length !== 0 && pw2.length !== 0) {
      return '#ff0000';
    }
    else if (pw.length !== 0 && pw2.length !== 0 && pw === pw2) {
        return '#21b12d';
    }
    
    return '#458db6';
}

  return (
    <div className='card'>
      <form>
        <h1>Register</h1>
        <div className="username-box">
          <div className="alert-label">
            <label>Username</label>
            {username.length < 3 && username.length > 0 ? <label className="alert-label">at least 3 characters</label> : null}
          </div>
          <input
            type="text"
            style={{ borderBottomColor: username.length >= 3 && "#21b12d" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter a username of your choice (min 3 characters)"
            />
        </div>
        <div className="password-box">
          <div className="alert-label">
            <label>Password</label>
            {password.length < 8 && password.length > 0 ? <label className="alert-label">at least 8 characters</label> : null}
          </div>
          <input
            type="password"
            style={{borderBottomColor: getBottomBorderColor(password, reenterpass)}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
          <div className="alert-label">
            <label>Re-enter password</label>
            {password.length >= 8 && password !== reenterpass ? <label className="alert-label">Make sure to re-enter the same password</label> : null}
          </div>
          <input
            type="password"
            value={reenterpass}
            style={{borderBottomColor: getBottomBorderColor(reenterpass, password)}}
            onChange={(e) => setReenterpass(e.target.value)}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
        </div>
        <button 
          className="reg"
          onClick={(e) => signUp()}
          disabled={username.length < 3 || password.length === 0 || password !== reenterpass || password.length < 8}
        >Register</button>
        <Link to="/login"><button>I already have an account</button></Link>
      </form>
    </div>
  )
}

export default Register