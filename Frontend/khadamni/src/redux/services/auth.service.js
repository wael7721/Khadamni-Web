import axios from "axios";

const API_URL = "http://localhost:3500/";

const register = (user, pwd) => {
    return axios.post(API_URL + "register", {
      user,
      pwd,
    });
  };

  const login = (user, pwd) => {
    return axios
      .post(API_URL + "auth", {
        user,
        pwd,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const authService = {
    register,
    login,
    logout,
  };
  
  export default authService;