import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPost, getLotteryAPI } from "../actions";
import { LotteryCard } from "./RemoteAPIs/LotteryCard";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');
    const userPosts = useSelector(state => state.userPosts);
    const lotteryAPI = useSelector(state => state.lotteryAPI)
    const isLoading = useSelector(state => state.isLoading)

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])

    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "E1").map(userPosts => {
            dispatch(getLotteryAPI(userPosts.url));     
        })
        },[userPosts])

    return (
        <Row className="main-container">
            <Col/>
            <Col className='main-container-body'>
                <Row className='main-containter-menu-post'>
                    {/* Lottery API  */}
                    {userPosts.filter(posts => posts.api_id === "E1").map(userPosts => {
                        console.log("FSDFSDFSD", userPosts)
                    return <LotteryCard lotteryAPI = {lotteryAPI} id = {userPosts.id}/>

                    })}
                </Row> 
            </Col>
            <Col/>
        </Row>
    );
};

export default Dashboard;