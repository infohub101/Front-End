import { axiosWithAuth } from "../utils/axiosWithAuth";

export const getUser = id => dispatch => {
  axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(res => {
      console.log("User Response", res);
      dispatch({ type: "GET_USER", payload: res.data });
    })
    .catch(err => console.log("Get User Error", err));
};