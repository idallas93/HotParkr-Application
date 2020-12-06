import React, { useRef } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [state, dispatch] = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get the info from the form
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // do the login with the api
    const { data } = await axios.post("/auth/login", creds);
    // put the email and token in local storage
    const { email, token } = data;
    console.log(token);
    dispatch({ type: "LOGIN", email, apiToken: token });

    // put the email and token in the state
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button type="submit"> Login</button>
    </form>
  );
};

export default LoginForm;
