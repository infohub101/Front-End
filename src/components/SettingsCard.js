import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../actions';
import { Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';

export const SettingsCard = props => {
    const userID = window.localStorage.getItem('id');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteUser(userID));
        history.push('/login')
    }

    return (
        <Card>
            <CardBody>
            <CardTitle>Personal Information</CardTitle>
            <CardSubtitle>User Name: {props.user.username}</CardSubtitle>
            <CardSubtitle>First Name: {props.user.first_name}</CardSubtitle>
            <CardSubtitle>Last Name: {props.user.last_name}</CardSubtitle>
            <CardSubtitle>E-mail: {props.user.email}</CardSubtitle>
            <br/>
            <NavLink to={'/update-settings'}><Button>Edit</Button></NavLink>
            <br/><br/>
            <NavLink to='/login'><Button onClick={handleDelete}>Delete</Button></NavLink>
            </CardBody>
        </Card>
    )
}