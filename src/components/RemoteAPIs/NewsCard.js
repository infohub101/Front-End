import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export const NewsCard = props => {
    console.log("NewsCard props", props)

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
            <div>
                {props.newsAPI.map(news => {
                    return (
                        <Card>
                        <CardBody>
                            <CardTitle>Title: {news.title}</CardTitle>
                            <CardTitle>Description: {news.description}</CardTitle>
                        </CardBody>
                        </Card>
                    

                )})}
                <Button onClick={handleDelete}>Delete API</Button>
                </div>
    );
};