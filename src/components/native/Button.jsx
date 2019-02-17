import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/buttons.scss'

const Button = (props) => (
    <div className="form-group">
        <button className="btn btn-primary"
                onClick={props.onClick}>{props.title}</button>
    </div>
);
Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;