import React, { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const [RegisterUsername, setRegisterUsername] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const Register = () => {
    axios({
      method: "POST",
      data: {
        username: RegisterUsername,
        password: RegisterPassword
      },
      withCredentials: true,
      url: "http://localhost:8000/api/auth/register"
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Add Register</h1>

      <div className="input-container">
        <div>
          <h5>Username</h5>
          <br></br>
          <input
            class="input-field"
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>

        <div>
          <h5>Password</h5>
          <br></br>
          <input
            class="input-field"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button class="btn" onClick={Register}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default Register;
