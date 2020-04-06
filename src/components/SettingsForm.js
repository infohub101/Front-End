import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, editUserData } from '../actions';
import { Col, Row, Form, Input, Button, Label } from 'reactstrap';

export const SettingsForm = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const initialState = {
        username: user.username,
        password: user.password,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email
    };

    const [profile, setProfile] = useState(initialState);
    const userID = window.localStorage.getItem('id');

    const handleChanges = e => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editUserData(userID, profile))
        dispatch(getUserData(userID));
        props.history.push('/settings');
    }

    const returnBack = e => {
        e.preventDefault();
        props.history.push('/setting');
    }

    return (
        <Row>
            <Col></Col>
            <Col>
            <Form onSubmit={handleSubmit}>
                <Label>Username</Label>
                <Input 
                    name='username' 
                    type='text' 
                    placeholder='User Name'  
                    value={profile.username} 
                    onChange={handleChanges}
                />
                <Label>Password</Label>
                <Input 
                    name='password' 
                    type='password' 
                    placeholder='Password'  
                    value={profile.password} 
                    onChange={handleChanges}
                />
                <Label>First Name</Label>
                <Input 
                    name='first_name' 
                    type='text' 
                    placeholder='First Name'  
                    value={profile.first_name} 
                    onChange={handleChanges}
                />
                <Label>Last Name</Label>
                <Input 
                    name='last_name' 
                    type='text' 
                    placeholder='Last Name'  
                    value={profile.last_name} 
                    onChange={handleChanges}
                />
                <Label>E-mail</Label>
                <Input 
                    name='email' 
                    type='email' 
                    placeholder='E-mail'  
                    value={profile.email} 
                    onChange={handleChanges}
                />
                <br/>
                <Button type="submit">Save Changes</Button> 
            </Form>
            <br/>
            <Button onClick={returnBack}>Cancel</Button>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default SettingsForm;