import React from "react";
import NavBar from "./NavBar";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("NavBar contains six (6) navigation links", () => {
  const navbarTree = mount(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const numNavLinks = navbarTree.find("a").length;

  expect(numNavLinks).toEqual(6);
});
