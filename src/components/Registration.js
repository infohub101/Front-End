import React from "react";
import useForm from "../hooks/useForm";
import validate from "../utils/validateRegister";
import axios from "axios";

const Registration = props => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submit,
        validate
    );

    function submit() {
        axios
            .post(
                "https://infohub101.herokuapp.com/api/auth/register",
                {
                    username: values.username,
                    password: values.password,
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email
                }
            )

            .then(res => {
                console.log("registration post response", res);
                props.history.push("/");
            })
            .catch(error => {
                console.log("registration post error", error);
            });
        }

        return (
            <form onSubmit = {handleSubmit} noValidate>
                <div>
                    <label>Username</label>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                    <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            values={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <label>First Name</label>
                        <input
                            name="first_name"
                            type="text"
                            placeholder="first name"
                            values={values.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p className="error">{errors.first_name}</p>}
                </div>
                <div>
                    <label>Last Name</label>
                        <input
                            name="last_name"
                            type="text"
                            placeholder="last name"
                            values={values.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p className="error">{errors.last_name}</p>}
                </div>
                <div>
                    <label>Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            values={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        );
};

export default Registration;