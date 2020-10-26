import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

import NavBar from "../common/nav/NavBar";
import Footer from "../common/footer/Footer";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import * as subjectActions from "../../redux/actions/subjectActions";
import CourseList from "./CourseList";
import Spinner from "../common/Spinner";
import MSnackbar from "../common/MSnackbar";

class Courses extends Component {
  state = {
    redirectToAddCoursePage: false,
    snackbar: false,
  };
  componentDidMount() {
    const { courses, subjects, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.log("Failed to load courses " + String(error));
      });
    }

    if (subjects.length === 0) {
      actions.loadSubjects().catch((error) => {
        console.log("Failed to load subjects " + String(error));
      });
    }
  }

  handleDeleteCourse = async (course) => {
    try {
      this.setState({ snackbar: true });
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      console.log(error);
    }
  };

  closeSnackbar = () => {
    this.setState({ snackbar: false });
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <NavBar />
        <h1 style={{ textAlign: "right" }} className="container page__title">
          Available Courses
        </h1>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="container">
              <button
                className="custombutton"
                onClick={() => this.setState({ redirectToAddCoursePage: true })}
              >
                {" "}
                ADD A COURSE
              </button>

              <CourseList
                onDeleteClick={this.handleDeleteCourse}
                courses={this.props.courses}
              />
            </div>
            <MSnackbar
              open={this.state.snackbar}
              close={this.closeSnackbar}
              message={"Deleted Successfully"}
            />
          </>
        )}
        <Footer />
      </>
    );
  }
}

Courses.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  // console.log("redux state", state.courses[0].subjectId);
  // console.log(state.subjects.find((a) => a.id === 1));
  return {
    courses:
      state.subjects.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,

              subjectName: state.subjects.find((a) => a.id === course.subjectId)
                .title,
            };
          }),
    subjects: state.subjects,
    loading: state.apiCallsInProgress > 0,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      loadSubjects: bindActionCreators(subjectActions.loadSubjects, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
