import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from "../../native/Container";
import {Link} from "react-router-dom"
import config from '../../../config/config';

export class HeaderMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={"header-menu"}>
                <Link to={config.urls.home}>{"город"}</Link>
                <Link to={config.urls.home}>{"Войти"}</Link>
                <Link to={config.urls.home}>{"Регистрация"}</Link>
            </div>
        )
    }

    menu() {

    }
}

const mapStateToProps = (store) => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu)
