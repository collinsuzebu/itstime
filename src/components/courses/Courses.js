import React, { Component } from "react";
import NavBar from "../common/nav/NavBar";
import Footer from "../common/footer/Footer";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import CourseList from "./CourseList";

import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Courses extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.log("Failed to load courses " + String(error));
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        console.log("Failed to load authors " + String(error));
      });
    }
  }
  // state = {
  //   course: {
  //     title: "",
  //   },
  // };

  // handleChange = (e) => {
  //   let course = { ...this.state.course, title: e.target.value };
  //   this.setState({ course });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.actions.createCourse(this.state.course);
  // };
  render() {
    return (
      <>
        <NavBar />
        {/* <form onSubmit={this.handleSubmit}> */}
        <h2>Courses</h2>
        {/* <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
        </form> */}
        <CourseList courses={this.props.courses} />
        <Footer />
      </>
    );
  }
}

Courses.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,

              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
