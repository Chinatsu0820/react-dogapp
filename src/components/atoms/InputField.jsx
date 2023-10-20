import React from "react";
import PropTypes from 'prop-types';
import './InputField.css';

function InputField({
    value,
    onChange,
    placeholder = '',
    disabled = false,
    readOnly = false,
    maxLength
}) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
        />
    );
}

InputField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    maxLength: PropTypes.number
};

export default InputField;