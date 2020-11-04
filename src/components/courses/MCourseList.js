import React from "react";
import CardDesign from "../common/CardDesign";

const CourseList = ({ courses }) => (
  <div className="container">
    <h1 style={{ textAlign: "right" }} className="container page__title">
      {courses.length !== 0 ? "Available Courses" : "No Available Courses"}
    </h1>
    {courses.map((course) => {
      return (
        <CardDesign
          key={course.id}
          title={course.title}
          image={
            "https://s-media-cache-ak0.pinimg.com/originals/97/56/c2/9756c2a05e2dd85309fe4b3bc5d62357.gif"
          }
          link={"/courses/" + course.slug}
        />
      );
    })}
  </div>
);

export default CourseList;
