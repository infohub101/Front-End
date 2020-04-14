import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAPIData } from '../actions';
import APICard from './APICard';
import { Row, Col, Button } from 'reactstrap';

const PostAddAPI = props => {
console.log("POSTADD", props)

    const dispatch = useDispatch();
    const userPosts = useSelector(state => state.userPosts);
    const apiPost = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getAPIData());
    }, [])
  
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
                {apiPost.filter(api => (api.category === 'News') && (!userPosts.some(up => up.title === api.title))).map(api => {
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
            
            {/* Education Category */}
            <h2>Education</h2>
                {apiPost.filter(api => (api.category === 'Education') && (!userPosts.some(up => up.title === api.title))).map(api => {
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