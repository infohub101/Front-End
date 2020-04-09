import React, { useEffect } from 'react';
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
                <div className='settings-cards-div'>
                    { 
                        <SettingsCard user={props.user}/>
                    }
                </div>
            </div>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default connect(state => state, {getUserData})(Settings);