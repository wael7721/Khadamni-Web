import axios from "axios";

const API_URL = "http://localhost:3500/";

const createPost = ({field, location, schedule}) => {
  return axios.post(API_URL + "register",
    JSON.stringify({ field, location, schedule }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
  };



const postService = {
  createPost,
};

export default postService;