import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions';
import { Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';

export const DashboardCard = props => {
    console.log("DashboardCard props", props)

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <img src={props.img} className='postImg' />
                <CardSubtitle>{props.url}</CardSubtitle>
                <br />
                <Button onClick={handleDelete}>Delete API</Button>
            </CardBody>
        </Card>
    );
};