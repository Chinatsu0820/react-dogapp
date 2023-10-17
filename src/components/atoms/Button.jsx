import React from "react";
// import PropTypes from 'prop-types';

function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

/*Button.PropTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired 
};*/

export default Button;