import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPost, getLotteryAPI, getNasaAPI, getMovieAPI ,getNewsAPI, getUSCalenderAPI } from "../actions";
import { LotteryCard } from "./RemoteAPIs/LotteryCard";
import { MovieCard } from "./RemoteAPIs/MovieCard";
import { NasaCard } from "./RemoteAPIs/NasaCard";
import { NewsCard } from "./RemoteAPIs/NewsCard";
import { USCalenderCard } from "./RemoteAPIs/USCalenderCard";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');
    const userPosts = useSelector(state => state.userPosts);
    const isLoading = useSelector(state => state.isLoading)

    // APIs
    const lotteryAPI = useSelector(state => state.lotteryAPI);
    const movieAPI = useSelector(state => state.movieAPI);
    const nasaAPI = useSelector(state => state.nasaAPI);
    const newsAPI = useSelector(state => state.newsAPI);
    const USCalenderAPI = useSelector(state => state.USCalenderAPI);

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])

    // Lottery GET
    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "G1").map(userPosts => (
            dispatch(getLotteryAPI(userPosts.url))
        ))
    },[userPosts])

    // MOVIE GET
    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "E1").map(userPosts => (
            dispatch(getMovieAPI(userPosts.url))
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

    // USCalenderAPI GET
    useEffect(() => {
        userPosts.filter(posts => posts.api_id === "Cal1").map(userPosts => (
            dispatch(getUSCalenderAPI(userPosts.url))     
        ))
    },[userPosts])

    return (
        <Row className="main-container">
            <Col/>
            <Col className='main-container-body'>
                <Row className='main-containter-menu-post'>
                    {/* Lottery API  */}
                    {userPosts.filter(posts => posts.api_id === "G1").map(userPosts => {
                        return <LotteryCard key = {userPosts.id} id = {userPosts.id} lotteryAPI = {lotteryAPI}/>
                    })}

                    {/* MOVIE API  */}
                    {userPosts.filter(posts => posts.api_id === "E1").map(userPosts => {
                        return <MovieCard key = {userPosts.id} id = {userPosts.id} movieAPI = {movieAPI}/>
                    })}

                    {/* NASA API  */}
                    {userPosts.filter(posts => posts.api_id === "Ed1").map(userPosts => {

                    return <NasaCard key = {userPosts.id} id = {userPosts.id} nasaAPI = {nasaAPI}/>
                    })}

                    {/* News API  */}
                    {userPosts.filter(posts => posts.api_id === "N1").map(userPosts => {
                        return <NewsCard key = {userPosts.id} id = {userPosts.id} newsAPI = {newsAPI}/>
                    })}

                    {/* USCalender API  */}
                    {userPosts.filter(posts => posts.api_id === "Cal1").map(userPosts => {
                        return <USCalenderCard key = {userPosts.id} id = {userPosts.id} USCalenderAPI = {USCalenderAPI}/>
                    })}
                </Row> 
            </Col>
            <Col/>
        </Row>
    );
};

export default Dashboard;