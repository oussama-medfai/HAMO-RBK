import React, { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const [RegisterUsername, setRegisterUsername] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  // e.preventDefault();
  const Register = (e) => {
    e.preventDefault();
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
    // <div>
    //   <form>
    //     <h1>Add Register</h1>
    //     <p>Please fill in this form to create an account.</p>
    //     <div class="input-container">
    //       <div>
    //         <label for="name">
    //           <b>Username</b>
    //         </label>
    //         <br></br>
    //         {/* <input
    //         class="input-field"
    //         placeholder="username"
    //         onChange={(e) => setRegisterUsername(e.target.value)}
    //       /> */}
    //         <input
    //           placeholder="username"
    //           type="text"
    //           placeholder="Enter Username"
    //           onChange={(e) => setRegisterUsername(e.target.value)}
    //           required></input>
    //       </div>

    //       <div>
    //         {/* <h5>Password</h5> */}

    //         {/* <input
    //           class="input-field"
    //           placeholder="password"
    //           onChange={(e) => setRegisterPassword(e.target.value)}
    //         /> */}
    //         <label for="psw">
    //           <b>Password</b>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           name="psw"
    //           id="psw"
    //           required
    //           onChange={(e) => setRegisterPassword(e.target.value)}></input>
    //         <button type="submit" class="registerbtn" onClick={Register}>
    //           Register
    //         </button>
    //       </div>
    //       {/* <button class="btn" onClick={Register}> */}
    //     </div>
    //   </form>
    // </div>
    <div>
      <form>
        <div className="container">
          <div className="center">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

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
              onChange={(e) => setRegisterUsername(e.target.value)}></input>
            <br></br>

            <label for="psw">
              <b>Password</b>
              <br></br>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
              onChange={(e) => setRegisterPassword(e.target.value)}></input>

            <button type="submit" className="registerbtn" onClick={Register}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Register;
