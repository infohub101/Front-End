import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addPostData } from '../actions';
import { Card, CardHeader, CardTitle, CardBody, CardImg, CardSubtitle, Button } from 'reactstrap';
import styled from 'styled-components'

const HELLO = styled.div`

`

const APICard = props => {
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
            <CardHeader  tag="h4">{props.title}</CardHeader>
            <br/>
            <img src={props.img} alt="API Logo"/>
            <br/><br/>
            <CardSubtitle><b>{props.description}</b></CardSubtitle>
            <br/>
            <Button onClick = {handleSubmit}>Add API</Button>
            </CardBody>
        </Card>
    );
};

export default APICard;