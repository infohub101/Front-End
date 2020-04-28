import React from "react";
import useForm from "../hooks/useForm";
import validate from "../utils/validateRegister";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
                props.history.push("/login");
            })
            .catch(error => {
                console.log("registration post error", error);
            });
    }

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Row>
                <Col md="4" sm="4" xs="4"></Col>
                <Col md="4" sm="4" xs="4">
                    <FormGroup>
                        <Label>Username</Label>
                        <Input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            values={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input
                            name="first_name"
                            type="text"
                            placeholder="first name"
                            values={values.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p className="error">{errors.first_name}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input
                            name="last_name"
                            type="text"
                            placeholder="last name"
                            values={values.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p className="error">{errors.last_name}</p>}
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="email"
                            values={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Col>
                <Col md="4" sm="4" xs="4"></Col>
            </Row>
        </Form>
    );
};

export default Registration;