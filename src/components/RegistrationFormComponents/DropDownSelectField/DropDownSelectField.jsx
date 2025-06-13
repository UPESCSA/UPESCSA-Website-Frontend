// IMPORTS
import PropTypes from "prop-types";
import styles from "./DropDownSelectField.module.css";

// CSS STYLES
const { dropDownSelectDiv, dropDownSelect, dropDownOption, label } = styles;

// COMPONENT
const DropDownSelectField = ({
  id,
  value,
  valueUpdater,
  inputLabel,
  required,
  options,
  defaultOption = "choose",
  multiple = false,
}) => {
  const handleChange = (e) => {
    if (multiple) {
      const selectedValues = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      valueUpdater(selectedValues);
    } else {
      valueUpdater(e.target.value);
    }
  };

  return (
    <div className={dropDownSelectDiv}>
      <select
        className={dropDownSelect}
        value={multiple ? undefined : value}
        id={id}
        name={inputLabel}
        onChange={handleChange}
        required={required}
        multiple={multiple}
      >
        {!multiple && (
          <option className={dropDownOption} id="defaultDrop" value="">
            {defaultOption}
          </option>
        )}
        {options.map((option) => (
          <option
            className={dropDownOption}
            key={option.toLowerCase()}
            value={option.toLowerCase()}
            selected={
              multiple &&
              Array.isArray(value) &&
              value.includes(option.toLowerCase())
            }
          >
            {option}
          </option>
        ))}
      </select>
      <label htmlFor={id} className={label}>
        {inputLabel}
      </label>
    </div>
  );
};

DropDownSelectField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string,
  multiple: PropTypes.bool,
};

export default DropDownSelectField;
