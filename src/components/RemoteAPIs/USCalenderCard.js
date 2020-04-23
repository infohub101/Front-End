import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export const USCalenderCard = props => {
    console.log("USCalenderCard props", props)

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
            <div>
                {props.USCalenderAPI.map(cal => {
                    return (
                        <Card>
                        <CardBody>
                            <CardTitle>Date: {cal.date.iso}</CardTitle>
                            <CardTitle>Title: {cal.name}</CardTitle>
                            <CardTitle>Description: {cal.description}</CardTitle>
                            <CardTitle>US State: {cal.locations}</CardTitle>
                        </CardBody>
                        </Card>
                    

                )})}
                <Button onClick={handleDelete}>Delete API</Button>
                </div>
    );
};