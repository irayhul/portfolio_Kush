import { Button, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/user";
import "./Login.css";
import { useAlert } from "react-alert";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch]);

  return (
  <Fragment>

<div className="container flex">
  <div className="facebook-page flex">
    <div className="text">
      <h1>Kush Uttmani</h1>
      <p>Only Admin have this Autherity </p>
      <p> around you on Facebook.</p>
    </div>
    <form className="loginForm" onSubmit={submitHandler}>
      <input type="email" placeholder="Admin Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Admin Password" value={password} required onChange={(e) => setPassword(e.target.value)}/>


      <div className="link">
        <button type="submit" className="login">Login</button>
        <a href="#" className="forgot">Forgot password ?</a>
      </div>
      <hr />
      <div className="button">
        <a href="#">Create new account</a>
      </div>
    </form>
  </div>
</div>


  </Fragment>
  )
}

export default Login