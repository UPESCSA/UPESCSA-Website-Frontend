// IMPORTS
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./CheckBoxField.module.css";

// CSS STYLES
const {
  checkBoxGroupDiv,
  checkBoxGroupLabel,
  checkBoxItem,
  checkBoxInput,
  checkBoxLabel,
  checkMark,
  disabled,
} = styles;

// COMPONENT
const CheckBoxField = ({
  id,
  selectedValues,
  valueUpdater,
  inputLabel,
  required = false,
  options,
  disabled: isDisabled = false,
  disabledOptions = [],
}) => {
  const containerRef = useRef(null);

  const handleCheckboxChange = (optionValue, isChecked) => {
    let updatedValues;

    if (isChecked) {
      // Add the value if it's not already selected
      updatedValues = selectedValues.includes(optionValue)
        ? selectedValues
        : [...selectedValues, optionValue];
    } else {
      // Remove the value if it's currently selected
      updatedValues = selectedValues.filter((value) => value !== optionValue);
    }

    valueUpdater(updatedValues);
  };

  // Handle floating label state for mobile
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add or remove 'has-content' class based on selected values
    if (selectedValues.length > 0) {
      container.classList.add("has-content");
    } else {
      container.classList.remove("has-content");
    }
  }, [selectedValues]);

  return (
    <div className={checkBoxGroupDiv} ref={containerRef}>
      <fieldset>
        <legend className={checkBoxGroupLabel}>
          {inputLabel}
          {required && <span style={{ color: "red" }}>*</span>}
        </legend>

        {options.map((option) => {
          const optionValue = option.toLowerCase();
          const isChecked = selectedValues.includes(optionValue);
          const checkboxId = `${id}-${optionValue}`;
          const isOptionDisabled =
            isDisabled ||
            disabledOptions.includes(option) ||
            disabledOptions.includes(optionValue);

          return (
            <div key={optionValue} className={checkBoxItem}>
              <label
                htmlFor={checkboxId}
                className={`${checkBoxLabel} ${
                  isOptionDisabled ? disabled : ""
                }`}
              >
                <input
                  type="checkbox"
                  id={checkboxId}
                  name={id}
                  value={optionValue}
                  checked={isChecked}
                  onChange={(e) =>
                    handleCheckboxChange(optionValue, e.target.checked)
                  }
                  required={required && selectedValues.length === 0}
                  disabled={isOptionDisabled}
                  className={checkBoxInput}
                />
                <span className={checkMark}></span>
                {option}
              </label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
};

CheckBoxField.propTypes = {
  id: PropTypes.string.isRequired,
  selectedValues: PropTypes.arrayOf(PropTypes.string).isRequired,
  valueUpdater: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  disabledOptions: PropTypes.arrayOf(PropTypes.string),
};

export default CheckBoxField;
