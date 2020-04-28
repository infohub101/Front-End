import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions';
import { Card, CardTitle, CardBody, Button } from 'reactstrap';

export const LotteryCard = props => {

    const dispatch = useDispatch();
    
    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePost(props.id))
    }

    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        <Card>
            <Button onClick={handleDelete}>Delete API</Button>
            <CardBody>
                <img src= "https://s3.amazonaws.com/cdn.powerball.com/drupal/files/powerball-power-play-68px.png" alt = "Lottery Logo" />
                <CardTitle>Current Jackpot Value: {formatter.format(props.lotteryAPI.prizes.values[0].value)}</CardTitle>
                {/* <CardTitle>Winning Numbers: {props.lotteryAPI.results.values.map(value => value.value).join(", ")}</CardTitle> */}
                <CardTitle>Winning Numbers: {props.lotteryAPI.results.values[0].value}, {" "}
                                            {props.lotteryAPI.results.values[1].value}, {" "}
                                            {props.lotteryAPI.results.values[2].value}, {" "}
                                            {props.lotteryAPI.results.values[3].value}, {" "}
                                            {props.lotteryAPI.results.values[4].value}, {" "}
                                            {props.lotteryAPI.results.values[5].value}, {" "}
                                            {props.lotteryAPI.results.values[6].value}
                                            
                </CardTitle>
                <CardTitle>Result Announce At: {props.lotteryAPI.resultsAnnouncedAt}</CardTitle>
            </CardBody>
        </Card>
    );
};