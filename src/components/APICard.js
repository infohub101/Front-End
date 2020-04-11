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
            api_id: props.apiID,
            category: props.category,
            title: props.title,
            description: props.description,
            img: props.img,
            url: props.url,
            status: "added"
        }));
    }

    return (
        <Card>
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <CardTitle>{props.description}</CardTitle>
            <CardSubtitle className="img">{props.img}</CardSubtitle>
            <br/>
            <CardSubtitle className="url">{props.url}</CardSubtitle>
            <br/>
            <Button 
                onClick = {handleSubmit}
                color={props.isSubmitted === 0 ? "primary" : "secondary"}
                >Add API</Button>
            </CardBody>
        </Card>
    );
};

export default APICard;