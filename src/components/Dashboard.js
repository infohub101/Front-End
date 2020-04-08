import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPost } from "../actions";
import { DashboardCard } from "./DashboardCard";
import axios from 'axios';
import { Col, Row } from "reactstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    const isLoading = useSelector(state => state.isLoading)
    const userPosts = useSelector(state => state.userPosts);
    
    const [info, setInfo] = useState({});

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])

    console.log("This is Userposts", userPosts);

    console.log("id", userPosts[0])

    // return Promise.all(userPosts.filter(api => api.api_id === 2).map)(api => {
    //     useEffect(() => {
    //     axios .get(`https://api.nasa.gov/planetary/apod?api_key=edUvnOvPv51tQd9Wq4lgudnDa8tbK5AlvzBDTBMP&hd=true`)
    //     .then(res => {
    //                setInfo(res.data);
    //                 console.log("setInfo",res);
    //                         })
    //          .catch(err => {
    //                 console.log("Error with axios call", err);
    //             });
    //         }, []);
    //     })
    
            console.log("info", info);
            // return<DashboardCard 
            //     title={info.data.title}
            //     url= {info.data.url}
            //     />

    

    return (
        <Row className="main-container">
            <Col></Col>
            <Col>
            <div className='main-container-body'>
                <div className='main-container-menu'>
                </div>
                <br/>
                <Row className='main-containter-menu-post'>
                    <Col></Col>
                    <Col>
                    {userPosts.map(posts => {
                        return <DashboardCard 
                        key={posts.id} 
                        id={posts.id}
                        title={posts.title} 
                        img={posts.img} 
                        url={posts.url}
                        />
                    })}
                    </Col>
                </Row> 
            </div>
            </Col>
            <Col></Col>
        </Row>
    );
};

export default Dashboard;