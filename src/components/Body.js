import React from "react";
import underconstruction from "../images/under-construction.jpg";

function Body() {
  return (
    <img
      style={{
        width: "100%",
        zIndex: 0,
      }}
      src={underconstruction}
      alt="website under construction"
    />
  );
}

export default Body;
