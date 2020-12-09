import React from "react"
import { Link, useLocation } from "react-router-dom"
import LoginForm from "./LoginForm";

function Header({ state, logout }) {

    const location = useLocation

    return (
        <header className="App-header">
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