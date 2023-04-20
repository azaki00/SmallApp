import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import './Login.css'

const Login = (props) => { 
  const navigate = useNavigate();
  const users = [
    {
      email: "123@123.123",
      password: "123"
    },
    {
      email: "12345@123.123",
      password: "123"
    },
    {
      email: "12345@123.123",
      password: "123"
    }
  ];
  const [authenticated, setAuthenticated] = useState(false)
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    users.forEach(user => {
      if (user.email === values.email && user.password === values.password) {
        setAuthenticated(true, accessProvider());

      }
    });

  }
  const accessProvider = () => {
    if (authenticated) {
      alert("Log-in Success!");
      alert("Navigating to controller...")
      navigate('/Controller');
    }
    else {
      alert("Error occured");
    }
  }
  return (
    <>
    <div className="container">
      <h2>Login Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            name="email"
            placeholder="Email"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
            name="password"
            placeholder="password"
          ></input>
        </div>
        <button type="submit">Submit</button>
        <span>
          Dont have an account?<br /><Link to="/register">Register</Link>
        </span>
      </form>

    </div>
    <footer>2023©localhost</footer>
    </>
  );
};

export default Login;
