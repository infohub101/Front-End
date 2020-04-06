import axios from "axios";

export const axiosWithAuth = () => {

  return axios.create({
    headers: {
      Authorization: window.localStorage.getItem("token")
    },
    baseURL: "https://infohub101.herokuapp.com"
  });
};