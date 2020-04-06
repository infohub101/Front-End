import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { getUserData } from '../actions';
import { SettingsCard } from './SettingsCard';
import { Col, Row } from "reactstrap";

export const Settings = props => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    useEffect(() => {
        dispatch(getUserData(userID));
    }, [userID])

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
                <br/>
                <div className='settings-cards-div'>
                    {!props.isLoading && (
                        <SettingsCard user={props.user}/>
                    )}
                </div>
            </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default connect(state => state, {getUserData})(Settings);