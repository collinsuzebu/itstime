import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import TextArea from "../common/TextArea";

import "./CourseForm.css";

const CourseForm = ({
  course,
  subjects,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <div className="cardform">
      <form onSubmit={onSave}>
        <h2 className="cardform__title">{course.id ? "Edit" : "Add"} Course</h2>
        <div className="cardform__body">
          {errors.onSave && (
            <div className="alert alert-danger" role="alert">
              {errors.onSave}
            </div>
          )}{" "}
          <SelectInput
            name="subjectId"
            label="Subject"
            labelbold={true}
            value={course.subjectId || ""}
            defaultOption="Select Subject"
            options={subjects.map((subject) => ({
              value: subject.id,
              text: subject.title,
            }))}
            onChange={onChange}
            error={errors.subject}
          />
          <TextInput
            name="title"
            label="Title"
            labelbold={true}
            value={course.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextArea
            name="description"
            label="Overview"
            labelbold={true}
            value={course.description}
            onChange={onChange}
            error={errors.description}
          />
          <div className="cardform__rule"></div>
          <div className="cardform__footer">
            {" "}
            <button type="submit" disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CourseForm.propTypes = {
  subjects: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default CourseForm;
