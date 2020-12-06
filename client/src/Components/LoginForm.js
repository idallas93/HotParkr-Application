import React from "react";

const LoginForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // get the info from the form 

        // do the login with the api 

        // put the email and token in local storage 

        // put the email and token in the state
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit"> Login</button>

        </form>
    )
}

export default LoginForm;