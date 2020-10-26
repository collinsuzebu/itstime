import React from "react";
import PropTypes from "prop-types";

const TextAreaInput = ({
  name,
  label,
  labelbold,
  onChange,
  placeholder,
  value,
  error,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += ` has-error`;
  }

  return (
    <div className={wrapperClass}>
      <label style={labelbold && { fontWeight: "bold" }} htmlFor={name}>
        {label}
      </label>
      <div className="field">
        <textarea
          type="text"
          name={name}
          rows="4"
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelbold: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextAreaInput;
