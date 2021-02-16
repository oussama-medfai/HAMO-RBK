import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:8000/api/auth/login"
    }).then((res) => props.Getsession());
  };

  return (
    // <div>
    //   <div>
    //     <h1>Login</h1>
    //     <input
    //       placeholder="username"
    //       onChange={(e) => setLoginUsername(e.target.value)}
    //     />
    //     <input
    //       placeholder="password"
    //       onChange={(e) => setLoginPassword(e.target.value)}
    //     />
    //     <button onClick={login}>Submit</button>
    //   </div>
    // </div>
    <div>
      <form>
        <div className="container">
          <div className="center">
            <h1>Login</h1>
            <p>Please fill in this form to login.</p>

            <label htmlFor="email">
              <b>Username</b>
              <br></br>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="email"
              id="email"
              required
              onChange={(e) => setLoginUsername(e.target.value)}></input>
            <br></br>

            <label htmlFor="psw">
              <b>Password</b>
              <br></br>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
              onChange={(e) => setLoginPassword(e.target.value)}></input>

            <button type="submit" className="registerbtn" onClick={login}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
