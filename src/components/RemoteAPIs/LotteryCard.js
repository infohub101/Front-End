import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap';

export const LotteryCard = props => {
    console.log("LotteryCard props", props)

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    return (
        <Card>
            <CardBody>
                <CardSubtitle>{props.lotteryAPI.prizes.values[0].value}</CardSubtitle>
                <Button onClick={handleDelete}>Delete API</Button>
            </CardBody>
        </Card>
    );
};