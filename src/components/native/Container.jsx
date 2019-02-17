import React, {Component} from 'react';
import PropTypes from "prop-types";


export class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div className={getClassNames(this.props)}>
                {this.props.children}
            </div>
        )
    }

}

export const getClassNames = (props) => {
    let initial = "d-flex ";
    initial += props.fluid ? "container-fluid " : "container ";
    initial += props.className ? props.className : "";
    return initial;
}

Container.propTypes = {
    fluid: PropTypes.bool,
    className: PropTypes.string
};


