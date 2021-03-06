import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useGlobalContext } from "./context/GlobalContext";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Park from "./pages/Park"
import zipcodes from "zipcodes"

const dotenv = require('dotenv').config()



function App() {
  const [state, dispatch] = useGlobalContext();

  useEffect(() => {
    checkLogin();
    if (state.apiToken) loadMessage();
  }, [state.apiToken]);

  const checkLogin = () => {
    // get the user from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    // is there a user?
    if (user) {
      // put that user in the state
      console.log("cats",zipcodes.lookup("10003"))
      const {longitude, latitude} = zipcodes.lookup(user.zipcode)
      dispatch({
        type: "LOGIN",
        email: user.email,
        apiToken: user.token,
        zipcode: user.zipcode,
        longitude: longitude,
        latitude: latitude
      });
    }
  };

  const loadMessage = () => {
    axios
      .get("/api/welcome", {
        headers: {
          Authorization: `Bearer ${state.apiToken}`,
        },
      })
      .then(({ data }) => {
        const { message } = data;
        dispatch({ type: "GET_MESSAGE", message });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    // remove the user from local storage
    localStorage.removeItem("user");
    // remove the user from the state
    dispatch({ type: "LOGOUT" });
  };

  return (
      <Router>
        <Header logout={logout} />
        {state.apiToken ? (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/park/:id" component={Park} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
          </>
        )}
      </Router>
  );
}

export default App;
