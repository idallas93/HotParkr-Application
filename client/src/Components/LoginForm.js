import React, { useRef } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";
import Map from "./Map"

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [_, dispatch] = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get the info from the form
    const creds = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    // do the login with the api
    const { data } = await axios.post("/auth/login", creds);
    // put the email and token in the state
    const { email, token } = data;
    const apiToken = token;
    console.log(apiToken);
    dispatch({ 
      type: "LOGIN", 
      email, 
      apiToken: data.token });
    localStorage.setItem("user", JSON.stringify({ email, token }));
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="email" ref={emailRef} />
      <input type="password" placeholder="password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
  
    </div>
  )
}

export default LoginForm;