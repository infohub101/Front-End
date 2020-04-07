import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Nav, Media, Navbar } from "reactstrap";
import { logIn, logOut } from '../actions';
import NavLogo from '../img/infohub.png';

const Header = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    console.log("islogged?", isLoggedIn)

    const loggingOut = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('id');
        dispatch(logOut());
    }

    return (
        <div>
            {isLoggedIn ? (
                <Navbar className="nav-container">
                    <Col></Col>
                    <Col>
                        <Nav className="header">
                            <Col>
                                <Media object src={NavLogo} alt="infohub-logo" />
                            </Col>
                            <Col className="nav-bar-links">
                                <Link to="/dashboard">Dashboard</Link>
                                <Link to="/add-post">Add Post</Link>
                                <Link to="/settings">Settings</Link>
                                <Link to="/login" onClick={loggingOut}>Log Out</Link>
                            </Col>
                        </Nav>
                    </Col>
                    <Col></Col>
                </Navbar>
            ) : (
                    <Navbar className="nav-container">
                        <Col></Col>
                        <Col>
                            <Nav className="header">
                                <Col>
                                    <Media object src={NavLogo} alt="potluck-logo" />
                                </Col>
                                <Col className="nav-bar-links">
                                    <Link className="navlink" to="/registration">Sign Up</Link>
                                    <Link className="navlink" to="/login">Login</Link>
                                </Col>
                            </Nav>
                        </Col>
                        <Col></Col>
                    </Navbar>
                )}
        </div>
    );
};

export default Header;