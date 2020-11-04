import axios from "axios";
export const API_URL = process.env.REACT_APP_API_URL + "/subjects/";

const getSubjects = () => {
  return axios.get(API_URL).then((response) => {
    return response.data;
  });
};

export default { getSubjects };
