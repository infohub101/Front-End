import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPost, getLotteryAPI, getNasaAPI, getNewsAPI } from "../actions";
import { LotteryCard } from "./RemoteAPIs/LotteryCard";
import { NasaCard } from "./RemoteAPIs/NasaCard";
import { NewsCard } from "./RemoteAPIs/NewsCard";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');
    const userPosts = useSelector(state => state.userPosts);
    const isLoading = useSelector(state => state.isLoading)

    // APIs
    const lotteryAPI = useSelector(state => state.lotteryAPI);
    const nasaAPI = useSelector(state => state.nasaAPI);
    console.log("NANA", nasaAPI)
    const newsAPI = useSelector(state => state.newsAPI);

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])

    // Lottery GET
    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "E1").map(userPosts => (
            dispatch(getLotteryAPI(userPosts.url))
        ))
    },[userPosts])

    // NASA GET
    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "Ed1").map(userPosts => (
            dispatch(getNasaAPI(userPosts.url))
        ))
    },[userPosts])

    // NewsAPI GET
    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "N1").map(userPosts => (
            dispatch(getNewsAPI(userPosts.url))     
        ))
    },[userPosts])

    return (
        <Row className="main-container">
            <Col/>
            <Col className='main-container-body'>
                <Row className='main-containter-menu-post'>
                    {/* Lottery API  */}
                    {userPosts.filter(posts => posts.api_id === "E1").map(userPosts => {
                        return <LotteryCard id = {userPosts.id} lotteryAPI = {lotteryAPI}/>
                    })}

                    {/* NASA API  */}
                    {console.log("NANA2", nasaAPI)}
                    {userPosts.filter(posts => posts.api_id === "Ed1").map(userPosts => {

                    return <NasaCard id = {userPosts.id} nasaAPI = {nasaAPI}/>
                    })}

                    {/* News API  */}
                    {userPosts.filter(posts => posts.api_id === "N1").map(userPosts => {
                        return <NewsCard id = {userPosts.id} key = {newsAPI.id} newsAPI = {newsAPI}/>
                    })}
                </Row> 
            </Col>
            <Col/>
        </Row>
    );
};

export default Dashboard;