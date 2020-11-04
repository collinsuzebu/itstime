import axios from "axios";
export const API_URL = process.env.REACT_APP_API_URL + "/authors/";

const getAuthors = () => {
  return axios.get(API_URL).then((response) => {
    return response.data;
  });
};

export default { getAuthors };
