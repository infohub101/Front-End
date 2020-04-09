import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios';

export const SET_USER_ID = 'SET_USER_ID';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_ALL_API_START = 'GET_ALL_API_START';
export const GET_ALL_API_SUCCESS = 'GET_ALL_API_SUCCESS';
export const GET_USER_POST_START = 'GET_USER_POST_START';
export const GET_USER_POST_SUCCESS = 'GET_USER_POST_SUCCESS';
export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const EDIT_USER_START = 'EDIT_USER_START';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const ADD_LOTTERY_API_START = 'ADD_LOTTERY_API_START';
export const ADD_LOTTERY_API_SUCCESS = 'ADD_LOTTERY_API_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';


export const setUserID = user_id => dispatch => {
  dispatch({ type: SET_USER_ID, payload: user_id});
};

export const getUserData = id => dispatch => {
  dispatch({ type: GET_USER_START });
  axiosWithAuth()
    .get(`/api/auth/userdatabase/${id}`)
    .then(res => {
      console.log("getUserData GET response", res);
      dispatch({ type: GET_USER_SUCCESS, payload: res.data });
    })
    .catch(err => console.log("GET user res error",err));
};

export const getAPIData = () => dispatch => {
  dispatch({ type: GET_ALL_API_START });
  axiosWithAuth()
    .get(`/api/auth/apidatabase`)
    .then(res => {
      console.log("getAPIData GET response", res);
      dispatch({ type: GET_ALL_API_SUCCESS, payload: res.data });
    })
    .catch(err => console.log("GET all API res error",err));
};

export const getUserPost = id => dispatch => {
  dispatch({ type: GET_USER_POST_START });
  axiosWithAuth()
    .get(`/api/auth/userdatabase/${id}/api`)
    .then(res => {
      console.log("getUserPost GET response", res);
      dispatch({ type: GET_USER_POST_SUCCESS, payload: res.data });
    })
    .catch(err => console.log("GET user post error", err));
};

export const addPostData = userAPI => dispatch => {
  dispatch({ type: ADD_POST_START });
  console.log("addpost userapi", userAPI);
  axiosWithAuth()
    .post(`/api/auth/userapidatabase`, userAPI)
    .then(res => {
      console.log("addPostData POST response", res);
      dispatch({ type: ADD_POST_SUCCESS});
      })
      .catch(err => console.log("POST add post error", err));
};

export const editUserData = (id, data) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axiosWithAuth()
    .put(`/api/auth/userdatabase/${id}`, data)
    .then(res => {
      console.log("editUserData PUT response", res);
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data});
    })
    .catch(err => console.log("PUT edit user error", err));
}

export const deletePost = (id, userAPI) => dispatch => {
  dispatch({ type: DELETE_POST_START });
  axiosWithAuth()
    .delete(`/api/auth/userapidatabase/${id}`, userAPI)
    .then(res => {
      console.log("deletePost DELETE response", res);
      dispatch({ type: DELETE_POST_SUCCESS });
    })
    .catch(err => console.log("DELETE delete post error", err));
}

export const deleteUser = id => dispatch => {
  dispatch({ type: DELETE_USER_START });
  axiosWithAuth()
    .delete(`/api/auth/userdatabase/${id}`)
    .then(res => {
      console.log("deleteUser DELETE response", res);
      dispatch({ type: DELETE_USER_SUCCESS, payload: res.data});
    })
    .catch(err => console.log("DELETE delete user error", err));
}

export const getLotteryAPI = url => dispatch => {
  dispatch({ type: ADD_LOTTERY_API_START });
  axios
  .get(`${url}`)
  .then(res => {
    console.log("lotteryAPI res", res)
    dispatch({ type: ADD_LOTTERY_API_SUCCESS, payload: res.data[1]});
  })
}



export const logIn = status => dispatch => {
  dispatch({ type: LOG_IN, payload: status });
  
};

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
};