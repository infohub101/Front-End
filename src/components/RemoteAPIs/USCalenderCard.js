import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export const USCalenderCard = props => {

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
        <Card>
            <Button onClick={handleDelete}>Delete API</Button>
            <br/>
            {props.USCalenderAPI.map(cal => {
                return (
                    <Card key = {cal.id}>
                        <CardBody>
                            <CardTitle>Date: {cal.date.iso}</CardTitle>
                            <CardTitle>Title: {cal.name}</CardTitle>
                            <CardTitle>Description: {cal.description}</CardTitle>
                            <CardTitle>US State: {cal.locations}</CardTitle>
                        </CardBody>
                    </Card>
            )})}
        </Card>    
    );
};