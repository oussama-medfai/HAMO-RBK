import React, { useState } from "react";
import axios from "axios";

function User() {
  const [data, setData] = useState(null);
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:8000/api/auth/user"
    }).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}
export default User;
