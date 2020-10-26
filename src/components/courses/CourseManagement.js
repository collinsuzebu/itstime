import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import NavBar from "../common/nav/NavBar";
import Footer from "../common/footer/Footer";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import * as subjectActions from "../../redux/actions/subjectActions";
import CourseForm from "./CourseForm";
import Spinner from "../common/Spinner";
import MSnackbar from "../common/MSnackbar";

export function CourseManagement({
  courses,
  authors,
  subjects,
  loadCourses,
  loadSubjects,
  saveCourse,
  history,
  ...props
}) {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.log("Failed to load courses " + String(error));
      });
    } else {
      setCourse({ ...props.course });
    }

    if (subjects.length === 0) {
      loadSubjects().catch((error) => {
        console.log("Failed to load subjects " + String(error));
      });
    }
  }, [props.course]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: name === "subjectId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    setSnackbar(true);
    saveCourse(course)
      .then(() => {
        history.push("/courses");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  function formIsValid() {
    const { title, subjectId, description } = course;
    const errors = {};

    if (!title) errors.title = "Title is required";
    if (!subjectId) errors.subject = "Subject is required";
    if (!description) errors.description = "Description is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function closeSnackbar() {
    setSnackbar(false);
  }

  return (
    <>
      <NavBar />
      <h2 className="page__banner-top page__title">Manage Course</h2>
      {courses.length === 0 || subjects.length === 0 ? (
        <Spinner />
      ) : (
        <CourseForm
          course={course}
          authors={authors}
          subjects={subjects}
          saving={saving}
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
        />
      )}
      <MSnackbar
        open={snackbar}
        close={closeSnackbar}
        message={course.id ? "Edited Successfully" : "Added Successfully"}
      />
      <Footer />
    </>
  );
}

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

CourseManagement.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  subjects: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  saveCourse: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadSubjects: PropTypes.func.isRequired,
};

//Selector
function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course: course,
    courses: state.courses,
    authors: state.authors,
    subjects: state.subjects,
  };
};
const mapDispatchToProps = {
  saveCourse: courseActions.saveCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  loadSubjects: subjectActions.loadSubjects,
};
export default connect(mapStateToProps, mapDispatchToProps)(CourseManagement);
