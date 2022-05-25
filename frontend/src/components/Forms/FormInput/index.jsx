import { useState } from "react";
import PropTypes from "prop-types";
import SFormInput from "./style";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  // e
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <SFormInput>
      <div className="formInput">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>{label}</label>
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </SFormInput>
  );
}

export default FormInput;
// revoir les propTypes
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
