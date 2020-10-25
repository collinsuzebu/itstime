import courseReducer from "./courseReducer";
import * as actions from "../actions/courseActions";

it("should add course when passes CREATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [{ title: "A" }, { title: "B" }];

  const newCourse = { title: "C" };

  const action = actions.createCourseSucces(newCourse);

  // act
  const newState = courseReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update course when passes UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
  ];

  const course = { id: 2, title: "B Modified" };

  const action = actions.updateCourseSucces(course);

  // act
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find((c) => c.id == course.id);
  const notModifiedCourse = newState.find((c) => c.id == 1);

  // assert
  expect(updatedCourse.title).toEqual("B Modified");
  expect(notModifiedCourse.title).toEqual("A");
  expect(newState.length).toEqual(2);
});
