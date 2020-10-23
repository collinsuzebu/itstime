import React, { Component } from "react";
import NavBar from "../common/nav/NavBar";
import Footer from "../common/footer/Footer";
import * as courseActions from "../../redux/actions/courseActions";

import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Courses extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    let course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
        </form>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
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
    courses: state.courses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(courseActions, dispatch) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Courses);
