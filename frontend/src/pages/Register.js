import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import './Login.css'

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit= async(e) => {
    e.preventDefault();
    try{
        const{data} = await axios.port("http://localhost:4000/register",{
            ...values,
        });
    }catch(error){
        console.log(error);
    };
  }
  return (
    <>
    <div className="container">
      <h2>Register Account</h2>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
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
          Already have an account?
          <br /><Link to="/login">Login</Link>
        </span>
      </form>
    </div>
    <footer>2023©localhost</footer>
    </>
  );
};

export default Register;
