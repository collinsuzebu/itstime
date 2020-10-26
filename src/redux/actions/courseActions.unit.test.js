import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../tests/testDataMock";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Courses Thunk", () => {
    it("should create API_CALL_STARTED and LOAD_COURSES_SUCCESS when loading courses", () => {
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" },
      });

      const expectedActions = [
        { type: types.API_CALL_STARTED },
        { type: types.LOAD_COURSES_SUCCESS, courses },
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
