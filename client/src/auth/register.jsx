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
      <div>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={Register}>Submit</button>
      </div>
    </div>
  );
}
export default Register;
