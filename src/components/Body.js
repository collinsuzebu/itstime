import React from "react";

function Body() {
  return (
    <img
      style={{
        width: "100%",
        zIndex: 0,
      }}
      src={process.env.PUBLIC_URL + "/images/under-construction.jpg"}
      alt="website under construction"
    />
  );
}

export default Body;
