import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  labelbold,
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
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert text-white-50 bg-dark">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelbold: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
