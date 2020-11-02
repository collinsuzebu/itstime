import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/auth/";

const register = (email, password, confirm_password, first_name, last_name) => {
  return axios.post(API_URL + "signup/", {
    email,
    password,
    confirm_password,
    first_name,
    last_name,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
