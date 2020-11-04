import React from "react";
import { mount } from "enzyme";
import { CourseManagement } from "./CourseManagement";
import { subjects, courses, newCourse } from "../../tests/testDataMock";
import { BrowserRouter as Router } from "react-router-dom";

function renderCourseManagement(args) {
  const defaultProps = {
    subjects,
    courses,
    history: {},
    saveCourse: jest.fn(),
    loadCourses: jest.fn(),
    loadSubjects: jest.fn(),
    course: newCourse,
    match: {},
  };

  const props = { ...defaultProps, ...args };
  return mount(
    <Router>
      <CourseManagement {...props} />
    </Router>
  );
}

it("sets error when attempting to submit an empty title field", () => {
  const wrapper = renderCourseManagement();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Subject is required");
});
