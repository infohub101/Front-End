import React from 'react';
import { useDispatch } from 'react-redux';
import { addPostData } from '../actions';
import { Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';

const APICard = props => {
    console.log("props", props);

    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    const handleSubmit = () => {
        dispatch(addPostData({
            user_id: userID,
            title: props.title,
            img: props.img,
            url: props.url
        }));
    }

    return (
        <Card>
            <CardBody>
            <CardTitle>{props.category}</CardTitle>
            <CardTitle>{props.title}</CardTitle>
            <CardTitle>{props.description}</CardTitle>
            <CardSubtitle className="img">{props.img}</CardSubtitle>
            <br/>
            <CardSubtitle className="url">{props.url}</CardSubtitle>
            <br/>
            <Button onClick = {handleSubmit}>Add API</Button>
            </CardBody>
        </Card>
    );
};

export default APICard;