import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialCredentials = {
    username: "",
    password: ""
};

const Login = props => {
    const [credentials, setCredentials] = useState(initialCredentials);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value 
        });
    };

    const login = e => {
        e.preventDefault();
        axios
            .post(
                "https://infohub101.herokuapp.com/api/auth/login", credentials
            )
            .then(res => {
                console.log("login response", res);
                window.localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log("login error", err));
        setCredentials(initialCredentials);
    };

    return (
        <form>
            <div>
                <label>Username</label>
                <input
                    required
                    id="username"
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={handleChange}
                    autoComplete="off"
                /> 
            </div>
            <div>
                <label>Password</label>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>

            <button type="submit" onClick={login}>
                Submit
            </button>
            <p><Link to ="/registration">Sign Up</Link></p>
        </form>
    );
};

export default Login;