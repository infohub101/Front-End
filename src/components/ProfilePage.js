import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getUserPost } from '../actions';
import { Row, Col, Button } from 'reactstrap';

const ProfilePage = props => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    useEffect(() => {
        dispatch(getUserPost(userID));
        console.log("This is user", userID)
    }, [props.isLoading])

    return (
        <Row className='main-container'>
            <Col></Col>
            <Col>
                <div className='main-container-body'>
                    <div className='main-container-menu'>
                        <p className='main-container-menu-tab'>Menu</p>
                        <div className='main-container-menu-dashboard'>
                            <NavLink to='/dashboard' className='main-container-menu-buttons'>Dashboard</NavLink>
                        </div>
                        <div className='main-container-menu-button-dashboard'>
                            <NavLink to='/profile' className='main-container-menu-buttons'>Profile</NavLink>
                        </div>
                        <div className='main-container-menu-button-dashboard'>
                            <NavLink to='/settings' className='main-container-menu-buttons'>Settings</NavLink>
                        </div>
                    </div>
                    <br />
                    <Row className='main-container-post'>
                        <Col>
                            <h2>What's on your mind? </h2>
                            <NavLink to='/add-post'><Button className='post-add-btns'>Add New Post</Button></NavLink>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default connect(state => state, { getUserPost })(ProfilePage);