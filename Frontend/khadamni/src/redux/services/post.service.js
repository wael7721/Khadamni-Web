import axios from "axios";

const API_URL = "http://localhost:3500/";

const createPost = (field, location, schedule) => {
  console.log("Khedmet!");
  return axios.post(
    "http://localhost:3500/api/post",{field, location, schedule})
};


const listPost = () => {
  console.log("Khedmet!");
  return axios.get(
    "http://localhost:3500/api/post",{})
};



const postService = {
  createPost,
  listPost,
};

export default postService;