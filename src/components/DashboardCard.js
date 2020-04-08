import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../actions';
import { axios } from 'axios';
import { Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';

export const DashboardCard = props => {
    console.log("DashboardCard props", props)

    const dispatch = useDispatch();

    // const [info, setInfo] = useState([]);
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

   
            // axios
            //     .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=17bde5c1903e4a31a9d1560bf1256a95')
            //     .then(res => {
            //         setInfo(res.data.results);
            //         console.log("setInfo",setInfo);
            //     })
            //     .catch(err => {
            //         console.log("Error with axios call", err);
            //     });
    

    return (
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <img src={props.img} className='postImg' />
                <CardSubtitle>{props.url}</CardSubtitle>
                <br />
                <Button onClick={handleDelete}>Delete API</Button>
            </CardBody>
        </Card>
    );
};