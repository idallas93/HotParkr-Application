import React, { useEffect, useReducer } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import LoginForm from "./Components/LoginForm";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const [state, dispatch] = useGlobalContext()

  useEffect(()=>{
    checkLogin();
    loadMessage(
    );
  }, [state.apiToken])

  const checkLogin = () => {
    // get the user from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    // is there a user?
    if (user) {
      // put that user in the state
      dispatch({ 
        type: "LOGIN", 
        email: user.email, 
        apiToken: user.token
      });
    }
  }

  const loadMessage = () => {
    axios.get("/api/welcome", {
      headers: {
        Authorization: `Bearer ${state.apiToken}`
      }
    }).then(({ data }) => {
      const { message } = data;
      dispatch({ type: "GET_MESSAGE", message })
    }).catch(err => {
      console.log(err)
    }) 
  }

  const logout = () => {
    // remove the user from local storage
    localStorage.removeItem("user");
    // remove the user from the state
    dispatch({ type: "LOGOUT" })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          { state.apiToken ? (
            <>
              <p>{state.message}</p>
              <button onClick={logout}>
                Logout
              </button>
            </>
          ) : <LoginForm /> }

      </header>
    </div>
  );
}

export default App;
