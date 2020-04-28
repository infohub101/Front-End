import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, CardHeader, Button } from 'reactstrap';

export const MovieCard = props => {
    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
        <Card>
            <Button onClick={handleDelete}>Delete API</Button>
            {props.movieAPI.map(movies => {
                return (
                    <CardBody key = {movies.id}>
                    {<img src = {`https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt = "Movie Image" />}  
                    <CardTitle>Title: {movies.title}</CardTitle>
                    <CardTitle>Release Date: {movies.release_date}</CardTitle>
                    <CardTitle>Description: {movies.overview}</CardTitle>
                    </CardBody>
            )})}

        </Card>
    );
};