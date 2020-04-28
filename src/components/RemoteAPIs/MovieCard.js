import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, CardHeader, Button } from 'reactstrap';

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
                    <CardHeader>{movies.title}</CardHeader>
                <CardBody>
                {<img src = {`https://image.tmdb.org/t/p/w300${movies.poster_path}`} alt = "Movie Image" />}  
                <CardTitle>Release Date: {movies.release_date}</CardTitle>
                <CardTitle>Description: {movies.overview}</CardTitle>
                </CardBody>
                </Card>
            

        )})}
        <Button onClick={handleDelete}>Delete API</Button>
        </div>
    );
};