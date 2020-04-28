import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, CardText, CardHeader, Button } from 'reactstrap';

export const NewsCard = props => {

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
<<<<<<< HEAD
            <div>
                {props.newsAPI.map(news => {
                    return (
                        <Card>
                            <CardHeader>{news.title}</CardHeader>
                        <CardBody>
                            <CardText>{news.description}</CardText>
=======
        <Card>
            <Button onClick={handleDelete}>Delete API</Button>
            {props.newsAPI.map(news => {
                return (
                    <Card key = {news.id}>
                        <CardBody>
                            <CardTitle> <b>{news.title}</b> </CardTitle>
                            <CardTitle> <a href={news.url} style={{color: "navy"}} target="_blank">{news.description}</a> </CardTitle>
>>>>>>> 786d0e7b992586ac073e6b93cd2c1433d90180e9
                        </CardBody>
                    </Card>
            )})}
        </Card>
    );
};