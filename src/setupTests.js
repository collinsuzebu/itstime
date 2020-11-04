import "mutationobserver-shim";
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import "../src/api/testServer";

global.MutationObserver = window.MutationObserver;
configure({ adapter: new Adapter() });

// import "@testing-library/jest-dom";
// import fetchMock from "jest-fetch-mock";
// fetchMock.enableMocks();
