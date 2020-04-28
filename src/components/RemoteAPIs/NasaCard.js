import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export const NasaCard = props => {

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
        <Card>
            <Button onClick={handleDelete}>Delete API</Button>
            <CardBody>
                <CardTitle>{props.nasaAPI.date}</CardTitle>
                <CardTitle>{props.nasaAPI.title}</CardTitle>
                {<img src = {props.nasaAPI.url} alt = "NASA Image" />}
                <CardTitle>{props.nasaAPI.explanation}</CardTitle>
            </CardBody>
        </Card>
    );
};