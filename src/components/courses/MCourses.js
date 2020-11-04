import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../common/Spinner";
import MCourseList from "./MCourseList";
import NavBar from "../common/nav/NavBar";
import { loadCourses } from "../../redux/actions/course";

const Courses = () => {
  const loading = useSelector((state) => state.apiCallsInProgress > 0);
  const courses = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses()).catch((error) => {
        console.log("Failed to load subjects " + String(error));
      });
    }
  }, [courses, dispatch]);

  console.log(courses);

  return (
    <>
      <NavBar />
      {loading ? <Spinner /> : <MCourseList courses={courses} />}
    </>
  );
};

export default Courses;
