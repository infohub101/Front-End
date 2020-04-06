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

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])

    const userPosts = useSelector(state => state.userPosts);

    console.log("userposts", userPosts);

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
                    {userPosts.map(userPosts => {
                        console.log("userpost map", userPosts)
                        return <DashboardCard 
                        key={userPosts.id} 
                        id={userPosts.id}
                        title={userPosts.title} 
                        img={userPosts.img} 
                        url={userPosts.url}
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