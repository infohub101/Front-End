import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import { Col, Nav, Media, Navbar } from "reactstrap";
import NavLogo from '../img/infohub.png';

const Header = props => {
    console.log("header props", props);
    return (
        <div>
            {props.isLoading ? (
                <Navbar className="nav-container">
                    <Col></Col>
                    <Col>
                        <Nav className="header">
                            <Col>
                                <Media object src={NavLogo} alt="infohub-logo" />
                            </Col>
                            <Col className="nav-bar-links">
                                <Link to="/" onClick={props.logOut}>Log Out</Link>
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

export default connect(state => state, { logOut })(Header);