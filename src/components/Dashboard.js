import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserPost } from "../actions";
import { DashboardCard } from "./DashboardCard";
import { Col, Row } from "reactstrap";
import axios from 'axios'

const Dashboard = () => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    const isLoading = useSelector(state => state.isLoading)
    const userPosts = useSelector(state => state.userPosts);

    useEffect(() => {
        dispatch(getUserPost(userID));
    },[isLoading])


    const [lottery, setLottery] = useState()

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

                    {/* API_ID 0 */}
                    {userPosts.filter(api => api.api_id === "E1").map(api => {
                        console.log("E1 API",api)
                        axios.get(`${api.url}`)
                        .then(res => {
                            console.log("RESSSS", res.data.articles[0].title)
                            // setLottery(res.data.articles[0].title)
                        })
                        .catch(err => console.log(err))
                        return (
                            <div></div>
                            // <DashboardCard title = {article} id = {userPosts[0].id} />
                        )
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