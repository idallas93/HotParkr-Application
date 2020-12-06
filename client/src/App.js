import React, { useEffect, useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import LoginForm from "./Components/LoginForm"

function App() {
  const [state, dispatch] = useReducer ((state, action) => {
      switch (action.type) {
        case "GET_MESSAGE":
          return {
            ...state,
            message: action.message,
          };
        default:
          return state;
      }
    },
    { message: undefined }
  );

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = () => {
    axios.get("/api/welcome").then(({ data }) => {
      const { message } = data;
      dispatch({ type: "GET_MESSAGE", message });
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { state.apiToken ? <p>You are logged in.</p> : <p> <LoginForm/></p> }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
