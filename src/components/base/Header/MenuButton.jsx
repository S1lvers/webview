import PropTypes from 'prop-types';
import React from 'react';
import '../../../styles/buttons.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const MenuButton = (props) => (
    <button className="btn accordion-btn" onClick={props.onClick}>
        <FontAwesomeIcon icon={faBars} size={"lg"} color={"#777"}/>
    </button>
);
MenuButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default MenuButton;