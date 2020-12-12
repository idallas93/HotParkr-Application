import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../context/GlobalContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./style.css";

const LoginForm = () => {
  
  const emailRef = useRef();
  const passwordRef = useRef();
  

  const [_, dispatch] = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get the info from the form
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    // do the login with the api
    const { data } = await axios.post("/auth/login", creds);
    // put the email and token in the state
    const { email, token, zipcode } = data;
    const apiToken = token;

    localStorage.setItem("user", JSON.stringify({ email, token, zipcode }));
    // console.log("data", zipcode);
    dispatch({
      type: "LOGIN",
      email,
      apiToken: data.token,
      zipcode: data.zipcode,
    });
  };

  return (
    <div>
      <Form id="login-form" onSubmit={handleSubmit}>
        <input
          id="input-login"
          type="text"
          placeholder="email"
          ref={emailRef}
        />
        <input
          id="input-login"
          type="password"
          placeholder="password"
          ref={passwordRef}
        />
        <Button 
          className="button-login"
          type="submit"
          variant="outline-secondary"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
