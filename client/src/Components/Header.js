import React from "react"
import { Link, useLocation } from "react-router-dom"
import LoginForm from "./Components/LoginForm";

function Header() {

    const location = useLocation

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul className="navlinks">
                <li className="link">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                </li>
            </ul>
            { state.apiToken ? (
                <>
                <p>{state.message}</p>
                <button onClick={logout}>
                    Logout
                </button>
                </>
            ) : <LoginForm /> }

        </header>
    )
}

export default Header