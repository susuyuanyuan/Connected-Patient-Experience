import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "./Auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const auth = useAuth();

  let login = () => {
    auth.signin(
      username,
      password,
      () => {
        history.push("/home");
      },
      () => {
        window.alert("Invalid user name and password");
      }
    );
  };

  useEffect(() => {
    if (auth.user) {
      history.push("/home");
    }
  }, [auth, history]);

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Sunshine Clinics</h1>
      </header>
      <div className="main">
        <div>
          <label>
            username:
            <input
              type="text"
              placeholder="Letters only"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            password:
            <input
              type="text"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
