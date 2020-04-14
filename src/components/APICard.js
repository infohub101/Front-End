import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addPostData } from '../actions';
import { Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';

const APICard = props => {
    console.log("props", props);
    const history = useHistory();
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
        history.push(`/dashboard/`);
    }

    return (
        <Card>
            <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <img className="img" src={props.img} alt="API Logo"/>
            <CardTitle>{props.description}</CardTitle>
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