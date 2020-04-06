import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserPost } from "../actions";
import { DashboardCard } from "./DashboardCard";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    const isLoading = useSelector(state => state.isLoading)
    const userPosts = useSelector(state => state.userPosts);

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])

   

    console.log("userposts11", userPosts);

    return (
        <Row className="main-container">
            <Col></Col>
            <Col>
            <div className='main-container-body'>
                <div className='main-container-menu'>
                    <p>Menu</p>
                    <div className='main-container-menu-dashboard'>
                        <NavLink to='/dashboard' className='main-container-menu-buttons'>Dashboard</NavLink>
                    </div>
                    <div className='main-container-menu-button-dashboard'>
                        <NavLink to='/profile' className='main-container-menu-buttons'>Profile</NavLink>
                    </div>
                    <div className='main-container-menu-button-dashboard'>
                        <NavLink to='/settings' className='main-container-menu-buttons'>Settings</NavLink>
                    </div>
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