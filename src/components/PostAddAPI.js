import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIData, getUserPost } from '../actions';
import APICard from './APICard';
import { Row, Col, Button } from 'reactstrap';

const PostAddAPI = props => {
    const dispatch = useDispatch();
    const userID = window.localStorage.getItem('id');

    useEffect(() => {
        dispatch(getAPIData());
        dispatch(getUserPost(userID));
    }, [props.isLoading])
    

    const apiPost = useSelector(state => state.posts);
    const userPosts = useSelector(state => state.userPosts);
    console.log("apiPost", apiPost);
    console.log("userPosts", userPosts);

    const returnBack = e => {
        e.preventDefault();
        props.history.push('/dashboard');
    }

 

    return(
        <Row>
            <Col md="4"></Col>
            <Col md="4">
            <h2>Add Post</h2>

            {/* News Category */}
            <h2>News</h2>
                {apiPost.filter(api => (api.category === 'News')).map(api => {
                return <APICard
                        key = {api.id}
                        id = {api.id}
                        apiID = {api.api_id}
                        category = {api.category}
                        title = {api.title}
                        description = {api.description}
                        img = {api.img}
                        url = {api.url}
                    />
                })}
            
            {/* Social Category */}
            <h2>Social</h2>
                {apiPost.filter(api => (api.category === 'Social')).map(api => {
                return <APICard
                        key = {api.id}
                        id = {api.id}
                        apiID = {api.api_id}
                        category = {api.category}
                        title = {api.title}
                        description = {api.description}
                        img = {api.img}
                        url = {api.url}
                    />
                })}

             {/* Entertainment Category */}
             <h2>Entertainment</h2>
                {apiPost.filter(api => (api.category === 'Entertainment') && (!userPosts.some(up => up.title === api.title))).map(api => {
                return <APICard
                        key = {api.id}
                        id = {api.id}
                        apiID = {api.api_id}
                        category = {api.category}
                        title = {api.title}
                        description = {api.description}
                        img = {api.img}
                        url = {api.url}
                    />
                })}               
            <br/>
            <Button onClick={returnBack}>Go to Dashboard</Button>
            </Col>
        </Row>
    )
}

export default PostAddAPI