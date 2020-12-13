import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:8000/api/auth/login"
    }).then((res) => console.log(res));
  };
  // const getUser = () => {
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:8000/user"
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

  return (
    <div>
      <div class="login-box">
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      {/* <div>
        <h1>Get User</h1>
        <button onClick={getUser}> Get </button>
      </div> */}
    </div>
  );
}
export default Login;
