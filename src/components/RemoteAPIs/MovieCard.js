import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export const MovieCard = props => {
    console.log("MOVIECARD", props)

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
        <div>
        {props.movieAPI.map(movies => {
            return (
                <Card>
                <CardBody>
                {<img src = {`https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt = "Movie Image" />}  
                <CardTitle>Title: {movies.title}</CardTitle>
                <CardTitle>Release Date: {movies.release_date}</CardTitle>
                <CardTitle>Description: {movies.overview}</CardTitle>
                </CardBody>
                </Card>
            

        )})}
        <Button onClick={handleDelete}>Delete API</Button>
        </div>
    );
};