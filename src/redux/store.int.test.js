import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/course";

describe("Courses Store", () => {
  it("Should start courses as an empty array", () => {
    // arrange
    const store = createStore(rootReducer, initialState);

    // assert
    const allCourses = store.getState().courses;
    expect(createdCourses).toHaveLength(0);
  });

  it("Should handle creating courses", () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "A",
    };

    const course2 = {
      title: "B",
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    const action2 = courseActions.createCourseSuccess(course2);

    store.dispatch(action);
    store.dispatch(action2);

    // assert
    const createdCourses = store.getState().courses;
    expect(createdCourses).toHaveLength(2);

    const courseFirst = createdCourses[0];
    expect(courseFirst).toEqual(course);
  });

  it("Should handle updating courses", () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "A",
    };

    const update = {
      title: "Updated A",
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    const action2 = courseActions.updateCourseSuccess(update);

    store.dispatch(action);
    store.dispatch(action2);

    // assert
    const updatedCourse = store.getState().courses[0];
    expect(updatedCourse).toEqual(update);
  });

  it("Should handle deleting courses", () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "A",
    };

    // act
    const action = courseActions.createCourseSuccess(course);
    const action2 = courseActions.deleteCourseOptimistic(course);

    store.dispatch(action);
    store.dispatch(action2);

    // assert
    const emptyCourses = store.getState().courses;
    expect(emptyCourses).toHaveLength(0);
  });
});
