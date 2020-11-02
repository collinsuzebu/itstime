import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/courses/";

const getCourses = () => {
  return axios.get(API_URL);
};

const saveCourse = (course) => {
  return axios.get(API_URL + (course.id || ""), course).then((response) => {
    if (response.data) {
      console.log(response.data);
    }
    return response.data;
  });
};

const deleteCourse = (courseID) => {
  return axios.delete(API_URL + courseID).then((response) => {
    return response.data;
  });
};

// axios({
//     method: 'post',
//     url: '/login',
//     data: {
//       firstName: 'shedrack',
//       lastName: 'akintayo'
//     }
//   });
export default {
  getCourses,
  saveCourse,
  deleteCourse,
};
